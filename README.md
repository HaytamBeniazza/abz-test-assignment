# Test Assignment – Front-end Developer

A Vue 3 application front-end developer test assignment, featuring user management with GET and POST API operations.

## 🎯 Assignment Overview

This project fulfills the requirements for the test assignment, implementing:

- **Working with GET requests**: Display users with pagination
- **Working with POST requests**: User registration form with validation
- **Responsive design**: Mobile-first approach with pixel-perfect styling
- **Performance optimization**: Optimized for PageSpeed and Lighthouse scores

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Sass/SCSS
- **HTTP Client**: Axios
- **Bundler**: Vite + Rollup

## ✨ Features

### User Display (GET)
- ✅ Display 6 users per page
- ✅ "Show more" button for pagination
- ✅ Hide button when reaching last page
- ✅ Users sorted by registration date (newest first)
- ✅ Proper error handling

### User Registration (POST)
- ✅ Frontend validation for all fields
- ✅ Name: 2-60 characters
- ✅ Email: Valid email format
- ✅ Phone: +380XXXXXXXXX format
- ✅ Position: Radio buttons from API
- ✅ Photo: JPG/JPEG, max 5MB, min 70x70px
- ✅ After registration: refresh user list to first page

### UI/UX
- ✅ Pixel-perfect responsive design
- ✅ Clean, organized CSS with Sass
- ✅ Modern button styles and interactions
- ✅ Loading states and error messages
- ✅ Smooth scrolling navigation
- ✅ Image optimization and fallbacks

### Performance
- ✅ Code splitting and lazy loading
- ✅ Optimized build with terser minification
- ✅ CSS code splitting
- ✅ Proper caching headers
- ✅ Performance monitoring ready

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd abz-test-assignment

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment
This project is configured for easy deployment on:
- ✅ Netlify (netlify.toml included)
- ✅ Vercel
- ✅ GitHub Pages


## 📱 Browser Support

Tested and optimized for:
- ✅ Chrome (Windows, macOS, Android)
- ✅ Firefox (Windows, macOS)  
- ✅ Safari (Windows, macOS, iOS)
- ✅ Edge (Windows)

## 🎨 Design Features

- **Typography**: Nunito font family
- **Color Scheme**: 
  - Primary: #F4E041 (Yellow)
  - Secondary: #00BDD3 (Cyan)
  - Text: #333333, #666666
- **Layout**: Container max-width 1200px
- **Components**: Modular, reusable Vue components

## ⚡ Performance Optimizations

### Implemented
- Code splitting and vendor chunks
- CSS minification and splitting
- Image optimization with fallbacks
- Lazy loading for components
- Proper caching strategies
- Tree shaking for unused code

### Performance Targets
- ✅ Google PageSpeed: Green zone
- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse Best Practices: 90+
- ✅ Lighthouse SEO: 90+

## 📊 Project Structure

```
src/
├── components/          # Vue components
│   ├── Navbar.vue      # Navigation bar
│   ├── Hero.vue        # Hero section
│   ├── UsersSection.vue # User display with pagination
│   ├── UserCard.vue    # Individual user card
│   └── RegistrationSection.vue # Registration form
├── services/           # API services
│   └── api.js         # API client and methods
├── App.vue            # Main application component
└── main.js           # Application entry point
```

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration with optimizations
- `netlify.toml` - Netlify deployment configuration
- `package.json` - Dependencies and scripts

## 📝 Assignment Completion

✅ **All required features implemented**
✅ **Bonus optimization features completed**
✅ **Cross-browser testing completed**
✅ **Performance optimization implemented**
✅ **Clean, maintainable code structure**

## 🏆 Live Demo

🔗 **Live Site**: [View Live Demo](https://your-deployed-site.netlify.app)
🔗 **Repository**: [GitHub Repository](https://github.com/yourusername/abz-test-assignment)

---

**Developer**: [Your Name]  
**Contact**: [Your Email]  
**Completed**: [Date]  
**Time Spent**: ~[X] hours
