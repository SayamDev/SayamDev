<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
  <img alt="Sayam Ajmal — front-end and full-stack developer building AI-assisted products. Manchester, UK. Four years commercial, 800,000+ customers served." src="assets/banner-light.svg">
</picture>

Four years delivering digital products in regulated environments — Tata
Consultancy Services and Plusnet, on products serving 800,000+ customers — and
a habit of building things end to end on my own time.

I like the unglamorous parts: what happens when the signal drops, what happens
when two people press the same button, and what happens when someone pulls your
app apart to see what's inside.

<p>
  <a href="https://sayamdev.github.io/cv/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/link-cv-dark.svg"><img alt="Read my CV" src="assets/link-cv-light.svg"></picture></a>
  <a href="mailto:asfcit15sayamajmal@gmail.com"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/link-email-dark.svg"><img alt="Email me" src="assets/link-email-light.svg"></picture></a>
  <a href="https://linkedin.com/in/sayam-ajmal"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/link-linkedin-dark.svg"><img alt="LinkedIn" src="assets/link-linkedin-light.svg"></picture></a>
  <a href="https://github.com/SayamDev?tab=repositories"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/link-github-dark.svg"><img alt="GitHub repositories" src="assets/link-github-light.svg"></picture></a>
</p>

---

## Selected work

<table>
<tr><td width="46%" valign="top">

<a href="https://sayamdev.github.io/relay/"><img alt="Relay: an enquiry classified as a high-priority sales enquiry, with extracted fields and a drafted reply awaiting approval" src="assets/projects/relay.png"></a>

</td><td valign="top">

### Relay — AI for business operations

Enquiries and complaints arrive; Relay reads them, decides what they are and how
urgent, extracts the commercial detail, opens the follow-up task and drafts the
reply — then stops and waits for a person. Every decision lands in an audit trail.

Runs on a deterministic rules engine, so the public demo costs nothing to host.
The same interface drives a local model through Ollama, and the same workflows
execute in n8n.

