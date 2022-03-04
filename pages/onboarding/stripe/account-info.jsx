import PersonalInfoContainer from "../../../components/SubPages/OnBoardingPage/StripePersonalInfoForm";
import HomeLayout from "../../../layouts/HomeLayout";

export default function AccountInfo() {
  // https://stripe.com/docs/connect/account-tokens#:~:text=Collecting%20account%20and%20person%20details
  return (
    <HomeLayout>
      <PersonalInfoContainer />
    </HomeLayout>
  )
}
