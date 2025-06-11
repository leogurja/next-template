# Next.js Template

A clean and minimal starter template built with [Next.js](https://nextjs.org/). Ideal for bootstrapping new projects quickly with best practices in place.

## 🚀 Features

- 🔀 **Next.js v15** (App Router)
- 🎨 **TailwindCSS v4**
- ⚛️ **Atomic Design** component structure (`atoms`, `molecules` and `organisms`)
- ✨ Pre-configured [`ESLint`](https://eslint.org) and [`Prettier`](https://prettier.io)
- 🔐 Default **CSP headers** (Content Security Policy) for enhanced security and XSS protection
- 🐳 Optimized **Dockerfile** using multi-stage builds for faster builds and smaller image size
- 🚀 Production-ready and easily deployable to [`Vercel`](https://vercel.com), [`Docker`](https://docker.com), [`Render`](https://render.com), and more

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-template.git
cd nextjs-template
```

### 2. Install Dependencies

Choose your own package manager and stick with it.

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Make it yours

Search for `EDIT:` comments (use `Ctrl+Shift+F` in `VSCode`) — these mark areas you should customize, like titles, meta tags, or project-specific settings.

## 📁 Project Structure

This project applies the principles of Atomic Design to organize UI components by their level of complexity and reusability.
Instead of `templates/` and `pages/` (as in the original Atomic Design model), we leverage Next.js App Router's `layout.tsx` and `page.tsx` to handle templates and page-level components.

```text
/src
├─ app/             # App directory
│   └─ layout.tsx    # Root layout
│   └─ page.tsx      # Home page
│   └─ not-found.tsx # 404 - Not Found error page
│   └─ sitemap.ts    # sitemap.xml generator
│   └─ robots.ts     # robots.txt generator
├─ components/  # Reusable UI components (Atomic Design)
│   └─ atoms/   # Smallest building blocks (e.g. Button, Input)
│   └─ molecules/ # Groups of atoms (e.g. FormField)
│   └─ organisms/ # Complex components (e.g. Navbar)
├─ lib/  # Utility functions, API clients, etc.
│   └─ constants/ # Static values, enums, configs
│   └─ helpers/ # Utility functions
│   └─ hooks/ # Custom React hooks
├─ assets/          # Static assets (images, svgs, etc.)
├─ styles/          # Global styles and theming
```

## 📦 Scripts

| Command  | Description               |
| -------- | ------------------------- |
| `dev`    | Start dev server          |
| `build`  | Build for production      |
| `start`  | Start production server   |
| `lint`   | Run ESLint                |
| `format` | Format code with Prettier |

## 💡 Optional Recommendations

Here are some libraries and tools you might want to add depending on your project needs:

### 🛠️ Utilities

- [`date-fns`](https://date-fns.org) - Date formatting and parsing
- [`dedent`](https://github.com/dmnd/dedent) – Great for multi-line strings

### 🧠 State Management

- [`react-query`](https://tanstack.com/query) – Data fetching and caching
- [`react-hook-form`](https://react-hook-form.com) – Form state management
- [`jotai`](https://jotai.org) – Atomic state management, simple and React-y
- [`zustand`](https://zustand-demo.pmnd.rs) – Minimalistic, unopinionated, great for medium-to-large apps

### ℹ️ Icon Packs

All of these are great. Choose whichever matches your app style best.

- [`@phosphor-icons/react`](https://phosphoricons.com)
- [`lucide-react`](https://lucide.dev)
- [`@heroicons/react`](https://heroicons.com)
- [`react-simple-icons`](https://simpleicons.org) - Brand icons

### 🧪 Testing

- [`vitest`](https://vitest.dev) - Fast unit testing
- [`playwright`](https://playwright.dev) - End-to-end testing

### 📈 Analytics & Monitoring

- [`@vercel/analytics`](https://vercel.com/analytics) – Vercel-native analytics
- [`@vercel/speed-insights`](https://vercel.com/docs/speed-insights) – Vercel-native web performance metrics
