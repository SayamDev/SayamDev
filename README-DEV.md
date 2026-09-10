# How this profile is built

Everything on the profile page is generated in this repository. No badge
service, no external image host — GitHub serves every image from here.

| File | What it is |
| --- | --- |
| `assets/banner-*.svg` | The header, one per theme |
| `assets/skills-*.svg` | The skills panel, generated from my CV |
| `assets/link-*.svg` | The contact chips |
| `scripts/build-profile.mjs` | Draws the skills panel and contact chips |
| `scripts/brand-colours.mjs` | Swatch colour per technology |

## The skills panel maintains itself

My CV lives in [`SayamDev/cv`](https://github.com/SayamDev/cv) as a single typed
file, `src/data/cv.ts`. That repository's build publishes the same data as JSON
at <https://sayamdev.github.io/cv/cv.json>.

`.github/workflows/sync-cv.yml` runs daily, fetches that JSON, redraws
`assets/skills-*.svg`, rewrites the block between the `SKILLS` markers in
`README.md`, and commits only if something actually changed.

So: edit one file in `cv`, and both my CV site and this profile update. There is
no second copy of my skills to forget about.

Run it by hand with:

```bash
node scripts/build-profile.mjs
```

Or point it at a local CV build while working on both:

```bash
node scripts/build-profile.mjs --source http://localhost:5173/cv.json
```

## Why not shields.io

Badge services are a third-party request per badge on every page load, and the
default palette gives forty technologies equal visual weight — which is no
hierarchy at all. Drawing them here means one request per panel, a consistent
palette, real light and dark variants, and no dependency that can rate-limit,
change or disappear.
