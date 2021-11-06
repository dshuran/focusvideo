const MATCH_PROTOCOL = /(https?):\/+(.*)/;

/**
 * @param {string} search
 * @returns {string | null} parsedUrl
 */
export function parsePossibleYoutubeUrl(search) {
  const m = MATCH_PROTOCOL.exec(search);

  if (!m) return null;

  const protocol = m[1];
  const domainAndParams = m[2];

  return `${protocol}://${domainAndParams}`;
}
