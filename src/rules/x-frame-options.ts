/**
 * Sets `X-Frame-Options` headers onto a `Headers` instance.
 * Comes with basic defaults.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
 */
export const xFrameOptions = (
  headers: Headers,
  options: XFrameOptionsOptions = "SAMEORIGIN",
) => {
  headers.set("X-Frame-Options", options);
};

export type XFrameOptionsOptions = XFrameOptionsDirective;
export type XFrameOptionsDirective = "DENY" | "SAMEORIGIN";
