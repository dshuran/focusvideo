import YouTube from "react-youtube";
import { useState, useCallback } from "react";

const YOUTUBE_OPTIONS = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    rel: 0,
  },
};

const YOUTUBE_VIDEO_REGEX =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

/**
 * @param {string} url
 * @returns {boolean}
 */
function isYouTubeVideoUrl(url) {
  return YOUTUBE_VIDEO_REGEX.test(url);
}

/**
 * @param {string} url
 * @returns {string}
 */
function getYouTubeVideoID(url) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

export default function Home() {
  const [videoId, setVideoId] = useState(null);
  const [wasInvalidTry, setInvalidTry] = useState(false);

  const handleInputChange = useCallback(
    (event) => {
      const url = event.target.value;

      if (!isYouTubeVideoUrl(url)) {
        setInvalidTry(true);
        return;
      }

      const videoId = getYouTubeVideoID(url);
      setVideoId(videoId);
      setInvalidTry(false);
    },
    [setVideoId, setInvalidTry]
  );

  return (
    <div className="bg-gray-800 flex justify-center">
      <div className="max-w-2xl flex-grow mt-10 flex flex-col">
        <input
          type="text"
          placeholder="Paste youtube video link there and enjoy!"
          onChange={handleInputChange}
          className="mb-16 rounded-2xl p-2 pl-4 border focus:border-blue-600 text-gray-800 shadow text-lg appearance-none font-semibold focus:outline-none focus:shadow-outline"
        />
        <div className="flex justify-center bg-gray-500 p-5 rounded-2xl">
          {videoId ? (
            <YouTube
              videoId={videoId}
              opts={YOUTUBE_OPTIONS}
              className="flex-grow max-w-full"
            />
          ) : (
            <span className="font-semibold text-lg">
              {wasInvalidTry
                ? "Try pasting valid youtube video url!"
                : "Just paste the youtube video url above and enjoy :)"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
