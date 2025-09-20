# Portfolio Template

A modern, responsive portfolio website template built with Next.js and TypeScript. This template allows you to easily create your own portfolio website to showcase your personal projects, work experience, skills, and provide an interactive way for visitors to learn more about you.

**[🌐 Template Demo](https://yourname.dev/)**

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes with system preference detection
- **Project Showcase**: Display of personal projects with descriptions and tech stacks
- **Experience Timeline**: Professional work history and experience
- **About Section**: Personal introduction and skills overview
- **Gaming Profiles**: Secret section for gaming achievements (Easter egg)
- **Analytics**: Integrated Vercel Analytics for visitor tracking

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
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
│   └── images/          # Static images and favicon
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/
│   │   ├── features/   # Feature components (theme, color picker, etc.)
│   │   ├── sections/   # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/         # Reusable UI components
│   ├── data/          # Static data (projects, experience, skills)
│   └── types/         # TypeScript type definitions
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Dependencies and scripts
```

## 🎨 Customization

### Personal Information

1. **Update data files** in `src/data/`:
   - `projects.ts` - Replace placeholder projects with your actual projects and repositories
   - `experience.ts` - Replace placeholder experience with your work history and professional experience
   - `skills.ts` - Update skills to match your technical proficiencies

2. **Modify section content** in `src/components/sections/`:
   - `Hero.tsx` - Update your name, job title, location, and social media links
   - `About.tsx` - Replace placeholder text with your personal introduction and bio
   - `Projects.tsx` - The project showcase will automatically use your data from `projects.ts`
   - `Experience.tsx` - The experience timeline will automatically use your data from `experience.ts`

3. **Update metadata** in `src/app/layout.tsx`:
   - Change title, description, and Open Graph data
   - Update social media handles and website URL

4. **Update images**:
   - Replace favicon in `public/favicon.png`
   - Add profile pictures or project screenshots as needed

5. **Customize styling**:
   - Modify colors in `tailwind.config.js`
   - Update global styles in `src/app/globals.css`
   - Customize component styles using Tailwind classes

6. **Optional: Gaming Profiles** in `src/components/features/SecretGamingProfiles.tsx`:
   - Replace placeholder gaming usernames with your actual gaming profiles
   - Update the trigger keyword from "yourname" to your preferred keyword

### Theme Colors

The site includes a color picker feature that allows users to customize the theme. You can modify the default colors in the `ColorPicker` component.

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
4. Update the domain references in `src/app/layout.tsx` metadata

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
