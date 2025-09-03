# Contractor Education Platform

A modern React application for contractor business education with interactive quizzes and courses.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
bbs/
├── src/
│   ├── components/    # UI components
│   ├── lib/          # Utilities
│   └── App.tsx       # Main application
├── public/           # Static assets
└── index.html       # Entry point
```

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS v4** for styling
- **Vite** for fast builds
- **Framer Motion** for animations
- **Radix UI** for accessible components

## 🚢 Deployment

### Netlify (Recommended)
1. Connect GitHub repository to Netlify
2. Auto-deploys on push to main branch
3. Configuration in `netlify.toml`

### Manual Build
```bash
npm run build
# Deploy the 'dist' folder to any static host
```

## 📝 Environment Variables

Copy `.env.example` to `.env.local` for local development:
```bash
cp .env.example .env.local
```

Variables must be prefixed with `VITE_` to be accessible in the browser.

## 🧪 Development

```bash
# Type checking
npm run type-check

# Clean install
npm run reinstall

# Preview production build
npm run preview
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT

## 🔗 Links

- [Live Site](https://your-site.netlify.app)
- [GitHub Repository](https://github.com/MCERQUA/bbs)