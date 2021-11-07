import { useState, useMemo } from "react";
import { getYouTubeVideoID } from "../utils/getYouTubeVideoID";
import { isYouTubeVideoUrl } from "../utils/isYouTubeVideoUrl";

/**
 *
 * @param {string|null} url
 * @returns
 */
export function useYoutubeVideoIdState(url) {
  const [videoUrl, setYoutubeVideoUrl] = useState(url || "");

  const wasInvalidTry = useMemo(
    () => videoUrl && !isYouTubeVideoUrl(videoUrl),
    [videoUrl]
  );

  const videoId = useMemo(
    () => (wasInvalidTry ? null : getYouTubeVideoID(videoUrl)),
    [videoUrl, wasInvalidTry]
  );

  return {
    videoId,
    wasInvalidTry,
    setYoutubeVideoUrl,
  };
}
