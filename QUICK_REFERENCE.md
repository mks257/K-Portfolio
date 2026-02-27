# Portfolio Customization Quick Reference

## 🎯 Files to Edit (in order)

### 1. Hero Section (`src/components/Hero.tsx`)
**Lines to edit:** ~7-10
- Update your name from "Kavya" to your name
- Update headline text
- Update description
- Update social links (GitHub, LinkedIn, Email)

```tsx
// Change these:
<h1>Hi, I'm <span>Kavya</span></h1>  // Your name
<p>Software Engineer | Full-Stack Developer | Cloud Architect</p>  // Your title
// Update social links at bottom
```

### 2. About Section (`src/components/About.tsx`)
**Key changes:**
- Update personal background (line ~14-16)
- Update current job description (line ~18)
- Update previous role (line ~21)
- Customize expertise cards

### 3. Experience Section (`src/components/Experience.tsx`)
**Edit the jobs array (line ~8-48):**
```tsx
const jobs: Job[] = [
  {
    company: 'HCA',
    position: 'Software Developer',
    duration: '2023 - Present',
    description: [
      'Update each bullet point here',
      'Add your actual responsibilities',
    ],
  },
  // Add more jobs or remove as needed
]
```

### 4. Skills Section (`src/components/Skills.tsx`)
**Edit the skills array (line ~3-30):**
```tsx
const skills: Skill[] = [
  {
    category: 'Backend',
    items: ['Update', 'Your', 'Skills', 'Here'],
  },
  // Customize categories and skills
]
```

### 5. Projects Section (`src/components/Projects.tsx`)
**Edit the projects array (line ~7-43):**
```tsx
const projects: Project[] = [
  {
    title: 'Your Project Title',
    description: 'Project description here',
    tech: ['React', 'TypeScript', 'etc'],
    githubLink: 'https://github.com/your-link',
    liveLink: 'https://your-demo.com',
  },
  // Add your real projects
]
```

### 6. Contact Section (`src/components/Contact.tsx`)
**Update contact details:**
- Line ~67: Email address
- Line ~75: Phone number
- Line ~83: Location

### 7. Navigation & Footer
**`src/components/Navbar.tsx`:**
- Line ~44: Download CV button link
- Update social links

**`src/components/Footer.tsx`:**
- Line ~21: Your name/bio
- Line ~48+: Social media links

## 🎨 Colors (Tailwind Config)

**File:** `tailwind.config.js`

```js
colors: {
  primary: '#0f172a',      // Main background
  secondary: '#1e293b',    // Cards background
  accent: '#3b82f6',       // Main accent color
  'accent-light': '#60a5fa', // Lighter accent
}
```

## 📝 Common Customizations

### Add a new project
1. Find `const projects: Project[] = [` in `src/components/Projects.tsx`
2. Add new project object to array
3. Follow existing format

### Change theme color
1. Open `tailwind.config.js`
2. Update color values in theme.extend.colors
3. Changes apply instantly in dev mode

### Update social links
1. In `src/components/Hero.tsx` (lines 40-56)
2. In `src/components/Footer.tsx` (lines 60+)
3. Replace # with actual URLs

### Add image
1. Save image to `public/` folder
2. Reference in component: `<img src="/image-name.jpg" />`

## 🔧 Component Structure

```tsx
// Basic component template
import { IconName } from 'lucide-react'  // For icons

export default function ComponentName() {
  return (
    <section id="section-name" className="...">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Title</h2>
        {/* Your content here */}
      </div>
    </section>
  )
}
```

## 📦 Building & Deploying

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for deployment
npm run preview          # Preview production build

# Deployment
vercel                   # Deploy to Vercel
netlify deploy --prod --dir=dist  # Deploy to Netlify
```

## ✅ Customization Checklist

- [ ] Updated Hero intro and name
- [ ] Updated social media links
- [ ] Added real work experience
- [ ] Updated technical skills
- [ ] Added real projects (min 3)
- [ ] Updated contact information
- [ ] Tested on mobile (F12 → responsive)
- [ ] Ran npm run build successfully
- [ ] Deployed to hosting service
- [ ] Shared portfolio with others

## 🚨 Quick Fixes

**Changes not showing?**
→ Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Port in use?**
→ npm run dev -- --port 3000

**Build failing?**
→ npm install && npm run build

**Need to reset?**
→ rm -rf node_modules && npm install

## 📞 Getting Help

- React docs: https://react.dev
- Tailwind docs: https://tailwindcss.com
- Check README.md in project folder
- Check GETTING_STARTED.md for detailed guide
