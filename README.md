# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This single-page application showcases projects, skills, experience, and contact information with a focus on clean design, smooth animations, and an excellent user experience.

## Overview

This portfolio website serves as a digital resume and project showcase, featuring a custom design system based on the Ayu Mirage color theme. The site emphasizes readability, visual appeal, and smooth interactions through carefully crafted animations and transitions.

**Live Site:** [View Portfolio](https://ebad.tech)

## Technology Stack

### Core Technologies
- **React 18.3.1** - Modern UI framework with hooks and functional components
- **TypeScript 5.3.3** - Type-safe development for better code quality and maintainability
- **Vite 5.1.6** - Lightning-fast build tool and development server
- **Node 20** - Runtime environment

### Styling & Design
- **Tailwind CSS 3.4.1** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.4.35** - CSS processing with Autoprefixer for browser compatibility
- **Custom Ayu Mirage Theme** - Dark color palette with purple, blue, orange, and green accents
- **Glass Morphism** - Modern UI pattern with backdrop blur effects

### UI Components & Icons
- **lucide-react 0.263.1** - Beautiful, consistent icon library

### Code Quality
- **ESLint** - TypeScript-aware linting with React-specific rules
- **React Hooks Plugin** - Enforces rules of hooks
- **React Refresh** - Fast refresh during development

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── NavBar.tsx       # Fixed header with scroll detection & mobile menu
│   │   ├── Hero.tsx         # Full-screen landing section with animations
│   │   ├── Projects.tsx     # Project showcase with filtering & detail cards
│   │   ├── About.tsx        # Education, experience, skills, certifications
│   │   ├── Contact.tsx      # Contact information with interactive cards
│   │   ├── Footer.tsx       # Footer with social links
│   │   ├── TypingAnimation.tsx      # Character-by-character typing effect
│   │   ├── TypingTitles.tsx         # Rotating title animations
│   │   ├── AnimatedElement.tsx      # Scroll-triggered animations
│   │   ├── ScrollProgress.tsx       # Page scroll progress indicator
│   │   └── Container.tsx            # Layout wrapper component
│   ├── data/                # Content management
│   │   ├── links.ts         # Profile info and social media links
│   │   ├── projects.ts      # Detailed project data with descriptions
│   │   ├── skills.ts        # Skill categories and certifications
│   │   └── education.ts     # Education and work experience
│   ├── lib/
│   │   └── theme.ts         # Color theme and design system utilities
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles and Tailwind directives
├── public/
│   ├── ebad.png             # Favicon
│   └── resume.pdf           # Resume file
├── dist/                    # Production build output
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD pipeline
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind customizations
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## Key Features

### Navigation
- **Fixed Header** - Persistent navigation with glass morphism effect
- **Scroll-Aware Styling** - Backdrop blur intensifies on scroll for better readability
- **Responsive Mobile Menu** - Hamburger menu for small screens
- **Quick Actions** - Resume download and social media links in header
- **Color-Coded Links** - Hover states with theme accent colors

### Hero Section
- **Full-Screen Landing** - Eye-catching introduction with gradient text
- **Typing Animation** - Cycles through job titles with realistic typing effect
- **Animated Backgrounds** - Floating blob animations for visual interest
- **Call-to-Action Buttons** - Direct links to contact and projects
- **Scroll Indicator** - Animated dot prompting users to explore

### Projects Showcase
- **Rich Project Cards** - Detailed descriptions (500-1000 words per project)
- **Status Badges** - Visual indicators for Complete, In Progress, and Planned projects
- **Area Classification** - Tags for Backend, Frontend, Full-Stack, Embedded, AI/ML
- **Tech Stack Tags** - Technology badges with custom colors
- **Interactive Links** - Links to live demos and source code repositories
- **Gallery Support** - Placeholders for screenshots and videos
- **Hover Effects** - Gradient border animations and scale transforms
- **Staggered Animations** - Fade-in effects with progressive delays

### About Section
- **Education Timeline** - University of Calgary Software Engineering program
- **Work Experience** - Detailed role descriptions with achievements
- **Skills Grid** - 6 categories including Languages, Frontend, Backend, DevOps, Embedded, and AI/ML
- **Certifications** - Current and in-progress professional certifications

### Contact Section
- **Contact Cards** - Email, phone, LinkedIn, and GitHub with glass morphism design
- **Color-Coded Icons** - Each contact method has a unique accent color
- **Direct Actions** - Mailto links, tel links, and social profile links
- **Hover Interactions** - Scale and shadow effects on hover

### Technical Features
- **Scroll Progress Bar** - Visual indicator of page scroll position
- **Smooth Scrolling** - CSS-based smooth scroll behavior
- **Intersection Observer** - Performance-optimized scroll-triggered animations
- **Lazy Rendering** - Components render only when needed
- **Type Safety** - Full TypeScript coverage for data structures
- **Responsive Design** - Mobile-first approach with breakpoints for all screen sizes

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ebadr761/Portfolio-Site.git
cd Portfolio-Site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start Vite development server with hot module replacement
- `npm run build` - Run TypeScript compiler check and create production build
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

### Project Configuration

**Vite Configuration** (`vite.config.ts`):
- React plugin enabled
- Path alias: `@/` maps to `src/`
- Base URL set to `/` for GitHub Pages

**TypeScript Configuration** (`tsconfig.json`):
- Strict mode enabled
- ES2020 target
- DOM and DOM.Iterable libraries
- Path mapping for `@/` alias

**Tailwind Configuration** (`tailwind.config.js`):
- Custom Ayu Mirage color palette
- Extended animation definitions (fade-in, slide-up, scale-in, float, glow, gradient)
- Glass morphism utilities
- Custom spacing and sizing utilities

## Design System

### Color Palette (Ayu Mirage Theme)

```javascript
{
  background: '#1f2430',  // Main dark background
  surface: '#191e2a',      // Card surfaces
  panel: '#242d38',        // Elevated panels
  text: '#cbccc6',         // Primary text
  subtext: '#9da5b4',      // Secondary text
  purple: '#d4bfff',       // Accent 1
  blue: '#73d7ff',         // Accent 2
  orange: '#ffcc99',       // Accent 3
  green: '#a6cc70'         // Accent 4
}
```

### Custom Animations

- **fade-in** - 0.7s opacity transition
- **slide-up** - 0.7s vertical slide with opacity
- **scale-in** - 0.5s scale transform
- **float** - 6s infinite vertical movement
- **glow** - 2s pulsing box shadow
- **gradient** - 8s infinite background position shift

### Glass Morphism Effects

- `.glass` - Base glass effect with subtle backdrop blur
- `.glass-strong` - Enhanced glass with increased opacity and blur

### Hover Interactions

- Scale transforms (1.02-1.05x)
- Shadow elevation changes
- Color transitions with 0.3s duration
- Border color animations
- Icon transforms (rotations, translations)

## Implementation Highlights

### AnimatedElement Component
Uses the Intersection Observer API for performance-optimized scroll animations:
- Triggers only when elements are 10% visible
- Configurable animation delays for staggered effects
- Properly cleans up observers on unmount
- Supports custom animation classes

### TypingAnimation Component
Character-by-character typing simulation:
- Configurable typing speed
- Optional looping with pause between cycles
- Animated cursor that blinks
- Works with any text content

### TypingTitles Component
Rotating title display with realistic typing:
- Types forward, pauses, then deletes
- Continuous rotation through title array
- Configurable speeds for typing and deleting
- Perfect for hero sections

### NavBar Component
Sophisticated navigation with scroll detection:
- Event listeners track scroll position
- State management for mobile menu
- Color-coded navigation items from theme
- Conditional rendering based on viewport size

## Data Structure

All content is managed through TypeScript interfaces in the `src/data/` directory:

**Projects** (`projects.ts`):
```typescript
interface Project {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  area: string;
  status: 'complete' | 'in-progress' | 'planned';
  body: string;
  links: { type: string; url: string }[];
  gallery?: string[];
}
```

**Education & Experience** (`education.ts`):
```typescript
interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: string[];
}
```

## Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions:

### CI/CD Pipeline (`.github/workflows/deploy.yml`)

1. **Trigger**: Push to `main` branch
2. **Install**: Dependencies installed via `npm ci`
3. **Build**: TypeScript compilation and Vite production build
4. **Deploy**: Upload `dist/` artifact and deploy to GitHub Pages

### Manual Deployment

```bash
npm run build
# The dist/ folder is ready for deployment
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading with Intersection Observer
- Optimized Tailwind CSS (PurgeCSS in production)
- Vite code splitting and tree shaking
- Minimal external dependencies
- CSS-based animations (hardware accelerated)

## What Went Into Building This

### Design Philosophy
The portfolio was built with a focus on clean, professional aesthetics while maintaining personality through color accents and subtle animations. The Ayu Mirage theme was chosen for its excellent readability and modern appearance.

### Development Approach
- **Component-First**: Each section is a self-contained component
- **Data-Driven**: Content is separated from presentation logic
- **Type-Safe**: TypeScript ensures data integrity
- **Performance-Conscious**: Animations use CSS transforms and Intersection Observer
- **Maintainable**: Clear file structure and naming conventions

### Key Technical Decisions
1. **Vite over CRA** - Faster builds and better developer experience
2. **Tailwind over CSS-in-JS** - Utility-first approach for rapid development
3. **Glass Morphism** - Modern UI trend that works well with dark themes
4. **Single-Page Design** - Better for portfolios; all content immediately accessible
5. **GitHub Pages** - Free, reliable hosting with automated deployments

### Challenges Overcome
- Smooth scroll animations without janky performance
- Mobile menu that works across all devices
- Type-safe data structures for all content
- Automated deployment pipeline
- Responsive design that looks great on all screen sizes

## Future Enhancements

- Dark/Light mode toggle
- Blog integration
- Project filtering by technology
- More interactive project galleries
- Contact form with backend integration
- Analytics integration

## License

This project is open source and available for reference. Feel free to use it as inspiration for your own portfolio.

## Contact

**Ebad ur Rehman**
- Email: ebadrehman@gmail.com
- LinkedIn: [linkedin.com/in/ebad-ur-rehman](https://linkedin.com/in/ebad-ur-rehman)
- GitHub: [github.com/ebadr761](https://github.com/ebadr761)

---

Built with React, TypeScript, and Tailwind CSS. Deployed with GitHub Pages. What started as a vibe-coded Claude Code project for fun turned out to be something exciting to build, and I learned a lot along the way.
