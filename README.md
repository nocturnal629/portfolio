# Portfolio Template

A modern, responsive portfolio website template built with Next.js and TypeScript. This template allows you to easily create your own portfolio website to showcase your personal projects, work experience, certifications, and skills, and provide an interactive way for visitors to learn more about you.

**[🌐 Template Demo](https://yourname.dev/)**

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes with system preference detection
- **Accent Color Picker**: Visitors can customize the site's accent color via a `?color=RRGGBB` URL param
- **Sticky Navbar**: Slide-in navigation bar that appears once the visitor scrolls past the hero
- **Interactive Hero Title**: Canvas-based particle effect that reacts to mouse movement and clicks
- **Project Showcase**: Display of personal projects with descriptions, tech stacks, and optional preview images
- **Experience Timeline**: Professional work history, supporting either a flat list of responsibilities or multiple roles per company
- **Certifications**: Grid of certifications/badges with optional logos and links
- **About Section**: Personal introduction and skills overview
- **Analytics**: Integrated Vercel Analytics for visitor tracking

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [React Feather](https://feathericons.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Domain**: [Porkbun](https://porkbun.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Fork or clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001) to see the result.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.png      # Site favicon
│   ├── logos/            # Company/certification logos (add your own)
│   └── projects/         # Project preview images (add your own)
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout + metadata
│   │   └── page.tsx      # Home page
│   ├── components/
│   │   ├── features/     # Feature components (theme, navbar, color picker, etc.)
│   │   ├── sections/     # Page sections (Hero, Projects, Experience, Certifications, About, Footer)
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Static data (projects, experience, certifications, skills, navigation)
│   └── types/              # TypeScript type definitions
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Personal Information

1. **Update data files** in `src/data/`:
   - `projects.ts` — Replace placeholder projects with your actual projects and repositories
   - `experience.ts` — Replace placeholder experience with your work history. Each entry supports either a flat `responsibilities` list or multiple `roles` (useful for promotions at the same company)
   - `certifications.ts` — Add your certifications/badges; `logo` and `link` are optional
   - `skills.ts` — Update skills to match your technical proficiencies
   - `navigation.ts` — Update the section links shown in the hero nav and sticky navbar

2. **Modify section content** in `src/components/`:
   - `features/HeroTitle.tsx` — Change `DISPLAY_NAME` to your name
   - `features/Navbar.tsx` — Update the brand text shown in the sticky navbar
   - `sections/Hero.tsx` — Update your job title, location, and social media links
   - `sections/About.tsx` — Replace placeholder text with your personal introduction and bio
   - `sections/Footer.tsx` — Update the copyright name

3. **Update metadata** in `src/app/layout.tsx`:
   - Change title, description, and Open Graph/Twitter data
   - Update social media handles and website URL

4. **Update images**:
   - Replace the favicon in `public/favicon.png`
   - Add company/certification logos to `public/logos/` and reference them from `experience.ts`/`certifications.ts`
   - Add project preview images to `public/projects/` and reference them from `projects.ts`

5. **Customize styling**:
   - Modify colors in `tailwind.config.js`
   - Update global styles in `src/app/globals.css`
   - Customize component styles using Tailwind classes

### Theme Colors

The site includes a color picker feature that allows visitors to customize the accent color via a `?color=RRGGBB` URL param. You can modify the default colors in the `ColorPicker` component.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Available Scripts

- `yarn dev` - Start development server on port 3001
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint for code quality

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Configure your custom domain in Vercel dashboard
4. Deploy automatically on every push to main branch

### Other Platforms

This Next.js application can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Heroku

## 🌐 Domain Setup

If you want to use a custom domain:

1. Purchase a domain from [Porkbun](https://porkbun.com/), [Namecheap](https://www.namecheap.com/), or any domain registrar
2. Configure DNS settings to point to your hosting provider
3. Add the domain in your hosting platform's dashboard
4. Update the domain references in `src/app/layout.tsx`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Inspiration

This portfolio template is designed to be:
- Easy to customize and deploy
- Modern and professional looking
- Accessible and performant
- SEO-friendly

Feel free to use this as a template for your own portfolio and modify it to match your personal brand and style!

---

⭐ If you found this helpful, please give it a star!
