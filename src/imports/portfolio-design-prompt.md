Here is the full Figma design prompt:

---

**FIGMA DESIGN PROMPT — Personal Portfolio Website**

---

**Project Overview**
Single-page personal portfolio for a data researcher and builder. The design must feel editorial, precise, and tactile — like a research paper that was designed by someone who also works with their hands. Dark theme. Minimal copy. Maximum atmosphere.

---

**Design System**

*Typography*
- Display / Headlines: Playfair Display (serif) — used for name, section titles
- Labels / UI text: IBM Plex Mono (monospace) — used for roles, tags, metadata
- No other fonts

*Color Palette*
- Background: `#0e0e0e`
- Primary text: `#f0ece4` (warm off-white)
- Accent: `#c8a96e` (amber/wood tone)
- Muted text: `#6b6760`
- Card surface: `#161614`
- Border/divider: `#2a2a27`

*Spacing system*: 8px base unit. Sections breathe — generous padding (80–120px vertical).

*Corner radius*: 2px max. Sharp edges throughout.

---

**Page Layout — Single Scroll, 6 Sections**

---

**SECTION 1 — Hero**
Full viewport height (100vh).

- Left-aligned content, vertically centered
- Large display name in Playfair Display, ~96px, `#f0ece4`
- One line below in IBM Plex Mono, ~18px, muted: *"I find patterns in data. Then I build things."*
- Bottom-right corner: a faint background texture — wood grain blending into a dot grid (low opacity overlay, ~8%). Purely atmospheric, not distracting.
- No CTA button. No nav bar. Just name + line + texture.

---

**SECTION 2 — What I Do**
Three horizontally spaced cards. No borders — just spacing and a subtle card background (`#161614`).

Each card contains:
- A single large outlined icon (stroke only, amber `#c8a96e`), ~48px
- One word title in Playfair Display
- One sentence in IBM Plex Mono, muted color

Card 1 — Icon: microscope or scatter plot | Title: **Research** | Line: *"Numbers that explain human behavior"*
Card 2 — Icon: terminal or circuit | Title: **Build** | Line: *"Tools that respect privacy and cognition"*
Card 3 — Icon: chisel or hand plane | Title: **Make** | Line: *"Furniture, by hand, from scratch"*

Cards sit on a single row on desktop. Stack vertically on mobile.

---

**SECTION 3 — Career**
Section title: **"Where I've Been"** — Playfair Display, left-aligned.

A horizontal scrolling timeline (desktop) or vertical stack (mobile).

Each stop is a minimal row:
`[Org name in amber mono] → [Role in white serif] → [One-word descriptor in muted mono]`

Stops in order:
- `Afiniti → Data Scientist → NLP`
- `George Mason University → Analytics Consultant → Systems`
- `Wisconsin Center for Education Research → Statistical Analyst → Research`
- `UT System → Advanced Analytics Researcher → Strategy`

A thin horizontal amber line `#c8a96e` connects the stops like a timeline rail. No dates visible.

---

**SECTION 4 — Projects**
Section title: **"What I'm Building"** — Playfair Display, left-aligned.

Three full-width alternating layout cards (like editorial spreads). Each card is ~400px tall.

**Card 1 — SafeScribe**
- Left: dark card background with project name in large Playfair, tagline in mono below: *"Privacy-first meeting notes. Local. No cloud. No subscription."* + text link "safescribe-ai.github.io →"
- Right: abstract visual — a simple icon of a device/envelope on dark background

**Card 2 — CReD Learning**
- Flipped layout (visual left, text right)
- Tagline in mono: *"Psychometrics meets intelligent tutoring. Built for real learning."* + link "credlearning.com →"
- Visual: abstract grid or brain/node icon

**Card 3 — Woodwork**
- Full bleed Instagram photo as background (dark overlay on top)
- Centered text: **@Riveting_Stuff_** in Playfair Display + "instagram →" in mono
- Amber accent border on left edge only

---

**SECTION 5 — Footer**
Minimal. ~120px tall. Centered.

- One line in IBM Plex Mono, muted: `"Let's talk —"` followed by a linked email or LinkedIn in amber
- Bottom: copyright line in 11px muted mono

---

**Responsive Behavior**
- Desktop: 1280px max-width, centered
- Mobile: All multi-column layouts stack. Font sizes scale down ~20%. Timeline becomes vertical. Hero name drops to ~52px.

---

**Interaction Notes for Figma Prototype**
- Hover on career stops: amber underline appears on org name
- Hover on project cards: card lifts slightly (2px), border appears in amber
- Hover on footer link: amber color brightens
- Smooth scroll between sections

---

**What This Should Feel Like**
If a research paper, a woodworking blueprint, and a dark editorial magazine had a child — this is it. Quiet confidence. Nothing decorative that doesn't earn its place.

---

Want me to also build this as a working HTML/CSS file you can hand to a developer?