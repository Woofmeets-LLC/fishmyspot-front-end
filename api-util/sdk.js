const http = require('http');
const https = require('https');
const Decimal = require('decimal.js');
// const log = require('../log');
const sharetribeSdk = require('sharetribe-flex-sdk');
const { setCookie } = require('cookies-next');

const CLIENT_ID = process.env.FLEX_MARKETPLACE_API_CLIENT_ID;
const CLIENT_SECRET = process.env.FLEX_MARKETPLACE_API_SECRET_KEY;
const USING_SSL = process.env.REACT_APP_SHARETRIBE_USING_SSL === 'true';
const TRANSIT_VERBOSE =
  process.env.REACT_APP_SHARETRIBE_SDK_TRANSIT_VERBOSE === 'true';
const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });
const baseUrlMaybe = process.env.NEXT_SHARETRIBE_SDK_BASE_URL
  ? { baseUrl: process.env.NEXT_SHARETRIBE_SDK_BASE_URL }
  : null;

// Application type handlers for JS SDK.
//
// NOTE: keep in sync with `typeHandlers` in `src/util/api.js`
const typeHandlers = [
  // Use Decimal type instead of SDK's BigDecimal.
  {
    type: sharetribeSdk.types.BigDecimal,
    customType: Decimal,
    writer: (v) => new sharetribeSdk.types.BigDecimal(v.toString()),
    reader: (v) => new Decimal(v.value),
  },
];
exports.typeHandlers = typeHandlers;

exports.getServerSdk = (req, res) => {
  res.cookie = (key, value, { maxAge }, secure) => {
    setCookie(key, value, { req, res, maxAge, secure });
  };
  return sharetribeSdk.createInstance({
    transitVerbose: TRANSIT_VERBOSE,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    httpAgent,
    httpsAgent,
    tokenStore: sharetribeSdk.tokenStore.expressCookieStore({
      clientId: CLIENT_ID,
      req,
      res,
      secure: USING_SSL,
    }),
    typeHandlers,
    ...baseUrlMaybe,
  });
};
