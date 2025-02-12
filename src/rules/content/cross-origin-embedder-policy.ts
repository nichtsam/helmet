/**
 * Sets `Cross-Origin-Embedder-Policy` headers onto a `Headers` instance.
 * Comes with basic defaults.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
 */
export const crossOriginEmbedderPolicy = (
  headers: Headers,
  options: CrossOriginEmbedderPolicyOptions = "require-corp",
) => {
  headers.set("Cross-Origin-Embedder-Policy", options);
};

export type CrossOriginEmbedderPolicyOptions =
  CrossOriginEmbedderPolicyDirective;
export type CrossOriginEmbedderPolicyDirective =
  | "unsafe-none"
  | "require-corp"
  | "credentialless";
