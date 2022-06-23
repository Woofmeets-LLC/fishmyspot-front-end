import { useSelector } from 'react-redux';

const GiftCardPaymentSuccess = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="pt-6 text-center md:pt-10 xl:pt-20">
      <h1 className="mb-4 font-trade-gothic text-lg text-highlight-1 md:text-2xl lg:text-3xl xl:mb-6 xl:text-4xl 2xl:mb-8 2xl:text-5xl">
        Thank you,{' '}
        {user && `${user?.profile?.firstName} ${user?.profile?.lastName}`}!
      </h1>
      <h1 className="mb-5 font-food-truck text-xl uppercase text-primary underline md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        For Purchasing Gift Card
      </h1>
      <button
        onClick={() => window?.location?.reload()}
        className="rounded bg-secondary py-2 px-3 font-trade-gothic-bold text-lg text-primary 2xl:py-3"
      >
        Buy More
      </button>
    </div>
  );
};

export default GiftCardPaymentSuccess;
