import { useField } from 'formik';

const InfoInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-base md:text-lg lg:text-xl 2xl:text-2xl text-highlight-1 font-trade-gothic-bold mb-1 lg:mb-2"
      >
        {label}
      </label>
      <input
        type={props.type ? props.type : 'text'}
        // value={value}
        // onChange={e => setValue(e.target.value)}
        {...field}
        {...props}
        className="block w-full p-2 2xl:p-3 font-trade-gothic text-sm lg:text-base 2xl:text-lg text-highlight-1 bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
      />
      {meta.touched && meta.error ? (
        <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InfoInput;