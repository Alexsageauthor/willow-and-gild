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

/* ORDER IS A DESIGN DECISION, NOT ALPHABETICAL OR CHRONOLOGICAL.
   Fifteen collections seen as a grid read as ONE thing unless the first screen
   varies. Sorted by when they were built, the top row was Kyoto, English Rose,
   Chateau and Art Deco - three botanicals in a row - and a visitor concluded in
   one glance that the house does flowers. The sequence below alternates
   texture, colour and temperature so no two neighbours are the same KIND of
   thing: botanical, floral, graphic, woodland, coastal, cold, and so on. */
/* ---------------------------------------------------------------------------
   `swatch` — THE THREE DOTS A CUSTOMER SEES, AND THEY ARE NOT ink/gold/band.
   The dots showed ink, gold and band for months and every collection came out
   brown, brass and grey, because THOSE THREE ARE A TYPOGRAPHIC PALETTE: ink is
   what type is set in, gold is what rules are drawn in, band is the masthead.
   Muted is their job. Kelly: "we are looking very, very same across pretty much
   all collections."
   Sampling the artwork automatically did not fix it either — a plate is mostly
   cream porcelain, so frequency returns three creams, and weighting for chroma
   returns the darkest object rather than the signature colour. It gave Kyoto
   three browns and no blossom at all, and dropped Vineyard's claret, which is
   the one colour that lane exists for.
   So these are CHOSEN, per collection, from its own art: the three a bride
   would put on her bridesmaids, her flowers and her table. ink/gold/band are
   untouched and keep doing their typographic jobs.
   --------------------------------------------------------------------------- */
