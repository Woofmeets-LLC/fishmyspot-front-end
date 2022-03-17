const {createInstance} = require('sharetribe-flex-integration-sdk');


export const integrationSdk = createInstance({
    clientId: process.env.FLEX_INTEGRATION_API_CLIENT_ID,
    clientSecret: process.env.FLEX_INTEGRATION_API_SECRET_KEY
});
