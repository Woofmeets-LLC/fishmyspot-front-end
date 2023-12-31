module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  env: {
    FLEX_INTEGRATION_API_SECRET_KEY: '023fcf3ac0aa7e865acf98271a2815ae472eb1b9',
    FLEX_INTEGRATION_API_CLIENT_ID: '5eba43c6-cd5f-42cd-bf9f-9078819e616a',
    FLEX_MARKETPLACE_API_CLIENT_ID: '0421ab8e-0ccf-403f-b302-d65b3be51364',
    FLEX_MARKETPLACE_API_SECRET_KEY: '79bcd12ec81eafb51522690f0cc18a08ce0ddaf2',
    GOOGLE_MAP_API_KEY: 'AIzaSyDPwfyUp4Z4dYvkgsRJ79YMeWS7-oiqp_0',
    STRIPE_SECRET_KEY:'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',
    STRIPE_PUBLISHABLE_KEY:'pk_live_51BZ1XoGrpoAD6ljCSzdn3lrmPbTqdGUJjPqJkwxY4KECWacyGf7FHIRl76jzR6pRZLNYqVgugWbRieXjamRuWVVp00uLiLJC8L',
    NEXT_STRIPE_PUBLISHABLE_KEY:'pk_live_51BZ1XoGrpoAD6ljCSzdn3lrmPbTqdGUJjPqJkwxY4KECWacyGf7FHIRl76jzR6pRZLNYqVgugWbRieXjamRuWVVp00uLiLJC8L',
    BACKEND_URL: 'https://be.fishmyspot.com',
    CANONICAL_ROOT_URL: 'https://fishmyspot.com',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

// module.exports = {
//   swcMinify: true,
//   reactStrictMode: true,
//   env: {
//     FLEX_INTEGRATION_API_CLIENT_ID: 'e9099d79-4500-4f32-92bd-92bd95163e1c',
//     FLEX_INTEGRATION_API_SECRET_KEY: 'e5a2872a1b5528571e69fb0cfea1e1b5e44c7845',
//     FLEX_MARKETPLACE_API_CLIENT_ID: 'abdce1d4-6d8e-4711-8363-bad6c0216ca7',
//     FLEX_MARKETPLACE_API_SECRET_KEY: '9556eda1e1010b222774ab8d69ee764ca32726fe',
//     GOOGLE_MAP_API_KEY: 'AIzaSyBfNC-SGgbvOOFj9FqoA6HQhrCh_hq5Zo0',
//     STRIPE_SECRET_KEY: 'sk_test_sJtmB4zGarC0n7SpUvKpI7N9',
//     CANONICAL_ROOT_URL: 'http://localhost:3000',
//     NEXT_STRIPE_PUBLISHABLE_KEY: 'pk_test_rbfLjGSEddnv5RHWU6hhPSBs',
//     BACKEND_URL: 'https://fish-my-spot-backend-op74rtdzqa-uc.a.run.app',
//   },
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// };
