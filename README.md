# Contractor Education Website

A modern React application with TypeScript and Tailwind CSS v4 for contractor business education.

## Features

- Interactive quizzes and courses for contractors
- Modern, responsive design with Tailwind CSS v4
- Animated UI with Framer Motion
- Component-based architecture
- TypeScript for type safety

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Radix UI** - Headless UI components
- **Lucide Icons** - Icon library

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
contractor-education-site/
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Tailwind CSS v4 styles
├── public/               # Static assets
├── index.html           # HTML template
└── vite.config.ts       # Vite configuration
```

## Components

The application includes the following sections:

- **Hero Section** - Animated hero with dynamic image grid
- **Features** - Business education features
- **Testimonials** - Success stories from contractors
- **Pricing** - Tiered pricing plans with animations
- **Stats** - Animated statistics
- **FAQ** - Frequently asked questions
- **Contact** - Contact form and information
- **Footer** - Site navigation and links

## Customization

### Colors

The color scheme uses warm amber and orange tones. To customize, modify the CSS variables in `src/index.css`.

### Content

All content is contained within the `src/App.tsx` file. Update the text, images, and data directly in the component sections.

### Components

UI components are located in `src/components/ui/`. These are reusable and follow shadcn/ui patterns.

## License

MIT