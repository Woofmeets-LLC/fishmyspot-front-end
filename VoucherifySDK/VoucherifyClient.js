import { VoucherifyServerSide, VoucherifyClientSide } from '@voucherify/sdk';

export const voucherifyServerClient = VoucherifyServerSide({
  applicationId: process.env.VOUCHERIFY_SERVER_APP_ID,
  secretKey: process.env.VOUCHERIFY_SERVER_APP_SECRET,
  apiUrl: 'https://us1.api.voucherify.io', // optional
  apiVersion: 'v2018-08-01', // optional
  channel: 'fishmyspot', // optional
  //   customHeaders: { MY_CUSTOM_HEADER: 'my_value' }, // optional
});

export const voucheryfyClient = VoucherifyClientSide({
  clientApplicationId: process.env.VOUCHERIFY_CLIENT_APP_ID,
  clientSecretKey: process.env.VOUCHERIFY_CLIENT_APP_SECRET,
  apiUrl: 'https://us1.api.voucherify.io', // optional
  origin: 'http://localhost:3000', // read more below
  // customHeaders: { MY_CUSTOM_HEADER: 'my_value' }, // optional
});
