/**
 * Sets `"X-Content-Type-Options: nosniff"` headers onto a `Headers` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
 */
export const xContentTypeOptions = (headers: Headers) => {
  headers.set("X-Content-Type-Options", "nosniff");
};
