/* ---------------------------------------------------------------------------
   THE BUNDLES — six chapters, in the order a wedding happens, plus the
   Complete Collection.

   WHY THIS REPLACED THE OLD EIGHT
   They mixed chronology (Planning, Invitation, Day-Of, Thank You) with FORMAT
   (Digital Website, Digital Announcement), so there was no order to follow and
   no obvious place to start. Two were not viable listings: one shipped ZERO
   files and one was a single PDF. And four families — seat cards, envelopes,
   guest labels, the website kit — had no home at all.

   THE LADDER IS GOOD / BETTER / BEST
   single product -> chapter -> the Complete Collection. The Complete Collection
   is not really a seventh product, it is the ANCHOR: it makes each chapter look
   reasonable, which is why wasPrice carries the if-bought-separately total.

   CHAPTER I IS THE ACQUISITION PRODUCT — bought the week a couple gets engaged,
   the only thing anyone needs on day one. Its job is to get someone into the
   collection, not to carry margin. Everyone who buys it has five ahead of them.

   CHAPTER V IS WHERE THE MONEY IS — the widest range, bought under time
   pressure by someone who has already trusted the studio three times.

   PRICES ARE PLACEHOLDERS IN NZD, unchecked against the market. The LADDER
   matters more than any single number.

   ORDER IS A DESIGN DECISION — do not re-sort. It is the wedding's own order.
   --------------------------------------------------------------------------- */

