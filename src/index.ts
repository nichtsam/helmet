import { type ContentSecureOptions, contentSecurity } from "./content.js";
import { type GeneralSecureOptions, generalSecurity } from "./general.js";
import {
  type ResourceSharingSecureOptions,
  resourceSharingSecurity,
} from "./resourceSharing.js";

/**
 * Applies security headers to a `Headers` instance with sensible defaults.
 * General security headers are always set, while content and resource-sharing headers can be opted in.
 */
export function helmet(headers: Headers, options: HelmetOptions = {}) {
  switch (options.general) {
    case undefined:
    case true:
      generalSecurity(headers);
      break;
    case false:
      break;
    default:
      generalSecurity(headers, options.general);
  }

  switch (options.content) {
    case undefined:
    case false:
      break;
    case true:
      contentSecurity(headers);
      break;
    default:
      contentSecurity(headers, options.content);
  }

  switch (options.resourceSharing) {
    case undefined:
    case false:
      break;
    case true:
      resourceSharingSecurity(headers);
      break;
    default:
      resourceSharingSecurity(headers, options.resourceSharing);
  }
}

export type HelmetOptions = {
  /**
   * Configures general security headers.
   * Enabled by default.
   */
  general?: GeneralSecureOptions | boolean;
  /**
   * Configures security headers relevant to content, typically for `text/html` responses.
   * Disabled by default.
   *
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context
   */
  content?: ContentSecureOptions | boolean;
  /**
   * Configures security headers related to resource sharing.
   * `general` already applies the "same-origin" strategy,
   * so this is only needed to apply a different one.
   */
  resourceSharing?: ResourceSharingSecureOptions | boolean;
};
