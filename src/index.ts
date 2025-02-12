import {
  type ContentSecureOptions,
  contentSecurity,
} from "./rules/content/index.js";
import {
  type GeneralSecureOptions,
  generalSecurity,
} from "./rules/general/index.js";
import {
  type ResourceSharingSecureOptions,
  resourceSharingSecurity,
} from "./rules/resourceSharing/index.js";

const headers = new Headers();
helmet(headers, { content: { contentSecurityPolicy: {} } });

helmet(headers, { resourceSharing: true });

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
   * Configures security headers related to resource sharing (CORS).
   * Disabled by default.
   */
  resourceSharing?: ResourceSharingSecureOptions | boolean;
};
