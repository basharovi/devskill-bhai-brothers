# Dev Skill ভাই ব্রাদার্স - Community Website

A modern, responsive community website for Dev Skill ভাই ব্রাদার্স, a vibrant .NET developer community built on brotherhood and shared growth.

## 🚀 Features

- **Responsive Design**: Built with mobile-first approach
- **Modern UI**: Clean and professional interface with animations
- **Performance Optimized**: Fast load times and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with Typography and Forms plugins
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Sections

- Hero Section with bold headline and Call-to-Action buttons
- About Us with timeline of key moments
- Gallery with lightbox view
- Events listing for past and upcoming gatherings
- Contact Form with social media links
- Footer with quick links and resources

## 🏗️ Project Structure

```
devskill-brothers/
├─ src/
│  ├─ app/
│  │  ├─ page.tsx               # Main home page
│  │  ├─ layout.tsx             # Root layout
│  │  └─ globals.css            # Global styles
│  ├─ components/
│  │  ├─ ui/                    # Reusable UI components
│  │  │  ├─ Navbar.tsx          # Navigation bar
│  │  │  └─ Footer.tsx          # Footer component
│  │  └─ sections/              # Page sections
│  │     ├─ HeroSection.tsx     # Hero section
│  │     ├─ AboutSection.tsx    # About section
│  │     ├─ GallerySection.tsx  # Gallery section
│  │     ├─ EventsSection.tsx   # Events section
│  │     └─ ContactSection.tsx  # Contact section
├─ public/
│  └─ images/                   # Image assets
│     └─ gallery/               # Gallery images
├─ tailwind.config.ts           # Tailwind configuration
└─ package.json                 # Dependencies and scripts
```

## 🚧 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Notes for Development

- **Image Placeholders**: You'll need to add real images to the `/public/images/` directory
- **Content**: Update the content with real community information
- **Form Submission**: Connect the contact form to a real backend service

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📄 License

MIT
