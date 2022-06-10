import GiftCardImage from './GiftCardImage';

const GiftCardImageArea = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <GiftCardImage src={'/images/gift-1.jpg'} />
      <GiftCardImage src={'/images/gift-2.jpg'} />
      <GiftCardImage src={'/images/gift-3.jpg'} />
      <GiftCardImage src={'/images/gift-4.jpg'} />
    </div>
  );
};

export default GiftCardImageArea;
