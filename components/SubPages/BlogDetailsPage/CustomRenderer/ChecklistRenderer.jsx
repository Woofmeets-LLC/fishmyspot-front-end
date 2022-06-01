import HTMLReactParser from "html-react-parser";

const ChecklistRenderer = ({ data }) => {
  return (
    <>
      {data?.items.map((item, i) => (
        <p
          key={i}
          className={
            "list-inside text-base lg:text-lg 2xl:text-xl mb-1 text-gray-800"
          }
        >
          <label>
            <input type="checkbox" checked={item?.checked} readOnly />{" "}
            {HTMLReactParser(item?.text)}
          </label>
        </p>
      ))}
    </>
  );
};

export default ChecklistRenderer;
