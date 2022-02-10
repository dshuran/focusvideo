import { useCallback, useEffect } from "react";
import { useYoutubeVideoIdState } from "../hooks/useYoutubeVideoIdState";
import {UrlEdit} from "./UrlEdit";
import {VideoBlock} from "./VideoBlock";


/**
 * @param {{
 *   url: string | null
 * }} props
 * @returns {JSX.Element}
 */
export default function FocusPage({ url }: {url: string}) {
  const { videoId, wasInvalidTry, setYoutubeVideoUrl } =
    useYoutubeVideoIdState();

  const handleInputChange = useCallback(
    (event) => {
      setYoutubeVideoUrl(event.target.value);
    },
    [setYoutubeVideoUrl]
  );

  useEffect(() => {
    if (!url) return;

    setYoutubeVideoUrl(url);
  }, [url, setYoutubeVideoUrl]);

  return (
    <div className="bg-neutral-800 flex justify-center grow">
      <div className="max-w-5xl flex-grow flex flex-col justify-center p-2">
        <UrlEdit handleInputChange={handleInputChange}/>
        <VideoBlock videoId={videoId} wasInvalidTry={wasInvalidTry}/>
      </div>
    </div>
  );
}
