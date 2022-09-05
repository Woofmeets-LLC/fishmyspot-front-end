import axios from 'axios';
import useSwr from 'swr';
import ResourceItem from './ResourceItem';
import SubResourcesBannerSection from './SubBannerSection';

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const SubResourcesSection = () => {
  const { data: resources, error: resourcesError } = useSwr(
    'https://cms.fishmyspot.com/api/resources?populate=*',
    fetcher
  );

  return (
    <>
      <SubResourcesBannerSection src={'/images/resource.jpg'} />
      <section className="bg-gray-50">
        <div className="container min-h-[350px] pt-16 pb-20 md:min-h-[500px]">
          {resources?.length === 0 ? (
            <div className="text-center font-trade-gothic-bold text-2xl capitalize text-gray-600 md:text-3xl lg:text-4xl 2xl:text-5xl">
              No Resources Found
            </div>
          ) : (
            <div>
              {resources?.map((resource) => (
                <ResourceItem
                  key={resource?.id}
                  title={resource?.attributes?.title}
                  href={resource?.attributes?.slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SubResourcesSection;
