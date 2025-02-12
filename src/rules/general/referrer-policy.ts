/**
 * Sets `Referrer-Policy` headers onto a `Headers` instance.
 * Comes with basic defaults.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
 */
export const referrerPolicy = (
  headers: Headers,
  options: ReferrerPolicyOptions = ["no-referrer"],
) => {
  headers.set("Referrer-Policy", options.join(","));
};

export type ReferrerPolicyOptions = ReferrerPolicyDirective[];
export type ReferrerPolicyDirective =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin (default)"
  | "unsafe-url";
