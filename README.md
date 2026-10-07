# Sneha Shirke - Personal Portfolio

![Portfolio Preview](./public/og-image.png)

A modern, fast, and accessible static portfolio built to showcase projects, skills, and professional experience.

## Features

- **Modern Tech Stack**: Built with Next.js (App Router), React 19, and TypeScript.
- **Styling**: Fully responsive design using Tailwind CSS with custom theme support (Dark/Light mode).
- **Animations**: Smooth page transitions and scroll animations powered by Framer Motion.
- **Performance**: Optimized for speed, resulting in excellent Lighthouse scores. Static HTML export ready.
- **SEO & Analytics**: Comprehensive metadata configuration and privacy-friendly analytics support.

## Folder Structure

```
SnehaShirke-Portfolio/
├── src/
│   ├── app/           # Next.js App Router pages and layouts
│   ├── components/    # Reusable React components (UI, layout, etc.)
│   ├── content/       # Site configuration and content data
│   ├── lib/           # Utility functions
├── public/            # Static assets (images, icons, etc.)
├── legacy/            # Original React (CRA) codebase reference
└── netlify.toml       # Netlify deployment configuration
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shirkesneha22/SnehaShirke-Portfolio.git
   cd SnehaShirke-Portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

This project is configured for static export.

To build the project, run:
```bash
npm run build
```

The static files will be generated in the `out` directory. You can test the production build locally by running:
```bash
npx serve out
```

## What I Learned

During the development of this portfolio, I deepened my understanding of several modern web technologies:
- **Next.js App Router**: Transitioning from Create React App to Next.js App Router gave me hands-on experience with Server Components and static HTML export (`output: "export"`).
- **Tailwind CSS & Framer Motion**: Mastered creating responsive, utility-first designs and implementing performant animations that enhance UX without compromising on load times.
- **Accessibility & SEO**: Implemented dynamic metadata, JSON-LD for rich snippets, and ensured the site is fully navigable via keyboard, prioritizing an inclusive user experience.
- **Production Deployment**: Configured custom security headers and cache control via `netlify.toml` for optimized, secure hosting on Netlify.

## Contact

- **Email**: [snehashirke221@gmail.com](mailto:snehashirke221@gmail.com)
- **LinkedIn**: [Sneha Balu Shirke](https://www.linkedin.com/in/sneha-balu-shirke-1b060428a/)
- **GitHub**: [@Shirkesneha22](https://github.com/Shirkesneha22)
