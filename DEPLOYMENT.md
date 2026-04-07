# Deployment Guide

## Target

Production URL: `https://ipw.muvs.cvut.cz`

The site is deployed from GitHub Actions to GitHub Pages. Because it uses a custom domain, it is served from the domain root and does not need a `BASE_PATH` secret.

## GitHub Repository Setup

1. Open the repository on GitHub: `muzikp/IPW-2026`
2. Go to Settings -> Pages
3. Under Build and deployment, set Source to GitHub Actions
4. Under Custom domain, use `ipw.muvs.cvut.cz`
5. Enable Enforce HTTPS after GitHub finishes issuing the certificate

## DNS Setup

Ask the DNS administrator for `muvs.cvut.cz` to point:

```text
ipw.muvs.cvut.cz CNAME muzikp.github.io
```

DNS and HTTPS certificate provisioning can take several minutes, sometimes longer depending on DNS propagation.

## Important BASE_PATH Note

Do not set `BASE_PATH` for this deployment.

The GitHub Actions workflow now forces:

```yaml
BASE_PATH: ""
```

This is intentional. A custom domain such as `https://ipw.muvs.cvut.cz` is served from `/`, while `BASE_PATH=/IPW-2026` is only for repository subpath deployments such as `https://muzikp.github.io/IPW-2026/`.

If a repository secret named `BASE_PATH` exists from an older setup, it is ignored by the workflow.

## Deploy

Push to the `main` branch:

```bash
git add .
git commit -m "Prepare GitHub Pages custom domain deployment"
git push origin main
```

The GitHub Action will build and deploy the static site automatically.

## Local Preview

```bash
pnpm build
pnpm preview
```

Visit `http://localhost:4173` to preview the built site locally.

## What Makes Custom Domain Work

- `static/CNAME` contains `ipw.muvs.cvut.cz` and is copied into the build output.
- `static/.nojekyll` disables Jekyll processing so SvelteKit assets under `_app/` are served correctly.
- `.github/workflows/deploy.yml` uploads the `build/` directory via `actions/upload-pages-artifact` and deploys it with `actions/deploy-pages`.

## Troubleshooting

### Site still opens on `github.io`

Check Settings -> Pages and confirm the custom domain is set to `ipw.muvs.cvut.cz`. Also confirm the DNS CNAME points to `muzikp.github.io`.

### CSS or JS does not load

Confirm the Actions build used `BASE_PATH: ""`. A leftover `/IPW-2026` base path will break assets on the custom domain.

### HTTPS is not available yet

Wait for GitHub Pages to finish certificate provisioning, then enable Enforce HTTPS in Settings -> Pages.

### Subpages return 404

The SvelteKit static adapter creates `404.html` as a fallback. Confirm the latest workflow completed successfully and the deployed artifact contains `404.html`.

### Download files are missing

Run `pnpm sync:downloads` locally or check the build log. Partner files from `resources/partners/` are copied to `static/downloads/partners/` during `pnpm build`.
