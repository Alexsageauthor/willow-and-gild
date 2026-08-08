WEBSITE UPDATE — KYOTO — 2026-08-08
126 files to upload, 163 to delete. Four uploads, in this order.

THE GATE PASSED FIRST: qa_manifest.py Kyoto -> 141 refs, 141 present, 0 missing.
contents.js names only files that exist, so no tile can 404.

========================================================================
BEFORE YOU UPLOAD ANYTHING — TWO DELETIONS
========================================================================
Filenames are content-hashed, so a rebuild changes every name and the old ones
accumulate for ever if they are not removed. GitHub's web upload cannot delete,
so this is done by deleting the FOLDER.

  1. DELETE the folder  assets/kyoto/   (69 stale tiles live in it)
  2. DELETE the 94 loose .webp files at the REPO ROOT.
     These are orphans from an older run — menu-*.webp, sign-*.webp,
     placecards-*.webp and so on sitting beside index.html instead of inside
     assets/kyoto/. Nothing references them; the five that appeared to be
     referenced resolve from assets/kyoto/ instead, which the gate confirms.
     The full list is in DELETE_THESE.txt.

========================================================================
THEN UPLOAD, IN THIS ORDER — 99 FILES PER COMMIT IS THE LIMIT
========================================================================

  UPLOAD 1   assets/kyoto/            68 files
             every product tile, rebuilt. This is the one that replaces the
             blank forms: menus with dishes, place cards with names, table
             numbers, the Timeline, and the eight bundle portraits with no
             white mount.

  UPLOAD 2   assets/                  29 files
             the gallery views — plate, hero, chair, cake — with the defringed
             plates and the deshadowed chairs.

  UPLOAD 3   assets/shots/            26 files
             the product shots.

  UPLOAD 4   the repo ROOT             3 files
             contents.js   the catalogue: 56 product families
             portraits.js  the eight bundle portraits
             sitemap.xml   regenerated
             ROOT FILES LAST, ALWAYS. The catalogue must not name a tile before
             the tile is there, or every card 404s until the next commit.

========================================================================
ONE THING NOT FIXED, AND IT IS NOT MINE TO DECIDE
========================================================================
build_site_meta.py said:

    NOTE: ORIGIN is still the Vercel preview host. The sitemap is valid but it
    is advertising the wrong address — set the real domain in site.js and
    vercel.json, then run this again.

willowandgild.com is still not wired up. DEPLOY.md carries the exact JSON to
paste when it is. Bring the domain up in Vercel FIRST and confirm it loads,
THEN change site.js ORIGIN and vercel.json together and re-run
build_site_meta.py — change one without the other and the canonical tag and the
redirect point at different addresses, which is the fault that took the site
down before.

========================================================================
WHAT THIS UPDATE DOES NOT CHANGE
========================================================================
  · Find Your Seat still photographs blank (1.8% ink). It has no example;
    build_examples.py covers menus, place cards and signage only.
  · The Timeline still leads with a botanical, not the camera. The camera
    design has never been built and its art is 497px short of the A4 floor.
  · The digital/online product's "how it works" still describes PDFs and
    printing.
