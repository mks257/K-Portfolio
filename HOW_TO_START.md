# 🚀 STEP-BY-STEP: How to Start Your Dev Server

## ❌ You're Getting: "localhost refused to connect"

This means the dev server is NOT running yet.

---

## ✅ SOLUTION: Start the Server

### **Option 1: Using PowerShell Script (EASIEST)**

**Step 1:** Open File Explorer
- Navigate to: `c:\Users\kavya\kavya-portfolio`

**Step 2:** Find the file
- Look for: `start-dev.ps1`

**Step 3:** Right-click and select
- "Run with PowerShell"

**Step 4:** Wait for server to start
- You'll see: `VITE v5.0.8 ready in XXX ms`
- Then: `Local: http://localhost:5173/`

**Step 5:** Open browser
- Visit: `http://localhost:5173`
- Your portfolio loads! 🎉

---

### **Option 2: Using Command Line (Manual)**

**Step 1:** Open PowerShell/Command Prompt
- Press: `Windows Key + R`
- Type: `cmd` or `powershell`
- Press: `Enter`

**Step 2:** Navigate to project
```
cd c:\Users\kavya\kavya-portfolio
```

**Step 3:** Start server
```
npm run dev
```

**Step 4:** Watch for this output
```
VITE v5.0.8  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

**Step 5:** Open browser
- Visit: `http://localhost:5173`

---

### **Option 3: Using VS Code (If Already Open)**

**Step 1:** Open Terminal in VS Code
- Press: `Ctrl + ~` (backtick)
- Or: Menu → Terminal → New Terminal

**Step 2:** Type command
```
npm run dev
```

**Step 3:** Press Enter

**Step 4:** Terminal shows it's ready
```
Local: http://localhost:5173/
```

**Step 5:** Click link or visit in browser

---

## 🎯 **MOST IMPORTANT**

### ⚠️ **KEEP TERMINAL OPEN**

**DO NOT close the terminal window!**

The terminal must stay open while you work. That's where the dev server runs.

- Don't minimize it and forget about it
- Don't close it
- Keep it running in background

---

## 📝 **What Happens When Server Starts**

Terminal output should look like this:

```
> kavya-portfolio@0.0.1 dev
> vite

  VITE v5.0.8  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

✅ When you see this, server is ready!

---

## 🌐 **Open Your Portfolio**

Once you see "Local: http://localhost:5173/" in terminal:

1. Open web browser (Chrome, Firefox, Edge, etc.)
2. In address bar, type: `http://localhost:5173`
3. Press Enter
4. Your portfolio appears! 🎉

---

## 🔄 **How Development Works**

```
You edit file
    ↓
VS Code saves it
    ↓
Dev server detects change
    ↓
Automatically recompiles
    ↓
Browser refreshes
    ↓
You see changes instantly!
```

This is called "Hot Reload" - super fast!

---

## 🛠️ **Troubleshooting**

### Problem: "npm is not recognized"

**Solution:**
1. Install Node.js: https://nodejs.org
2. Download LTS version
3. Install it
4. Restart your terminal
5. Try again: `npm run dev`

---

### Problem: "Cannot find module 'react'"

**Solution:**
1. In terminal, run: `npm install`
2. Wait for it to complete
3. Then run: `npm run dev`

---

### Problem: "Port 5173 already in use"

**Solution:**
Use different port:
```
npm run dev -- --port 3000
```

Then visit: `http://localhost:3000`

---

### Problem: "Error: ENOENT"

**Solution:**
1. Close terminal
2. Make sure you're in correct folder
3. Run: `npm install`
4. Then: `npm run dev`

---

### Problem: "Still can't connect?"

**Solution:**
1. Check terminal shows "ready in XXX ms"
2. Make sure you're visiting `http://localhost:5173` (not `https`)
3. Hard refresh browser: `Ctrl + Shift + R`
4. Check if firewall is blocking it
5. Try different port: `npm run dev -- --port 8080`

---

## ✅ **Verification Checklist**

Before you say it's working:

- [ ] Terminal shows "VITE ready"
- [ ] Terminal shows "Local: http://localhost:5173/"
- [ ] Browser can reach http://localhost:5173
- [ ] You see portfolio with default content
- [ ] No red error messages in terminal

---

## 🎓 **Next: Edit Your Portfolio**

Once server is running:

1. Keep terminal OPEN
2. Open `src/components/Hero.tsx` in VS Code
3. Change your name from "Kavya" to your name
4. Save file (Ctrl+S)
5. Watch browser update automatically!

---

## 🚀 **YOU'RE READY!**

**Right now:**

1. Open PowerShell or terminal
2. Navigate to: `c:\Users\kavya\kavya-portfolio`
3. Run: `npm run dev`
4. Wait for: "VITE ready"
5. Visit: `http://localhost:5173`

**That's it!** 🎉

---

## 📞 **Still Stuck?**

Check these files for more help:
- `START_HERE.txt` - Overview
- `QUICK_REFERENCE.md` - What to edit
- `README.md` - Full documentation

Or try running the PowerShell script:
```
c:\Users\kavya\kavya-portfolio\start-dev.ps1
```

---

**Go start your dev server now! 🚀**
