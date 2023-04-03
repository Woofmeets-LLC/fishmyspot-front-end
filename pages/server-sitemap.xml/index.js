import axios from 'axios';
import { getServerSideSitemapLegacy } from 'next-sitemap';
import { getServerSdk } from '../../api-util/sdk';
export async function getServerSideProps(ctx) {
  // Method to source urls from cms
  const blogs = await axios.get('https://cms.fishmyspot.com/api/blogs');
  const fields = [];
  blogs.data.data.forEach((blog) => {
    fields.push({
      loc: `https://fishmyspot.com/blogs/${blog?.attributes?.slug}`,
      lastmod: new Date().toISOString(),
    });
  });

  const listings = await getServerSdk(ctx.req, ctx.res).listings.query();
  listings?.data?.data?.forEach((listing) => {
    fields.push({
      loc: `https://fishmyspot.com/pond-details/${listing?.id?.uuid}`,
      lastmod: new Date().toISOString(),
    });
  });

  return getServerSideSitemapLegacy(ctx, fields);
}

// Default export to prevent next.js errors
export default function Sitemap() {}
