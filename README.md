# 10k RPM website

A modern, mobile-friendly rebuild of [10k-rpm.com](https://10k-rpm.com/index.htm) for 10k RPM, a rotary and Mazda performance workshop in Chalandri, Athens.

## What's in it

- One fast, static page: no build step, no framework, no database.
- English / Greek switch (it remembers the visitor's choice and picks Greek automatically for Greek browsers).
- Tap-to-call, directions and booking buttons that stay on screen on phones.
- An enquiry form that opens the visitor's email app with their details filled in, sent to info@10k-rpm.com.
- Google Map, search-engine business details (schema.org `AutoRepair`) and social links.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content (English) |
| `styles.css` | Design and layout |
| `script.js` | Mobile menu, Greek translations, enquiry form |
| `assets/` | Workshop photo, Idemitsu photo, icon |

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Hosting

Upload the files as they are to any static host (the existing web host, Netlify, Cloudflare Pages or GitHub Pages).
