module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
  env: {
    FLEX_INTEGRATION_API_SECRET_KEY: "d4764c7d6a72eef41e759843c6ee9ea447e14ed6",
    FLEX_INTEGRATION_API_CLINT_ID: "ba629dad-8426-4e13-925b-ec9aa0251248",
    FLEX_MARKETPLACE_API_CLINT_ID: "88cd6da6-2122-413d-9b39-65a6206d3ccf",
    FLEX_MARKETPLACE_API_SECRET_KEY: "4fe02aa4b9f6da9839999742f7771f72b7ac9515",
    GOOGLE_MAP_API_KEY: "AIzaSyA3gQgHZfLBxSR3Ost1admwBkZBVcF2L6M",
    STRIPE_SECRET_KEY: "isokay",
    STRIPE_PUBLISHABLE_KEY:
      "pk_test_51JDrfGL6dPTcqE42bUjVOMBz9IlrztzO3WQSLYuIsVaQik9uBgC5l3ubS3NngycpFfOZDAXHHBDzL9CghHFjkkzd00LKieQOlz",
    NEXT_STRIPE_PUBLISHABLE_KEY:
      "pk_test_51JDrfGL6dPTcqE42bUjVOMBz9IlrztzO3WQSLYuIsVaQik9uBgC5l3ubS3NngycpFfOZDAXHHBDzL9CghHFjkkzd00LKieQOlz",
  },
};
