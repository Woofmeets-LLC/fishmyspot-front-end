import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GenerateRedirectUI = ({ data }) => {
  const {
    accountStatus,
    consentStatus,
    isEmailConfirmed,
    merchantId /* unique identifier in sharetribe */,
    merchantIdInPayPal,
    permissionsGranted,
    productIntentID,
    productIntentId,
  } = data;


  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <table className="table-auto border-slate-400">
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account Status</td>
            <td>{accountStatus}</td>
          </tr>

          <tr>
            <td>Consent Status</td>
            <td>{consentStatus}</td>
          </tr>

          <tr>
            <td>Email Confirmation</td>
            <td>
              <p>{isEmailConfirmed}</p>
            </td>
          </tr>

          <tr>
            <td>Merchant Id</td>
            <td>{merchantId}</td>
          </tr>

          <tr>
            <td>Paypal Merchant Id</td>
            <td>{merchantIdInPayPal}</td>
          </tr>

          <tr>
            <td>Permission Granted</td>
            <td>{permissionsGranted}</td>
          </tr>

          <tr>
            <td>Permission Granted</td>
            <td>{permissionsGranted}</td>
          </tr>

          <tr>
            <td>Product Intent ID</td>
            <td>{productIntentID}</td>
          </tr>

          <tr>
            <td>Product Intent Id</td>
            <td>{productIntentId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const PayPalOnboardingRedirectPage = () => {
  const router = useRouter();
  const [redirectData, setRedirectData] = useState(undefined);

  useEffect(() => {
    setRedirectData(router.query);
  }, [router.query]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <p>Paypal Redirect Page</p>
      <div>{redirectData && <GenerateRedirectUI data={redirectData} />}</div>
    </div>
  );
};

export default PayPalOnboardingRedirectPage;
