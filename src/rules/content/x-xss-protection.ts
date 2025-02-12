/**
 * Sets `"X-XSS-Protection: 0"` headers onto a `Headers` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
 */
export const xXssProtection = (headers: Headers) => {
  headers.set("X-XSS-Protection", "0");
};
