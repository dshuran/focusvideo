import { useState } from "react";
import { getYouTubeVideoID } from "../utils/getYouTubeVideoID";
import { isYouTubeVideoUrl } from "../utils/isYouTubeVideoUrl";

export function useYoutubeVideoIdState() {
  const [videoUrl, setYoutubeVideoUrl] = useState("");

  const wasInvalidTry = useMemo(() => isYouTubeVideoUrl(videoUrl), [videoUrl]);

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
