/* Bundle portraits, by collection folder and bundle id.
   Written by build_bundle_portraits.py. The filenames carry
   a content hash because /assets/ is served immutable for a
   year - see the note in that script. Do not hand-edit. */
const PORTRAITS = {
  "artdeco": {
    "III_The_Invitation": "bundle-III_The_Invitation-43d9975073.webp",
    "II_The_Planning": "bundle-II_The_Planning-04c14aa527.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-02604b2edd.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-b890eea994.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-f569b2ee03.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-9464adba05.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-fbbd4e231c.webp",
    "V_The_Reception": "bundle-V_The_Reception-1b562ded77.webp"
  },
  "bluewillow": {
    "III_The_Invitation": "bundle-III_The_Invitation-e70f7bb31d.webp",
    "II_The_Planning": "bundle-II_The_Planning-0367f73a06.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-f9066b789c.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-6975d44c6c.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-ec8aab0277.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-b6058bf5d5.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-26a55c3e39.webp",
    "V_The_Reception": "bundle-V_The_Reception-be1656fefe.webp"
  },
  "classic": {
    "III_The_Invitation": "bundle-III_The_Invitation-7e4502def4.webp",
    "II_The_Planning": "bundle-II_The_Planning-4b8aed88bf.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-818bf9e963.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-dc0508fb75.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-6f5e06961d.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-dcf97fc698.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-7644f71997.webp",
    "V_The_Reception": "bundle-V_The_Reception-1d1593788c.webp"
  },
  "conservatory": {
    "III_The_Invitation": "bundle-III_The_Invitation-2ceb412d73.webp",
    "II_The_Planning": "bundle-II_The_Planning-fd8aad5fab.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-927d06b762.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-123c7e22a4.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-f13f1f77d1.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-37840cd5fe.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-8ec8ee9ae8.webp",
    "V_The_Reception": "bundle-V_The_Reception-c8fd5ecfc6.webp"
  },
  "englishrose": {
    "III_The_Invitation": "bundle-III_The_Invitation-247991c5f1.webp",
    "II_The_Planning": "bundle-II_The_Planning-5ee8baa3e1.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-c1e5581822.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-5a275babc3.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-8d5681e32f.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-0815adc4c5.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-f47dfc8bc5.webp",
    "V_The_Reception": "bundle-V_The_Reception-801f38fcc3.webp"
  },
  "kyoto": {
    "III_The_Invitation": "bundle-III_The_Invitation-8855c39533.webp",
    "II_The_Planning": "bundle-II_The_Planning-f0bce6ecb8.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-47831885bf.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-3a752c76c8.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-636d45ca19.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-0051a100c7.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-ba0a77dce4.webp",
    "V_The_Reception": "bundle-V_The_Reception-58d0bc152f.webp"
  },
  "midcentury": {
    "III_The_Invitation": "bundle-III_The_Invitation-92dfb29d7d.webp",
    "II_The_Planning": "bundle-II_The_Planning-3e606ce91c.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-9e1d20a89f.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-98cd984d4a.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-8152b2dbdf.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-9c3bf29ce4.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-9bd848b6e5.webp",
    "V_The_Reception": "bundle-V_The_Reception-5fa5f9637c.webp"
  },
  "orchard": {
    "III_The_Invitation": "bundle-III_The_Invitation-d2662affee.webp",
    "II_The_Planning": "bundle-II_The_Planning-f21b41f580.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-715f118ee0.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-f20bb04720.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-9f2ca8188a.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-da65035961.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-003587cb21.webp",
    "V_The_Reception": "bundle-V_The_Reception-7b4a27080d.webp"
  },
  "riviera": {
    "III_The_Invitation": "bundle-III_The_Invitation-a609d79e60.webp",
    "II_The_Planning": "bundle-II_The_Planning-e0361f27ac.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-aefe1f4027.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-f630d1e68c.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-5791fc9c4e.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-beb8f34217.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-234037e826.webp",
    "V_The_Reception": "bundle-V_The_Reception-21d578dbf5.webp"
  },
  "winter": {
    "III_The_Invitation": "bundle-III_The_Invitation-f466f245ce.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-ec03faadb5.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-c001885c76.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-2d33cb0878.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-1a8d47fc16.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-ef32db6a1b.webp"
  },
  "woodlands": {
    "III_The_Invitation": "bundle-III_The_Invitation-cac310190a.webp",
    "II_The_Planning": "bundle-II_The_Planning-84d6d2e145.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-8f4eccc2ed.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-239fe327ba.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-60b516c16f.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-5fe09ac1e0.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-cf73960b53.webp",
    "V_The_Reception": "bundle-V_The_Reception-3ef0ad1c0d.webp"
  }
};
