/* ---------------------------------------------------------------------------
   THE COLLECTIONS. One source of truth for the whole site.

   Every grid, every collection page and every count on the site is built from
   this array. Adding a collection is one entry here plus an image in assets/ -
   nothing else to touch, no page to duplicate, no menu to remember.

   `status` is the honest bit, and it matters more than it looks:
     'live'    - finished, audited, on sale
     'soon'    - built, not yet signed off

   `etsy` and `gumroad` are the two shopfronts. Fill in whichever exist; a
   collection can have one, both or neither. The buttons only render for links
   that are actually present, so a blank string never becomes a dead button -
   and a dead buy button costs more trust than a missing one.
   A card marked 'soon' does not link anywhere and does not show a price. A shop
   whose links go nowhere reads as abandoned, not as forthcoming.
   --------------------------------------------------------------------------- */

const COLLECTIONS = [
   ORDER IS A DESIGN DECISION, NOT ALPHABETICAL OR CHRONOLOGICAL.
   Fifteen collections seen as a grid read as ONE thing unless the first screen
   varies. Sorted by when they were built, the top row was Kyoto, English Rose,
   Chateau and Art Deco - three botanicals in a row - and a visitor concluded in
   one glance that the house does flowers. The sequence below alternates
   texture, colour and temperature so no two neighbours are the same KIND of
   thing: botanical, floral, graphic, woodland, coastal, cold, and so on.

  { id: 'Kyoto', name: 'Kyoto', status: 'live',
    ink: '#3F4A3C', gold: '#B7995C',
    etsy: '',        // paste the Etsy listing URL
    gumroad: '',     // paste the Gumroad product URL
    line: 'Cranes, blossom and quiet ceremony.',
    story: 'Drawn from the stillness of a Japanese garden — paired cranes, ' +
           'cherry blossom on a bare branch, and the restraint of a room where ' +
           'nothing is there by accident. Sage and antique gold on warm ivory.' },

  { id: 'EnglishRose', name: 'English Rose', status: 'soon',
    ink: '#5A4340', gold: '#9C7D58',
    line: 'Climbing roses and a garden in June.',
    story: 'English country gardens, roses over a doorway, and the traditions of ' +
           'a village wedding.' },

  { id: 'MidCentury', name: 'Mid-Century', status: 'soon',
    ink: '#3C3A34', gold: '#AE8E5A',
    line: 'Warm walnut and confident shape.',
    story: 'Nineteen-fifties optimism — clean silhouettes, mustard and teak.' },

  { id: 'Woodlands', name: 'Woodlands', status: 'soon',
    ink: '#3A4A3E', gold: '#A8905C',
    line: 'Ferns, moss and a green canopy.',
    story: 'Deep woodland — bracken, bark and light coming through leaves.' },

  { id: 'Riviera', name: 'Riviera', status: 'soon',
    ink: '#24414F', gold: '#BFA678',
    line: 'Deep sea blue and painted shutters.',
    story: 'The southern coast in high summer — lemon trees, tiled terraces and ' +
           'water you can see the bottom of.' },

  { id: 'Winter', name: 'Winter', status: 'soon',
    ink: '#4C5A66', gold: '#B7995C',
    line: 'Frost, evergreen and candlelight.',
    story: 'A winter wedding — bare branches, deep green and gold against a ' +
           'cold blue.' },

  { id: 'ArtDeco', name: 'Art Deco', status: 'soon',
    ink: '#2B2B2B', gold: '#B7995C',
    line: 'Jade, onyx and the geometry of the twenties.',
    story: 'Peacocks, fans and fluted lines. Confident, symmetrical and cut ' +
           'from a single geometry.' },

  { id: 'Orchard', name: 'Orchard', status: 'soon',
    ink: '#5A4534', gold: '#BFA678',
    line: 'Blossom, bees and old fruit trees.',
    story: 'An orchard in late spring, all pale blossom and low branches.' },

  { id: 'BlueWillow', name: 'Blue Willow', status: 'soon',
    ink: '#0E1531', gold: '#B7995C',
    line: 'Porcelain blue and a story in a pattern.',
    story: 'The willow pattern that has been on English tables for two hundred ' +
           'years, redrawn for a wedding.' },

  { id: 'Nordic', name: 'Nordic', status: 'soon',
    ink: '#4A443C', gold: '#A2916F',
    line: 'Pale wood, linen and long light.',
    story: 'Scandinavian restraint. Undyed linen, birch and almost no ' +
           'ornament at all.' },

  { id: 'Chateau', name: 'French Château', status: 'soon',
    ink: '#3A3835', gold: '#A9884F',
    line: 'Stone, shutters and a long table.',
    story: 'The proportions of a French country house — arched openings, aged ' +
           'plaster and gold worn thin by time.' },

  { id: 'Conservatory', name: 'Conservatory', status: 'soon',
    ink: '#51624C', gold: '#B7995C',
    line: 'Glasshouse ferns and cast iron.',
    story: 'Victorian glasshouses, palm fronds under a curved roof, and the ' +
           'green light of a room made for plants.' },

  { id: 'Minimal', name: 'Minimal', status: 'soon',
    ink: '#31302B', gold: '#BFA678',
    line: 'Type, space and nothing else.',
    story: 'For couples who want the words to do the work. One rule, one mark, ' +
           'and a great deal of paper left empty.' },

  { id: 'OliveGold', name: 'Olive & Gold', status: 'soon',
    ink: '#664519', gold: '#8A6A1E',
    line: 'Olive groves and warm Mediterranean light.',
    story: 'Silver-backed olive leaves, sun-warmed stone and gold with earth ' +
           'in it.' },

  { id: 'Classic', name: 'Classic', status: 'soon',
    ink: '#33363B', gold: '#BFA46B',
    line: 'Engraved formality, done properly.',
    story: 'The traditional wedding suite — crest, copperplate and a border ' +
           'that has not needed changing in a century.' },
];

