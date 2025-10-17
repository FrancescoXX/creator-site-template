# Project Structure

## Directory Layout

```
creator-site-template/
├── app/
│   ├── api/
│   │   └── config/
│   │       └── route.ts                 # API endpoint to serve config
│   ├── components/
│   │   ├── SocialMediaSection.tsx       # Social media links component
│   │   ├── PodcastSection.tsx           # Podcast links component
│   │   ├── AsAGuestSection.tsx          # Guest appearances component
│   │   ├── ProductsSection.tsx          # Products/services component
│   │   └── PublicSpeakingSection.tsx    # Speaking engagements component
│   ├── lib/
│   │   └── config.ts                    # Config loading utilities
│   ├── favicon.ico                      # Site favicon
│   ├── globals.css                      # Global styles (dark theme)
│   ├── layout.tsx                       # Root layout component
│   └── page.tsx                         # Main page (home)
├── config/
│   └── modules.json                     # Configuration file (content & modules)
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   └── vercel.svg
├── node_modules/                        # Dependencies
├── .gitignore
├── next.config.ts                       # Next.js configuration
├── package.json                         # Project dependencies
├── package-lock.json                    # Dependency lock file
├── postcss.config.mjs                   # PostCSS configuration
├── tsconfig.json                        # TypeScript configuration
├── SETUP.md                             # Setup instructions
├── CUSTOMIZATION_GUIDE.md               # Customization guide
└── PROJECT_STRUCTURE.md                 # This file
```

## Key Files Explained

### `config/modules.json`
Central configuration file containing:
- Module enable/disable flags
- Social media links
- Podcast platform links
- Guest appearance data
- Product information
- Public speaking contact info

### `app/page.tsx`
Main page component that:
- Loads configuration from `/api/config`
- Conditionally renders sections based on module settings
- Displays header with name and tagline
- Renders footer

### `app/components/`
Modular section components:
- Each component is self-contained
- Accepts props for title, description, and content
- Uses consistent styling with Tailwind CSS
- Responsive design for mobile and desktop

### `app/api/config/route.ts`
API endpoint that:
- Reads `config/modules.json`
- Returns configuration as JSON
- Handles errors gracefully

### `app/globals.css`
Global styles:
- Tailwind CSS import
- Dark theme color variables
- Body styling

## Component Architecture

### SocialMediaSection
- **Props**: `title`, `links` (array of platform objects)
- **Features**: Icon support, hover effects, external links

### PodcastSection
- **Props**: `title`, `description`, `links`
- **Features**: Multiple platform links, bordered buttons

### AsAGuestSection
- **Props**: `title`, `description`, `appearances`
- **Features**: Date formatting, hover effects, external links

### ProductsSection
- **Props**: `title`, `description`, `items`
- **Features**: Grid layout (1 col mobile, 2 col desktop), cards

### PublicSpeakingSection
- **Props**: `title`, `description`, `contactUrl`
- **Features**: CTA button, external link

## Data Flow

```
config/modules.json
        ↓
app/api/config/route.ts (GET /api/config)
        ↓
app/page.tsx (useEffect fetches config)
        ↓
Conditional rendering of components
        ↓
Components render with config data
```

## Styling System

### Color Palette
- **Background**: `#0f0f0f` (very dark gray/black)
- **Text**: `#ffffff` (white)
- **Accents**: `#1a1a1a`, `#2a2a2a` (dark grays)
- **Borders**: `#1f1f1f`, `#2d2d2d` (subtle grays)

### Tailwind Classes Used
- `bg-black` - Black background
- `text-white` - White text
- `text-gray-300` - Light gray text
- `text-gray-400` - Medium gray text
- `text-gray-500` - Darker gray text
- `border-gray-800` - Dark borders
- `hover:text-white` - Hover effects
- `transition-colors` - Smooth transitions

## Responsive Design

### Breakpoints
- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (≥ 640px)
- **Desktop**: `md:` (≥ 768px)

### Layout Adjustments
- Header: Responsive padding and text sizes
- Sections: Full width on mobile, max-width container on desktop
- Products: 1 column on mobile, 2 columns on desktop
- Social links: Flex wrap for responsive layout

## Performance Considerations

- **Client-side rendering**: Uses `"use client"` for dynamic config loading
- **API caching**: Config is fetched once on page load
- **Minimal dependencies**: Only React, Next.js, and Tailwind CSS
- **Optimized images**: Uses Next.js Image component where applicable

## Extensibility

The modular architecture allows easy:
- Addition of new sections
- Modification of existing components
- Configuration changes without code changes
- Styling customization via Tailwind classes
- New module types via config updates