const BUNDLES = [
  { id: 'VI_The_Complete_Collection', chapter: '—', name: 'The Complete Collection',
    price: 145, wasPrice: 254, pages: 585, files: 178, hero: true,
    when: 'whenever you like',
    line: 'Every chapter, in one download.',
    sell: 'Buy it once and never think about paper again. Every piece already matches, so nothing has to be chosen twice — and it costs far less than the chapters bought separately.',
    who: 'For couples who would rather decide once.',
    shots: ['invitation','menu_hero','placecards','seating','planner','tablenumber','tags','thankyou'],
    includes: [
      'All six chapters, start to finish',
      'The Wedding Planner and the Budget Planner',
      'The Invitation Suite — type your names once, every card fills',
      'Seating plan, six table number designs, four place card options',
      'Menus, favour tags, signage, petal cones and seat cards',
      'The Thank You bundle and the keepsakes',
      'Your wedding website kit and the guest list',
    ] },

  { id: 'I_The_Announcement', chapter: 'I', name: 'The Announcement',
    price: 14, pages: 4, files: 9,
    when: 'the week you get engaged',
    line: 'Tell everyone.',
    sell: 'The first thing you will need, and the only thing you need yet \u2014 announcement graphics for the moment itself, and your Save the Date.',
    who: 'For couples who just said yes.',
    shots: ['savethedate'],
    includes: [
      'Six engagement announcement graphics \u2014 square and story',
      'The Save the Date \u2014 print and fillable',
      'A calendar file guests can tap to save the date',
    ] },

  /* Ia SITS BESIDE I, NOT AFTER IT. The split is whether a PRINTER is involved,
     not the calendar: a couple who wants a wedding website has a different job,
     a different search term, and zero printing friction \u2014 which is the
     highest-converting thing on the shelf. Buried inside a printable chapter it
     was invisible to the person actually looking for it. */
  { id: 'Ia_Your_Wedding_Online', chapter: 'I\u2009a', name: 'Your Wedding, Online',
    price: 22, pages: 5, files: 10, digital: true,
    when: 'alongside the announcement',
    line: 'No printer required.',
    sell: 'A wedding website in your collection\u2019s own colours, live in ten minutes with no code \u2014 and a working RSVP form, so replies land in your inbox instead of your letterbox.',
    who: 'For couples collecting RSVPs online.',
    shots: ['details','rsvp'],
    includes: [
      'The wedding website \u2014 edit the words, drag the folder online',
      'A working RSVP form, set up in two minutes',
      'QR cards for the RSVP and the details',
      'The Paperless RSVP guide',
      'A calendar file guests can tap',
    ] },

  { id: 'II_The_Planning', chapter: 'II', name: 'The Planning',
    price: 42, pages: 67, files: 14,
    when: 'the first few months',
    line: 'Everything in one place, before it gets away from you.',
    sell: 'The planner and the budget in the collection\u2019s own hand — the vendor directory, the run sheet, the gift tracker, and a budget that adds itself up.',
    who: 'For the couple who has just started making lists.',
    shots: ['planner','budget'],
    includes: [
      'The Wedding Planner — A4 and US Letter, print or fillable',
      'The Budget Planner — printable pages and a spreadsheet that calculates',
      'The guest list template — the sheet everything else fills from',
      'Six vendor brief sheets',
    ] },

  { id: 'III_The_Invitation', chapter: 'III', name: 'The Invitation',
    price: 48, pages: 42, files: 26,
    when: 'about six months before',
    line: 'The first thing anyone sees.',
    sell: 'Type your names once and every card in the suite fills itself — invitation, details, RSVP, order of service. The envelope liners and both label sheets are in here too.',
    who: 'For the couple at the post office.',
    shots: ['invitation','savethedate','details','rsvp'],
    includes: [
      'The Invitation Suite — all synced, one document',
      'Invitation, Save the Date, Details and RSVP cards',
      'The Order of Service',
      'Envelope liners, guest address labels and return labels',
      'The envelope etiquette guide — who to address, and how',
    ] },

  { id: 'IV_The_Ceremony', chapter: 'IV', name: 'The Ceremony',
    price: 34, pages: 26, files: 26,
    when: 'the day before, and the aisle',
    line: 'The part everyone is quiet for.',
    sell: 'Reserved seats for the people who should be in the front row, an order of service your guests can follow, and petal cones for the walk back down.',
    who: 'For the couple thinking about the aisle, not the tables.',
    shots: ['orderofservice','welcome'],
    includes: [
      'The Order of Service',
      'Reserved seat cards — tent and flat',
      'Petal cones for the confetti moment',
      'In Loving Memory, Unplugged, Guest Book and Timeline signs',
      'The rehearsal dinner invitation and menu',
      'The welcome bag card',
    ] },

  { id: 'V_The_Reception', chapter: 'V', name: 'The Reception',
    price: 68, pages: 427, files: 85,
    when: 'the last six weeks',
    line: 'The room, and everything on the tables.',
    sell: 'The whole reception in one download. The seating plan is cut out and moved around, so nobody rubs anything out — and the guest list fills the place cards for you.',
    who: 'For the couple six weeks out with a table plan to solve.',
    shots: ['seating','placecards','tablenumber','menu_hero','menu_plate','tags'],
    includes: [
      'The seating plan — cut-out tables you can move around',
      'The Find Your Seat poster',
      'Four place card options, six table number designs',
      'Six menu designs — mix and match with the table numbers',
      'Four favour tag designs, and drink tags for the glasses',
      'Bar, Cards & Gifts and Welcome signs',
      'Toast and reading cards, and the advice card',
    ] },

  { id: 'VI_With_Thanks', chapter: 'VI', name: 'With Thanks',
    price: 30, pages: 31, files: 25,
    when: 'afterwards',
    line: 'The last thing, and the one people keep.',
    sell: 'Thank-you cards that fill from the gift tracker, so nobody is forgotten — plus the keepsakes worth writing while it is still fresh.',
    who: 'For the couple at the kitchen table with a pile of cards.',
    shots: ['thankyou'],
    includes: [
      'Thank You cards and the gift tracker',
      'The Vows keepsake and the Anniversary letter',
      'Open When letters',
      'The Wedding Party thank-you',
      'A photo card, and a Canva frame to make your own',
      'Return address labels and the etiquette guide',
    ] },
];