**[▶ Try the demo](https://sayamdev.github.io/relay/)** · **[Source](https://github.com/SayamDev/relay)**

<picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags-relay-dark.svg"><img alt="Built with React, TypeScript, an AI provider abstraction, n8n and Ollama" src="assets/tags-relay-light.svg"></picture>

</td></tr>
</table>

> **The bit I'd point at in an interview.** I ran a real model against it and
> caught it rewriting *"revenue fell, driven by lead volume"* into *"driven by a
> decrease in conversion rate, as the conversion rate increased"* — a claim that
> contradicted the evidence table rendered directly beneath it. So I took the
> model out of that path entirely, put validation on the rest, and wrote down
> why. Knowing when **not** to use the model is most of the work.

<br>

<table>
<tr><td width="46%" valign="top">

<a href="https://sayamdev.github.io/turfxi-demo/"><img alt="TurfXI: the next match screen for Sunday Legends FC, with availability, countdown and squad" src="assets/projects/turfxi.png"></a>

</td><td valign="top">

### TurfXI — running a Sunday-league team

Fixtures, live match events, player ratings, subs collection. Offline-first, so
it works on a pitch with no signal. React Native on iOS and Android, Postgres on
Supabase.

No sign-up — the demo loads a club with a full season already played.

**[▶ Try the demo](https://sayamdev.github.io/turfxi-demo/)** · **[Case study](https://github.com/SayamDev/turfxi-demo)**

<picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags-turfxi-dark.svg"><img alt="Built with React Native, Expo, Supabase, PostgreSQL and row-level security" src="assets/tags-turfxi-light.svg"></picture>

</td></tr>
</table>

> **What I found while building it.** A hole that let any club member make
> themselves an admin of their club. I fixed it in the database policy, where a
> modified app can't reach it, then wrote a test that signs in as two real users
> and proves it's closed. That test found a second bug: it had been reading its
> config from the wrong directory since the day it was written, so it had never
> actually run.

<br>

<table>
<tr><td width="46%" valign="top">

<a href="https://github.com/SayamDev/bubiqo"><img alt="Bubiqo: the side panel beside a job advert, showing the pay, the closing date and the conditions the advert sets" src="assets/projects/bubiqo.png"></a>

</td><td valign="top">

### Bubiqo — what the job advert actually says

A browser extension that reads the page in front of you. On a job advert it
finds the pay, the closing date, and the conditions buried three-quarters of the
way down, quoting the advert for every one of them.

Nothing leaves the machine. No host permissions at install, no content scripts,
one network call in the whole codebase, and no model anywhere near the reading —
which is what lets 477 tests hold it in place.

**[Source](https://github.com/SayamDev/bubiqo)** · **[How it reads a page](https://github.com/SayamDev/bubiqo/blob/main/docs/adr/0002-deterministic-core.md)**

<picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags-bubiqo-dark.svg"><img alt="Built with TypeScript, Chrome MV3 and React, privacy-first, tested with Vitest" src="assets/tags-bubiqo-light.svg"></picture>

</td></tr>
</table>

> **The line I had to delete.** It used to say *"Ruled out"* when an advert asked
> for a DBS check. That is the product claiming to know something about the
> reader from evidence that is only about the advert — you might hold one, or
> get one in a fortnight. It was ruling people out of jobs nobody had ruled them
> out of. Conditions are now stated as what the advert asks, with a button that
> says *I have this*, and the answer is remembered.

<br>

<table>
<tr><td width="46%" valign="top">

<a href="https://sayamdev.github.io/setoffiq/"><img alt="SetoffIQ home page: the wordmark, with the o drawn as a clock dial, above the line Know when to set off. Know when to wait., and a choice between planning a pickup or a drop-off" src="assets/projects/setoffiq.png"></a>

</td><td valign="top">

### SetoffIQ — when to leave for the airport

Picking someone up or dropping them off at Manchester: it works back from the
flight — landing, border, bags, the walk out — to the time you should leave
home. Live aircraft positions refine the time from your booking; when nothing
live is available, it says so instead of guessing.

Costs nothing to run or to use. A scheduled GitHub Action publishes the data a
browser can't fetch directly, and no credential ever reaches the page.

**[▶ Try it](https://sayamdev.github.io/setoffiq/)** · **[Source](https://github.com/SayamDev/setoffiq)**

<picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags-setoffiq-dark.svg"><img alt="Built with React, TypeScript, GitHub Actions and open data, as a PWA" src="assets/tags-setoffiq-light.svg"></picture>

</td></tr>
</table>

> **What real data taught me.** The first live run of the road-closures feed
> returned 24 disruptions near the airport — every one a routine lane closure
> for maintenance. Letting those widen the estimate would have put a permanent
> 6–12% penalty on every recommendation, and a warning that is always on is not
> a warning. Now only closures actually in force move the number; the rest are
> reported, not counted.

<br>

<table>
<tr><td width="46%" valign="top">

<a href="https://sayamdev.github.io/atc-aptitude-drills/"><img alt="ATC Aptitude Drills: the SCALES module list, each drill showing its code, duration and what it tests" src="assets/projects/atc.png"></a>

</td><td valign="top">

### ATC Aptitude Drills

Free, open practice for the aptitude tests used to select trainee air traffic
controllers. Every drill explains the format before you start, teaches a method,
and reports where you're losing marks.

Nothing is uploaded — it all runs in the browser.

**[▶ Try it](https://sayamdev.github.io/atc-aptitude-drills/)** · **[Source](https://github.com/SayamDev/atc-aptitude-drills)**

<picture><source media="(prefers-color-scheme: dark)" srcset="assets/tags-atc-dark.svg"><img alt="Built with TypeScript and React, open source" src="assets/tags-atc-light.svg"></picture>

</td></tr>
</table>

---

## Skills

<!-- SKILLS:START -->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/skills-dark.svg">
  <img alt="Data &amp; analytics: SQL, Power BI, Relational data modelling, GA4, Data layers, Data auditing, Reporting &amp; visualisation, Digital measurement. Development: JavaScript, TypeScript, React, React Native, HTML, CSS / SCSS, Node.js, Express.js, MongoDB. Solutions &amp; automation: Workflow automation, REST APIs, System &amp; tool integration, Process improvement, Requirements analysis, Proof of concept, CRM, n8n, Supabase. AI &amp; automation: Claude, GitHub Copilot, Amazon Q, LLM workflows, Prompt engineering. Quality &amp; compliance: Functional &amp; UI testing, Defect investigation, Audit trails, Structured testing processes, ISO 27001 awareness. Delivery: Agile, Scrum, User stories, Stakeholder communication, Git, Jenkins, CI/CD, Azure DevOps. Research methods: Usability testing, Heuristic evaluation, Journey mapping, Heatmaps, Card sorting, SUS surveys, A/B testing, Competitor analysis, UX audits, User flows, Personas" src="assets/skills-light.svg">
</picture>

<sub>Generated from [my CV data](https://github.com/SayamDev/cv/blob/main/src/data/cv.ts) on 2026-09-13 — I edit one file and this panel redraws itself.</sub>

<!-- SKILLS:END -->

<details>
<summary>Previously worked with</summary>

<br>

`.NET` · `C#` · `VB.NET` · `Angular` · `WordPress` · `Java` · `PHP` · `MongoDB`

Still readable, still useful in a code review — just not what I reach for now.

</details>

---

<sub>**How this page maintains itself:** my CV lives in one typed file in the
[`cv`](https://github.com/SayamDev/cv) repository. That repository publishes
itself as JSON, and a scheduled workflow here fetches it and redraws the skills
panel above in both light and dark. I update one file; the CV site and this
profile follow. No badge service is involved — every image on this page is
generated in the repository and served from it.</sub>

---

Open to work in technical delivery, development, data or digital transformation.
The quickest way to see how I build is the Relay demo above — it covers the
architecture, the guardrails and the reasoning behind both.
