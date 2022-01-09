import { useState, useMemo } from "react";
import { getYouTubeVideoID } from "../utils/getYouTubeVideoID";
import { isYouTubeVideoUrl } from "../utils/isYouTubeVideoUrl";

export interface YouTubeVideoIdState {
  videoId: string | undefined;
  wasInvalidTry: boolean;
  setYoutubeVideoUrl: (videoUrl: string) => void;
}

export function useYoutubeVideoIdState(): YouTubeVideoIdState {
  const [videoUrl, setYoutubeVideoUrl] = useState("");

  const wasInvalidTry: boolean = useMemo(
    () => !!videoUrl && !isYouTubeVideoUrl(videoUrl),
    [videoUrl]
  );

  const videoId: string | undefined = useMemo(
    () => (wasInvalidTry ? undefined : getYouTubeVideoID(videoUrl)),
    [videoUrl, wasInvalidTry]
  );

  return {
    videoId,
    wasInvalidTry,
    setYoutubeVideoUrl,
  };
}
