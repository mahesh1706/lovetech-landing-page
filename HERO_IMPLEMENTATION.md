# Petluri EduTech - Mobile-First Hero Implementation

A comprehensive mobile-first hero section with courses carousel, GSAP animations, and responsive design.

## 🚀 Key Features Implemented

### ✅ Mobile-First Layout
- **Mobile (≤1023px)**: Hero content appears first, courses carousel below
- **Desktop (≥1024px)**: Three-column layout (courses → hero → images)
- **MSME badge + headline + CTAs** are the first visible content on mobile

### ✅ Interactive Courses Display
- **Mobile**: Swiper.js carousel with:
  - `loop: true` - Infinite scrolling
  - `centeredSlides: true` - Centers active slide  
  - `slidesPerView: "auto"` - Card peeking effect
  - Auto-pagination and autoplay
- **Desktop**: Sticky sidebar grid layout

### ✅ Proper CTA Wiring
- **"Start Your Journey"**: Smoothly scrolls to `#courses` section
- **"View Courses"**: Also scrolls to courses (can be changed to route)
- Smooth scroll behavior with proper anchor targeting

### ✅ GSAP Animations
- Hero entrance timeline with staggered reveals
- Mobile-specific active slide scaling
- Desktop course card animations
- Parallax effects for images
- **Respects `prefers-reduced-motion`** preference

## 📦 Dependencies Added

```bash
npm install gsap swiper
```

## 🎯 Layout Behavior

### Mobile Experience (≤1023px)
1. **MSME Badge** appears first with fade-up animation
2. **Hero Headline** slides up with scale effect
3. **Subtitle** follows with stagger
4. **CTA Buttons** animate in sequence
5. **Courses Carousel** below with centered, looping slides

### Desktop Experience (≥1024px)
1. **Left Sidebar**: Sticky courses grid with hover effects
2. **Center**: Hero content with enhanced typography
3. **Right Side**: Image gallery with parallax (XL+ screens)

## 🔧 Animation Details

### Entrance Sequence
```typescript
// GSAP Timeline
heroTl.from(".msme-badge", { y: 18, opacity: 0, duration: 0.7 })
      .from(".hero-heading", { y: 30, opacity: 0, scale: 0.985, duration: 0.9 }, "-=0.45")
      .from(".hero-sub", { y: 20, opacity: 0, duration: 0.75 }, "-=0.6")
      .from(".hero-cta", { y: 18, opacity: 0, stagger: 0.08, duration: 0.6 }, "-=0.5")
```

### Mobile Carousel Animation
- Active slides scale to `1.03`
- Inactive slides scale to `0.98`
- Smooth 350ms transitions
- MutationObserver tracks class changes

### Responsive Breakpoints
- Uses `gsap.matchMedia()` for breakpoint-specific animations
- Desktop: Course cards animate from left with stagger
- Mobile: Swiper slide scaling based on active state

## 🎨 Swiper Configuration

```typescript
<Swiper
  modules={[Autoplay, Pagination]}
  loop={true}
  centeredSlides={true}
  slidesPerView="auto"
  spaceBetween={16}
  autoplay={{ delay: 2800, disableOnInteraction: false }}
  pagination={{ clickable: true }}
/>
```

## 🎪 CSS Enhancements

```css
/* Swiper Custom Styles */
.courses-swiper {
  padding: 20px 0 50px;
  overflow: visible;
}

.courses-swiper .swiper-pagination-bullet {
  background: #1e66ff;
  opacity: 0.3;
}

.course-card {
  will-change: transform, opacity;
  transition: transform 0.35s ease;
}
```

## ⚡ Performance Optimizations

- **Transform/Opacity Only**: All animations use GPU-accelerated properties
- **Will-Change**: Set on animated elements for optimal performance
- **Batch Operations**: ScrollTrigger.batch() for multiple elements
- **Cleanup**: Proper animation cleanup on unmount
- **Reduced Motion**: Respects accessibility preferences

## 🔗 CTA Button Behavior

```typescript
const handleStartClick = (e: React.MouseEvent) => {
  e.preventDefault();
  const coursesEl = document.getElementById('courses');
  if (coursesEl) {
    coursesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
```

## 📱 Responsive Design

### Mobile Priorities
1. Hero content visibility first
2. Touch-friendly carousel navigation
3. Readable typography scaling
4. Accessible button sizing (min-height: 56px)

### Desktop Enhancements
1. Multi-column layout utilization
2. Sticky positioning for courses
3. Enhanced imagery and parallax
4. Hover state micro-interactions

## 🛠 Technical Implementation

### Component Structure
```
Hero.tsx
├── Background Elements
├── Mobile-First Layout Container
│   ├── Hero Content (main, order-2 on desktop)
│   ├── Courses Section (aside, order-1 on desktop)
│   └── Images Gallery (hidden until XL screens)
```

### Animation Hook Integration
- `useGsapLandingAnimations.ts` handles all GSAP setup
- Responsive animations via `gsap.matchMedia()`
- Proper cleanup and reduced motion support

## 📋 QA Checklist

✅ MSME badge + headline + CTAs visible first on mobile  
✅ Courses display as centered looping carousel on mobile  
✅ Desktop shows courses in left sidebar grid  
✅ "Start Your Journey" scrolls to courses section  
✅ Carousel loops infinitely and centers slides  
✅ Animations respect `prefers-reduced-motion`  
✅ No layout shifts during entrance animations  
✅ Smooth 60fps performance  
✅ Touch-friendly mobile interactions  
✅ Proper semantic HTML structure  

## 🌟 Browser Support

- Chrome 60+ ✅
- Firefox 60+ ✅  
- Safari 12+ ✅
- Edge 79+ ✅
- Mobile Safari/Chrome ✅

---

**Result**: A polished, mobile-first hero section that prioritizes content visibility while providing an engaging, accessible user experience across all devices.