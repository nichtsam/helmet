/**
 * Sets `"Origin-Agent-Cluster: ?1"` headers onto a `Headers` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin-Agent-Cluster
 */
export const originAgentCluster = (headers: Headers) => {
  headers.set("Origin-Agent-Cluster", "?1");
};
