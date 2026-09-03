/* Bundle portraits, by collection folder and bundle id.
   Written by build_bundle_portraits.py. The filenames carry
   a content hash because /assets/ is served immutable for a
   year - see the note in that script. Do not hand-edit. */
const PORTRAITS = {
  "artdeco": {
    "III_The_Invitation": "bundle-III_The_Invitation-3468ad140d.webp",
    "II_The_Planning": "bundle-II_The_Planning-2f1d147e98.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-bd20c0c73e.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-6fd3304df0.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-fb45b89513.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-48922e5c03.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-6e8a765947.webp",
    "V_The_Reception": "bundle-V_The_Reception-ecce5e3bcc.webp"
  },
  "bluewillow": {
    "III_The_Invitation": "bundle-III_The_Invitation-5823ee1fda.webp",
    "II_The_Planning": "bundle-II_The_Planning-7b741a0030.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-e65b73e1c7.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-3b88e6b0dc.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-f473a0c062.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-013243aa78.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-13484e9883.webp",
    "V_The_Reception": "bundle-V_The_Reception-d0fdcba867.webp"
  },
  "chateau": {
    "III_The_Invitation": "bundle-III_The_Invitation-b79ff43a86.webp",
    "II_The_Planning": "bundle-II_The_Planning-6cdaceed8c.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-b361d07349.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-e79b91edc3.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-69529d9f6b.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-195c53ecaa.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-b13eafd0ba.webp",
    "V_The_Reception": "bundle-V_The_Reception-6c17089c16.webp"
  },
  "classic": {
    "III_The_Invitation": "bundle-III_The_Invitation-48ba91fb26.webp",
    "II_The_Planning": "bundle-II_The_Planning-b18fb827f4.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-cf540ef78c.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-469e880306.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-8baf0fdb41.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-640f6c18d8.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-76fe40b96a.webp",
    "V_The_Reception": "bundle-V_The_Reception-88b57ce07d.webp"
  },
  "conservatory": {
    "III_The_Invitation": "bundle-III_The_Invitation-63dc6e5c43.webp",
    "II_The_Planning": "bundle-II_The_Planning-db3d699ada.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-285db3958e.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-5f32f3821c.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-91a6d50983.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-60e927d3b3.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-3b81b8465c.webp",
    "V_The_Reception": "bundle-V_The_Reception-9a3460ad49.webp"
  },
  "englishrose": {
    "III_The_Invitation": "bundle-III_The_Invitation-7bf1423953.webp",
    "II_The_Planning": "bundle-II_The_Planning-6dadf0f3f9.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-c0fa564a90.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-6f1d613eb8.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-dfb5f2f6f8.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-9a61ddd6a0.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-16958916a5.webp",
    "V_The_Reception": "bundle-V_The_Reception-129dd958be.webp"
  },
  "kyoto": {
    "III_The_Invitation": "bundle-III_The_Invitation-903533dffe.webp",
    "II_The_Planning": "bundle-II_The_Planning-43679a268e.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-7508565e0c.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-833ef9be63.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-b34f3aa626.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-e6fdc6eb07.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-b50280f374.webp",
    "V_The_Reception": "bundle-V_The_Reception-8b54c83fa6.webp"
  },
  "midcentury": {
    "III_The_Invitation": "bundle-III_The_Invitation-c6914578ce.webp",
    "II_The_Planning": "bundle-II_The_Planning-eb6f6b34ca.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-d1a980d1f7.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-cc23e3622e.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-a64771c3cd.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-22248a02d7.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-a19465bee1.webp",
    "V_The_Reception": "bundle-V_The_Reception-3809a80381.webp"
  },
  "minimal": {
    "III_The_Invitation": "bundle-III_The_Invitation-b49ba8a9ca.webp",
    "II_The_Planning": "bundle-II_The_Planning-a8ccaa6800.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-3d6c9fb0da.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-d0b9f40c89.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-b81a05e610.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-8457b3f192.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-d5414fd231.webp",
    "V_The_Reception": "bundle-V_The_Reception-2b6dd27507.webp"
  },
  "nordic": {
    "III_The_Invitation": "bundle-III_The_Invitation-4f47dd3b8d.webp",
    "II_The_Planning": "bundle-II_The_Planning-10093cbeae.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-65142c293c.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-dcf9962a54.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-a25c6c3c2c.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-186d529f83.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-ff8eda13fa.webp",
    "V_The_Reception": "bundle-V_The_Reception-3141b7a253.webp"
  },
  "olivegold": {
    "III_The_Invitation": "bundle-III_The_Invitation-a45c33f57f.webp",
    "II_The_Planning": "bundle-II_The_Planning-1fb0bb9848.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-7ae3e05d19.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-162065c114.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-519ac753db.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-0d6341c401.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-7a05d4cdce.webp",
    "V_The_Reception": "bundle-V_The_Reception-f152312085.webp"
  },
  "orchard": {
    "III_The_Invitation": "bundle-III_The_Invitation-d55c138273.webp",
    "II_The_Planning": "bundle-II_The_Planning-35e992fd74.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-a543d41840.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-3c12d3eb34.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-eb6075d463.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-103d01e4f1.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-1649f3bf95.webp",
    "V_The_Reception": "bundle-V_The_Reception-4ca3863601.webp"
  },
  "riviera": {
    "III_The_Invitation": "bundle-III_The_Invitation-136769d239.webp",
    "II_The_Planning": "bundle-II_The_Planning-297713bc4d.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-067a2b7ffa.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-868fe7210c.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-c3145abaa3.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-6a71b677fa.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-41fecf04d5.webp",
    "V_The_Reception": "bundle-V_The_Reception-d2708e05d2.webp"
  },
  "winter": {
    "III_The_Invitation": "bundle-III_The_Invitation-34542fd2a4.webp",
    "II_The_Planning": "bundle-II_The_Planning-4ae18b6437.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-3ce9ae7704.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-54bbd513f7.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-f9d1058f3a.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-29a5185fe0.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-e23aaebcb9.webp",
    "V_The_Reception": "bundle-V_The_Reception-7ee1a097cf.webp"
  },
  "woodlands": {
    "III_The_Invitation": "bundle-III_The_Invitation-7984aab05b.webp",
    "II_The_Planning": "bundle-II_The_Planning-2d5386df3e.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-d511e54541.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-04d6313b38.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-1281b640d4.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-81af2ec4b7.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-61e8c20ce9.webp",
    "V_The_Reception": "bundle-V_The_Reception-4fefe79111.webp"
  }
};
