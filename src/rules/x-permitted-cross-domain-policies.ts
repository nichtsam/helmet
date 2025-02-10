/**
 * Sets `X-Permitted-Cross-Domain-Policies` headers onto a `Headers` instance.
 * Comes with basic defaults.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies
 */
export const xPermittedCrossDomainPolicies = (
  headers: Headers,
  options: XPermittedCrossDomainPoliciesOptions = "none",
) => {
  headers.set("X-Permitted-Cross-Domain-Policies", options);
};

export type XPermittedCrossDomainPoliciesOptions =
  XPermittedCrossDomainPoliciesDirective;
export type XPermittedCrossDomainPoliciesDirective =
  | "none"
  | "master-only"
  | "by-content-type"
  | "by-ftp-filename"
  | "all"
  | "none-this-response";
