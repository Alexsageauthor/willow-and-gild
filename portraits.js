/* Bundle portraits, by collection folder and bundle id.
   Written by build_bundle_portraits.py. The filenames carry
   a content hash because /assets/ is served immutable for a
   year - see the note in that script. Do not hand-edit. */
const PORTRAITS = {
  "artdeco": {
    "III_The_Invitation": "bundle-III_The_Invitation-a08cd646bc.webp",
    "II_The_Planning": "bundle-II_The_Planning-6ba71612d6.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-10e3500d35.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-7dd36744ce.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-3c5a43552c.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-5b91a1f0e9.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-5cf03cee69.webp",
    "V_The_Reception": "bundle-V_The_Reception-751dc02eed.webp"
  },
  "bluewillow": {
    "III_The_Invitation": "bundle-III_The_Invitation-885352b3cd.webp",
    "II_The_Planning": "bundle-II_The_Planning-93f92a9977.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-a90e2c2d5f.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-664ad973ab.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-99d1078383.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-248d29bc59.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-cb932f8d86.webp",
    "V_The_Reception": "bundle-V_The_Reception-d344f2d367.webp"
  },
  "chateau": {
    "III_The_Invitation": "bundle-III_The_Invitation-637a26534b.webp",
    "II_The_Planning": "bundle-II_The_Planning-823217b76b.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-848e679408.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-39c3864056.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-b5c8ffe9fd.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-974e8d36b9.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-70fa84327c.webp",
    "V_The_Reception": "bundle-V_The_Reception-14c99638f2.webp"
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
    "III_The_Invitation": "bundle-III_The_Invitation-bbeff38239.webp",
    "II_The_Planning": "bundle-II_The_Planning-2f71f387c6.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-ee21e1b05e.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-964db5a8d3.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-3bfa4bbaea.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-b131b90caa.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-b8b7a727ee.webp",
    "V_The_Reception": "bundle-V_The_Reception-e17b85c7ad.webp"
  },
  "kyoto": {
    "III_The_Invitation": "bundle-III_The_Invitation-ba7347d0af.webp",
    "II_The_Planning": "bundle-II_The_Planning-7763fc1114.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-3517f2df15.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-30829dc45c.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-13d0d2121d.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-16c46a7464.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-243f7a7d60.webp",
    "V_The_Reception": "bundle-V_The_Reception-20a4ca65c9.webp"
  },
  "midcentury": {
    "III_The_Invitation": "bundle-III_The_Invitation-bba0a788c3.webp",
    "II_The_Planning": "bundle-II_The_Planning-47e5889200.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-8983730cab.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-22dd9fc834.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-acbea4f0eb.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-0b37e57fb3.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-ac9cbb30f5.webp",
    "V_The_Reception": "bundle-V_The_Reception-7b31caf2f3.webp"
  },
  "minimal": {
    "III_The_Invitation": "bundle-III_The_Invitation-38cbd7ebdb.webp",
    "II_The_Planning": "bundle-II_The_Planning-db7946e075.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-b04ffc2aa9.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-628b6abed9.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-b2718a60c0.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-9cb4f6aeab.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-21cc4537e0.webp",
    "V_The_Reception": "bundle-V_The_Reception-59a99bb214.webp"
  },
  "nordic": {
    "III_The_Invitation": "bundle-III_The_Invitation-00bef92bd4.webp",
    "II_The_Planning": "bundle-II_The_Planning-d1a92b1b58.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-b113044252.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-87910a3c21.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-e91085a057.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-55123c84bf.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-b9f8d37797.webp",
    "V_The_Reception": "bundle-V_The_Reception-d016154e22.webp"
  },
  "olivegold": {
    "III_The_Invitation": "bundle-III_The_Invitation-ebbbccfd30.webp",
    "II_The_Planning": "bundle-II_The_Planning-b336c49625.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-51c6ac8cb9.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-f531956a36.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-3738ff39a5.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-4edb2b9ec4.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-5d11300da6.webp",
    "V_The_Reception": "bundle-V_The_Reception-9ccc25bf33.webp"
  },
  "orchard": {
    "III_The_Invitation": "bundle-III_The_Invitation-d2662affee.webp",
    "II_The_Planning": "bundle-II_The_Planning-eb3105aea6.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-2e5ec743db.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-9ff014e988.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-9f2ca8188a.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-f395674a5a.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-003587cb21.webp",
    "V_The_Reception": "bundle-V_The_Reception-861d8c72e5.webp"
  },
  "riviera": {
    "III_The_Invitation": "bundle-III_The_Invitation-92fc751b90.webp",
    "II_The_Planning": "bundle-II_The_Planning-74b0fbdbe9.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-d121838f37.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-8321f6a080.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-13c3dbb563.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-e85e7cd4e1.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-edbd8b162f.webp",
    "V_The_Reception": "bundle-V_The_Reception-9c13d3860e.webp"
  },
  "winter": {
    "III_The_Invitation": "bundle-III_The_Invitation-50d14c9b65.webp",
    "II_The_Planning": "bundle-II_The_Planning-87f97b8d32.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-333b3a653d.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-928f658a56.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-2d33cb0878.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-b4e4ea67b1.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-221f5da8aa.webp",
    "V_The_Reception": "bundle-V_The_Reception-5082050245.webp"
  },
  "woodlands": {
    "III_The_Invitation": "bundle-III_The_Invitation-e65808b027.webp",
    "II_The_Planning": "bundle-II_The_Planning-f35bd8e562.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-e25bcd34d0.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-6930c3a3ce.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-4887f0d7d8.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-c3a8a0eb81.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-cae407aa65.webp",
    "V_The_Reception": "bundle-V_The_Reception-9323dbf73c.webp"
  }
};
