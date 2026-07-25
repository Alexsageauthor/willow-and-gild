/* ---------------------------------------------------------------------------
   THE BUNDLES. One source of truth, same pattern as collections.js.

   A bundle page sells a SCOPE — "this much, for this money" — where a
   collection page sells a world. So each entry carries what is actually in it,
   the page count, who it is for, and the two shopfront links.

   `etsy` and `gumroad` behave exactly as they do on a collection: a button is
   drawn only if its link exists, so a blank never becomes a dead button.

   PRICES ARE PLACEHOLDERS IN NZD and have not been checked against the market.
   The ladder matters more than any single number: the Complete Collection has
   to look like obvious value against buying three separately, which at 125
   against 45+35+69 it does.
   --------------------------------------------------------------------------- */

const BUNDLES = [
  { id: '4_Complete_Collection', sell: 'Buy it once and never think about paper again. Every piece already matches, so nothing has to be chosen twice.', shots: ['suite','menus','placecards','signage','seating','planners','numbers','tags'], name: 'The Complete Collection',
    price: 125, pages: 736, files: 132, hero: true,
    line: 'Everything, in one download.',
    who: 'For couples who want the whole day to match — and would rather decide once.',
    includes: [
      'The Invitation Suite — 11 pages, all synced',
      'The Wedding Planner — 10 pages, A4 and US Letter',
      'The Budget Planner — printable pages and a spreadsheet',
      'Six menus, five place card options, six table number designs',
      'Seating plan and a Find Your Seat poster',
      'Seven signs, four favour tag designs',
      'The Thank You Bundle and Day-Of Coordination',
      'Six vendor briefs and the Wedding Website Kit',
      'Keepsakes, rehearsal dinner, welcome bags and more',
    ] },

  { id: '2_Invitation_Suite', sell: 'The first thing anyone sees. Type your names once and every card in the suite fills — including the envelopes and the address labels.', shots: ['invitation','suite'], name: 'The Invitation Suite',
    price: 35, pages: 11, files: 5,
    line: 'Save the date to RSVP, all from one sheet.',
    who: 'For couples who only need the paper that goes in the post.',
    includes: [
      'Save the Date',
      'The Invitation',
      'Details card',
      'RSVP card, and a QR version if you would rather reply online',
      'Order of Service',
      'Envelope face, envelope liner and return address labels',
      'Type your names once on the master sheet — every page fills',
    ] },

  { id: '1_Planning_Bundle', sell: 'The part of a wedding nobody photographs and everybody dreads. Made properly, so the lists and the budget are somewhere you do not mind looking.', shots: ['planners'], name: 'The Planning Bundle',
    price: 45, pages: 88, files: 8,
    line: 'The paperwork, made beautiful.',
    who: 'For the early months, when it is all lists and budgets.',
    includes: [
      'The Wedding Planner — 10 pages, print or fillable',
      'The Budget Planner — printable pages plus a palette-matched spreadsheet',
      'Guest list template',
      'A4 and US Letter throughout',
    ] },

  { id: '3_Reception_Decor', sell: 'The room, in one download. Menus, place cards, table numbers, signs and the seating plan — designed together, so the table looks composed rather than collected.', shots: ['menus','placecards','numbers','signage','seating','tags'], name: 'Reception &amp; Decor',
    price: 69, pages: 383, files: 49,
    line: 'Everything on the table, and the signs around it.',
    who: 'For couples printing their own reception, and nothing else.',
    includes: [
      'Six menu designs — one to five courses, every line editable',
      'Five place card options across two structures',
      'Six table number designs, twelve numbers each',
      'Seating plan and a Find Your Seat poster',
      'Seven signs — Welcome, Unplugged, Guest Book, Cards &amp; Gifts, The Bar, In Loving Memory, The Timeline',
      'Four favour tag designs',
    ] },

  { id: '8_DayOf_Coordination', sell: 'The document you hand your planner and your suppliers. One master sheet fills all nine pages, so nobody works from an out-of-date version.', shots: ['signage','menus'], name: 'Day-Of Coordination',
    price: 29, pages: 22, files: 14,
    line: 'The nine pages that keep the day on time.',
    who: 'For the couple, the planner and every supplier who needs the plan.',
    includes: [
      'A master details sheet that fills the whole document',
      'Order of Service and The Timeline',
      'Six vendor briefs — photographer, florist, caterer, music, officiant, hair and make-up',
      'Menus for the day, filled from the same master sheet',
    ] },

  { id: '5_ThankYou_Bundle', sell: 'Written last, when you are tired. The tracker means nobody is missed and nothing is written twice.', shots: ['suite'], name: 'The Thank You Bundle',
    price: 25, pages: 12, files: 6,
    line: 'The last thing you send, and the easiest to leave too late.',
    who: 'For afterwards — with a tracker so nobody is missed.',
    includes: [
      'Thank You cards',
      'Envelope face, liner and return address labels',
      'A gift and thank-you tracker',
      'Your details typed once, carried through every page',
    ] },

  { id: '6_Digital_Wedding_Kit', sell: 'A wedding website you own, free to host, with a working RSVP. No monthly fee and no third party holding your guest list.', shots: [], name: 'The Digital Wedding Kit',
    price: 22, pages: 1, files: 6,
    line: 'Your wedding, online.',
    who: 'For couples doing as much as possible without paper.',
    includes: [
      'A complete one-page wedding website — no coding, free to host',
      'Working RSVP and guest book forms',
      'Save the date, order of the day, travel and accommodation sections',
      'A calendar file guests can add in one tap',
      'The Paperless RSVP guide',
    ] },

  { id: '7_Digital_Announcement_Set', sell: 'Ready to post the day you decide to tell people. Nothing to design, nothing to edit.', shots: [], name: 'The Digital Announcement Set',
    price: 16, pages: 0, files: 7,
    line: 'For the post before the post.',
    who: 'For announcing it online before anything is printed.',
    includes: [
      'Engagement announcement graphics, sized for social',
      'Matching story and grid formats',
      'Ready to post — no editing needed',
    ] },
];
