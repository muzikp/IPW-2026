# IPW 2026 - International Project Workshop

Modern static website for the International Project Workshop program, featuring real company challenges, partner universities, and student projects.

## 🚀 Live Site

The site will be available at: `https://ipw.muvs.cvut.cz`

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

Production URL: `https://ipw.muvs.cvut.cz`

1. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Custom domain: `ipw.muvs.cvut.cz`
   - Enable Enforce HTTPS after certificate provisioning

2. **Configure DNS**:
   - `ipw.muvs.cvut.cz CNAME muzikp.github.io`

3. **Deploy**:
   ```bash
   git add .
   git commit -m "Prepare GitHub Pages custom domain deployment"
   git push origin main
   ```

4. **BASE_PATH**:
   - Do not set `BASE_PATH` for the custom domain deployment.
   - The workflow intentionally builds with `BASE_PATH: ""` because the site is served from `/`.

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

### Content Configuration (Annual Cycle Management)

The `content-config.json` file in the root directory controls what content is visible throughout the IPW annual cycle. This allows you to easily switch between different phases of the program without editing individual components.

#### Configuration Structure

```json
{
  "currentPhase": "program-running",
  "academicYear": "2025-2026",
  "phases": {
    "recruitment": { "active": false },
    "application": { "active": false },
    "program-running": { "active": true },
    "final-presentations": { "active": false },
    "archive": { "active": false }
  },
  "visibility": {
    "homepage": { ... },
    "pages": { ... },
    "callToActions": { ... },
    "banners": { ... }
  }
}
```

#### IPW Annual Cycle Phases

1. **Recruitment** (September-October)
   - Set `currentPhase: "recruitment"`
   - Enable `heroRecruitmentCTA`, `recruitmentFocused`
   - Show student application CTAs prominently

2. **Application** (October-November)
   - Set `currentPhase: "application"`
   - Enable `applicationDeadlineBanner`, `showDeadlineCountdown`
   - Show urgency messages for application deadline

3. **Program Running** (December-April) - *Current*
   - Set `currentPhase: "program-running"`
   - Enable `currentProjectsShowcase`, `highlightActiveProjects`
   - Show company partnership opportunities

4. **Final Presentations** (May)
   - Set `currentPhase: "final-presentations"`
   - Enable final presentations banner
   - Highlight upcoming evaluation events

5. **Archive** (June-August)
   - Set `currentPhase: "archive"`
   - Prepare for next year, showcase past results
   - Update historical cohort data

#### Key Visibility Controls

**Homepage Elements:**
- `heroRecruitmentCTA`: Show "Apply Now" CTA in hero
- `heroGeneralInfo`: Show general program information
- `applicationDeadlineBanner`: Urgent application deadline banner
- `currentProjectsShowcase`: Display active projects
- `partnerCompaniesSection`: Show partner company logos

**Pages:**
- `apply.showForm`: Enable/disable application form
- `apply.showDeadlineCountdown`: Display countdown to deadline
- `projects.highlightActiveProjects`: Highlight current year projects
- `companies.acceptingNewProjects`: Show project proposal form

**Call-to-Actions:**
- `studentApplication`: Student recruitment CTAs
- `companyPartnership`: Company partnership CTAs
- `universityPartnership`: University partnership CTAs

**Banners:**
- Configure temporary announcements with urgency levels
- Control visibility of phase-specific messages

#### Usage

To update for a new phase:

1. Open `content-config.json`
2. Change `currentPhase` to the appropriate phase
3. Update `academicYear` if needed
4. Toggle visibility flags for the current phase
5. Commit and push - changes apply immediately

Example for recruitment period:
```json
{
  "currentPhase": "recruitment",
  "visibility": {
    "homepage": {
      "heroRecruitmentCTA": true,
      "applicationDeadlineBanner": false
    },
    "pages": {
      "apply": {
        "showForm": true,
        "showDeadlineCountdown": false
      }
    }
  }
}
```

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

Confirm the latest GitHub Pages workflow completed successfully and that `404.html` exists in the deployed artifact.

### Images not loading

Confirm the workflow is building with `BASE_PATH: ""`; a `/IPW-2026` base path is only for `github.io` subpath deployments, not for `ipw.muvs.cvut.cz`.

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
