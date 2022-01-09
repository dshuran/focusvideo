import { useCallback, useEffect } from "react";
import YouTube from "react-youtube";
import { useYoutubeVideoIdState } from "../hooks/useYoutubeVideoIdState";

const YOUTUBE_OPTIONS = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    rel: 0,
  },
};
/**
 * @param {{
 *   url: string | null
 * }} props
 * @returns {JSX.Element}
 */
export default function FocusPage({ url }) {
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

  const invalidUrlVideoBlockClassnames = wasInvalidTry
    ? "border border-red-500"
    : "";

  return (
    <div className="bg-neutral-800 flex justify-center">
      <div className="max-w-2xl flex-grow mt-10 flex flex-col">
        <span className="text-lg font-semibold text-yellow-500 pb-2 pl-4">
          Focus on youtube video without any distractions!
        </span>
        <input
          type="text"
          placeholder="example: https://www.youtube.com/watch?v=1PetRVcM2sk"
          onChange={handleInputChange}
          className="mb-16 rounded-2xl p-2 pl-4 border focus:border-blue-600 text-gray-800 shadow text-lg appearance-none font-semibold focus:outline-none focus:shadow-outline"
        />
        <div
          className={`flex justify-center bg-gray-500 p-5 rounded-2xl ${invalidUrlVideoBlockClassnames}`}
        >
          {videoId ? (
            <YouTube
              videoId={videoId}
              opts={YOUTUBE_OPTIONS}
              className="flex-grow max-w-full"
            />
          ) : wasInvalidTry ? (
            <span className="font-semibold text-lg text-yellow-400">
              Try pasting valid youtube video url!
            </span>
          ) : (
            <span className="font-semibold text-lg">
              Video will be loaded here :)
            </span>
          )}
        </div>
        <a
          href="https://t.me/dovideo"
          className="bg-gray-500 p-1 rounded-2xl mt-auto mb-5 text-lg font-medium flex justify-center hover:bg-green-600"
        >
          <span className="text-yellow-400">Leave feedback</span>
        </a>
      </div>
    </div>
  );
}
