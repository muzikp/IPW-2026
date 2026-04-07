# Quick Deployment Guide

Production URL: `https://ipw.muvs.cvut.cz`

## 1. GitHub Pages

1. Open the GitHub repository: `muzikp/IPW-2026`
2. Go to Settings -> Pages
3. Set Source to GitHub Actions
4. Set Custom domain to `ipw.muvs.cvut.cz`
5. Enable Enforce HTTPS once GitHub finishes certificate provisioning

## 2. DNS

The DNS record for the custom domain should be:

```text
ipw.muvs.cvut.cz CNAME muzikp.github.io
```

This usually needs to be configured by the DNS administrator for `muvs.cvut.cz`.

## 3. Deploy

Push to `main`:

```powershell
git add .
git commit -m "Prepare GitHub Pages custom domain deployment"
git push origin main
```

The `Deploy to GitHub Pages` workflow runs automatically and publishes the `build/` artifact.

## 4. BASE_PATH

Do not add a `BASE_PATH` secret for this custom-domain deployment.

`BASE_PATH` is only needed when deploying under a repository path such as `https://muzikp.github.io/IPW-2026/`. The custom domain `https://ipw.muvs.cvut.cz` is served from `/`, so the workflow intentionally builds with an empty base path.

## Checklist

- [ ] Repository Settings -> Pages uses GitHub Actions
- [ ] Custom domain is `ipw.muvs.cvut.cz`
- [ ] DNS CNAME points to `muzikp.github.io`
- [ ] Latest workflow run completed successfully
- [ ] Enforce HTTPS is enabled after certificate provisioning
- [ ] Site opens at `https://ipw.muvs.cvut.cz`
