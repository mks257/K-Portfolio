**🌍 Live Demo:** [https://portfolio-six-psi-95.vercel.app](https://portfolio-six-psi-95.vercel.app)

# Kavya's Professional Portfolio

A modern, responsive portfolio website showcasing software engineering expertise in React, Spring Boot, cloud architecture, and DevOps.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Smooth animations and gradient accents
- **Dark Theme**: Eye-friendly dark mode with accent colors
- **Multiple Sections**:
  - Hero section with call-to-action
  - About me with core competencies
  - Work experience timeline
  - Technical skills showcase
  - Featured projects showcase
  - Contact form
  - Footer with social links

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, AWS

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   ├── Hero.tsx            # Hero section with intro
│   ├── About.tsx           # About me section
│   ├── Experience.tsx      # Work experience timeline
│   ├── Skills.tsx          # Technical skills showcase
│   ├── Projects.tsx        # Featured projects
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer with links
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css              # Global Tailwind styles
```

## 🎨 Customization

### Update Personal Information
Edit `src/components/` files to update:
- Hero section intro and links
- Experience and job descriptions
- Skills and technical expertise
- Projects and their descriptions
- Contact information

### Modify Color Scheme
Edit `tailwind.config.js` to change:
- Primary background color
- Accent color
- Secondary background

### Add Images
Replace project image placeholders in `src/components/Projects.tsx` with your actual project images.

## 🔗 Social Links
Update social media links in:
- `src/components/Navbar.tsx` (Hero section icons)
- `src/components/Footer.tsx` (Footer social links)

## 📝 Forms
The contact form in `src/components/Contact.tsx` is connected to state management. To send emails:
1. Connect to a backend service (e.g., SendGrid, Nodemailer)
2. Or use a third-party form service (e.g., Formspree)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Update `vite.config.ts` with base path and deploy to gh-pages.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 SEO Optimization

The portfolio includes:
- Meta descriptions
- Semantic HTML
- Fast load times with Vite
- Mobile-responsive design

## 📄 License

© 2024 Kavya Sri Meka. All rights reserved.

## 🤝 Contributing

This is a personal portfolio. For questions or suggestions, feel free to reach out!

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
