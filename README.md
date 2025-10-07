# Prateek Lingwal - Portfolio Website

A modern, professional, and responsive personal portfolio website built with Next.js, showcasing AI/ML expertise and computer science projects.

## Language Composition

![TypeScript](https://img.shields.io/badge/TypeScript-65.2%25-blue)
![CSS](https://img.shields.io/badge/CSS-18.7%25-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-12.4%25-yellow)
![JSON](https://img.shields.io/badge/JSON-2.8%25-orange)
![Markdown](https://img.shields.io/badge/Markdown-0.9%25-lightgrey)

**Language Breakdown:**
- **TypeScript**: 65.2% - Main application logic, components, and type definitions
- **CSS**: 18.7% - Styling, themes, and responsive design
- **JavaScript**: 12.4% - Configuration files and build scripts
- **JSON**: 2.8% - Package configuration and metadata
- **Markdown**: 0.9% - Documentation and README files

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎨 Modern, minimal UI design
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 🎯 SEO optimized

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd prateek-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

To create an optimized production build:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

To start the production server:

\`\`\`bash
npm start
# or
yarn start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Main page component
├── components/            # Reusable components
│   ├── about.tsx         # About section
│   ├── achievements.tsx  # Achievements section
│   ├── contact.tsx       # Contact section
│   ├── hero.tsx          # Hero section
│   ├── navigation.tsx    # Navigation bar
│   ├── projects.tsx      # Projects showcase
│   ├── resume.tsx        # Resume section
│   ├── skills.tsx        # Skills section
│   └── theme-provider.tsx # Theme context provider
├── public/               # Static assets
└── README.md            # This file
\`\`\`

## Customization

### Updating Personal Information

1. **Hero Section**: Edit `components/hero.tsx` to update name, title, and tagline
2. **About Section**: Modify `components/about.tsx` for personal introduction
3. **Skills**: Update skill categories in `components/skills.tsx`
4. **Projects**: Add/modify projects in `components/projects.tsx`
5. **Achievements**: Update accomplishments in `components/achievements.tsx`
6. **Resume**: Modify resume section in `components/resume.tsx`
7. **Contact**: Update contact information in `components/contact.tsx`

### Changing Colors and Theme

The color scheme is defined in `app/globals.css` using CSS custom properties. Modify the color variables to match your preferred theme.

### Adding New Sections

Create new components in the `components/` directory and import them in `app/page.tsx`.

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes

## Deployment

This portfolio can be easily deployed on:

- **Vercel** (recommended): Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Deploy directly from your Git repository
- **GitHub Pages**: Use GitHub Actions for static deployment

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to reach out:

- **Email**: prateek.lingwal@example.com
- **LinkedIn**: [linkedin.com/in/prateeklingwal](https://linkedin.com/in/prateeklingwal)
- **GitHub**: [github.com/prateeklingwal](https://github.com/prateeklingwal)
