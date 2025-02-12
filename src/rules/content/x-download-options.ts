/**
 * Sets `"X-Download-Options: noopen"` headers onto a `Headers` instance.
 * `X-Download-Options` is an HTTP header used to mitigate HTML risk by preventing Internet Explorer from automatically executing downloaded files.
 *
 * @see https://www.invicti.com/white-papers/whitepaper-http-security-headers/#XDownloadOptionsHTTPHeader
 */
export const xDownloadOptions = (headers: Headers) => {
  headers.set("X-Download-Options", "noopen");
};
