WEBSITE — INCREMENTAL UPDATE 4, 2026-08-08

28 FILES.

  assets/kyoto/    27 files   the engagement announcements, re-photographed
  contents.js       1 file    -> the REPO ROOT

TILES FIRST, contents.js LAST. The catalogue must not name a tile before the
tile is on the server.

DELETE: nothing. The superseded engagement-*.webp are harmless orphans and go
with the next full assets/kyoto/ replacement.

WHY
The names and the date sat 6px off the inner gold rule, and 15px off each
other. Both are now measured rather than set as a fraction of the page:

    content to the bottom rule      6px  ->  49px   (on a 1080 canvas)
    names to date                  15px  ->  29px

The names-to-date gap was H*0.064 - 69px between the two baselines while the
script names are 54px tall, so the real gap was fifteen pixels. A fraction of
the page says where a line STARTS; it says nothing about where the previous
line ENDED.

WHAT ELSE WENT WRONG, RECORDED SO IT DOES NOT REPEAT
This had already been fixed once this morning. When the missing
session_build_scripts were uploaded and copied in, the copy restored the
ORIGINAL of a file that had already been corrected - so the fix vanished
silently and the fault came back looking like it had never been fixed.
It is now written into BIBLE.txt and sits at item 1a of the handover's open
list: DIFF BEFORE YOU COPY, and re-measure these five things any time that
directory is refreshed from an upload.

STILL OPEN IN THIS GROUP
  The Print Shop Guide's footer line sits about 3px off the inner gold rule -
  the same fault on a different product. Not touched in this update.

GATE: qa_manifest.py Kyoto -> 148 refs, 148 present, 0 MISSING.
