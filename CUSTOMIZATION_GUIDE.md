# Customization Guide

## Quick Start

### 1. Update Your Name and Tagline

Edit `app/page.tsx` (around line 60):

```tsx
<h1 className="text-4xl sm:text-5xl font-light mb-4">
  Your Name
</h1>
<p className="text-gray-400 text-lg font-light">
  Content Creator & Entrepreneur
</p>
```

Replace "Your Name" with your actual name and update the tagline.

### 2. Configure Your Content

Edit `config/modules.json` to add your information:

#### Social Media Links

```json
"socialMedia": {
  "enabled": true,
  "title": "Social Media",
  "links": [
    {
      "platform": "Twitter",
      "url": "https://twitter.com/yourhandle",
      "icon": "𝕏"
    },
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/yourprofile",
      "icon": "in"
    }
  ]
}
```

#### Podcast Links

```json
"podcast": {
  "enabled": true,
  "title": "Podcast",
  "description": "Listen to my podcast",
  "links": [
    {
      "platform": "Spotify",
      "url": "https://open.spotify.com/show/yourpodcast"
    },
    {
      "platform": "Apple Podcasts",
      "url": "https://podcasts.apple.com/podcast/yourpodcast"
    }
  ]
}
```

#### Guest Appearances

```json
"asAGuest": {
  "enabled": true,
  "title": "As a Guest",
  "description": "Appearances on other podcasts and shows",
  "appearances": [
    {
      "show": "Popular Podcast Name",
      "date": "2024-10-15",
      "url": "https://example.com/episode"
    }
  ]
}
```

#### Products/Services

```json
"products": {
  "enabled": true,
  "title": "Products",
  "description": "Check out my products and services",
  "items": [
    {
      "name": "Product 1",
      "description": "Description of product 1",
      "url": "https://example.com/product1"
    }
  ]
}
```

#### Public Speaking

```json
"publicSpeaking": {
  "enabled": true,
  "title": "Public Speaking",
  "description": "Hire me for speaking engagements",
  "contactUrl": "https://example.com/contact"
}
```

### 3. Enable/Disable Sections

To hide a section, set `enabled` to `false`:

```json
"podcast": {
  "enabled": false,
  ...
}
```

## Styling Customization

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --background: #0f0f0f;  /* Change background color */
  --foreground: #ffffff;  /* Change text color */
}
```

### Modify Section Styling

Each section component uses Tailwind CSS classes. Edit the component files in `app/components/`:

- `SocialMediaSection.tsx` - Social media links styling
- `PodcastSection.tsx` - Podcast links styling
- `AsAGuestSection.tsx` - Guest appearances styling
- `ProductsSection.tsx` - Products grid styling
- `PublicSpeakingSection.tsx` - CTA button styling

### Common Tailwind Classes

- `text-white` - White text
- `text-gray-300` - Light gray text
- `text-gray-400` - Medium gray text
- `border-gray-800` - Dark border
- `hover:text-white` - Hover effect
- `transition-colors` - Smooth color transitions

## Adding New Sections

1. Create a new component in `app/components/`:

```tsx
// app/components/MyNewSection.tsx
interface MyNewSectionProps {
  title: string;
  content: string;
}

export default function MyNewSection({ title, content }: MyNewSectionProps) {
  return (
    <section className="py-12 border-t border-gray-800">
      <h2 className="text-2xl font-light mb-8 text-white">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </section>
  );
}
```

2. Add configuration to `config/modules.json`:

```json
"myNewSection": {
  "enabled": true,
  "title": "My New Section",
  "content": "Your content here"
}
```

3. Import and render in `app/page.tsx`:

```tsx
import MyNewSection from "./components/MyNewSection";

// In the main content area:
{config.modules.myNewSection?.enabled && (
  <MyNewSection
    title={config.modules.myNewSection.title}
    content={config.modules.myNewSection.content}
  />
)}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

### Other Platforms

```bash
npm run build
npm start
```

## Tips

- Keep the minimalistic design by avoiding too many colors
- Use the existing gray palette: `gray-300`, `gray-400`, `gray-500`, `gray-800`
- Test on mobile devices to ensure responsiveness
- Update the footer copyright year as needed
- Consider adding a favicon in `app/favicon.ico`

