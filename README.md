# Rohan Saindane - Full-Stack Engineer & Open Source Contributor

Welcome to my portfolio website! This is a fast, modern, and fully responsive portfolio built with **SvelteKit**, showcasing my professional experience, projects, and technical skills.

## 🚀 Live Demo

View the live portfolio: [https://rohan-saindane.vercel.app](https://rohan-saindane.vercel.app)

## 👤 About Me

I'm a full-stack engineer passionate about building scalable web applications and contributing to open-source projects. With expertise across the entire stack, I specialize in:

- **Frontend:** React, Next.js, Svelte, Tailwind CSS
- **Backend:** Node.js, FastAPI, PostgreSQL, Supabase
- **DevOps:** CI/CD, GitHub Actions, Vercel
- **Languages:** JavaScript, TypeScript, Python, Java

## 📂 Portfolio Contents

### Experience
- **Head of Technology** at JoinTheBridge - Leading technical infrastructure for nonprofit
- **Open Source Developer – Buck2** at Meta - Contributing to Meta's build system
- **Software Engineering Intern** at Stealth AI Startup - Full-stack AI product development
- **CS Content Developer** at FiveHive - Educational content for AP Computer Science
- **Outreach Director & Secretary** at CodeForImpact - Community leadership
- **Technical Operations Coordinator** at MCR SGA - Student government digital infrastructure

### Projects
- **UMD Research: Poker AI & Game Theory** - Game theory and reinforcement learning
- **BRIDGE Nonprofit Platform** - Scalable web platform serving 500+ students
- **Buck2 Diagnostic Tool Enhancement** - Meta's production-grade build tool

### Skills
22+ technical skills across programming languages, frameworks, databases, and dev tools

### Education
**Clarksburg High School** - High School Diploma  
Honors Roll | DECA Active Member | MCR-SGA Gender Equity Task Force

## ⚙️ Tech Stack

- **Framework:** SvelteKit 1.25.0
- **Language:** TypeScript 4.9.5
- **Styling:** Tailwind CSS + UnoCSS
- **Build Tool:** Vite 4.5.14
- **Package Manager:** pnpm 11.0.8
- **Deployment:** Vercel

## 🏃 Getting Started

### Requirements
- Node.js 16+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Ronisnotasianfr/RS-Portfilo.git
cd RS-Portfilo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The portfolio will be available at `http://localhost:5173`

## 📝 Available Commands

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build locally
pnpm lint      # Run ESLint
pnpm format    # Format code with Prettier
```

## 🎨 Customization

### Editing Content

All portfolio content is managed in `src/lib/data/`:

- **`home.ts`** - Home page hero section and featured skills
- **`experience.ts`** - Professional experience entries (6 positions)
- **`projects.ts`** - Portfolio projects (3 major projects)
- **`education.ts`** - Educational background
- **`skills.ts`** - Technical skills catalog (22+ skills)
- **`assets.ts`** - Logo and asset references

### Adding Logos

1. Place logo files in `static/logos/`
2. Add asset reference in `src/lib/data/assets.ts`
3. Reference in experience, projects, or skills data

### Styling

- **Global styles:** `src/lib/index.scss`
- **Components:** Individual `.svelte` files in `src/lib/components/`
- **Utilities:** Tailwind CSS and UnoCSS

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

### Build for Production

```bash
pnpm build
```

Production files are generated in `.svelte-kit/build`

## ⚡ Performance

- **Dev Server Startup:** ~1.8 seconds
- **Lighthouse Score:** 95+ (Performance)
- **Bundle Size:** Optimized with tree-shaking
- **Hot Module Reloading:** Instant updates during development

## 📂 Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── data/          # Portfolio content (experience, projects, skills, etc.)
│   ├── stores/        # Svelte stores (theme management)
│   └── utils/         # Helper functions
├── routes/            # SvelteKit page routes (pages, experience, projects, etc.)
├── app.html           # Main HTML template
└── app.d.ts          # TypeScript definitions
static/
└── logos/             # Logo assets
```

## 🔗 Links

- **GitHub:** [github.com/Ronisnotasianfr](https://github.com/Ronisnotasianfr)
- **LinkedIn:** [linkedin.com/in/rohan-saindane](https://linkedin.com/in/rohan-saindane)
- **Email:** ronsaindane5917@gmail.com

## 📄 License

This portfolio is built on a modified version of the [Slick Portfolio Svelte](https://github.com/RiadhAdrani/slick-portfolio-svelte) template.

---

**Last Updated:** June 2026
