# links.bhalla.info

A link page for Aaryan Ved Bhalla, just the personal site and socials, themed like
[bhalla.info](https://bhalla.info):
black and white only, Inter and JetBrains Mono, rows that fill with ink on hover,
pill links with their logos (bhalla.info's is its black hole), and the
device's own light or dark theme.

Plain static files, no build step:

- `index.html`: the page and its links
- `styles.css`: tokens and layout, shared rules with bhalla.info

Logos are [Phosphor](https://phosphoricons.com) (GitHub, LinkedIn, Instagram, YouTube, X, ArrowUpRight, and Hexagon for DevPost),
inlined once as an SVG sprite.

Preview locally with any static server, for example:

```sh
python3 -m http.server 4100
```

On Vercel, import the repo with the framework preset set to "Other" and no build command.
