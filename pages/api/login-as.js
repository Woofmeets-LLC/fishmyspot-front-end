const http = require('http');
const https = require('https');
const sharetribeSdk = require('sharetribe-flex-sdk');
const Decimal = require('decimal.js');
const sdkUtils = require('../../api-util/sdk');
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
const CLIENT_ID = process.env.FLEX_MARKETPLACE_API_CLIENT_ID;
const ROOT_URL = process.env.CANONICAL_ROOT_URL;
const BASE_URL = process.env.REACT_APP_SHARETRIBE_SDK_BASE_URL;
const TRANSIT_VERBOSE =
  process.env.REACT_APP_SHARETRIBE_SDK_TRANSIT_VERBOSE === 'true';
const USING_SSL = process.env.REACT_APP_SHARETRIBE_USING_SSL === 'true';

// redirect_uri param used when initiating a login as authentication flow and
// when requesting a token using an authorization code
const loginAsRedirectUri = `${ROOT_URL.replace(/\/$/, '')}/api/login-as`;

// Instantiate HTTP(S) Agents with keepAlive set to true.
// This will reduce the request time for consecutive requests by
// reusing the existing TCP connection, thus eliminating the time used
// for setting up new TCP connections.
const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

// Cookies used for authorization code authentication.
const stateKey = `st-${CLIENT_ID}-oauth2State`;
const codeVerifierKey = `st-${CLIENT_ID}-pkceCodeVerifier`;

/**
 * Makes a base64 string URL friendly by
 * replacing unaccepted characters.
 */
const urlifyBase64 = (base64Str) =>
  base64Str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

// Works as the redirect_uri passed in an authorization code request. Receives
// an authorization code and uses that to log in and redirect to the landing
// page.
module.exports = async (req, res) => {
  const { code, state, error } = req.query;
  const storedState = getCookie(stateKey, { req, res });

  if (state !== storedState) {
    res.status(401).send('Invalid state parameter.');
    return;
  }

  if (error) {
    res.status(401).send(`Failed to authorize as a user, error: ${error}.`);
    return;
  }

  const codeVerifier = getCookie(codeVerifierKey, { req, res });

  // clear state and code verifier cookies
  deleteCookie(stateKey, { secure: USING_SSL });
  deleteCookie(codeVerifierKey, { secure: USING_SSL });

  res.cookie = (key, value, { maxAge }, secure) => {
    setCookie(key, value, { req, res, maxAge, secure });
  };

  const baseUrl = BASE_URL ? { baseUrl: BASE_URL } : {};
  const tokenStore = sharetribeSdk.tokenStore.expressCookieStore({
    clientId: CLIENT_ID,
    req,
    res,
    secure: USING_SSL,
  });

  const sdk = sharetribeSdk.createInstance({
    transitVerbose: TRANSIT_VERBOSE,
    clientId: CLIENT_ID,
    httpAgent: httpAgent,
    httpsAgent: httpsAgent,
    tokenStore,
    typeHandlers: sdkUtils.typeHandlers,
    ...baseUrl,
  });

  try {
    const result = await sdk.login({
      code,
      redirect_uri: loginAsRedirectUri,
      code_verifier: codeVerifier,
    });
    if (result) {
      res.redirect('/');
    }
  } catch (err) {
    console.log({ err });
    return res.status(401).send('Unable to authenticate as a user');
  }
};