const COLLECTIONS = [

  { id: 'Kyoto',
    swatch: ['#E4BDBA', '#8C9B86', '#2F2C29'], name: 'Kyoto', status: 'live',
    ink: '#3F4A3C', gold: '#B7995C', band: '#CFC9B3',
    etsy: '',        // paste the Etsy listing URL
    gumroad: '',     // paste the Gumroad product URL
    line: 'Cranes, blossom and quiet ceremony.',
    story: 'Drawn from the stillness of a Japanese garden — paired cranes, ' +
           'cherry blossom on a bare branch, and the restraint of a room where ' +
           'nothing is there by accident. Sage and antique gold on warm ivory.' },

  { id: 'EnglishRose',
    swatch: ['#C9807E', '#9E4750', '#7C8B6A'], name: 'English Rose', status: 'live',
    ink: '#5A4340', gold: '#9C7D58', band: '#C8A5A1',
    line: 'Climbing roses and a garden in June.',
    story: 'English country gardens, roses over a doorway, and the traditions of ' +
           'a village wedding.' },

  { id: 'MidCentury',
    swatch: ['#6B4A2F', '#B08D4F', '#E3D9C6'], name: 'Mid-Century', status: 'live',
    ink: '#3C3A34', gold: '#AE8E5A', band: '#4A3728',
    line: 'Warm walnut and confident shape.',
    story: 'Nineteen-fifties optimism — clean silhouettes, mustard and teak.' },

  { id: 'Woodlands',
    swatch: ['#2F4A32', '#7C8B5E', '#B8AE93'], name: 'Woodlands', status: 'live',
    ink: '#3A4A3E', gold: '#A8905C', band: '#243029',
    line: 'Ferns, moss and a green canopy.',
    story: 'Deep woodland — bracken, bark and light coming through leaves.' },

  { id: 'Riviera',
    swatch: ['#F0C22B', '#1F4E6B', '#EFE8DA'], name: 'Riviera', status: 'live',
    ink: '#24414F', gold: '#BFA678', band: '#4E7A94',
    line: 'Deep sea blue and painted shutters.',
    story: 'The southern coast in high summer — lemon trees, tiled terraces and ' +
           'water you can see the bottom of.' },

  { id: 'Winter',
    swatch: ['#A6B6BE', '#7E4A4A', '#C9CBBF'], name: 'Winter', status: 'live',
    ink: '#4C5A66', gold: '#B7995C', band: '#6E7B87',
    etsy: '',        // paste the Etsy listing URL
    gumroad: '',     // paste the Gumroad product URL
    line: 'Frost, evergreen and candlelight.',
    story: 'A winter wedding — bare branches, deep green and gold against a ' +
           'cold blue.' },

  { id: 'ArtDeco',
    swatch: ['#1F6B5C', '#C9A227', '#16181A'], name: 'Art Deco', status: 'live',
    ink: '#2B2B2B', gold: '#B7995C', band: '#362315',
    line: 'Jade, onyx and the geometry of the twenties.',
    story: 'Peacocks, fans and fluted lines. Confident, symmetrical and cut ' +
           'from a single geometry.' },

  { id: 'Orchard',
    swatch: ['#C2603F', '#8A9B5B', '#C9AE84'], name: 'Orchard', status: 'live',
    ink: '#5A4534', gold: '#BFA678', band: '#C4A188',
    line: 'Blossom, bees and old fruit trees.',
    story: 'An orchard in late spring, all pale blossom and low branches.' },

  { id: 'BlueWillow',
    swatch: ['#2E4A8C', '#7C9BC4', '#F2EDE3'], name: 'Blue Willow', status: 'live',
    ink: '#0E1531', gold: '#B7995C', band: '#A2B5C6',
    line: 'Porcelain blue and a story in a pattern.',
    story: 'The willow pattern that has been on English tables for two hundred ' +
           'years, redrawn for a wedding.' },

  { id: 'Vineyard',
    swatch: ['#542F35', '#6E7A56', '#C8BBA1'], name: 'Vineyard', status: 'live',
    ink: '#33222A', gold: '#7E6B3E', band: '#542F35',
    line: 'Old vines, limestone and claret.',
    story: 'Late summer on a European wine estate — weathered stone, aged ' +
           'oak, linen and vine. The collection for a wedding in burgundy.' },
  { id: 'Gold',
    swatch: ['#A9853F', '#6A5836', '#E6DCC8'], name: 'Gold', status: 'live',
    ink: '#3E3128', gold: '#9E8449', band: '#B8AEA1',
    line: 'Nothing more than necessary.',
    story: 'Typography, proportion and a single line of antique gold — for a ' +
           'wedding that wants no decoration at all.' },

  { id: 'Nocturne',
    swatch: ['#16202B', '#9AA3AA', '#D8C79A'], name: 'Nocturne', status: 'live',
    ink: '#18232D', gold: '#B6A070', band: '#8A9095',
    line: 'Midnight, silver and candlelight.',
    story: 'A black-tie wedding after dark — midnight velvet, blackened ' +
           'silver and white moonflowers open in the evening.' },

  { id: 'Nordic',
    swatch: ['#D9CDB8', '#A8977C', '#6E6A5F'], name: 'Nordic', status: 'live',
    ink: '#4A443C', gold: '#A2916F', band: '#948B80',
    line: 'Pale wood, linen and long light.',
    story: 'Scandinavian restraint. Undyed linen, birch and almost no ' +
           'ornament at all.' },

  { id: 'Chateau',
    swatch: ['#C3BCA9', '#E3DCCB', '#6E7A5C'], name: 'French Château', status: 'live',
    ink: '#3A3835', gold: '#A9884F', band: '#4A4845',
    line: 'Stone, shutters and a long table.',
    story: 'The proportions of a French country house — arched openings, aged ' +
           'plaster and gold worn thin by time.' },

  { id: 'Conservatory',
    swatch: ['#4E7A3A', '#9BA79B', '#D8D4C6'], name: 'Conservatory', status: 'live',
    ink: '#51624C', gold: '#B7995C', band: '#7E8E7A',
    line: 'Glasshouse ferns and cast iron.',
    story: 'Victorian glasshouses, palm fronds under a curved roof, and the ' +
           'green light of a room made for plants.' },

  { id: 'Minimal',
    swatch: ['#EDE7DC', '#C9C0B0', '#6F6A60'], name: 'Minimal', status: 'live',
    ink: '#31302B', gold: '#BFA678', band: '#E0DBD4',
    line: 'Type, space and nothing else.',
    story: 'For couples who want the words to do the work. One rule, one mark, ' +
           'and a great deal of paper left empty.' },

  { id: 'OliveGold',
    swatch: ['#7E8B62', '#A98A3C', '#B9A98C'], name: 'Olive & Gold', status: 'live',
    ink: '#664519', gold: '#8A6A1E', band: '#AEB9A0',
    line: 'Olive groves and warm Mediterranean light.',
    story: 'Silver-backed olive leaves, sun-warmed stone and gold with earth ' +
           'in it.' },

  { id: 'Classic',
    swatch: ['#E8DFC9', '#B79447', '#3A3B3E'], name: 'Classic', status: 'live',
    ink: '#33363B', gold: '#BFA46B', band: '#3C4045',
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
  ['And more', 'Engagement announcements, rehearsal dinner, guest welcome guides, advice cards, toast cards, envelope etiquette, print shop guide'],
];


/* THE COUNT IS DERIVED, NEVER TYPED.
   'fifteen' was written into the sell line on free-timeline.html and into the
   meta description on palette.html, so the day a sixteenth collection was added
   the site went on telling customers there were fifteen while showing them
   sixteen plates. A number that describes a list belongs to the list. */
/* GUMROAD BUY LINKS — one per collection per product, each opening Gumroad with
   that collection's version already selected (from GUMROAD/gumroad_links.json).
   Collection pages use the Complete Collection link; chapter pages use their own. */
const GUMROAD_LINKS = {
 "Kyoto": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=Kj_msLmv7I6kk7k0WeSP9Q%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=r7cHRixtK7MbE1Sx2-PFMQ%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=7H7OXER2mARpawXQBIKXmA%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=9m9SThwWW8qfp2eJX6fdbg%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=mSXiKRRc8R3J5NK20dwTuQ%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=2RlO3lLhKqpUwCc1rh6uvg%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=AeKtoa7HFJwB8Eov1-Th4w%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=NHXBoMp5wDOy6DXl3fovQg%3D%3D"
 },
 "EnglishRose": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=-YcL0_iUBeulqpzSQM5ZxA%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=-TXHveNX9CnxWcpqAQz8tw%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=OCOkmN6Tx_4ceJ-Hh9075A%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=2RMxPYMO77pFQhrSfomQyg%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=ZuD-gmLUz41sHVBaieuHnA%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=nprxXpy8lLKFCICyJiYH0A%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=hrF6dV17NufVTwYqoEB81A%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=y5oush5RRkw12SBcdnvLqg%3D%3D"
 },
 "ArtDeco": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=9YUHw6zbPkgi26gddQUa9w%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=PHpogRJE78IQiW927pvZFQ%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=qwrUtCB2m3MIVpxQ_w-qQw%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=hecGSu2st9H97VDjg-6_Dg%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=SvMAHEeoKp_WhkaRtl2lPg%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=sA6jog1Nj-YxZ0krVBHzMw%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=-fZ1FMrrxVNVCwWtz2ODyA%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=PS3QTMIJBY5vaI6Joz1JeA%3D%3D"
 },
 "OliveGold": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=64gCP-CPXfe-3JH3MVV-rg%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=bsOpctvQrxSLD-18NgaUIg%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=d4KzyAktQOUF6n3ulsrKZg%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=7zyVbxUxT2NZR1NJrRllYg%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=sGtoNiMMbrL0e_q3F4c7sA%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=MVHdvzVUtlklTInk1t2TMQ%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=jj6AniVofkpRYrxzhPXnIw%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=f1s9uMidS9LpDM2_xBljkQ%3D%3D"
 },
 "BlueWillow": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=lUR38n7Ervaay3009vs4xw%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=2HBVnvkHnUr0_zmQLrWJEA%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=1quOeIA_rx9XG7SsVQhvnA%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=V57pGoKvYGOtjMVOaEBm7w%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=Mqwb16LgMmyu0FG7Kgb3OQ%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=s2qWEXOFdMgmXe3VD2L-9A%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=R4IU9tzJNayTuyH7Gy639Q%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=M_XAgPy5gcAVwakD6GglCA%3D%3D"
 },
 "Conservatory": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=DxPbXLPALnZdfi08xPWGWQ%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=YezSqQFGx5saRuSSX4l7MQ%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=vM8vR8nzhQVXdV5zbA5QOA%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=JnITBD5PDyNCrp5c1LkJMg%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=Y01R1k5mGYhBjCgQSGh8wA%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=GZlGKzxnNp_TbYrPHGxOkA%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=594ONLqqu8tfig1L5xManQ%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=_BFJzSmVXruUZxg40d39Vg%3D%3D"
 },
 "Riviera": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=xcQd35M04OCftZ5nvbXdfw%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=BwDuFYp8Y_Ob5croRcfXsA%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=RqaQ5Htv5UjkVE1F1jp59A%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=5uG-trZjtOj0EqXdiEv66Q%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=13vcEccCfLQ9bQl5LlQ2CQ%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=NjcVZWeOnXAXE3tdz8n50g%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=6MMKq3PWtxneVyBqLhQkrA%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=WRLP_H_X5BWkrW7suI0Nvw%3D%3D"
 },
 "Orchard": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=AORFiECtvYIgUFB8PaNMoA%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=tZrAbK5Hdp8IbnugvaqrMA%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=EoLf_JV5i5TSG77BSihviQ%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=unpBwrgBYB-TmMXfG9zhTg%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=cN_VxT54WhZ_RchtI_D-Jg%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=tsz_ghe_zoJNVqloywIpAQ%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=cbmGUeMdSL0rHChNe4YDTg%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=gsN3NyaIQ6wKv-jMI3Z9cg%3D%3D"
 },
 "Nordic": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=6BSMFzNuBshyRNYr24_CnA%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=P9xVHPAajYYAYfToBAXsZg%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=u5g6vj5PvZJecCHvn-vxgg%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=qNW9o1s2zDczShvahx-YfA%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=WfLr-9QRCOqkFCq5aLctmg%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=Tg6vkwKGnQhW310Rm9f4mg%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=dgduYhD7vHDRmjOBNXXlyQ%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=ddW9e-GaUQltPuIFrXrrZg%3D%3D"
 },
 "Winter": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=NA4fs_LJ6l6XmtoKCiLpzw%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=mcZzZjG06DWix-lI66Jo7Q%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=-EWue8v4mN3TT50x6Fz0uA%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=WQu4lxiLfK_UQAHTICQCwQ%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=1Vkvc-XdRdTwzQKJ7IXRBw%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=FAJ0KAxoGn9N2G1wTM47BQ%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=1_EpVPIUfYqwLnzWOFXgxA%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=ZYWO1RF6rtiVYcfMgXAF-Q%3D%3D"
 },
 "Chateau": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=R-fapqKj9yxbD6CehfE7zw%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=8C_PIT5hMCJVuC-SPaY_5A%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=0wz2Z6Q3Pcqj-4KX6OVqBQ%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=8Wz-q6_U5VP_rJn8LheTqw%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=pl5dpHc7Gr_aL-nFr2ugdA%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=lfNbVtzXT8oKZW5O2pQYxQ%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=WL6_W-j1PNf1K9Ujn6dLZw%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=4l-DIg31EzLdSjzWhhn8Hg%3D%3D"
 },
 "Woodlands": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=dTh_yoKxdTgoVLGHAR2ROg%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=ovrznKF_HoE-_u3cgdB0wQ%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=3htRZ6ewf5xA2HjdqM3hBg%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=h6j_C3glQJBns9noTeI9DQ%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=_w_miocHXX3DUztd62iWLA%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=6Rc-I5dZymEuttxBWKoXrw%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=gkMi1o4G_EfrtfRDkK72mg%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=cb9nlZxqpQ3btnhaUxna0A%3D%3D"
 },
 "Classic": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=ZdnN1ltRfTvCh9fgOTWxrg%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=JdzYlLSZ0fXfFdvL1yikCw%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=NpcHune5tQk9YoHPXDWHJA%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=YE65sm55ThgkPVST2ju5OA%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=ensZGCIgXJO5UWmBkFhNQQ%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=Sp-JUdTuusFWHPlVntV23A%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=u9FSafrrNW7cJX73ONDi6Q%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=cfiUhyfNMcrIJfDxl2nG6A%3D%3D"
 },
 "Minimal": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=JsQAmkzHTHd5wkzZ7aozwg%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=OvP9f4_7NaV9Uzqa9mYXpg%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=rC6GNkQcqyIKEYoYwE4HQQ%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=7U_IKoFgLPKteuVESTgfgA%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=5mWvkmPe7RmnP0ycuIQSnA%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=la_g2hRnhku7Mx8uGTlsnA%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=K9tQt5rBXVgqPEpjNJTlMw%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=R1UtD4OcVMa7CcSt3I-vYA%3D%3D"
 },
 "MidCentury": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=0QuJ_2YVN3QGIS7h2F2IIg%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=K-1psoFOKYCp7akRlGWbuQ%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=WODmU0wklqwKRjlRW6binA%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=mfK2wMpWqN-PvlDVqhGbAA%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=XG0cADOzzka2S_2t5Trf6g%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=x-GKzDr1uPZ-2xhb7BEuyg%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=KxpefGAp05yvxBJtVnS6Tg%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=c-H_DXAMoPFoqd1YaTGJoA%3D%3D"
 },
 "Nocturne": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=Ba7LBN26PyP-Xlhgb_uscQ%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=wpPaOkDbafyCkGWZt8cF8w%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=AM6Meb80PTfNdWca3Nd6Mg%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=IlFotV8OqGYm7OAkA3Wmng%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=yRozCxGYbSfp4646fbpqVA%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=ikJ1v77mCqj9tQR_beVrkw%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=oYg56y0gtvOg07DRYJttSA%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=14hTKZRsbPdwA8rgDKjzNg%3D%3D"
 },
 "Gold": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=p3OJgbcvBUYdOxAHCFAhww%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=HxeEQa0NVOeSHKd3fGx0Og%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=ipFq2YFcFhTAYMGKygAxrw%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=MbaoC5yuL-Zy3_UbB7NHyw%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=_86TyFpjmYyfhHz9iFx2fw%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=NFFIOim6aFEQcdIQpSjDZw%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=XEgULNz9ABUGNSB1nWjjoQ%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=YBFsn_9PMjWwQUfvBKfyhg%3D%3D"
 },
 "Vineyard": {
  "VI_The_Complete_Collection": "https://willowandgild.gumroad.com/l/cumsgm?option=KU-3paOyrwYOSEwdtOJ2_A%3D%3D",
  "I_The_Announcement": "https://willowandgild.gumroad.com/l/kyrnvj?option=BcrOZn00sRPY1S7XhHJBzQ%3D%3D",
  "Ia_Your_Wedding_Online": "https://willowandgild.gumroad.com/l/aoligf?option=PaCgPUlcvY-a1OjVd6Hkbg%3D%3D",
  "II_The_Planning": "https://willowandgild.gumroad.com/l/xqtshn?option=JdkLD6g2wEfN-PaCUWF4sA%3D%3D",
  "III_The_Invitation": "https://willowandgild.gumroad.com/l/umhtb?option=Z0kiAMnXHtYN7tvBVYylyQ%3D%3D",
  "IV_The_Ceremony": "https://willowandgild.gumroad.com/l/vuowab?option=eP4Cb5slC9yKFM-OxtWnQQ%3D%3D",
  "V_The_Reception": "https://willowandgild.gumroad.com/l/vazyke?option=HM65Y8UHpma6NZuqhQvU9Q%3D%3D",
  "VI_With_Thanks": "https://willowandgild.gumroad.com/l/qpytg?option=fSAMr_NmWzBX7Tev9OI1QA%3D%3D"
 }
};
COLLECTIONS.forEach(function (c) {
  var l = GUMROAD_LINKS[c.id];
  if (l && !c.gumroad) c.gumroad = l['VI_The_Complete_Collection'];
});

