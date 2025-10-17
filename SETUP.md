# Content Creator Site Template

A minimalistic, modular content creator portfolio site built with Next.js, React, and Tailwind CSS.

## Features

- **Minimalistic Design**: Black background with white text for a clean, professional look
- **Modular Architecture**: Enable/disable sections via configuration file
- **Responsive**: Works seamlessly on desktop and mobile devices
- **Easy to Customize**: Simple JSON configuration for content and module management

## Modules

The site includes the following modular sections:

1. **Social Media** - Links to your social media profiles
2. **Podcast** - Links to your podcast on various platforms
3. **As a Guest** - Appearances on other podcasts and shows
4. **Products** - Your products and services
5. **Public Speaking** - Information about speaking engagements

## Configuration

All content and module settings are managed through `config/modules.json`.

### Enabling/Disabling Modules

Each module has an `enabled` property. Set it to `true` to show the section or `false` to hide it:

```json
{
  "modules": {
    "socialMedia": {
      "enabled": true,
      ...
    },
    "podcast": {
      "enabled": false,
      ...
    }
  }
}
```

### Customizing Content

Edit the `config/modules.json` file to update:
- Social media links and platforms
- Podcast platform links
- Guest appearances
- Products and services
- Public speaking contact information

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── config/
│   │       └── route.ts          # API endpoint for config
│   ├── components/
│   │   ├── SocialMediaSection.tsx
│   │   ├── PodcastSection.tsx
│   │   ├── AsAGuestSection.tsx
│   │   ├── ProductsSection.tsx
│   │   └── PublicSpeakingSection.tsx
│   ├── lib/
│   │   └── config.ts             # Config utilities
│   ├── globals.css               # Global styles (dark theme)
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── config/
│   └── modules.json              # Configuration file
└── package.json
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Update configuration**:
   Edit `config/modules.json` with your information

3. **Customize the header**:
   Edit `app/page.tsx` and update "Your Name" and tagline

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000`

## Customization

### Styling

The site uses Tailwind CSS with a dark theme. Modify `app/globals.css` to change colors:

```css
:root {
  --background: #0f0f0f;  /* Dark background */
  --foreground: #ffffff;  /* White text */
}
```

### Adding New Sections

To add a new module:

1. Create a new component in `app/components/`
2. Add the module configuration to `config/modules.json`
3. Import and render the component in `app/page.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15.5.6** - React framework
- **React 19.1.0** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety

## License

MIT

