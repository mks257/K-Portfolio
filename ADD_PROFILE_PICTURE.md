# 📸 How to Add Your Profile Picture

## Step 1: Save the Image
1. **Save your profile picture** as `profile.jpg` in the `public/images/` directory
   - Path: `c:\Users\kavya\kavya-portfolio\public\images\profile.jpg`
   - Recommended size: 500x500px or 600x600px (square format works best)
   - File formats supported: JPG, PNG, WebP
   - File size: Under 500KB recommended

## Step 2: The image will automatically display
- The Hero component is already configured to use `/images/profile.jpg`
- If using a different filename, update line 33 in `src/components/Hero.tsx`:
  ```tsx
  src="/images/profile.jpg"  // Change filename here if needed
  ```

## Step 3: Styling Options
The profile picture includes:
- ✅ **3D Glow Ring Animation** - Rotating gradient border
- ✅ **Floating Animation** - Smooth up/down motion
- ✅ **Hover Scale Effect** - Scales to 105% on hover
- ✅ **Responsive Design** - Adjusts size on mobile

## Profile Picture Styling Details

### Current Features:
- **Size**: 64×64 (md: 72×72) with padding
- **Border Radius**: 3xl (24px) - smooth rounded corners
- **Glow Effect**: Animated purple-to-pink gradient
- **3D Rotation**: Background ring rotates continuously
- **Hover Effect**: Slight scale up and enhanced glow

### Customization:
Edit `src/components/Hero.tsx` (lines 30-47) to adjust:
- Image size: Change `w-64 h-64` and `md:w-72 md:h-72`
- Glow intensity: Modify opacity values in the gradient
- Animation speed: Change animation delays (e.g., `2s` to `3s`)
- Border radius: Change `rounded-3xl` to `rounded-full` or `rounded-2xl`

## Image Requirements
- ✅ Square format (1:1 aspect ratio) looks best
- ✅ Professional headshot recommended
- ✅ Well-lit, clear photo
- ✅ Minimum 400×400px resolution
- ✅ JPG, PNG, or WebP format

## Troubleshooting
If the image doesn't appear:
1. Check file is in `public/images/profile.jpg`
2. Verify filename matches in Hero.tsx (case-sensitive)
3. Hard refresh browser (Ctrl+Shift+R)
4. Check browser console for errors (F12)

Enjoy your animated profile picture! 🎨✨