const COLLECTION_COUNT = COLLECTIONS.length;
const COLLECTION_COUNT_WORD = (function (n) {
  const w = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
             'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
             'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  return w[n] || String(n);
})(COLLECTIONS.length);

/* Rewrites any element carrying data-collection-count, so page copy stays true
   without each page hard-coding the number. */
/* A HEADLINE STARTS WITH A CAPITAL, AND THAT IS WHY index.html NEVER USED THIS.
   The painter only ever emitted lowercase, so 'Fifteen worlds, each complete'
   could not be wired to it without reading wrong, and the number was typed
   instead — then sat there through two new collections. data-collection-count
   ="cap" gives the mechanism a sentence-initial form so no page has to opt out
   of it for the sake of one letter. */
function paintCollectionCount() {
  document.querySelectorAll('[data-collection-count]').forEach(function (el) {
    var w = COLLECTION_COUNT_WORD;
    if (el.getAttribute('data-collection-count') === 'cap') {
      w = w.charAt(0).toUpperCase() + w.slice(1);
    }
    el.textContent = w;
  });
  const m = document.querySelector('meta[name="description"]');
  if (m && m.content.indexOf('{{count}}') !== -1) {
    m.content = m.content.replace('{{count}}', COLLECTION_COUNT_WORD);
  }
}
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', paintCollectionCount);
}


