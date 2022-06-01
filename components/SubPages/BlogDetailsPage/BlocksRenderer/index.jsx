import Blocks from 'editorjs-blocks-react-renderer';
import ChecklistRenderer from '../CustomRenderer/ChecklistRenderer';
import RawHTMLRenderer from '../CustomRenderer/RawHTMLRenderer';
import WarningRenderer from '../CustomRenderer/WarningRenderer';

const BlocksRenderer = ({ parseBlog }) => {
  return (
    <div className="blog-details">
      <Blocks
        data={parseBlog}
        renderers={{
          raw: RawHTMLRenderer,
          checklist: ChecklistRenderer,
          warning: WarningRenderer,
        }}
        config={{
          code: {
            className:
              'language-js text-base lg:text-lg 2xl:text-xl text-gray-800',
          },
          delimiter: {
            className: 'border border-2 w-16 mx-auto mb-5',
          },
          embed: {
            className: 'border-0',
          },
          header: {
            className:
              'font-bold mb-7 md:mb-10 font-trade-gothic-bold text-highlight-1 text-opacity-75',
          },
          image: {
            className:
              'w-full flex justify-center flex-col items-center capitalize mb-7 md:mb-10 shadow',
            actionsClassNames: {
              stretched: 'w-full h-80 object-cover',
              withBorder: 'border border-2',
              withBackground: 'p-2',
            },
          },
          list: {
            className:
              'list-inside text-base lg:text-lg 2xl:text-xl mb-7 md:mb-10 text-gray-800',
          },
          paragraph: {
            className:
              'text-base lg:text-lg 2xl:text-xl font-trade-gothic text-highlight-1 text-opacity-75 pb-7 md:pb-10',
            actionsClassNames: {
              alignment: 'text-{alignment}', // This is a substitution placeholder: left or center.
            },
          },
          quote: {
            className:
              'py-3 px-5 italic font-serif text-base lg:text-lg 2xl:text-xl bg-gray-100 mb-7 md:mb-10 text-gray-800',
          },
          table: {
            className:
              'w-full flex flex-row flex-no-wrap md:justify-center sm:bg-white rounded-lg overflow-scroll md:overflow-hidden mb-7 md:mb-10 text-base lg:text-lg 2xl:text-xl text-gray-700',
          },
        }}
      />
    </div>
  );
};

export default BlocksRenderer;
