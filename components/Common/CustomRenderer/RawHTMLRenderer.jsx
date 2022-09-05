import HTMLReactParser from "html-react-parser";

const RawHTMLRenderer = ({ data }) => {
  let urlFinder = /src=(.*)/;
  let match = urlFinder.exec(data?.html);
  let url = match[0].split(" ")[0];
  let originalUrl = url.split("=")[1];
  let youtubeUrl = `<iframe class="w-full mb-7 md:mb-10 aspect-video" src=${originalUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  return <>{data?.html && <>{HTMLReactParser(youtubeUrl)}</>}</>;
};

export default RawHTMLRenderer;
