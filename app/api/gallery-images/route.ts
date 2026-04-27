import { readdir } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"]

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), "public", "images")
    const files = await readdir(imagesDir)

    const galleryFiles = files
      .filter((file) => {
        const lower = file.toLowerCase()
        const ext = path.extname(lower)
        return ALLOWED_EXTENSIONS.includes(ext) && !lower.startsWith("logos")
      })
      .sort((a, b) => a.localeCompare(b))
      .map((file) => `images/${file}`)

    return NextResponse.json({ files: galleryFiles })
  } catch {
    return NextResponse.json({ files: [] }, { status: 200 })
  }
}
