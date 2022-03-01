import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const PaypalOnboardButton = () => {
  const [redirectUrl, setRedirectUrl] = useState(undefined);
  const [loading, setLoadingState] = useState(false);

  const getPayPalOnboardingLink = async () => {
    setLoadingState(true);
    try {
      const res = await axios.get(
        "http://localhost:5000/paypal/generate-signup-link"
      );
      const data = res.data;
      console.log(data);
      const onboardUrl = data?.links?.[1]?.href;
      if (!onboardUrl) {
        throw Error("No redirect url found");
      }
      setRedirectUrl(() => onboardUrl);
    } catch (error) {
      console.log(error);
    }
    setLoadingState(false);
  };

  return (
    <>
      {!redirectUrl && (
        <button
          onClick={getPayPalOnboardingLink}
          key={"paypal-onboard-button"}
          className="bg-gradient-to-tr from-blue-500 to-blue-400 p-2 rounded-md text-white shadow-md w-max inline-flex gap-2"
        >
          {!loading && (
            <svg
              className="animate-spin h-5 w-5 mr-3  text-white"
              viewBox="0 0 24 24"
            ></svg>
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
      )}
    </>
  );
};

const OnBoardingPage = () => {
  return (
    <>
      <div className="min-w-full min-h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="font-food-truck text-2xl">Seller Onboarding page</h1>
        <button className="bg-gradient-to-tr from-purple-500 to-purple-400 p-2 rounded-md text-white shadow-md w-max">
          Get Stripe Onboarding Url
        </button>
        <PaypalOnboardButton></PaypalOnboardButton>
      </div>
    </>
  );
};
export default OnBoardingPage;
