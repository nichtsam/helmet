/**
 * Sets `Strict-Transport-Security` headers onto a `Headers` instance.
 * Comes with basic defaults.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
 */
export const strictTransportSecurity = (
  headers: Headers,
  {
    maxAge = 365 * 24 * 60 * 60,
    includeSubDomains = true,
    preload = false,
  }: StrictTransportSecurityOptions = {},
) => {
  const directives = [`max-age=${maxAge}`];
  if (includeSubDomains) directives.push("includeSubDomains");
  if (preload) directives.push("preload");

  headers.set("Strict-Transport-Security", directives.join(";"));
};

export type StrictTransportSecurityOptions = {
  maxAge?: number;
  includeSubDomains?: boolean;
  preload?: boolean;
};
