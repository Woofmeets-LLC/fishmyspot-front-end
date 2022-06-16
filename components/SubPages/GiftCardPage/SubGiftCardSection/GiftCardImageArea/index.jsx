import Image from 'next/image';

const GiftCardImageArea = () => {
  return (
    <div className="relative aspect-video h-full w-full">
      <Image
        src={'/images/gift-card.png'}
        priority
        layout="fill"
        alt={'Gift Card Image'}
        className="object-cover"
      />
    </div>
  );
};

export default GiftCardImageArea;
