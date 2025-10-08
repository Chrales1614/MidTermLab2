# PNC Blog - Single Page Application (SPA)

A modern blog-style Single Page Application built with React and React Router DOM for Philippine Normal College (PNC). This project transforms traditional institutional content into an engaging blog format while maintaining all required functionality.

## Features

- **5 Main Blog Sections:**
  - **Home:** Blog homepage with featured posts, categories, and sidebar
  - **Mission & Vision:** Blog post format with detailed content and related posts
  - **Gallery:** Visual blog post showcasing campus facilities with image grid
  - **About:** Team member profiles presented as author bios
  - **Contact:** Contact page with form, information, and social links

- **Modern Blog Design:**
  - Blog-style layout with post headers, meta information, and content sections
  - Responsive sidebar with related posts, categories, and quick links
  - Breadcrumb navigation for better user experience
  - Post tags and social sharing elements
  - Featured images and content previews

- **Navigation:** Clean, modern header with blog-style navigation
- **Design:** Contemporary blog design using Bootstrap 5 and custom CSS
- **Routing:** Client-side routing with React Router DOM (no page reloads)

## Technologies Used

- **React 19.2.0** - Frontend framework
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS framework for responsive design
- **Font Awesome** - Icons
- **Custom CSS** - Additional styling and animations

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header component
│   └── Header.css         # Header styling
├── pages/
│   ├── Home.js            # Homepage component
│   ├── Home.css           # Homepage styling
│   ├── MissionVision.js   # Mission & Vision page
│   ├── MissionVision.css  # Mission & Vision styling
│   ├── Gallery.js         # Gallery page
│   ├── Gallery.css        # Gallery styling
│   ├── About.js           # About page
│   ├── About.css          # About styling
│   ├── Contact.js         # Contact page
│   └── Contact.css        # Contact styling
├── App.js                 # Main app component with routing
├── App.css                # Global styles and Bootstrap imports
├── index.js               # App entry point
└── index.css              # Base styles
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Features Implemented

### ✅ Requirements Met:
- [x] Single Page Application with 5 sections
- [x] Header component for navigation
- [x] Basic styling with Bootstrap and CSS
- [x] React Router DOM for navigation
- [x] Responsive design
- [x] Contact form with validation
- [x] Modern UI/UX design

### 🎨 Design Features:
- Consistent color scheme (PNC blue theme)
- Smooth animations and transitions
- Responsive layout for all screen sizes
- Modern card-based design
- Interactive elements with hover effects
- Professional typography and spacing

### 📱 Responsive Design:
- Mobile-first approach
- Bootstrap grid system
- Flexible navigation menu
- Optimized images and content
- Touch-friendly interface

## Team Members

- **John Delgado** - Project Leader
- **Maria Santos** - Frontend Developer  
- **Carlos Rodriguez** - Backend Developer
- **Ana Garcia** - UI/UX Designer

## Course Information

- **Course:** ITP110 - Web Technologies
- **Institution:** Philippine Normal College
- **Project:** Midterm Laboratory 2 - Single Page Application

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes as part of the ITP110 course requirements.