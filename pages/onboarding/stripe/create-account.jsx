import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeLayout from "../../../layouts/HomeLayout";
import { getSdk } from "../../../sharetribe/sharetribeSDK";

const CreateStripeAccount = () => {
  const user = useSelector((state) => {
    return state.auth.user;
  });

  useEffect(() => {
    const getStripeInfo = async () => {
      if (!user) return;
      try {
        const data = await getSdk().stripeAccount.fetch();
      } catch (error) {

      }
    };

    getStripeInfo();
  }, [user]);

  return (
    <>
      <HomeLayout></HomeLayout>
    </>
  );
};

export default CreateStripeAccount;
