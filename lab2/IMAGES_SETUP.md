# Adding Real PnC Images to the Gallery

## Instructions for Adding Authentic Pamantasan ng Cabuyao Images

### Step 1: Download Images from Official Sources

Visit these official PnC sources to download authentic campus photos:

1. **Official Website**: https://pnc.edu.ph/
   - Navigate to the homepage and news sections
   - Look for campus photos, facility images, and event photos

2. **Facebook Pages**:
   - PnC Official Facebook Page
   - PnC Management Information Systems Department
   - PnC Student Organizations

3. **Other Sources**:
   - PnC official social media accounts
   - University publications and brochures
   - Official campus tours and virtual tours

### Step 2: Image Requirements

For best results, ensure your images meet these specifications:
- **Format**: JPG or PNG
- **Size**: At least 800x600 pixels (higher resolution preferred)
- **Quality**: High-quality, clear images
- **Content**: Actual PnC facilities and campus areas

### Step 3: Required Image Files

Save the downloaded images with these exact filenames in the `public/images/` directory:

```
public/images/
├── pnc-campus-overview.jpg     (Main campus view)
├── pnc-main-building.jpg       (Main administrative building)
├── pnc-library.jpg             (Library facility)
├── pnc-computer-lab.jpg        (Computer laboratory)
├── pnc-science-lab.jpg         (Science laboratory)
├── pnc-student-center.jpg      (Student center/lounge)
├── pnc-cafeteria.jpg           (Cafeteria/dining area)
├── pnc-sports-complex.jpg      (Sports facilities)
└── pnc-auditorium.jpg          (Auditorium/events hall)
```

### Step 4: Image Optimization (Optional)

For better performance, you can optimize images:
- Compress images to reduce file size
- Resize to appropriate dimensions (1000px width recommended)
- Use tools like TinyPNG or ImageOptim

### Step 5: Testing

After adding the images:
1. Start the development server: `npm start`
2. Navigate to the Gallery page
3. Verify all images load correctly
4. Check that images are properly displayed in the grid

### Alternative: Using Placeholder Images

If you cannot find specific PnC images immediately, you can temporarily use placeholder images by updating the image paths in `src/pages/Gallery.js`:

```javascript
// Temporary placeholder - replace with actual PnC images
image: "https://via.placeholder.com/400x300/007bff/ffffff?text=PnC+Facility"
```

### Note on Image Rights

Ensure you have permission to use the images:
- Use only official PnC images or images you have rights to
- Credit the source if required
- Respect copyright and intellectual property rights

## Current Status

✅ Gallery component updated to use local images
✅ Images directory created at `public/images/`
✅ Image paths configured in Gallery.js
⏳ **Next Step**: Add actual PnC images to the `public/images/` directory
