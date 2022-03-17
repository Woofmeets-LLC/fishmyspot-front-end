const sharetribeSdk = require('sharetribe-flex-sdk');

<<<<<<< HEAD
const CLIENT_ID = process.env.FLEX_MARKETPLACE_API_CLIENT_ID;
=======
const CLIENT_ID = process.env.FLEX_MARKETPLACE_API_CLIENT_ID;
>>>>>>> 34faf2f326a4a9ba4c84a8522ac5ccdd389dab11
const CLIENT_SECRET = process.env.FLEX_MARKETPLACE_API_SECRET_KEY;
const USING_SSL = false;
const TRANSIT_VERBOSE = false;

<<<<<<< HEAD
const memoryStore = token => {
    const store = sharetribeSdk.tokenStore.memoryStore();
    store.setToken(token);
    return store;
};

// Read the user token from the request cookie
const getUserToken = req => {
    const cookieTokenStore = sharetribeSdk.tokenStore.expressCookieStore({
        clientId: CLIENT_ID,
        req,
        secure: USING_SSL,
    });
    return cookieTokenStore.getToken();
};


exports.getSdk = () => {
    return sharetribeSdk.createInstance({
        clientId: CLIENT_ID,
    });
};

exports.getTrustedSdk = req => {
    const userToken = getUserToken(req);

    // Initiate an SDK instance for token exchange
    const sdk = sharetribeSdk.createInstance({
        transitVerbose: TRANSIT_VERBOSE,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        tokenStore: memoryStore(userToken),
    });

    // Perform a token exchange
    return sdk.exchangeToken().then(response => {
        // Setup a trusted sdk with the token we got from the exchange:
        const trustedToken = response.data;

        return sharetribeSdk.createInstance({
            transitVerbose: TRANSIT_VERBOSE,

            // We don't need CLIENT_SECRET here anymore
            clientId: CLIENT_ID,

            // Important! Do not use a cookieTokenStore here but a memoryStore
            // instead so that we don't leak the token back to browser client.
            tokenStore: memoryStore(trustedToken),
        });
    });
};
=======
const memoryStore = (token) => {
  const store = sharetribeSdk.tokenStore.memoryStore();
  store.setToken(token);
  return store;
};

// Read the user token from the request cookie
const getUserToken = (req) => {
  const cookieTokenStore = sharetribeSdk.tokenStore.expressCookieStore({
    clientId: CLIENT_ID,
    req,
    secure: USING_SSL,
  });
  return cookieTokenStore.getToken();
};

exports.getSdk = () => {
  return sharetribeSdk.createInstance({
    clientId: CLIENT_ID,
  });
};

exports.getTrustedSdk = (req) => {
  const userToken = getUserToken(req);

  // Initiate an SDK instance for token exchange
  const sdk = sharetribeSdk.createInstance({
    transitVerbose: TRANSIT_VERBOSE,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    tokenStore: memoryStore(userToken),
  });

  // Perform a token exchange
  return sdk.exchangeToken().then((response) => {
    // Setup a trusted sdk with the token we got from the exchange:
    const trustedToken = response.data;

    return sharetribeSdk.createInstance({
      transitVerbose: TRANSIT_VERBOSE,

      // We don't need CLIENT_SECRET here anymore
      clientId: CLIENT_ID,

      // Important! Do not use a cookieTokenStore here but a memoryStore
      // instead so that we don't leak the token back to browser client.
      tokenStore: memoryStore(trustedToken),
    });
  });
};
>>>>>>> 34faf2f326a4a9ba4c84a8522ac5ccdd389dab11
