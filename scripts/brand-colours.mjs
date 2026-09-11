/**
 * Brand colours, used only as a small swatch on each chip.
 *
 * Full brand-coloured badges are unreadable in bulk — a rainbow with no
 * hierarchy. A swatch keeps a technology recognisable at a glance while the
 * type stays in one palette.
 */
export const BRAND = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  React: '#61dafb',
  'React Native': '#61dafb',
  'Node.js': '#5fa04e',
  'Express.js': '#444444',
  HTML: '#e34f26',
  'CSS / SCSS': '#cc6699',
  MongoDB: '#47a248',
  SQL: '#e38c00',
  PostgreSQL: '#4169e1',
  Supabase: '#3ecf8e',
  'Power BI': '#f2c811',
  GA4: '#e37400',
  Git: '#f05033',
  Jenkins: '#d24939',
  'CI/CD': '#4a90d9',
  'Azure DevOps': '#0078d7',
  Agile: '#7c5cff',
  Scrum: '#7c5cff',
  Claude: '#d97757',
  'GitHub Copilot': '#8957e5',
  'Amazon Q': '#ff9900',
  'LLM workflows': '#a8460c',
  'Prompt engineering': '#a8460c',
  n8n: '#ea4b71',
  'REST APIs': '#0f9d9d',
  Python: '#3776ab',
  Java: '#ea2d2e',
  PHP: '#777bb4',
  'GitHub Actions': '#2088ff',
  PWA: '#5a0fc8',
}

/** Everything without a brand colour falls back to the page accent. */
export const fallback = (mode) => (mode === 'dark' ? '#f0a06a' : '#a8460c')
