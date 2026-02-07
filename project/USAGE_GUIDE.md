# NGO Mobile App Website - Usage Guide

Welcome to the NGO Mobile App static website! This guide will help you understand and customize the site to fit your needs.

## 📋 Table of Contents

- [Theme System](#theme-system)
- [Changing Colors](#changing-colors)
- [Adding New Components](#adding-new-components)
- [Animations & Motion](#animations--motion)
- [Accessibility](#accessibility)
- [Project Structure](#project-structure)

---

## 🎨 Theme System

The site uses a CSS variable-based theme system that supports both light and dark modes.

### Theme Tokens

All design tokens are defined in `src/index.css`:

```css
:root {
  --accent-color: 59, 130, 246;        /* Primary accent color (RGB) */
  --accent-secondary: 139, 92, 246;    /* Secondary accent color (RGB) */
  --radius: 1rem;                       /* Border radius for components */
  --shadow-depth: 0.5;                  /* Shadow intensity multiplier */
  --duration-fast: 150ms;               /* Fast animation duration */
  --duration-medium: 300ms;             /* Medium animation duration */
  --duration-slow: 600ms;               /* Slow animation duration */
}
```

### Using Theme Colors

Colors are stored as RGB values (without `rgb()` wrapper) so they can be used with opacity:

```tsx
// In your components
<div className="bg-[rgb(var(--accent-color))]">           // Solid color
<div className="bg-[rgba(var(--accent-color),0.5)]">      // 50% opacity
```

---

## 🌈 Changing Colors

### Change the Accent Color

Edit `src/index.css` and modify the `--accent-color` variable:

```css
:root {
  /* Blue (default) */
  --accent-color: 59, 130, 246;

  /* Green */
  --accent-color: 34, 197, 94;

  /* Orange */
  --accent-color: 249, 115, 22;

  /* Teal */
  --accent-color: 20, 184, 166;
}
```

**Note:** Colors must be in RGB format separated by commas (e.g., `59, 130, 246` for blue).

### Change Dark Mode Colors

Modify the `[data-theme='dark']` section in `src/index.css`:

```css
[data-theme='dark'] {
  --accent-color: 96, 165, 250;        /* Lighter blue for dark mode */
  --bg-primary: 17, 24, 39;            /* Dark background */
  --text-primary: 243, 244, 246;       /* Light text */
}
```

---

## 🧩 Adding New Components

### Adding a New Card

Use the existing `Card` component:

```tsx
import { Card } from '../components/Card';

<Card enableTilt={true} delay={0.1}>
  <h3>Your Title</h3>
  <p>Your content here</p>
</Card>
```

### Adding a New Page

1. Create a new file in `src/pages/`:

```tsx
// src/pages/ContactPage.tsx
import { motion } from 'framer-motion';

export const ContactPage = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        Contact Us
      </motion.h1>
    </div>
  );
};
```

2. Add the page to the navigation in `src/App.tsx`:

```tsx
import { ContactPage } from './pages/ContactPage';

// Add to navItems in Navbar.tsx
{ label: 'Contact', value: 'contact' }

// Add to renderPage() in App.tsx
case 'contact':
  return <ContactPage />;
```

### Creating Custom Cards with Actions

```tsx
<Card
  actions={
    <>
      <button className="p-2 glass rounded-lg">
        <Edit className="w-4 h-4" />
      </button>
      <button className="p-2 glass rounded-lg">
        <Trash className="w-4 h-4" />
      </button>
    </>
  }
>
  Card content here
</Card>
```

---

## 🎥 Animations & Motion

### Animation Durations

The site uses three standard durations:
- **Fast** (150ms): Micro-interactions (hover, button press)
- **Medium** (300ms): Component transitions
- **Slow** (600ms): Page transitions, complex animations

### Adding Animations to Elements

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 0.2
  }}
>
  Your content
</motion.div>
```

### Staggered Animations

For lists:

```tsx
{items.map((item, index) => (
  <Card key={index} delay={index * 0.1}>
    {item.content}
  </Card>
))}
```

### Common Animation Patterns

**Entrance from bottom:**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

**Scale in:**
```tsx
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
```

**Hover scale:**
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

---

## ♿ Accessibility

### Reduced Motion Support

The site automatically respects the user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Using Reduced Motion in Components

```tsx
import { useReducedMotion } from '../hooks/useReducedMotion';

const MyComponent = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : { y: [0, -20, 0] }}
    >
      Content
    </motion.div>
  );
};
```

### Keyboard Navigation

All interactive elements support keyboard navigation:
- Use `Tab` to navigate
- Use `Enter` or `Space` to activate
- Use `Escape` to close modals

Focus states use the same glow effect as hover states:

```tsx
<button className="focus-glow">
  Button
</button>
```

### Screen Reader Support

Always include proper ARIA labels:

```tsx
<button aria-label="Close modal">
  <X />
</button>

<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Modal Title</h2>
</div>
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Primary, secondary, destructive buttons
│   ├── Card.tsx         # Animated card with tilt effect
│   ├── DashboardTile.tsx # Stats tiles with animations
│   ├── Footer.tsx       # Site footer with download button
│   ├── Hero.tsx         # Hero section with floating animations
│   ├── Input.tsx        # Form input with floating labels
│   ├── Modal.tsx        # Modal dialog with backdrop
│   ├── Navbar.tsx       # Navigation with theme toggle
│   ├── Skeleton.tsx     # Loading skeletons
│   └── Tooltip.tsx      # Tooltip with glow effect
│
├── pages/              # Page components
│   ├── HomePage.tsx     # Landing page with hero
│   ├── DashboardPage.tsx # Dashboard preview
│   ├── FeaturesPage.tsx # Feature showcase grid
│   └── GalleryPage.tsx  # Impact gallery grid
│
├── hooks/              # Custom React hooks
│   ├── useTheme.ts      # Theme toggle hook
│   └── useReducedMotion.ts # Motion preference detection
│
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles and theme tokens
```

---

## 🎯 Common Customizations

### Change Border Radius

Edit `--radius` in `src/index.css`:

```css
--radius: 0.5rem;  /* Smaller, more subtle */
--radius: 1.5rem;  /* Larger, more playful */
```

### Modify Animation Speeds

Edit animation durations:

```css
--duration-fast: 100ms;    /* Snappier */
--duration-medium: 400ms;  /* Smoother */
--duration-slow: 800ms;    /* More dramatic */
```

### Add a New Gradient

In Tailwind, create custom gradients:

```tsx
<div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
  Gradient background
</div>
```

### Customize the Download Button Link

Edit the Play Store link in components:

```tsx
// In Hero.tsx and Footer.tsx
onClick={() => window.open('YOUR_PLAY_STORE_LINK_HERE', '_blank')}
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 💡 Tips

1. **Consistent Spacing:** Use Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24)
2. **Color Contrast:** Ensure text is readable on all backgrounds
3. **Test Dark Mode:** Always test changes in both light and dark themes
4. **Mobile First:** Design for mobile, then enhance for desktop
5. **Performance:** Keep animations smooth by using `transform` and `opacity` properties

---

## 🐛 Troubleshooting

**Animations not working:**
- Check if `framer-motion` is installed
- Verify the element is wrapped in `<motion.div>`

**Theme not switching:**
- Check browser localStorage
- Verify `useTheme` hook is imported correctly

**Colors look wrong:**
- Ensure RGB values are comma-separated without `rgb()` wrapper
- Check both `:root` and `[data-theme='dark']` sections

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Need help?** Feel free to explore the code and modify it to suit your needs!
