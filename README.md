# NUMTAL - Game Development Website

A modern, fully functional website for NUMTAL Game Development featuring an interactive 3D Spline scene.

## Features

- 🎮 Interactive 3D hero section powered by Spline
- 📱 Fully responsive design (desktop, tablet, mobile)
- 🎨 Modern UI with purple gradient theme
- 📧 Functional contact form with validation
- ✨ Smooth animations and transitions
- 🚀 Fast performance optimized with Vite

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Spline** - 3D scene integration

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project can be easily deployed to:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

### Deploying to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy! It will automatically detect the Vite project.

### Deploying to GitHub Pages

1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## License

MIT
