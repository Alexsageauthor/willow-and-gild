# Willow &amp; Gild — website

Static. No build step, no framework, no dependencies. It runs on Vercel exactly
as it stands — Vercel serves a static root with no configuration.

## Replacing what is in `willow-and-gild` now

The repo currently holds the seating chart builder: `index.html`, `README.txt`
and `assets/`. To swap it over:

```
DELETE   README.txt          (superseded by this file)
REPLACE  index.html          (was the builder, now the shop)
REPLACE  assets/             (different images entirely)
ADD      collection.html
ADD      collections.js
```

Do it on a branch rather than straight onto `main` — you already have two
branches, so push to the second, check the Vercel preview URL, then merge. That
way `willow-and-gild.vercel.app` never shows a half-swapped site.

**Before you delete the builder, read the note at the bottom of this file.**

```
index.html        the landing page — collections led
collection.html   ONE page that serves every collection (?c=Kyoto)
collections.js    the data. this is the only file you edit regularly
assets/           one square image per collection, plus hero and mark
```

## THE DOMAIN IS NOT LIVE YET — READ THIS FIRST

The site currently runs on **https://willow-and-gild.vercel.app** and that is
correct until willowandgild.com resolves.

TWO THINGS TOOK THE SITE DOWN, BOTH RECORDED HERE SO THEY ARE NOT REPEATED:

1. **A 301 to a domain that did not exist.** vercel.json redirected the working
   .vercel.app host to willowandgild.com before the domain was wired up, so
   every visitor was permanently sent to an address that does not answer.
   A redirect to a domain that does not resolve is an OUTAGE, and a 301 is
   CACHED BY THE BROWSER — it keeps failing after the fix until the cache
   clears. Hard-refresh or use a private window to confirm a fix.

2. **Invalid keys in vercel.json.** The disabled redirects were parked in the
   same file under "_comment" and "_redirects_when_domain_is_live". Vercel
   validates vercel.json against a strict schema and REJECTS UNKNOWN KEYS, so
   the deploy failed validation and nothing shipped at all — a site that does
   not load even though every HTML file in it is perfect. vercel.json now
   contains only cleanUrls, trailingSlash and headers. Notes live here, in a
   file that allows notes.

### When the domain is ready

Bring willowandgild.com up in Vercel FIRST and confirm it loads. Only then:

- `site.js` -> `ORIGIN: 'https://willowandgild.com'`
- `vercel.json` -> add this `redirects` array back:

```json
"redirects": [
  { "source": "/(.*)",
    "has": [{ "type": "host", "value": "willow-and-gild.vercel.app" }],
    "destination": "https://willowandgild.com/$1", "permanent": true },
  { "source": "/(.*)",
    "has": [{ "type": "host", "value": "www.willowandgild.com" }],
    "destination": "https://willowandgild.com/$1", "permanent": true }
]
```

- then run `python3 build_site_meta.py` to regenerate sitemap.xml and robots.txt

Change site.js and vercel.json TOGETHER, or the canonical tag and the redirect
point at different addresses.

## The domain

The site is `https://willowandgild.com`. The **apex, not www** — both will
resolve, but only one may be canonical and everything else redirects into it.
That choice is recorded in two files and they must agree:

```
site.js       ORIGIN: 'https://willowandgild.com'
vercel.json   the destination of both redirects
```

Change one without the other and the canonical tag and the redirect point at
different addresses, which is worse than either choice on its own.

### Wiring it up (once, at the registrar)

Vercel: Project → Settings → Domains → add `willowandgild.com` **and**
`www.willowandgild.com`. Vercel then shows you the exact DNS records to create.
**Use the records it shows you, not any written down here** — the values have
changed before and a stale A record is a site that is simply down. The shape is
an A record on the apex and a CNAME on `www`.

Two things that catch people out:

- **The `.vercel.app` address keeps working** after the domain is added. It is
  not replaced. Left alone, the same shop is crawled and indexed under two
  names and the ranking splits. `vercel.json` now 301s it into the apex.
- **HTTPS takes a few minutes** after DNS resolves while the certificate is
  issued. A browser warning in that window is normal and is not a fault.

