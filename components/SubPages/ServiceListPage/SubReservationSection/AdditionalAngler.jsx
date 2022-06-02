import { useField } from 'formik';

const AdditionalAngler = () => {
  const [field, meta] = useField('additional-guests');
  const [experiencefield, experienceMeta] = useField('experience');

  return (
    <div>
      <label
        htmlFor=""
        className="mb-2 block font-trade-gothic-bold text-primary lg:mb-3 lg:text-lg xl:mb-4 2xl:text-xl"
      >
        Additional Guests
      </label>
      <div className="flex w-full items-center overflow-hidden rounded-md  font-trade-gothic text-base text-highlight-1 shadow">
        <input
          type="number"
          min={0}
          onWheel={(e) => e.target.blur()}
          className={` m-0 block w-full overflow-hidden rounded border border-solid border-gray-300 bg-clip-padding  bg-no-repeat px-3 py-2 font-trade-gothic text-base text-primary transition ease-in-out focus:outline-none`}
          {...field}
        />
      </div>
      {experiencefield?.value?.['Additional Fisherman']?.checked && (
        <span className="text-sm text-red-400">
          {`You will be charged $${experiencefield?.value?.['Additional Fisherman']?.price}`}
          {` `}
          per additional guests for additional fisherman addon
        </span>
      )}
      {meta?.touched && meta?.error && (
        <div className="text-sm text-red-500">{meta?.error}</div>
      )}
    </div>
  );
};

export default AdditionalAngler;
