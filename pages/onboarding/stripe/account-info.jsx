import PersonalInfoContainer from "../../../components/SubPages/OnBoardingPage/StripePersonalInfoForm";
import { useCurrentUser } from "../../../hooks";
import HomeLayout from "../../../layouts/HomeLayout";

export default function AccountInfo() {
  const user = useCurrentUser();
  return <HomeLayout>{user && <PersonalInfoContainer />}</HomeLayout>;
}
