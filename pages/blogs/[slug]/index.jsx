import axios from 'axios';
import Head from 'next/head';
import SubBlogDetailsSection from '../../../components/SubPages/BlogDetailsPage';
import HomeLayout from '../../../layouts/HomeLayout';

const BlogDetailsPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.attributes?.title}</title>
        <meta property="og:title" content={data?.attributes?.seoTitle} />
        <meta
          property="og:description"
          name="description"
          content={data?.attributes?.seoDescription}
        />
        <meta
          property="og:image"
          content={data?.attributes?.featuredImage?.data?.attributes?.url}
        />
      </Head>
      <HomeLayout>
        <SubBlogDetailsSection data={data} />
      </HomeLayout>
    </>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  const data = await axios
    .get(
      `https://cms.fishmyspot.com/api/blogs?filters\[slug\][$eq]=${slug}&populate[featuredImage]=*&populate[featuredSpots][populate]=*&populate[category]=*`
    )
    .then((res) => res.data.data);

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  const relatedBlogs = await axios
    .get(
      `https://cms.fishmyspot.com/api/blogs?populate=*&filters[category][name][$eq]=${data?.[0]?.attributes?.category?.data?.attributes?.name}&filters[id][$ne]=${data?.[0]?.id}&fields[0]=title&fields[1]=author&fields[2]=slug&sort[0]=id:desc&pagination[page]=1&pagination[pageSize]=10`
    )
    .then((res) => res.data.data);
  data[0].relatedBlogs = relatedBlogs;

  return {
    props: {
      data: data[0],
    },
  };
}

export default BlogDetailsPage;
