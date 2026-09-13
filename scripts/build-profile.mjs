/**
 * Regenerates the profile's skills panel from my CV.
 *
 * The CV site publishes itself as JSON at /cv/cv.json. This fetches that,
 * draws the skills as SVG in both themes, and rewrites the block between the
 * SKILLS markers in README.md. A scheduled workflow runs it, so editing one
 * data file in the `cv` repository updates my CV site and this profile.
 *
 *   node scripts/build-profile.mjs [--source <url>]
 */
import { writeFileSync, readFileSync } from 'node:fs'
import { BRAND, fallback } from './brand-colours.mjs'

const SOURCE =
  process.argv.includes('--source')
    ? process.argv[process.argv.indexOf('--source') + 1]
    : 'https://sayamdev.github.io/cv/cv.json'

const THEMES = {
  light: { bg: '#faf9f7', panel: '#ffffff', ink: '#14161a', ink2: '#3a3f47', ink3: '#5c626c', rule: '#e4e0d8', accent: '#a8460c' },
  dark: { bg: '#0e0f12', panel: '#16181c', ink: '#f2f0ec', ink2: '#c9c6c0', ink3: '#9aa0a8', rule: '#262a30', accent: '#f0a06a' },
}

const WIDTH = 1280
const PAD = 40
const CHIP_H = 30
const CHIP_GAP = 8
const ROW_GAP = 8
const GROUP_GAP = 30
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"

/** Approximate advance width for the chip label at 13px. */
const textWidth = (text) => text.length * 7.15 + 1

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Lays chips out into rows that fit the available width. */
function layout(items, maxWidth) {
  const rows = [[]]
  let used = 0
  for (const item of items) {
    const width = Math.round(textWidth(item) + 34)
    if (used + width > maxWidth && rows.at(-1).length > 0) {
      rows.push([])
      used = 0
    }
    rows.at(-1).push({ label: item, width })
    used += width + CHIP_GAP
  }
  return rows
}

function render(groups, mode) {
  const t = THEMES[mode]
  const inner = WIDTH - PAD * 2
  const parts = []
  let y = PAD

  for (const group of groups) {
    parts.push(
      `<text x="${PAD}" y="${y + 12}" font-family="${SANS}" font-size="11.5" letter-spacing="2.2" font-weight="700" fill="${t.accent}">${escape(group.label.toUpperCase())}</text>`,
    )
    y += 28

    for (const row of layout(group.items, inner)) {
      let x = PAD
      for (const chip of row) {
        const swatch = BRAND[chip.label] ?? fallback(mode)
        parts.push(
          `<g><rect x="${x}" y="${y}" width="${chip.width}" height="${CHIP_H}" rx="7" fill="${t.panel}" stroke="${t.rule}"/>` +
            `<circle cx="${x + 15}" cy="${y + CHIP_H / 2}" r="4" fill="${swatch}"/>` +
            `<text x="${x + 26}" y="${y + 19.5}" font-family="${SANS}" font-size="13" fill="${t.ink2}">${escape(chip.label)}</text></g>`,
        )
        x += chip.width + CHIP_GAP
      }
      y += CHIP_H + ROW_GAP
    }
    y += GROUP_GAP - ROW_GAP
  }

  const height = y - GROUP_GAP + PAD
  const label = groups.map((g) => `${g.label}: ${g.items.join(', ')}`).join('. ')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${height}" viewBox="0 0 ${WIDTH} ${height}" role="img" aria-label="${escape(label)}">
  <rect width="${WIDTH}" height="${height}" fill="${t.bg}"/>
  ${parts.join('\n  ')}
</svg>
`
}

/* ---------------------------------------------------------------------------
 * Contact chips
 *
 * Each is its own small SVG so it can be wrapped in a real link — one image
 * per destination, drawn locally rather than fetched from a badge service on
 * every page load.
 * ------------------------------------------------------------------------ */

const CONTACTS = [
  { slug: 'cv', label: 'Read my CV', colour: '#a8460c' },
  { slug: 'email', label: 'Email me', colour: '#0f9d9d' },
  { slug: 'linkedin', label: 'LinkedIn', colour: '#0a66c2' },
  { slug: 'github', label: 'GitHub', colour: '#8957e5' },
]

function renderContact(contact, mode) {
  const t = THEMES[mode]
  const width = Math.round(textWidth(contact.label) + 46)
  const height = 38
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escape(contact.label)}">
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="9" fill="${t.panel}" stroke="${t.rule}"/>
  <rect x="0.5" y="0.5" width="4" height="${height - 1}" rx="2" fill="${contact.colour}"/>
  <text x="${width / 2 + 2}" y="${height / 2 + 4.5}" text-anchor="middle" font-family="${SANS}" font-size="13.5" font-weight="600" fill="${t.ink}">${escape(contact.label)}</text>
</svg>
`
}

