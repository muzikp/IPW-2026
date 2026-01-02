# Resources folder

Put raw assets here (logos, partner documents, templates).

Files intended as public downloads must be copied into `static/downloads` during build.

## Recommended structure

- `resources/partners/` → copied to `static/downloads/partners/`
- `resources/logos/` → used by the site (optional)

## How it works

Run `pnpm sync:downloads` to copy partner files to the static folder, or run `pnpm build` which automatically runs the sync script before building.
