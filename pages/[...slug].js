import { isYouTubeVideoUrl } from "../src/utils/isYouTubeVideoUrl";
import { searchStringToUrl } from "../src/utils/searchStringToUrl";
import FocusPage from "../src/components/FocusPage";

export default function FocusPageWithUrlFromQuery({ url }) {
  return <FocusPage url={url} />;
}

/**
 *
 * @param {import('next').GetServerSidePropsContext<{ slug: string }>} context
 * @return {import('next').GetServerSidePropsResult<{ url: string | null }>}
 */
export function getServerSideProps(context) {
  const possiblyYoutubeUrl = searchStringToUrl(context.req.url);

  const url =
    possiblyYoutubeUrl && isYouTubeVideoUrl(possiblyYoutubeUrl)
      ? possiblyYoutubeUrl
      : null;

  return {
    props: {
      url: url,
    },
  };
}
