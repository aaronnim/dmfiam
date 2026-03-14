# dmfIAM Branding Guidelines

Welcome to the **dmfIAM Branding Guidelines**. This document outlines the core colors, typography, and design tokens used throughout the application, and provides instructions on how to customize them.

## 1. Core Brand Colors

The branding is centralized in `src/app/globals.css`. By changing these variables, the entire application will dynamically update its look and feel.

The brand uses three primary elements:
- **Brand Blue**: A vibrant blue gradient (light blue to deep blue) used for primary accents, buttons, and the "df" logo mark.
- **Brand Navy/Charcoal**: A deep slate/navy color used for text, dark backgrounds, and the "iam" logo text.
- **Brand Accent (Red)**: A punchy crimson/red color used for highlights, alerts, and the small dot in the 'a' of the logo.

### CSS Variables (`src/app/globals.css`)

```css
:root {
  /* Brand Primary (Blue) */
  --brand-blue-light: #6AB3FF;
  --brand-blue: #0E75CD;
  --brand-blue-dark: #075094;
  
  /* Brand Secondary (Navy) */
  --brand-navy: #2A303A;
  --brand-navy-dark: #1E2229;
  
  /* Brand Accent (Red) */
  --brand-accent: #F43C56;
}
```

## 2. Usage in Code

All CSS modules (e.g., `Home.module.css`, `Header.module.css`) now use these CSS variables instead of hardcoded hex codes.

**Example: Text Color**
```css
.exampleText {
    color: var(--brand-navy);
}
```

**Example: Background Color with Opacity**
For opacity overlays, we use RGB variants defined in `globals.css`:
```css
.exampleOverlay {
    background-color: rgba(var(--brand-navy-rgb), 0.5); /* 50% opacity */
}
```

## 3. How to Modify the Branding

If you receive a new logo or want to completely re-theme the application:
1. Open `src/app/globals.css`.
2. Locate the `:root` pseudo-class.
3. Replace the hex codes for `--brand-blue`, `--brand-navy`, and `--brand-accent` with your new colors.
4. Update the corresponding `-rgb` variables with the comma-separated RGB values of your new colors (e.g., `14, 117, 205` for `#0E75CD`).
5. Save the file. The entire application, including the Logo, Header, Footer, Hero, and Home sections, will instantly update to the new branding.

## 4. Logo Component

The `Logo` component (`src/components/Logo.tsx`) is designed to dynamically reflect the CSS variables. It utilizes styling to create a text-based logo that closely aligns with the provided image logo. If you wish to replace it with a physical image file in the future:
1. Save your logo as `logo.png` or `logo.svg` inside the `public/` folder.
2. Edit `src/components/Logo.tsx` to use the Next.js `<Image src="/logo.png" />` tag.