/* The Kyoto product list is real: it is what is actually in the collection.
   Counts and names come from the built canon, not from a wish list. */
const KYOTO_PRODUCTS = [
  ['The Invitation Suite', '11 pages — save the date, invitation, details, RSVP, order of service, QR cards, envelope face and liner, address labels'],
  ['The Wedding Planner', '10 pages, A4 and US Letter, print or fillable'],
  ['The Budget Planner', 'Printable pages and a palette-matched spreadsheet'],
  ['Menus', 'Six designs — Plate, Chair, Bough, Hero, Ring, Border. One to five courses.'],
  ['Place Cards', 'Five options across two structures — four tent, one flat. Eighty cards from one master list.'],
  ['Table Numbers', 'Six designs, twelve numbers, card or tent'],
  ['The Seating Plan &amp; Find Your Seat', 'Working plan plus an A1 or 24×36 poster'],
  ['Signage', 'Welcome, Unplugged, Guest Book, Cards &amp; Gifts, The Bar, In Loving Memory, The Timeline'],
  ['Favour Tags', 'Four designs, editable quote, sign-off and date'],
  ['The Thank You Bundle', '7 pages — cards, envelope, liner, address labels and a gift tracker'],
  ['Day-Of Coordination', '9 pages that fill from one master sheet'],
  ['Vendor Sheets', 'Six briefs — photographer, florist, caterer, music, officiant, hair and make-up'],
  ['The Wedding Website Kit', 'A complete one-page site with RSVP and guest book forms'],
  ['Keepsakes', 'Vows, anniversary letter, open-when letters, Plan B, getting-ready timeline'],
  ['And more', 'Engagement announcements, rehearsal dinner, welcome bags, advice cards, toast cards, envelope etiquette, print shop guide'],
];

/* ---------------------------------------------------------------------------
   THE EIGHT BUNDLES.

   PRICES BELOW ARE PLACEHOLDERS. They are internally coherent - the ladder
   makes sense against itself, and the Complete Collection saves about 45% on
   buying the seven parts - but they are NOT anchored to the market, because
   nobody has yet checked what comparable listings actually charge. Do that
   before anything goes live: search Etsy for "printable wedding invitation
   suite" and "wedding stationery bundle", sort by TOP SELLER not relevance,
   and note the top ten in each. Then these move.

   Same price on Etsy and Gumroad. An Etsy customer who finds the direct site
   should not feel penalised for having come the long way round; put the
   advantage in a bundle, never in the number.
   --------------------------------------------------------------------------- */

const BUNDLES = [
  { id: 1, name: 'The Planning Bundle',        price: 28,
    line: 'The wedding planner, the budget planner and the guest list.',
    detail: '88 pages · A4 and US Letter · print or fillable' },

  { id: 2, name: 'The Invitation Suite',       price: 24,
    line: 'Save the date through to the RSVP, all filling from one sheet.',
    detail: '11 pages · plus registry card, envelope guide and rehearsal invitation' },

  { id: 3, name: 'Reception & Decor',          price: 38,
    line: 'Everything the room needs — menus, place cards, table numbers, signage.',
    detail: '383 pages across 49 files · six menus, five place card options, six table numbers' },

  { id: 4, name: 'The Complete Collection',    price: 89,
    line: 'The whole collection. Every piece, every option.',
    detail: '736 pages across 132 files · saves 45% on buying the parts' },

  { id: 5, name: 'The Thank You Bundle',       price: 16,
    line: 'Thank you cards, envelope, labels and a gift tracker.',
    detail: '7 pages · plus vows keepsake, anniversary letter and open-when letters' },

  { id: 6, name: 'The Digital Wedding Website', price: 18,
    line: 'A complete one-page wedding site with RSVP and guest book.',
    detail: 'Ready to publish free · plus the paperless RSVP guide and a calendar file' },

  { id: 7, name: 'The Digital Announcement Set', price: 12,
    line: 'Engagement announcements for Instagram, sized and captioned.',
    detail: 'Six graphics · square and story · three styles, with caption suggestions' },

  { id: 8, name: 'Day-Of Coordination',        price: 22,
    line: 'The order of service, the vendor briefs, and the paper for the day.',
    detail: '22 pages · six vendor sheets, plus toast, reading and advice cards' },
];
