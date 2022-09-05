import { BlocksRenderer } from '../../Common';

const SubResourceDetailPage = ({ data: resourceDetails }) => {
  const parseResource = JSON.parse(resourceDetails?.attributes?.description);

  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="mx-auto pt-10 md:w-[600px] xl:w-[680px]">
              <h1 className="mb-7 font-food-truck text-2xl uppercase tracking-wide text-highlight-1 md:text-3xl xl:text-4xl">
                {resourceDetails?.attributes?.title}
              </h1>

              <BlocksRenderer parseDetail={parseResource} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubResourceDetailPage;
