# Neuvis — homepage

Static marketing site for **Neuvis Development Co., Ltd** — a computer-vision &
software studio based in Ho Chi Minh City, Vietnam.

🔗 Live: https://neuvis.dev

## Stack

Plain, dependency-free static site — HTML + CSS + a little vanilla JS. No build
step, no framework. Fonts via Google Fonts (Bricolage Grotesque, Hanken Grotesk,
JetBrains Mono).

```
homepage/
├── index.html        # single-page site
├── styles.css        # all styling
├── script.js         # scroll reveals, mobile menu
├── assets/           # logo, mark, favicon, og image
├── CNAME             # custom domain for GitHub Pages
├── .nojekyll         # serve files as-is
├── robots.txt
└── sitemap.xml
```

## Develop

It's static — just open `index.html`, or run any static server:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy (GitHub Pages)

1. Create a GitHub repo and push this folder:
   ```bash
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
   Branch = `main`, folder = `/ (root)`.
3. The `CNAME` file points the site at **neuvis.dev**. In your domain DNS, add the
   GitHub Pages records:
   - `A` records for the apex `@` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - or a `CNAME` for `www` → `<user>.github.io`
4. Enable **Enforce HTTPS** once the certificate is issued.

## License

© Neuvis Development Co., Ltd. All rights reserved.
