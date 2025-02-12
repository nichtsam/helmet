import {
  type ContentSecurityPolicyOptions,
  contentSecurityPolicy,
} from "./content-security-policy.js";
import {
  type CrossOriginEmbedderPolicyOptions,
  crossOriginEmbedderPolicy,
} from "./cross-origin-embedder-policy.js";
import {
  type CrossOriginOpenerPolicyOptions,
  crossOriginOpenerPolicy,
} from "./cross-origin-opener-policy.js";
import { xDownloadOptions } from "./x-download-options.js";
import { type XFrameOptionsOptions, xFrameOptions } from "./x-frame-options.js";
import { xXssProtection } from "./x-xss-protection.js";

/**
 * Applies security headers for content resources that has a browsing context, typically text/html.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context
 * @see https://csplite.com/csp271/?rnd=67abe78254a64
 */
export function contentSecurity(
  headers: Headers,
  options: ContentSecureOptions = {},
) {
  if (options.xXssProtection ?? true) {
    xXssProtection(headers);
  }

  switch (options.contentSecurityPolicy) {
    case undefined:
    case true:
      contentSecurityPolicy(headers);
      break;
    case false:
      break;
    default:
      contentSecurityPolicy(headers, options.contentSecurityPolicy);
  }

  switch (options.crossOriginOpenerPolicy) {
    case undefined:
    case true:
      crossOriginOpenerPolicy(headers);
      break;
    case false:
      break;
    default:
      crossOriginOpenerPolicy(headers, options.crossOriginOpenerPolicy);
  }

  switch (options.crossOriginEmbedderPolicy) {
    case undefined:
    case true:
      crossOriginEmbedderPolicy(headers);
      break;
    case false:
      break;
    default:
      crossOriginEmbedderPolicy(headers, options.crossOriginEmbedderPolicy);
  }

  if (options.xDownloadOptions ?? true) {
    xDownloadOptions(headers);
  }

  switch (options.xFrameOptions) {
    case undefined:
    case true:
      xFrameOptions(headers);
      break;
    case false:
      break;
    default:
      xFrameOptions(headers, options.xFrameOptions);
  }
}

export type ContentSecureOptions = {
  contentSecurityPolicy?: ContentSecurityPolicyOptions | boolean;
  crossOriginOpenerPolicy?: CrossOriginOpenerPolicyOptions | boolean;
  crossOriginEmbedderPolicy?: CrossOriginEmbedderPolicyOptions | boolean;
  xDownloadOptions?: boolean;
  xFrameOptions?: XFrameOptionsOptions | boolean;
  xXssProtection?: boolean;
};
