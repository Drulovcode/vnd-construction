import { NextRequest, NextResponse } from "next/server"

// In-memory storage for anti-spam protection
const emailPhoneSubmissions = new Map<string, number>()
const ipRequests = new Map<string, number[]>()

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now()
  const thirtyMinutes = 30 * 60 * 1000
  const sixtyMinutes = 60 * 60 * 1000

  // Clean email+phone submissions older than 30 minutes
  for (const [key, timestamp] of emailPhoneSubmissions.entries()) {
    if (now - timestamp > thirtyMinutes) {
      emailPhoneSubmissions.delete(key)
    }
  }

  // Clean IP requests older than 60 minutes
  for (const [ip, timestamps] of ipRequests.entries()) {
    const filtered = timestamps.filter((ts) => now - ts < sixtyMinutes)
    if (filtered.length === 0) {
      ipRequests.delete(ip)
    } else {
      ipRequests.set(ip, filtered)
    }
  }
}, 5 * 60 * 1000) // Cleanup every 5 minutes

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIP = request.headers.get("x-real-ip")
  return forwarded?.split(",")[0]?.trim() || realIP || "unknown"
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, company } = body

    // Honeypot check - if company field is filled, it's a bot
    if (company && company.trim() !== "") {
      console.log("Honeypot triggered - bot detected")
      // Return success silently to not reveal the honeypot
      return NextResponse.json(
        { success: true, message: "Správa bola úspešne odoslaná" },
        { status: 200 }
      )
    }

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Všetky polia sú povinné" },
        { status: 400 }
      )
    }

    // Anti-spam: Check email+phone combination (30 minutes)
    const emailPhoneKey = `${email.toLowerCase()}_${phone.replace(/\s/g, "")}`
    const lastSubmission = emailPhoneSubmissions.get(emailPhoneKey)
    const now = Date.now()
    const thirtyMinutes = 30 * 60 * 1000

    if (lastSubmission && now - lastSubmission < thirtyMinutes) {
      console.log(`Rate limit: Email+phone blocked - ${emailPhoneKey}`)
      return NextResponse.json(
        { error: "Príliš veľa požiadaviek. Skúste to prosím neskôr." },
        { status: 429 }
      )
    }

    // Anti-spam: Check IP rate limit (5 requests per 60 minutes)
    const clientIP = getClientIP(request)
    const ipTimestamps = ipRequests.get(clientIP) || []
    const sixtyMinutes = 60 * 60 * 1000
    const recentRequests = ipTimestamps.filter((ts) => now - ts < sixtyMinutes)

    if (recentRequests.length >= 5) {
      console.log(`Rate limit: IP blocked - ${clientIP}`)
      return NextResponse.json(
        { error: "Príliš veľa požiadaviek. Skúste to prosím neskôr." },
        { status: 429 }
      )
    }

    // Record this submission
    emailPhoneSubmissions.set(emailPhoneKey, now)
    recentRequests.push(now)
    ipRequests.set(clientIP, recentRequests)

    // Get Telegram credentials from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured")
      return NextResponse.json(
        { error: "Serverová chyba: Telegram nie je nakonfigurovaný" },
        { status: 500 }
      )
    }

    // Format message for Telegram
    const telegramMessage = `🔔 *Nová požiadavka z webu*

👤 *Meno:* ${escapeMarkdown(name)}
📧 *Email:* ${escapeMarkdown(email)}
📱 *Telefón:* ${escapeMarkdown(phone)}
🏗️ *Typ služby:* ${escapeMarkdown(service)}

💬 *Správa:*
${escapeMarkdown(message)}

---
_Čas: ${new Date().toLocaleString("sk-SK", { timeZone: "Europe/Bratislava" })}_`

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    })

    const data = await response.json()

    if (!response.ok || !data.ok) {
      console.error("Telegram API error - Status:", response.status)
      console.error("Telegram API error - Response:", JSON.stringify(data, null, 2))
      console.error("Telegram API error - Request URL:", telegramUrl)
      console.error("Telegram API error - Chat ID:", chatId)
      return NextResponse.json(
        { error: "Chyba pri odosielaní správy" },
        { status: 500 }
      )
    }

    console.log("Telegram message sent successfully:", {
      chatId,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: "Správa bola úspešne odoslaná" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing lead:", error)
    if (error instanceof Error) {
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }
    return NextResponse.json(
      { error: "Chyba pri spracovaní požiadavky" },
      { status: 500 }
    )
  }
}

// Helper function to escape Markdown special characters
function escapeMarkdown(text: string): string {
  return text
    .replace(/\_/g, "\\_")
    .replace(/\*/g, "\\*")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\~/g, "\\~")
    .replace(/\`/g, "\\`")
    .replace(/\>/g, "\\>")
    .replace(/\#/g, "\\#")
    .replace(/\+/g, "\\+")
    .replace(/\-/g, "\\-")
    .replace(/\=/g, "\\=")
    .replace(/\|/g, "\\|")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\./g, "\\.")
    .replace(/\!/g, "\\!")
}