/* ---------------------------------------------------------------------------
   THE ASSET VERSION. ONE TOKEN, ONE PLACE, AND IT LIVES HERE ON PURPOSE.

   Fixed-name assets — Kyoto.webp, EnglishRose_hero.webp, every _cake and
   _chair — keep the same URL forever, so a browser that has one has it until
   something tells it otherwise. The lane folders are content-hashed and look
   after themselves; these do not.

   The token was declared THREE TIMES: bundle.html:261, collection.html:136,
   and INLINE in index.html's image src. Three copies drift, and they did —
   the pages sat on different dates for a week, which is why a corrected
   EnglishRose hero could be uploaded correctly and still not appear. Verified
   again 0906: site/assets/EnglishRose_hero.webp on disk is byte-identical to
   what heroes/EnglishRose.png produces. The asset was never wrong. The URL
   never changed, so nothing ever refetched it.

   Every page loads collections.js, so this is the one file all three share.
   BUMP THIS WHENEVER A FIXED-NAME ASSET CHANGES. Nothing else to touch.

   This works only because vercel.json makes the HTML and this file
   revalidate on every load — a stale collections.js would hold a stale token
   and the bump would never arrive. The two changes are one fix. */
const ASSET_V = '20260906';

/* ---------------------------------------------------------------------------
   dotImg() — A DOT IS AN IMAGE, NOT A STYLED BOX, AND THAT IS THE THIRD ATTEMPT.
   Samsung Browser's forced dark mode rewrites colour on elements and will not
   be talked out of it. Measured off Kelly's screenshots, Kyoto's blossom pink
   #E4BDBA rendered as:
        background-color        -> #AEB8B0   (inverted, on a light card)
        linear-gradient         -> #30110E   (darkened, on a dark card)
   Two techniques, two wrong colours, neither of them the value in this file.
   `color-scheme: light only` is declared on every page and is overridden anyway.
   AN <img> IS CONTENT, NOT STYLE. Force-dark leaves image pixels alone, so the
   dot is drawn as an SVG circle in a data URI and arrives exactly as authored —
   fill, gold ring and all. It also means the ring survives, which a border
   colour did not.
   --------------------------------------------------------------------------- */
function dotImg(hex, size) {
  size = size || 30;
  var r = size / 2 - 1.5;
  var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='" + size +
            "' height='" + size + "'><circle cx='" + (size / 2) + "' cy='" +
            (size / 2) + "' r='" + r + "' fill='" + hex +
            "' stroke='#A9853F' stroke-width='1.5'/></svg>";
  return "<img class='dot' width='" + size + "' height='" + size +
         "' alt='' src=\"data:image/svg+xml;utf8," + encodeURIComponent(svg) + "\">";
}
