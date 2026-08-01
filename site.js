/* ---------------------------------------------------------------------------
   THE SITE'S OWN ADDRESS. ONE CONSTANT, EDITED ONCE.

   Everything on this site is relative — no page has ever contained an absolute
   URL to itself — so moving from willow-and-gild.vercel.app to a real domain
   breaks nothing and needs no rewrite. That is the good news.

   The bad news is what the site does NOT have, and it only starts to matter
   the moment the shop is live on a domain someone might link to:

     · NO CANONICAL. A Vercel project keeps serving its .vercel.app hostname
       after a custom domain is added. Both stay live, both get crawled, and
       the same shop is indexed twice under two names — which splits whatever
       ranking it earns and is the single most common way a small shop damages
       its own search results in week one. vercel.json redirects the hostname;
       this sets the canonical tag, and they are belt and braces.

     · NO SOCIAL CARD. With no og: tags a link pasted into Pinterest, WhatsApp
       or Instagram renders as a bare grey rectangle. For printable wedding
       stationery, Pinterest IS the channel — a shop that cannot make a card
       is a shop that cannot be pinned.

     · ONE TITLE FOR FIFTEEN COLLECTIONS. collection.html serves every lane off
       ?c=, so all fifteen shared the title "Collection — Willow & Gild", and
       all eight bundles shared "Bundle — Willow & Gild". In a search result
       that is fifteen identical blue links.

   TO GO LIVE: change ORIGIN below to the real domain, and change the same
   host in vercel.json. Those are the only two places it appears.
   --------------------------------------------------------------------------- */

const SITE = {
  /* ▼▼▼ THE ONE LINE TO CHANGE ▼▼▼
     No trailing slash. Include the protocol and the exact host you want
     indexed — pick www or bare and stay with it, they are different sites to
     a crawler. */
  ORIGIN: 'https://willowandgild.com',

  /* the hostname Vercel gives you, so vercel.json and the canonical agree on
     what is being redirected AWAY from. If ORIGIN is still the vercel.app
     address these are the same and nothing redirects, which is correct. */
  PREVIEW_HOST: 'willow-and-gild.vercel.app',

  NAME: 'Willow & Gild',
  TAGLINE: 'Printable Wedding Stationery Collections',
  /* the card image. Social platforms want an ABSOLUTE url and a landscape
     crop; a square collection tile gets cropped to a letterbox and loses its
     top and bottom. */
  DEFAULT_CARD: '/assets/Kyoto.jpg',

  /* APEX, NOT WWW — and that is a decision, not a default.
     www.willowandgild.com and willowandgild.com are DIFFERENT SITES to a
     crawler. Both will resolve; only one may be canonical, and everything
     else redirects to it. The apex is the shorter thing to say out loud and
     the shorter thing to print on a card, which is what settles it for a
     shop whose customers hand-type the address off a printed insert.
     To flip to www: change ORIGIN above and the destination in vercel.json.
     Change BOTH or the canonical and the redirect will disagree, which is
     worse than either choice. */
};


/* Set the head tags for a page. Call it once the page knows what it is showing.

   title / description / image are all optional; anything omitted falls back to
   the house defaults, so a page that forgets to call this is still valid — it
   is just generic, which is the failure we can afford. */
function applyHead({ title, description, image, path } = {}) {
  const origin = SITE.ORIGIN.replace(/\/+$/, '');
  const url = origin + (path || location.pathname + location.search);
  const card = origin + (image || SITE.DEFAULT_CARD);
  const desc = description ||
    document.querySelector('meta[name="description"]')?.content || '';

  if (title) document.title = title;

  const set = (sel, attrs) => {
    let el = document.head.querySelector(sel);
    if (!el) {
      el = document.createElement(attrs.tag);
      document.head.appendChild(el);
    }
    for (const [k, v] of Object.entries(attrs)) {
      if (k !== 'tag') el.setAttribute(k, v);
    }
    return el;
  };

  set('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: url });

  const meta = {
    'og:type': 'website',
    'og:site_name': SITE.NAME,
    'og:title': title || document.title,
    'og:description': desc,
    'og:url': url,
    'og:image': card,
    'twitter:card': 'summary_large_image',
    'twitter:title': title || document.title,
    'twitter:description': desc,
    'twitter:image': card,
  };
  for (const [prop, content] of Object.entries(meta)) {
    if (!content) continue;
    const key = prop.startsWith('og:') ? 'property' : 'name';
    set(`meta[${key}="${prop}"]`,
        { tag: 'meta', [key]: prop, content: String(content) });
  }

  if (description) {
    set('meta[name="description"]',
        { tag: 'meta', name: 'description', content: description });
  }
}
