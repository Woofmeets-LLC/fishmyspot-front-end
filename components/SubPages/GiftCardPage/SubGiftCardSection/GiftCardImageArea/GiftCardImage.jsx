const GiftCardImage = ({ src }) => {
  return (
    <div>
      <img src={src} alt="Gift Card" className="h-full object-cover" />
    </div>
  );
};

export default GiftCardImage;
