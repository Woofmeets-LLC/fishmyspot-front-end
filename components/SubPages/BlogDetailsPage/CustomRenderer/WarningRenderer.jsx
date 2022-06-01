import { IoWarning } from "react-icons/io5";

const WarningRenderer = ({ data }) => {
  return (
    <div className="bg-amber-100 py-2 px-3 flex items-center mb-7 md:mb-10 space-x-1">
      <span className="text-2xl text-amber-500">
        <IoWarning />
      </span>
      <p className="text-base 2xl:text-xl text-gray-800">{data?.message}</p>
    </div>
  );
};

export default WarningRenderer;
