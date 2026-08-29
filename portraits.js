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
    "II_The_Planning": "bundle-II_The_Planning-2416a4e380.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-72f86ee12f.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-da7b73a781.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-99d1078383.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-6edec0cdcf.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-cb932f8d86.webp",
    "V_The_Reception": "bundle-V_The_Reception-d5ad1ff798.webp"
  },
  "chateau": {
    "III_The_Invitation": "bundle-III_The_Invitation-637a26534b.webp",
    "II_The_Planning": "bundle-II_The_Planning-ad894b7c84.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-fb8727ee59.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-9256735ae3.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-b5c8ffe9fd.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-d74962fa11.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-70fa84327c.webp",
    "V_The_Reception": "bundle-V_The_Reception-ae88dedc0e.webp"
  },
  "classic": {
    "III_The_Invitation": "bundle-III_The_Invitation-7e4502def4.webp",
    "II_The_Planning": "bundle-II_The_Planning-bba6fcb0c3.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-c1b0550ec3.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-c1f32b694f.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-6f5e06961d.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-3161bd4bcc.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-7644f71997.webp",
    "V_The_Reception": "bundle-V_The_Reception-6d63d218b6.webp"
  },
  "conservatory": {
    "III_The_Invitation": "bundle-III_The_Invitation-2ceb412d73.webp",
    "II_The_Planning": "bundle-II_The_Planning-7b95e9b434.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-7fd16f9826.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-0102d0226b.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-f13f1f77d1.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-c005406caf.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-8ec8ee9ae8.webp",
    "V_The_Reception": "bundle-V_The_Reception-b0460ec149.webp"
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
    "III_The_Invitation": "bundle-III_The_Invitation-8412f157a5.webp",
    "II_The_Planning": "bundle-II_The_Planning-86c8ff7be7.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-9a6069293d.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-577b7128c9.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-634d4cbd17.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-3ca1f691bd.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-90c27e124d.webp",
    "V_The_Reception": "bundle-V_The_Reception-8fbebd0447.webp"
  },
  "midcentury": {
    "III_The_Invitation": "bundle-III_The_Invitation-b2f9e78c6d.webp",
    "II_The_Planning": "bundle-II_The_Planning-778e5c6d3b.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-d09cb94443.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-04d5ef81d6.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-c26f6c744c.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-0b7f499739.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-f3b3d7f98d.webp",
    "V_The_Reception": "bundle-V_The_Reception-ba0a032f8e.webp"
  },
  "minimal": {
    "III_The_Invitation": "bundle-III_The_Invitation-ef0b38e736.webp",
    "II_The_Planning": "bundle-II_The_Planning-6ae441ac70.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-a2c81ffb8e.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-65806a53f3.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-0b010e5731.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-7e6eca1797.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-339188bf40.webp",
    "V_The_Reception": "bundle-V_The_Reception-3315bbb34b.webp"
  },
  "nordic": {
    "III_The_Invitation": "bundle-III_The_Invitation-df511cace9.webp",
    "II_The_Planning": "bundle-II_The_Planning-0c1ad36916.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-3f195968eb.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-ce79af2234.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-a5163060b0.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-ccb0d4e142.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-b86d4aa670.webp",
    "V_The_Reception": "bundle-V_The_Reception-d9db386a00.webp"
  },
  "olivegold": {
    "III_The_Invitation": "bundle-III_The_Invitation-ebbbccfd30.webp",
    "II_The_Planning": "bundle-II_The_Planning-7fa2e214a8.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-e482a2e953.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-8654b36da5.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-3738ff39a5.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-3ec164f42d.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-5d11300da6.webp",
    "V_The_Reception": "bundle-V_The_Reception-c2739ccab6.webp"
  },
  "orchard": {
    "III_The_Invitation": "bundle-III_The_Invitation-29fa179d4e.webp",
    "II_The_Planning": "bundle-II_The_Planning-a3dbcfa9fe.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-69e39dd9f9.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-f34843a158.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-8db2075cea.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-0181b5f9fa.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-01630e1973.webp",
    "V_The_Reception": "bundle-V_The_Reception-dd9b5c67ac.webp"
  },
  "riviera": {
    "III_The_Invitation": "bundle-III_The_Invitation-92fc751b90.webp",
    "II_The_Planning": "bundle-II_The_Planning-b38ff48313.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-d409ff2271.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-f83d7e26a3.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-13c3dbb563.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-ee618cb7bb.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-edbd8b162f.webp",
    "V_The_Reception": "bundle-V_The_Reception-9193b99a35.webp"
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
    "III_The_Invitation": "bundle-III_The_Invitation-7984aab05b.webp",
    "II_The_Planning": "bundle-II_The_Planning-3cf52f88af.webp",
    "IV_The_Ceremony": "bundle-IV_The_Ceremony-41ea418fc7.webp",
    "I_The_Announcement": "bundle-I_The_Announcement-04d6313b38.webp",
    "Ia_Your_Wedding_Online": "bundle-Ia_Your_Wedding_Online-e738c96b09.webp",
    "VI_The_Complete_Collection": "bundle-VI_The_Complete_Collection-a60299d621.webp",
    "VI_With_Thanks": "bundle-VI_With_Thanks-61e8c20ce9.webp",
    "V_The_Reception": "bundle-V_The_Reception-4fefe79111.webp"
  }
};
