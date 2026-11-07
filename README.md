# links.bhalla.info

A link page for Aaryan Ved Bhalla, just the personal site and socials, themed like
[bhalla.info](https://bhalla.info):
black and white only, Inter and JetBrains Mono, rows that fill with ink on hover,
and a small black hole that inverts the page.

Plain static files, no build step:

- `index.html`: the page and its links
- `styles.css`: tokens and layout, shared rules with bhalla.info
- `main.js`: the theme switch (session-only, follows the OS otherwise)

Icons are [Phosphor](https://phosphoricons.com) (ArrowUpRight, XLogo),
inlined once as an SVG sprite.

Preview locally with any static server, for example:

```sh
python3 -m http.server 4100
```

On Vercel, import the repo with the framework preset set to "Other" and no build command.
