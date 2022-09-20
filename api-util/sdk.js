const http = require('http');
const https = require('https');
const Decimal = require('decimal.js');
// const log = require('../log');
const sharetribeSdk = require('sharetribe-flex-sdk');

const CLIENT_ID = process.env.FLEX_MARKETPLACE_API_CLIENT_ID;
const CLIENT_SECRET = process.env.FLEX_MARKETPLACE_API_SECRET_KEY;
const USING_SSL = process.env.REACT_APP_SHARETRIBE_USING_SSL === 'true';
const TRANSIT_VERBOSE =
  process.env.REACT_APP_SHARETRIBE_SDK_TRANSIT_VERBOSE === 'true';

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
