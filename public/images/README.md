# Изображения для сайта

## Hero секция

Для замены фонового изображения в Hero секции:

1. Поместите изображение в папку `public/images/` с именем `hero-background.jpg`
2. Рекомендуемые параметры изображения:
   - Разрешение: 1920x1080px или выше
   - Формат: JPG, WebP или AVIF
   - Тематика: современные здания, фасады, архитектура, строительство
   - Качество: высокое разрешение для четкости

3. Откройте файл `components/Hero.tsx` и замените placeholder div на:

```tsx
<Image 
  src="/images/hero-background.jpg" 
  alt="Modern construction building" 
  fill 
  priority 
  className="object-cover"
  quality={90}
/>
```

## Альтернатива: использование внешнего URL

Можно использовать изображение с Unsplash или другого источника:

```tsx
<Image 
  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
  alt="Modern construction building" 
  fill 
  priority 
  className="object-cover"
  quality={90}
/>
```

## Рекомендуемые изображения для Hero

Темы для поиска изображений:
- Modern construction buildings
- Architecture facades
- Construction sites
- Office buildings
- Residential buildings
- Urban construction

Источники:
- Unsplash.com (бесплатные изображения)
- Pexels.com (бесплатные изображения)
- Собственные фотографии проектов
