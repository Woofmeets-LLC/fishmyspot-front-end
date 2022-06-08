import GiftCardForm from './GiftCardForm';
import GiftCardImageArea from './GiftCardImageArea';

const SubGiftCardSection = () => {
  return (
    <section className="bg-[#fcfcfc]">
      <div className="container">
        <div className="pt-20 pb-36">
          <div className="grid grid-cols-2 gap-x-4">
            <GiftCardImageArea />
            <GiftCardForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubGiftCardSection;
