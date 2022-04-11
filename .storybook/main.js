module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: ['../public'],
  env: (config)=>({
    ...config,
    FLEX_INTEGRATION_API_CLIENT_ID: "dummy_client_id",
    FLEX_MARKETPLACE_API_CLIENT_ID: "dummy_client_id"
  })
}