for (const mode of ['light', 'dark']) {
  for (const contact of CONTACTS) {
    writeFileSync(`assets/link-${contact.slug}-${mode}.svg`, renderContact(contact, mode))
  }
}

/* ---------------------------------------------------------------------------
 * Project tag strips
 *
 * Same chips as the skills panel, one strip per project, drawn from the same
 * CV data. Filenames are stable, so the README references them directly and
 * they redraw themselves whenever the CV's project tags change.
 * ------------------------------------------------------------------------ */

const PROJECT_SLUGS = {
  Relay: 'relay',
  Bubiqo: 'bubiqo',
  TurfXI: 'turfxi',
  SetoffIQ: 'setoffiq',
  'ATC Aptitude Drills': 'atc',
}

function renderTagStrip(tags, mode) {
  const t = THEMES[mode]
  const height = CHIP_H + 8
  const parts = []
  let x = 4
  for (const tag of tags) {
    const width = Math.round(textWidth(tag) + 34)
    const swatch = BRAND[tag] ?? fallback(mode)
    parts.push(
      `<g><rect x="${x}" y="4" width="${width}" height="${CHIP_H}" rx="7" fill="${t.panel}" stroke="${t.rule}"/>` +
        `<circle cx="${x + 15}" cy="${4 + CHIP_H / 2}" r="4" fill="${swatch}"/>` +
        `<text x="${x + 26}" y="${23.5}" font-family="${SANS}" font-size="13" fill="${t.ink2}">${escape(tag)}</text></g>`,
    )
    x += width + CHIP_GAP
  }
  const width = x + 4
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Built with ${escape(tags.join(', '))}">
  <rect width="${width}" height="${height}" fill="${t.bg}"/>
  ${parts.join('\n  ')}
</svg>
`
}


const START = '<!-- SKILLS:START -->'
const END = '<!-- SKILLS:END -->'

const response = await fetch(SOURCE)
if (!response.ok) throw new Error(`Could not fetch ${SOURCE}: ${response.status}`)
const cv = await response.json()

if (!Array.isArray(cv.skills) || cv.skills.length === 0) {
  throw new Error('CV JSON contained no skills — refusing to publish an empty panel')
}

for (const mode of ['light', 'dark']) {
  writeFileSync(`assets/skills-${mode}.svg`, render(cv.skills, mode))
}

for (const project of cv.projects ?? []) {
  const slug = PROJECT_SLUGS[project.name]
  if (!slug) continue
  for (const mode of ['light', 'dark']) {
    writeFileSync(`assets/tags-${slug}-${mode}.svg`, renderTagStrip(project.tags, mode))
  }
}

const block = [
  START,
  '',
  '<picture>',
  '  <source media="(prefers-color-scheme: dark)" srcset="assets/skills-dark.svg">',
  `  <img alt="${escape(cv.skills.map((g) => `${g.label}: ${g.items.join(', ')}`).join('. '))}" src="assets/skills-light.svg">`,
  '</picture>',
  '',
  `<sub>Generated from [my CV data](https://github.com/SayamDev/cv/blob/main/src/data/cv.ts) on ${cv.generatedAt} — I edit one file and this panel redraws itself.</sub>`,
  '',
  END,
].join('\n')

const readme = readFileSync('README.md', 'utf8')
const startIndex = readme.indexOf(START)
const endIndex = readme.indexOf(END)
if (startIndex === -1 || endIndex === -1) throw new Error('README is missing the SKILLS markers')

writeFileSync('README.md', readme.slice(0, startIndex) + block + readme.slice(endIndex + END.length))
console.log(`Rebuilt skills panel from ${SOURCE} (${cv.skills.length} groups)`)
