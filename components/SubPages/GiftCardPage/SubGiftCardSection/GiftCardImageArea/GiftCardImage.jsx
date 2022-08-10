import Image from 'next/image';

const GiftCardImage = ({ src }) => {
  return (
    <div className="relative aspect-video h-full w-full">
      <Image
        src={src}
        priority
        layout="fill"
        alt={'Gift Card Image'}
        className="h-full object-cover"
      />
    </div>
  );
};

export default GiftCardImage;