### After any domain change

```
python3 build_site_meta.py
```

That regenerates `sitemap.xml` and `robots.txt` from `collections.js` and
`bundles.js`. It reads the origin out of `site.js`, so it can never disagree
with the canonical tag. Run it after adding a collection too — the sitemap
lists only collections marked `live`.

## What is still not wired

Not code — decisions and account URLs. The site is finished; the shopfront is
not, and a live domain does not change that:

- `etsy` and `gumroad` are **empty strings on all fifteen collections**. The
  buttons render only for links that exist, so a collection flipped to `live`
  today gets a page reading *"Listings going live shortly"* and no way to buy.
- Currency is undecided.
- The newsletter form in the footer of `index.html` posts nowhere.

## Adding or updating a collection

Everything on the site is built from `collections.js`. To bring a collection
live:

1. Drop a square image at `assets/<Id>.jpg` (760px is plenty).
2. Change that collection's `status` from `'soon'` to `'live'`.

That is the whole job. No page to duplicate, no menu to update, no count to
correct — the grid, the collection page, the "also in the house" strip and the
totals all read from the same array.

## The one thing to wire up before launch

The **Shop this collection** button on a live collection page is `href="#"`.
Point it at the Etsy listing:

```html
<a class="btn solid" href="https://www.etsy.com/listing/…">Shop this collection</a>
```

It is marked `data-buy` in `collection.html` so it is easy to find. Same for
the newsletter form in the footer of `index.html`, which currently posts
nowhere — hook it to Mailchimp, Buttondown or a Netlify form.

## Decisions taken, and why

**Only real collections are listed.** The design brief named eighteen,
including Magnolia, Azure Coast, Tuscan, Black Tie and Celestial — none of
which exist — and omitted Classic and Mid-Century, which do. The site lists the
fifteen that are actually built. A shop that shows collections it cannot sell
teaches visitors that the rest may not be real either.

**Unfinished collections are marked, not hidden.** They appear in the grid,
faded, labelled *Coming soon*, and their page says plainly that nothing is sold
before it is finished. That reads as a house with a standard. Fifteen live
links where fourteen go nowhere reads as a broken site.

**Design Library, Journal, Business Stationery, Browse by Occasion and Browse
by Style are not built.** All were in the brief and all are good ideas for
later. With one collection live they would be empty rooms, and an empty room on
a luxury site does more harm than a missing one. They slot in when there is
something to put in them.

**The "what's included" list is real.** It is the Kyoto canon as actually
built — 11-page invitation suite, six menus, five place card options, six table
number designs. Nothing on that list is aspirational.

**Mid-Century is built.** This section used to say it carried a placeholder
image because the lane had no artwork in the archive. It has its own hero,
plate, chair, cake, three roundels, six signage illustrations and a full canon
now, and `assets/MidCentury.*` are cut from that artwork. It is still marked
`soon`, which means built but not signed off — the two are different things and
the status field is the honest one.

## Accessibility and performance

- System-ish font stack with two web fonts, preconnected.
- All imagery `loading="lazy"` below the fold.
- Scroll reveal is disabled under `prefers-reduced-motion`.
- No JavaScript is required to read the page content — it is required to
  *build* the grid, so if you ever need a no-JS fallback, the answer is to
  pre-render `collections.js` into the HTML at publish time.


## Do not throw the seating chart builder away

It is currently the whole site, and the instinct is to delete it. I would keep
it, at `seating-planner.html`.

A working seating chart builder is the single most searched-for free tool in
wedding planning. It is the reason a couple lands on the site nine months
before they buy anything, and it is a reason to come back — which a shop page
is not. Every visit is a chance to put the collections in front of them.

Concretely:

- keep the file, rename it, link it from the footer as **Free Seating Planner**
- at the end of the planner, one line: *"Print your finished plan on Kyoto,
  English Rose or any of our collections"* linking to the collections grid
- it costs nothing to keep and it is already built

The only argument for deleting it is tidiness, and tidiness is not worth a
free acquisition channel. If it does not fit the shop's look, restyle it with
the same palette as `index.html` — that is an afternoon, not a rebuild.
