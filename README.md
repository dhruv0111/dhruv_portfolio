# Portfolio Website Documentation

This portfolio website is built using React and Tailwind CSS, featuring a clean and professional design with responsive layouts.

## Project Structure

```
src/
├── assets/
│   ├── Icons/
│   └── images/
├── components/
│   ├── Navbar.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       └── Skills.jsx
└── App.jsx
```

## Components Overview

### 1. Navbar Component
- Fixed navigation bar with responsive design
- Mobile-friendly hamburger menu
- Navigation links for Home, Experience, Projects, and Skills
- Active page highlighting

### 2. Home Page
- Personal introduction section with profile image
- Contact information with clickable links
- Professional summary
- Education details
- Direct links to resume and social profiles

### 3. Experience Page
- Professional experience timeline
- Details for each position including:
  - Company name
  - Role title
  - Duration
  - Key responsibilities
  - Project contributions
- Skills and technologies summary

### 4. Projects Page
- Featured projects showcase
- Each project includes:
  - Project title
  - Detailed description
  - Technologies used
  - GitHub repository link
  - Live demo link
- Additional projects section

### 5. Skills Page
- Technical skills organized by categories:
  - Programming Languages
  - Frameworks
  - Version Control
  - Databases
  - Other Tools
- Continuous learning section

## Technologies Used

- React.js
- Tailwind CSS
- React Icons
- JavaScript (ES6+)

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

## Customization

To customize the portfolio:

1. **Personal Information**: Update content in `Home.jsx`
2. **Experience**: Modify the experiences array in `Experience.jsx`
3. **Projects**: Edit the projects array in `Projects.jsx`
4. **Skills**: Update the skillCategories array in `Skills.jsx`
5. **Styling**: Modify Tailwind classes or add custom styles

## Deployment

The site can be deployed using platforms like:
- Netlify
- Vercel
- GitHub Pages

## Best Practices

- Keep content updated regularly
- Optimize images for web
- Maintain consistent styling
- Test responsiveness across devices
- Keep code clean and well-documented
