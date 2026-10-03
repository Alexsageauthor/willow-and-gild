/* Bundle portraits, by collection folder and bundle id.
   Written by build_bundle_portraits.py. The filenames carry
   a content hash because /assets/ is served immutable for a
   year - see the note in that script. Do not hand-edit. */
const PORTRAITS = {
  "artdeco": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-4ac7a640aa.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-7d4a1bf0d9.webp",
    "II_The_Planning": "bundle-II_The_Planning-3c78f1810e.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-2908b1e2bb.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-bdaf0f752c.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-fb45b89513.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-0562028316.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-b9352b46c6.webp",
    "V_The_Reception": "bundle-V_The_Reception-55df90dbe0.webp"
  },
  "bluewillow": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-7df273f828.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-02ae078603.webp",
    "II_The_Planning": "bundle-II_The_Planning-5a3f137560.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-8a9e5634f8.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-bf5c18cba7.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-7a3f432cce.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-d0dec9bd41.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-c7a4b26a8d.webp",
    "V_The_Reception": "bundle-V_The_Reception-fabd5147ea.webp"
  },
  "chateau": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-53d16ae27e.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-52ce68047a.webp",
    "II_The_Planning": "bundle-II_The_Planning-1a689f8fc6.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-7c2d547c46.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-1926a25270.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-68e9fa3d0b.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-47b02ce171.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-860caa898c.webp",
    "V_The_Reception": "bundle-V_The_Reception-8870a428dd.webp"
  },
  "classic": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-92134d0e48.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-a92af6d4f2.webp",
    "II_The_Planning": "bundle-II_The_Planning-065b8f8cf6.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-319a5d901b.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-1905e476c9.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-8baf0fdb41.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-04763e8bd1.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-2ae3dfdde5.webp",
    "V_The_Reception": "bundle-V_The_Reception-d032f5681b.webp"
  },
  "conservatory": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-38e8fe8f61.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-26f77f3353.webp",
    "II_The_Planning": "bundle-II_The_Planning-5cfd471c46.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-b1a9a020d4.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-5eaf62e59b.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-91a6d50983.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-8ef17fef1a.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-f53907f6e0.webp",
    "V_The_Reception": "bundle-V_The_Reception-039b2efd8e.webp"
  },
  "englishrose": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-0fa5144506.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-7bf1423953.webp",
    "II_The_Planning": "bundle-II_The_Planning-f2a9503b67.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-a6e0228ded.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-94b057bf63.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-dfb5f2f6f8.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-56cc66a1f8.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-b8c9a294a8.webp",
    "V_The_Reception": "bundle-V_The_Reception-c53bddbf7f.webp"
  },
  "gold": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-853363d3ef.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-7337ab1b60.webp",
    "II_The_Planning": "bundle-II_The_Planning-f6b6be1d4f.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-9befa86198.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-cacb5d9105.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-10a1f82bc0.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-647b4b4ef2.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-2db833197f.webp",
    "V_The_Reception": "bundle-V_The_Reception-47d867c6cd.webp"
  },
  "kyoto": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-9463d469ae.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-429227b36f.webp",
    "II_The_Planning": "bundle-II_The_Planning-96286c4c74.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-3a45d2bb39.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-28bea9d39e.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-b34f3aa626.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-f67f63fea3.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-55cf05e763.webp",
    "V_The_Reception": "bundle-V_The_Reception-c7d7536a2f.webp"
  },
  "midcentury": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-bff1f02d13.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-b6301e73ab.webp",
    "II_The_Planning": "bundle-II_The_Planning-2c79f957d4.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-92db32b455.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-5dc1e25def.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-a64771c3cd.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-8d0373d9f9.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-1489bc05c0.webp",
    "V_The_Reception": "bundle-V_The_Reception-c03e41e3dc.webp"
  },
  "minimal": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-d983afe5ac.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-47105dbc49.webp",
    "II_The_Planning": "bundle-II_The_Planning-0bfc50301f.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-61add790ad.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-10feddb797.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-b81a05e610.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-e454b7ce57.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-986e0ff462.webp",
    "V_The_Reception": "bundle-V_The_Reception-851719dbe2.webp"
  },
  "nocturne": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-6b5dd8f5a0.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-6acab4907a.webp",
    "II_The_Planning": "bundle-II_The_Planning-5e4a863124.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-3be1916f88.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-af8c78bac3.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-bc9f29376d.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-ef40772ea3.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-75f5c26e44.webp",
    "V_The_Reception": "bundle-V_The_Reception-ee206ab0a0.webp"
  },
  "nordic": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-fa91e9e2f9.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-1726c7d112.webp",
    "II_The_Planning": "bundle-II_The_Planning-59c4b5c3ee.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-0842d7a4d5.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-04fff2b07d.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-a25c6c3c2c.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-3bf94fefc9.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-668fc64719.webp",
    "V_The_Reception": "bundle-V_The_Reception-9a1cfe1c77.webp"
  },
  "olivegold": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-2f5bcfbedd.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-56773383cb.webp",
    "II_The_Planning": "bundle-II_The_Planning-d68138f961.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-1ab4e0422f.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-808b4b6dfb.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-519ac753db.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-e022276155.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-a4a8af6f62.webp",
    "V_The_Reception": "bundle-V_The_Reception-f79d58bbbc.webp"
  },
  "orchard": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-8d58ef1cc4.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-6eca109121.webp",
    "II_The_Planning": "bundle-II_The_Planning-b23f9296d3.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-0bb0ba63f9.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-763901cf65.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-eb6075d463.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-74b6eb5532.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-76768ac9dc.webp",
    "V_The_Reception": "bundle-V_The_Reception-ed8fc08590.webp"
  },
  "riviera": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-4d677d4db2.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-136769d239.webp",
    "II_The_Planning": "bundle-II_The_Planning-5178b3681e.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-4c0794904f.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-95fdc50faf.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-c3145abaa3.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-a926ae29b7.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-624db39d3a.webp",
    "V_The_Reception": "bundle-V_The_Reception-2fd649e599.webp"
  },
  "vineyard": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-6c653f3a7d.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-29ced8f0c8.webp",
    "II_The_Planning": "bundle-II_The_Planning-22781aa45c.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-6e94a3f029.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-503bdb83c9.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-953f9b6f37.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-bab6074b7e.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-3e6b1bf000.webp",
    "V_The_Reception": "bundle-V_The_Reception-235a078b69.webp"
  },
  "winter": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-206da7b2bd.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-7262cda56e.webp",
    "II_The_Planning": "bundle-II_The_Planning-ea74a9fd81.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-a1df19344a.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-3c8a9af571.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-f9d1058f3a.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-f8a44531d7.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-5da0171f59.webp",
    "V_The_Reception": "bundle-V_The_Reception-63382fb977.webp"
  },
  "woodlands": {
    "+_The_Signs_LargeFormat": "bundle-+_The_Signs_LargeFormat-eb4ef241ae.webp",
    "III_The_Invitation": "bundle-III_The_Invitation-a4df2c5872.webp",
    "II_The_Planning": "bundle-II_The_Planning-65f41ef7ee.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-258837f7c5.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-e6ad23ac16.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-1281b640d4.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-8e7b6a061e.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-9b2713098c.webp",
    "V_The_Reception": "bundle-V_The_Reception-7c4dd7f914.webp"
  }
};
