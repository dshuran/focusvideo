/**
 * @param {string} url
 * @returns {string}
 */
export function getYouTubeVideoID(url) {
  const parts = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

  return parts[2] !== undefined ? parts[2].split(/[^0-9a-z_\-]/i)[0] : parts[0];
}
