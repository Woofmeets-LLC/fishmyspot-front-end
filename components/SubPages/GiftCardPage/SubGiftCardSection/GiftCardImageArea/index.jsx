import GiftCardImage from './GiftCardImage';

const GiftCardImageArea = () => {
  return (
    <div className="bg-[#ECE9DA]">
      <div className="grid h-full grid-cols-2 gap-3">
        <GiftCardImage src={'/images/gift-card-1.png'} />
        <GiftCardImage src={'/images/gift-card-2.png'} />
        <GiftCardImage src={'/images/gift-card-3.png'} />
        <GiftCardImage src={'/images/gift-card-4.png'} />
      </div>
    </div>
  );
};

export default GiftCardImageArea;
