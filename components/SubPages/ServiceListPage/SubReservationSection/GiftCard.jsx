import { useField } from 'formik';

const GiftCard = () => {
  const [field, meta, helpers] = useField("giftCode");

  const handleGiftCode = (e) => {
    helpers.setValue(field?.value)
  }

  return (
    <div
      className="flex border border-secondary rounded overflow-hidden mb-4"
    >
      <input
        type="text"
        name="giftCode"
        className="flex-grow p-2 focus:outline-none"
        placeholder="Do you have a Gift card"
        {...field}
      />
      <button
        type="button"
        onClick={handleGiftCode}
        className="bg-secondary text-white py-2 px-4 font-trade-gothic"
      >Apply</button>
    </div>
  );
};

export default GiftCard;