/**
 * Sets `Cross-Origin-Opener-Policy` headers onto a `Headers` instance.
 * Comes with basic defaults.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
 */
export const crossOriginOpenerPolicy = (
  headers: Headers,
  options: CrossOriginOpenerPolicyOptions = "same-origin",
) => {
  headers.set("Cross-Origin-Opener-Policy", options);
};

export type CrossOriginOpenerPolicyOptions = CrossOriginOpenerPolicyDirective;
export type CrossOriginOpenerPolicyDirective =
  | "unsafe-none"
  | "same-origin"
  | "same-origin-allow-popups"
  | "noopener-allow-popups";
