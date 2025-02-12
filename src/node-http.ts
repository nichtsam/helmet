import type { ServerResponse } from "node:http";
import { type HelmetOptions, helmet as _helmet } from "./index.js";

/**
 * Sets sensible security headers onto `http.ServerResponse`.
 *
 * This utility function configures security headers based on the provided settings.
 */
export function helmet(response: ServerResponse, options?: HelmetOptions) {
  const headers = new Headers();
  _helmet(headers, options);
  response.setHeaders(headers);
}
