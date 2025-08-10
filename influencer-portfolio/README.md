# Influencer Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design
- Modern UI components
- Built with Next.js 15
- Styled with Tailwind CSS
- TypeScript support

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions:

1. **Push your code to GitHub** - Make sure your repository is on GitHub
2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages section
   - Set Source to "GitHub Actions"
3. **Push to main branch** - The GitHub Action will automatically build and deploy your site

### Manual Deployment:

If you need to deploy manually, you can run:

```bash
npm run build:gh-pages
```

The site will be available at: `https://[your-username].github.io/[repository-name]`

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and configurations
- `src/styles/` - Global styles and Tailwind configuration
