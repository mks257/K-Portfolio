# 🚀 How to Start Your Development Server

## ⚠️ You Got an Error

**Error:** `localhost refused to connect` / `ERR_CONNECTION_REFUSED`

**Reason:** The development server hasn't been started yet.

---

## ✅ Solution: Start the Dev Server

### Method 1: PowerShell/Command Prompt (Recommended)

1. **Open Terminal:**
   - Press `Ctrl + ~` in VS Code, OR
   - Go to Terminal → New Terminal, OR
   - Open PowerShell/Command Prompt manually

2. **Navigate to project:**
   ```powershell
   cd c:\Users\kavya\kavya-portfolio
   ```

3. **Start dev server:**
   ```powershell
   npm run dev
   ```

4. **You should see:**
   ```
   VITE v5.0.8  ready in 234 ms
   
   ➜  Local:   http://localhost:5173/
   ➜  press h to show help
   ```

5. **Open in browser:**
   - Visit: `http://localhost:5173`
   - Your portfolio appears!

---

### Method 2: Using the Batch File

Double-click this file:
```
c:\Users\kavya\kavya-portfolio\start-dev.bat
```

A terminal window opens and starts the dev server automatically.

---

### Method 3: Run from VS Code Terminal

1. In VS Code, open Terminal (Ctrl + `)
2. Type: `npm run dev`
3. Press Enter
4. Click the link or visit `http://localhost:5173`

---

## 🎯 What Happens When Server Starts

```
✓ Vite server started
✓ React components compiled
✓ Tailwind CSS processed
✓ Server listening on http://localhost:5173
✓ Hot reload enabled (changes appear instantly!)
```

---

## 📱 Open in Browser

Once server is running, visit:
```
http://localhost:5173
```

You'll see your portfolio with default content!

---

## 🛠️ Useful Terminal Commands

```bash
# Start dev server (default port 5173)
npm run dev

# Start dev server on different port
npm run dev -- --port 3000

# Build for production
npm run build

# Preview production build
npm run preview

# Stop server
Ctrl + C (in terminal)
```

---

## ⚙️ Port Already in Use?

If port 5173 is already in use:

```bash
npm run dev -- --port 3000
```

Then visit: `http://localhost:3000`

---

## 🔍 Troubleshooting

### "npm is not recognized"
- Install Node.js from https://nodejs.org
- Restart terminal after install

### "Cannot find module"
- Run: `npm install`
- Wait for dependencies to install
- Then: `npm run dev`

### Port still refused?
- Close any other apps using that port
- Try different port: `npm run dev -- --port 8080`

### Build errors?
- Try: `npm install` (fresh install)
- Delete node_modules: `rm -r node_modules`
- Install again: `npm install`

---

## 💻 Terminal Tips

### Keep Terminal Open
The terminal must stay open while developing!
- Don't close it
- Don't minimize it
- Keep it running

### Hot Reload
When you edit files:
- Terminal shows "recompiled"
- Browser updates automatically
- No need to restart!

### Stop Server
Press `Ctrl + C` in terminal to stop.

---

## 📝 Complete Workflow

```bash
# Step 1: Open terminal
cd c:\Users\kavya\kavya-portfolio

# Step 2: Start server
npm run dev

# Step 3: Open browser
# Visit http://localhost:5173

# Step 4: Edit files in src/components/
# Changes appear instantly!

# Step 5: When done, press Ctrl+C to stop server
```

---

## ✅ You're Ready!

1. ✅ Open terminal
2. ✅ Run `npm run dev`
3. ✅ Visit `http://localhost:5173`
4. ✅ Start customizing!

---

**Having issues? Check the troubleshooting section above!**

Once you see "VITE ready in Xms" → Your server is running! 🎉
