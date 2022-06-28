// import axios from "axios";
// import Link from "next/link";
// import { useState } from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";

const PaypalOnboardButton = () => {
  // const [redirectUrl, setRedirectUrl] = useState(undefined);
  // const [loading, setLoadingState] = useState(false);

  // const getPayPalOnboardingLink = async () => {
  //   setLoadingState(true);

  //   try {
  //     const res = await axios.post(
  //       "https://fish-my-spot-backend-op74rtdzqa-uc.a.run.app/paypal/generate-signup-link",
  //       {
  //         tracker_id: 1,
  //       }
  //     );
  //     const data = res.data;
  //     const onboardUrl = data?.links?.[1]?.href;
  //     if (!onboardUrl) {
  //       throw Error("No redirect url found");
  //     }
  //     setRedirectUrl(() => onboardUrl);
  //   } catch (error) { }
  //   setLoadingState(false);
  // };

  return (
    <>
      {/* {!redirectUrl && (
        <button
          onClick={getPayPalOnboardingLink}
          key={"paypal-onboard-button"}
          className="bg-gradient-to-tr from-blue-500 to-blue-400 p-2 rounded-md text-white shadow-md w-max inline-flex gap-2"
        >
          {loading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          Get Paypal onboarding URL
        </button>
      )}
      {redirectUrl && (
        <div className="animate-bounce bg-gradient-to-tr from-blue-500 to-blue-400 p-2 rounded-md shadow-md w-max inline-flex gap-1">
          <FaExternalLinkAlt className="fill-slate-100" />
          <Link href={redirectUrl} key={"paypal-redirect-button"}>
            <a className="text-white" target="_blank">
              Onboard with Paypal
            </a>
          </Link>
        </div>
      )} */}
    </>
  );
};

const OnBoardingPage = () => {
  return (
    <>
      {/* <div className="min-w-full min-h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="font-food-truck text-2xl">Seller Onboarding page</h1>
        <button className="bg-gradient-to-tr from-purple-500 to-purple-400 p-2 rounded-md text-white shadow-md w-max">
          Get Stripe Onboarding Url
        </button>
        <PaypalOnboardButton></PaypalOnboardButton>
      </div> */}
    </>
  );
};
export default OnBoardingPage;
