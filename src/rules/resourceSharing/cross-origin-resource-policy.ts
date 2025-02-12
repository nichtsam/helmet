/**
 * Sets `Cross-Origin-Resource-Policy` headers onto a `Headers` instance.
 * Comes with basic defaults.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy
 */
export const crossOriginResourcePolicy = (
  headers: Headers,
  options: CrossOriginResourcePolicyOptions = "same-origin",
) => {
  headers.set("Cross-Origin-Resource-Policy", options);
};

export type CrossOriginResourcePolicyOptions =
  CrossOriginResourcePolicyDirective;
export type CrossOriginResourcePolicyDirective =
  | "same-site"
  | "same-origin"
  | "cross-origin";
