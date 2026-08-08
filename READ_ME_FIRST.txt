WEBSITE FILES — KYOTO — 2026-08-08, END OF SESSION
64 files. Everything in here is freshly built; nothing is stale.

HOW STALENESS WAS CHECKED, NOT ASSUMED
Every built file was compared by TIMESTAMP against the source it derives from,
and one was caught: assets/shots/ was 12 hours older than the canon it is
photographed from, so it was rebuilt before this zip was cut. The others
verified clean:

    contents.js        21:09  vs canon 20:22   ok
    portraits.js       21:01  vs prop art 20:10 ok
    assets/kyoto/      21:08  vs canon 20:22   ok
    assets/*.webp      20:12  vs prop art 20:10 ok
    assets/shots/      08:26  vs canon 20:22   STALE -> rebuilt, now 21:10
    sitemap.xml        21:09  vs contents.js   ok

GATE: qa_manifest.py Kyoto -> 148 refs, 148 present, 0 MISSING.

========================================================================
UPLOAD IN THIS ORDER — 99 FILES PER COMMIT IS THE LIMIT
========================================================================
  1  assets/          45 files   the gallery views: plate, hero, chair, cake.
                                 LOOSE FILES, beside the kyoto/ and shots/
                                 folders, NOT inside them. This is the batch
                                 carrying the defringed plates, the re-keyed
                                 chairs and every shadow cut.
  2  assets/kyoto/     9 files   all eight bundle portraits, and the Timeline
                                 tile.
  3  assets/shots/     8 files   the rebuilt product shots.
  4  the repo ROOT     2 files   contents.js, portraits.js
                                 ROOT LAST, ALWAYS. The catalogue must not name
                                 a tile before the tile is on the server.
     (sitemap.xml is in this zip too but do NOT upload it yet - see below.)

DELETE
  108 superseded assets/kyoto/*.webp are listed in DELETE_THESE.txt. They are
  content-hashed so nothing references them any more; they are dead weight, not
  a fault. Easiest is to delete the assets/kyoto/ FOLDER and re-upload it whole
  from the previous zips plus this one.

========================================================================
WHY THESE 64 CHANGED
========================================================================
  · plates      cast shadows cut - 12 by rim, 3 by chroma; the orphan halo six
                pixels outside Kyoto's rim is gone
  · chairs      floor shadows cut, enclosed slat holes opened
  · signage     the plinth crescents, the basket's ring, 41 pockets in the
                guest book
  · portraits   no cream mount; ground now clears the banner by a measured
                1.20:1; short chapters spread across their layout instead of
                bunching in the tightest corner, with the stride capped at two
                slots so a two-piece stack still overlaps
  · Planning    now shows the seating plan as its third piece
  · Timeline    leads with the clock
  · menus       the word MENU centred on its ink between the two rules

========================================================================
DO NOT UPLOAD sitemap.xml YET
========================================================================
build_site_meta.py says ORIGIN is still the Vercel preview host, so the sitemap
is valid but advertising the wrong address. Bring willowandgild.com up in Vercel
FIRST, confirm it loads, THEN change site.js and vercel.json TOGETHER and re-run
build_site_meta.py. Changing one without the other points the canonical tag and
the redirect at different addresses, which is what took the site down before.
DEPLOY.md has the exact JSON.
