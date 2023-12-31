import SubGiftCardRulesSection from '../../components/SubPages/GiftCardPage/SubGiftCardRulesSection';
import SubGiftCardSection from '../../components/SubPages/GiftCardPage/SubGiftCardSection';
import HomeLayout from '../../layouts/HomeLayout';

const BuyGiftCard = () => {
  return (
    <HomeLayout>
      <SubGiftCardSection />
      <SubGiftCardRulesSection />
    </HomeLayout>
  );
};

export default BuyGiftCard;
