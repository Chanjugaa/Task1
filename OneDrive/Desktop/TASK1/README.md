# Readzy - Online Book Rental Services

A modern, fully responsive landing page for Readzy, an affordable book rental platform. Built with semantic HTML, CSS Grid/Flexbox, and JavaScript.

## About Readzy

Readzy is revolutionizing the way people access books. We provide affordable book rental services for students, book enthusiasts, and curious minds. Rent books at 70% less cost than buying, with a collection of 50,000+ titles across all genres.

### Key Concept: Book Rental Services
- **Save Money**: Rent books at up to 70% discount compared to purchasing
- **Huge Collection**: 50,000+ books across Fiction, Academic, Self-help, and more
- **Flexible Rentals**: Choose 14, 30, or 60-day rental periods
- **Free Delivery**: Fast 24-48 hour delivery with free shipping on orders above ₹299
- **Easy Returns**: Free pickup from your home with no penalties

## Project Structure

```
TASK1/
├── index.html       # Main HTML file with book rental service content
├── styles.css       # Responsive CSS with animations
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## Features

✅ **Book Rental Service Focus** - Clear messaging about affordable book rentals
✅ **Fully Responsive Design** - Seamlessly adapts to mobile, tablet, and desktop screens
✅ **Mobile-First Approach** - Optimized for mobile users first
✅ **Semantic HTML** - Better accessibility and SEO
✅ **CSS Flexbox & Grid** - Modern layout design
✅ **Smooth Animations** - Professional transitions and effects
✅ **Interactive Elements** - Mobile menu toggle, form validation
✅ **Sign-up Form** - Collect user information and preferences
✅ **Accessibility Features** - WCAG-compliant with keyboard navigation
✅ **Performance Optimized** - Lightweight and fast-loading

## File Descriptions

### index.html
- Semantic HTML5 structure
- Navigation bar with mobile menu toggle
- Hero section with book rental messaging
- 6 feature cards highlighting Readzy's benefits:
  - Save Money (70% savings)
  - Huge Collection (50,000+ books)
  - Fast Delivery (24-48 hours)
  - Flexible Rentals (14-60 days)
  - Easy Returns (free pickup)
  - Quality Books (inspected & maintained)
- About section with mission statement and statistics
- Sign-up form for user registration
- Enhanced footer with multiple sections

### styles.css
- CSS Variables for easy color customization
- Mobile-first responsive design
- Media queries for tablets (768px) and mobile (480px)
- Gradient backgrounds and color themes
- Smooth animations and transitions
- Hover effects on interactive elements
- Modern styling with box shadows

### script.js
- Mobile menu toggle functionality
- Form validation with email pattern checking
- Notification system for user feedback
- Scroll reveal animations using Intersection Observer
- Active navigation highlighting on scroll
- Accessibility features (keyboard navigation)
- Performance optimizations

## Quick Start

### Option 1: Live Server (Recommended)
1. Open the folder in VS Code
2. Install "Live Server" extension if not already installed
3. Right-click on `index.html`
4. Select "Open with Live Server"

### Option 2: Python Built-in Server
```powershell
cd 'c:\Users\Brunotech\OneDrive\Desktop\TASK1'
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

### Option 3: Node.js http-server
```powershell
npx http-server

# Or if installed globally:
http-server
```

### Option 4: Direct Browser
Simply open `index.html` directly in your web browser.

## Customization Guide

### Change Brand Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #00bcd4;      /* Cyan */
    --secondary-color: #76ff03;    /* Lime */
    --dark-bg: #1a1a2e;            /* Dark Navy */
    --accent-color: #ff6b6b;       /* Red */
}
```

### Update Content
Edit text and sections directly in `index.html`:
- Modify book collection numbers
- Change rental prices
- Update feature descriptions
- Edit about section content

### Adjust Responsive Breakpoints
In `styles.css`, modify media query breakpoints:
```css
@media (max-width: 768px) { /* Tablet breakpoint */ }
@media (max-width: 480px) { /* Mobile breakpoint */ }
```

### Add New Features
Follow the existing pattern for feature cards:
```html
<article class="feature-card">
    <div class="feature-icon">🎯</div>
    <h3>Feature Name</h3>
    <p>Feature description here.</p>
</article>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA-friendly form elements
- Keyboard navigation support
- High contrast colors
- Focus states on interactive elements
- Smooth scroll behavior

## Performance Metrics

- Lightweight: ~60KB total (HTML + CSS + JS)
- Mobile-optimized: Fast load times
- Smooth animations: 60fps on modern devices
- Responsive breakpoints: Mobile, tablet, desktop

## Form Features

The sign-up form collects:
- Full Name
- Email Address
- Phone Number (optional)
- Reading Preferences (genres they enjoy)

Form validation ensures:
- All required fields are filled
- Email format is valid
- Message/preferences have minimum length

## Future Enhancements

- Dark mode toggle
- Advanced search and filtering
- Book recommendations algorithm
- User reviews and ratings
- Backend integration for real rentals
- Email verification system
- Payment gateway integration
- Wishlist feature

## Contact & Support

For questions or feedback about the book rental service, users can use the sign-up form to get in touch with the Readzy team.

---

**Last Updated:** December 9, 2025
**Platform:** Readzy - Affordable Book Rental Services
