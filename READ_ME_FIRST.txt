WEBSITE — INCREMENTAL UPDATE 5, 2026-08-08

TILES FIRST, contents.js LAST.
DELETE: nothing.

WHAT CHANGED

1. FIND YOUR SEAT NO LONGER PHOTOGRAPHS BLANK.  1.8% ink -> 6.97%
   It had no example. build_examples.py covered menus, place cards and signage
   and the POSTERS were never in it - the piece with the most to gain from one,
   being a chart of a hundred and twenty names. It is wired in now, ONE code
   path for both: the same lines that build empty as the deliverable build
   filled as the example, so they cannot drift.

2. THE TILE PICKER WAS ASKING ITS TWO QUESTIONS IN THE WRONG ORDER.
   It scored a page as (has_form_fields, -words), so a page with NO fields
   always won however empty it was - which is why the poster's hundred and
   twenty EMPTY RULED LINES beat a filled example carrying a hundred and thirty
   words. Now words come first.
   Reversing it alone broke The Invitation: its fillable beat its print page by
   ONE word and the tile came back wearing pale green field boxes. So words are
   banded to the nearest ten - near-equal pages tie and the fieldless one wins,
   a page with 130 words against 6 wins outright.
   A ONE-WORD DIFFERENCE IS NOISE. A HUNDRED-WORD DIFFERENCE IS THE ANSWER.
   The invitation suite was re-checked by eye afterwards and is clean print
   pages throughout.

3. THE PRINT SHOP GUIDE IS NOT AT FAULT - I WAS.
   I reported its footer sitting 3px off the gold rule. Re-measured: that page
   uses the TIGHT frame (inner rule at 26.2pt, 3.1% of the short side) and I
   had measured against the standard 7.2% inset, so I was reading the frame
   rule itself, not the content. The real clearance is 18.3pt. Nothing was
   changed on it. The 3px at its head is the masthead band, which is
   full-bleed by design.

GATE: qa_manifest.py Kyoto -> 148 refs, 148 present, 0 MISSING.
