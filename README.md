# IPW 2026 - International Project Workshop

Modern static website for the International Project Workshop program, featuring real company challenges, partner universities, and student projects.

## 🚀 Live Site

The site will be available at: `https://[your-username].github.io/IPW-2026/`

## ✨ Features

- **Modern Design**: Glassmorphism effects, gradients, and smooth animations
- **Responsive**: Fully responsive design optimized for all devices
- **Static Site**: Pre-rendered for optimal performance
- **Real Content**: 
  - 6 company projects from 2025 (Cofidis, Volvo, Mattoni, Novartis, Siemens Energy, TotalEnergies)
  - 5 partner universities with logos
  - Historical cohort data (2021/2022, 2022/2023)
  - Team information and academic tutors

## 🛠️ Tech Stack

- **SvelteKit** 5.46.1 with TypeScript
- **Tailwind CSS** 4.1.18 with @tailwindcss/postcss
- **@sveltejs/adapter-static** for static site generation
- **GitHub Actions** → **GitHub Pages** for deployment

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── routes/              # Pages
│   ├── +page.svelte    # Home page
│   ├── students/       # Students page
│   ├── companies/      # Companies page
│   ├── universities/   # Universities page
│   ├── partners/       # Partner-only page
│   ├── projects/       # Projects hub
│   ├── archive/        # Cohorts archive
│   └── contact/        # Contact page
├── lib/
│   └── components/     # Reusable components
├── app.css            # Global styles
└── app.html           # HTML template

resources/              # Raw assets
├── partners/          # Partner documents (synced to static/downloads/)
├── logos/
│   └── universities/  # University logos
├── project examples/  # Project descriptions
└── text/             # Markdown content

static/                # Public files
├── images/
│   └── universities/  # University logos (copied from resources)
└── downloads/         # Generated from resources/partners/
```

## 🌐 Deployment to GitHub Pages

### Initial Setup

1. **Create GitHub repository** named `IPW-2026`

2. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/[your-username]/IPW-2026.git
   git branch -M main
   git add .
   git commit -m "Initial commit: IPW 2026 website"
   git push -u origin main
   ```

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The site will automatically deploy on push to main branch

4. **Set BASE_PATH (if needed)**:
   - If deploying to `username.github.io/IPW-2026/`:
   - Go to Settings → Secrets and variables → Actions
   - Add repository secret: `BASE_PATH` = `/IPW-2026`

### Automatic Deployment

Every push to `main` branch triggers automatic deployment via GitHub Actions.

## 📁 Managing Resources

### University Logos

Place logos in `resources/logos/universities/`, they will be copied to `static/images/universities/`.

### Partner Downloads

1. Place files in `resources/partners/`
2. Run `pnpm sync:downloads` to copy them to `static/downloads/partners/`
3. Files are automatically synced during `pnpm build`

The following templates should be in `resources/partners/`:
- `IPW_Project_Description_Template_blank.docx`
- `IPW_Memorandum_of_Cooperation_Template_blank.docx`
- `IPW_Donation_Agreement_Template_blank.docx`
- `IPW_partner_downloads_templates.zip`

## 📝 Content Updates

### Adding New Projects

Edit `src/routes/projects/+page.svelte` and add to `projects2025` array.

### Adding Universities

Edit `src/routes/universities/+page.svelte` and `src/routes/+page.svelte`, add to `universities` array.

### Updating Team

Edit `src/routes/about/+page.svelte`, modify `organizers` and `currentTutors` arrays.

### Historical Cohorts

Edit `src/routes/archive/+page.svelte`, add to `cohorts` array.

## 📄 Pages

### Public Pages
- **/** - Homepage with modern hero, features, partner universities
- **/about** - Team & academic tutors with photo placeholders
- **/students** - Information for prospective students
- **/companies** - Information for company partners
- **/universities** - Partner university profiles with logos
- **/partners** - Resources & downloads for partners
- **/projects** - Showcase of company projects with filters
- **/archive** - Historical cohort data
- **/contact** - Contact information

## 🎨 Design System

- **Colors**: Primary (blue) and Accent (purple) with full shade ranges
- **Animations**: fadeIn, fadeInUp, slideInLeft/Right, float, gradient, glow
- **Components**: Reusable Button, Card, Section, Container, Tag, Callout
- **Effects**: Glassmorphism with backdrop-blur, gradient text, hover animations

## 🐛 Troubleshooting

### 404 on subpages after deployment

Make sure `BASE_PATH` secret is set correctly in GitHub repository settings.

### Images not loading

Check that paths start with `/` and don't include the base path (it's added automatically).

### Build fails on GitHub

Check the Actions tab for detailed logs.

## 📧 Contact

For questions about the IPW program: ipw@cvut.cz
- `/` - Home
- `/students` - Student information
- `/companies` - Company partnerships
- `/universities` - University partners
- `/projects` - Projects showcase (scaffold)
- `/archive` - Past cohorts (scaffold)
- `/contact` - Contact information

### Partner-Only
- `/partners` - Partner guide and downloads (linked from Companies page)

## License

© CTU / MIAS – International Project Workshop
