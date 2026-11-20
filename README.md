# 10k RPM website

A modern, mobile-friendly rebuild of [10k-rpm.com](https://10k-rpm.com/index.htm) for 10k RPM, a rotary and Mazda performance workshop in Chalandri, Athens.

## What's in it

- Two fast, static pages (home and Parts & Brands): no build step, no framework, no database.
- Greek by default, with a one-tap switch to English (the visitor's choice is remembered).
- Tap-to-call, directions and booking buttons that stay on screen on phones.
- An enquiry form that opens the visitor's email app with their details filled in, sent to info@10k-rpm.com.
- Google Map, search-engine business details (schema.org `AutoRepair`) and social links.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home page: services, rotary, parts overview, about, contact (Greek) |
| `parts.html` | Parts & Brands page: all 27 brands grouped by category (Greek) |
| `styles.css` | Design and layout |
| `script.js` | Mobile menu, logo back-to-top, English translations, enquiry form |
| `assets/` | Workshop photo, Idemitsu photo, icon |

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Hosting

Upload the files as they are to any static host (the existing web host, Netlify, Cloudflare Pages or GitHub Pages).
