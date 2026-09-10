### Sayam Ajmal

Full-stack developer. Mobile and web — React Native, TypeScript, Postgres.

I like the unglamorous parts: what happens when the signal drops, what happens
when two people press the same button, and what happens when someone pulls your
app apart to see what's inside.

---

#### TurfXI — an app for running a Sunday-league football team

Fixtures, live match events, player ratings, subs collection. Offline-first, so
it works on a pitch with no signal. React Native on iOS and Android, Postgres
on Supabase.

**[▶ Try the demo](https://sayamdev.github.io/turfxi-demo/)** · **[Case study](https://github.com/SayamDev/turfxi-demo)**

No sign-up — it loads a club with a full season already played.

While building it I found a hole that let any club member make themselves an
admin of their club. Fixed it in the database policy where a modified app can't
reach it, then wrote a test that signs in as two real users and proves it's
closed. That test found a second bug: it had been reading its config from the
wrong directory since the day it was written, so it had never actually run.

---

#### [ATC Aptitude Drills](https://github.com/SayamDev/atc-aptitude-drills)

Free, open practice for the aptitude tests used to select trainee air traffic
controllers.

---

#### Working with

`TypeScript` · `React` · `React Native / Expo` · `Node` · `PostgreSQL` ·
`Supabase` · `GitHub Actions`

---

<img src="https://github-readme-stats.vercel.app/api?username=SayamDev&show_icons=true&hide_border=true&theme=dark&hide_title=true&hide=issues" height="140" alt="">

---

Open to work. Best way to see how I build is the case study above — it covers
the architecture, the security work, and the decisions behind both.
