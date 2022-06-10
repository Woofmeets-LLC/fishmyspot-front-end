import GiftCardImageArea from './GiftCardImageArea';
import GiftCardStepper from './GiftCardStepper/GiftCardStepper';

const SubGiftCardSection = () => {
  return (
    <section className="bg-[#fcfcfc]">
      <div className="container">
        <div className="py-14 2xl:pt-20 2xl:pb-36">
          <div className="md:grid md:grid-cols-2 md:gap-x-4 xl:gap-x-12">
            <GiftCardImageArea />
            <GiftCardStepper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubGiftCardSection;
