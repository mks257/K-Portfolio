# 🚀 Quick Start Guide

## Getting Started

Your React portfolio website is ready to go! Here's how to use it:

### Development

1. **Start the development server:**
   ```
   npm run dev
   ```
   This will start a local server at `http://localhost:5173`

2. **Open in browser:**
   Visit `http://localhost:5173` to see your portfolio live

3. **Make changes:**
   Edit files in `src/components/` and the browser will automatically refresh

### Customization Checklist

- [ ] Update your name and intro in `src/components/Hero.tsx`
- [ ] Add your photo/avatar
- [ ] Update work experience in `src/components/Experience.tsx`
- [ ] Update technical skills in `src/components/Skills.tsx`
- [ ] Add your real projects in `src/components/Projects.tsx`
- [ ] Update contact info in `src/components/Contact.tsx`
- [ ] Add your social media links in `src/components/Navbar.tsx` and `src/components/Footer.tsx`
- [ ] Update color scheme in `tailwind.config.js` if desired
- [ ] Add project images and update `src/components/Projects.tsx`

### Building for Production

1. **Build the project:**
   ```
   npm run build
   ```
   This creates an optimized `dist/` folder

2. **Preview production build:**
   ```
   npm run preview
   ```

3. **Deploy:**
   - **Vercel:** `vercel deploy`
   - **Netlify:** `netlify deploy --prod --dir=dist`
   - **GitHub Pages:** Push to gh-pages branch
   - **AWS S3:** Upload `dist/` folder

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        - Navigation header
│   ├── Hero.tsx          - Landing section
│   ├── About.tsx         - About me
│   ├── Experience.tsx    - Work history
│   ├── Skills.tsx        - Technical skills
│   ├── Projects.tsx      - Project showcase
│   ├── Contact.tsx       - Contact form
│   └── Footer.tsx        - Footer
├── App.tsx               - Main component
├── main.tsx              - Entry point
└── index.css            - Global styles
```

## Key Features

✨ **Modern Design**
- Dark theme with gradient accents
- Smooth animations and transitions
- Fully responsive on all devices

🎨 **Customizable**
- Easy color scheme changes
- Reusable Tailwind components
- Well-organized component structure

📱 **Mobile-First**
- Mobile navigation with hamburger menu
- Touch-friendly interface
- Optimized for all screen sizes

🚀 **Performance**
- Built with Vite (ultra-fast builds)
- Optimized bundle size
- Pre-optimized for production

## Common Customizations

### Change Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Change these
      secondary: '#1e293b',
      accent: '#3b82f6',
    },
  },
}
```

### Update Social Links
In `src/components/Hero.tsx` and `src/components/Footer.tsx`:
```jsx
<a href="https://github.com/your-username" className="...">
  <Github size={24} />
</a>
```

### Add New Sections
1. Create a new component in `src/components/`
2. Import it in `src/App.tsx`
3. Add it to the JSX return statement

## Troubleshooting

**Port 5173 already in use?**
```
npm run dev -- --port 3000
```

**Dependencies not installing?**
```
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```
npm install   # Reinstall dependencies
npm run build # Try building again
```

## Next Steps

1. ✅ Start dev server: `npm run dev`
2. ✅ Customize your info
3. ✅ Add your projects
4. ✅ Test on mobile
5. ✅ Build and deploy
6. ✅ Share with the world! 🎉

## Support

For questions or issues:
- Check React documentation: https://react.dev
- Tailwind CSS docs: https://tailwindcss.com
- Vite docs: https://vitejs.dev

---

**Happy coding! 🚀**
