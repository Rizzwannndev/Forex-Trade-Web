# Forex Trade Web

![Demo GIF](./public/gif.gif)  
*Website preview: [https://forex-trade-web.vercel.app/]*

> A responsive, component‑driven React starter for a modern forex‑trading
> landing page. Built with Vite, TailwindCSS, GSAP animations, and
> Framer‑Motion.

---

## 🚀 Quick overview

This repo is a “starter kit” for a forex trading platform or financial
service. It demonstrates:

- a hero section with animated headline
- feature list, pricing tiers and testimonial carousel
- sticky navbar, footer and call‑to‑action block
- scroll‑linked GSAP/ScrollSmoother effects
- TailwindCSS utility classes and responsive design
- data‑driven components using `src/assets/data.jsx`

Most layout is handled in `src/App.jsx`; sections live under
`src/sections` and reusable pieces under `src/components`.

---

## 🧱 Tech stack

- **React 18** (Vite + JSX)
- **TailwindCSS 3** for styling
- **GSAP** & **ScrollSmoother** for scroll animations
- **Framer‑Motion** for component transitions
- Vite for blazing‑fast dev experience
- ESLint / Prettier (via `npm run lint`)  
- (Optional) Deployment with any static host (Netlify, Vercel, GitHub
  Pages, etc.)

---

## 📁 Project structure

```
src/
├─ assets/          # static data, images
│  └─ data.jsx
├─ components/      # reusable UI pieces
│  ├─ Navbar.jsx
│  ├─ Footer.jsx
│  └─ …
├─ sections/        # page sections
│  ├─ HeroSec.jsx
│  ├─ FeaturesSection.jsx
│  └─ …
├─ pages/           # top‑level pages (currently only HomePage)
│  └─ HomePage.jsx
├─ App.jsx
├─ main.jsx
└─ index.css        # Tailwind imports & custom styles
```

---

## 📦 Installation & development

```bash
# clone & move into project
git clone https://github.com/Rizzwannndev/Forex-Trade-Web.git
cd Forex-Trade-Web

# install dependencies
npm install

# start dev server
npm run dev         # http://localhost:5173

# build for production
npm run build

# preview production build locally
npm run preview

# lint & format
npm run lint
```

---

## ⚙️ Customization

- Replace the placeholder GIF/link above when your demo is ready.
- Update `src/assets/data.jsx` with real features, pricing, testimonials.
- Tweak colors/spacing in `tailwind.config.js` or `src/index.css`.
- Add/remove sections by editing `HomePage.jsx` and the
  corresponding component files.
- Drop images in `public/` and reference them from your JSX.

---

## 🤝 Contributing

Contributions are welcome!  
Please open issues or pull requests against the [`main` branch](https://github.com/Rizzwannndev/Forex-Trade-Web).

---

## 📜 License

This project is open source.

---

