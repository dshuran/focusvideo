const YOUTUBE_VIDEO_REGEX =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?(?:youtube\.com|youtu.be)(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
/**
 * @param {string} url
 * @returns {boolean}
 */
export function isYouTubeVideoUrl(url: string): boolean {
  return YOUTUBE_VIDEO_REGEX.test(url);
}
