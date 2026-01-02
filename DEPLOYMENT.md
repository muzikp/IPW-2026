# Deployment Guide

## GitHub Pages Setup

### 1. Repository Configuration

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**

### 2. Base Path Configuration (if needed)

If deploying to a subdirectory (e.g., `https://username.github.io/ipw-web/`):

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add:
   - Name: `BASE_PATH`
   - Value: `/ipw-web` (replace with your actual path)

If deploying to root domain (e.g., `https://username.github.io/`), no BASE_PATH needed.

### 3. Deploy

Push to the `main` branch:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The GitHub Action will automatically build and deploy your site.

### 4. Monitor Deployment

1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Once complete, your site will be live at:
   - Root: `https://username.github.io/`
   - Subdirectory: `https://username.github.io/ipw-web/`

## Local Preview

Before deploying, test the production build locally:

```bash
# Build
pnpm build

# Preview
pnpm preview
```

Visit `http://localhost:4173` to preview the built site.

## Adding Content

### Partner Download Files

1. Add actual DOCX/ZIP files to `resources/partners/`:
   - `IPW_Project_Description_Template_blank.docx`
   - `IPW_Memorandum_of_Cooperation_Template_blank.docx`
   - `IPW_Donation_Agreement_Template_blank.docx`
   - `IPW_partner_downloads_templates.zip`

2. Files are automatically copied to `static/downloads/partners/` during build

### Update Content

Edit the page files in `src/routes/`:
- `+page.svelte` - Home page
- `students/+page.svelte` - Students page
- `companies/+page.svelte` - Companies page
- `universities/+page.svelte` - Universities page
- `partners/+page.svelte` - Partner guide
- `projects/+page.svelte` - Projects hub
- `archive/+page.svelte` - Cohorts archive
- `contact/+page.svelte` - Contact page

Replace placeholder text (e.g., `[date]`, `[University 1]`) with actual content.

## Troubleshooting

### Build Fails

- Check that all placeholder files exist in `resources/partners/`
- Run `pnpm sync:downloads` manually to test the sync script
- Check for TypeScript errors: `pnpm check`

### 404 Errors on GitHub Pages

- Ensure fallback is configured in `svelte.config.js` (already done)
- Check that BASE_PATH matches your repository setup
- Wait a few minutes after deployment for DNS propagation

### Styling Issues

- Clear browser cache
- Check that Tailwind classes are properly scoped
- Run development server to see detailed errors
