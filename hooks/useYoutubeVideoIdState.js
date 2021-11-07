import { useState, useMemo } from "react";
import { getYouTubeVideoID } from "../utils/getYouTubeVideoID";
import { isYouTubeVideoUrl } from "../utils/isYouTubeVideoUrl";

/**
 * @callback SetYoutubeVideoUrlCallback
 * @param {string} url
 * @returns {void} sets url
 *
 * @returns {{
 *   videoId: string
 *   wasInvalidTry: boolean
 *   setYoutubeVideoUrl: SetYoutubeVideoUrlCallback
 * }} youtube url state
 */
export function useYoutubeVideoIdState() {
  const [videoUrl, setYoutubeVideoUrl] = useState("");

  const wasInvalidTry = useMemo(
    () => videoUrl && !isYouTubeVideoUrl(videoUrl),
    [videoUrl]
  );

  const videoId = useMemo(
    () => (isYouTubeVideoUrl(videoUrl) ? getYouTubeVideoID(videoUrl) : null),
    [videoUrl]
  );

  return {
    videoId,
    wasInvalidTry,
    setYoutubeVideoUrl,
  };
}
