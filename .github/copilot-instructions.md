<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Kavya's Portfolio Project Guidelines

## Project Overview
This is a modern React portfolio website built with TypeScript, Vite, and Tailwind CSS. It showcases professional experience, technical skills, and projects.

## Technology Stack
- **Frontend**: React 18, TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router (for future expansion)

## Code Style Guidelines

### React Components
- Use functional components with hooks
- Props should be typed with TypeScript interfaces
- Component files should be in `src/components/` directory
- Export default from each component file

### Naming Conventions
- Components: PascalCase (e.g., `Hero.tsx`, `About.tsx`)
- Files: PascalCase for components, camelCase for utilities
- Props interfaces: Append `Props` (e.g., `NavbarProps`)
- CSS classes: kebab-case (Tailwind classes)

### Styling
- Use Tailwind CSS utility classes
- Avoid inline styles
- Use custom Tailwind components defined in `index.css` (e.g., `btn-primary`, `card`)
- Maintain consistent color scheme:
  - Primary background: `primary` (#0f172a)
  - Secondary background: `secondary` (#1e293b)
  - Accent color: `accent` (#3b82f6)
  - Accent light: `accent-light` (#60a5fa)

### Component Structure
Each component should include:
1. TypeScript imports
2. Interface definitions (if needed)
3. Component function
4. Event handlers
5. JSX return statement
6. Default export

## Project Features

### Components
- **Navbar**: Navigation with mobile menu
- **Hero**: Landing section with intro and CTAs
- **About**: Personal background and expertise
- **Experience**: Work history timeline
- **Skills**: Technical skills by category
- **Projects**: Featured projects showcase
- **Contact**: Contact form and information
- **Footer**: Social links and copyright

### Key Features
- Responsive mobile-first design
- Smooth scrolling navigation
- Dark theme with gradient accents
- Form validation on contact form
- Hover animations and transitions
- Accessible HTML semantics

## Customization Points

### Personal Information
- Update `Hero.tsx` for intro and social links
- Update `Contact.tsx` for contact details
- Update `Experience.tsx` for job descriptions
- Update `Skills.tsx` for technical skills
- Update `Projects.tsx` for project portfolio

### Styling
- Modify `tailwind.config.js` for colors
- Update `index.css` for global styles
- Adjust responsive breakpoints as needed

## Development Workflow
1. `npm run dev` - Start development server
2. Make changes to components
3. Test responsive design
4. `npm run build` - Build for production
5. `npm run preview` - Preview production build

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations
- Optimize images in projects section
- Lazy load components if needed
- Minimize re-renders with proper React optimization
- Keep bundle size minimal

## Future Enhancements
- Add blog section
- Implement theme toggle (light/dark)
- Add animations library (Framer Motion)
- Integrate with CMS
- Add search functionality
- Implement analytics

## Deployment
Ready for deployment to:
- Vercel
- Netlify
- AWS Amplify
- GitHub Pages

## Contact & Social
Update actual links when portfolio is deployed:
- Email
- LinkedIn
- GitHub
- Twitter/X
