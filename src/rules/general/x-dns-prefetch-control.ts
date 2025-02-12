/**
 * Sets `X-DNS-Prefetch-Control` headers onto a `Headers` instance.
 * Comes with basic defaults.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
 */
export const xDnsPrefetchControl = (
  headers: Headers,
  options: XDnsPrefetchControlOptions = "off",
) => {
  headers.set("X-DNS-Prefetch-Control", options);
};

export type XDnsPrefetchControlOptions = XDnsPrefetchControlDirective;
export type XDnsPrefetchControlDirective = "on" | "off";
