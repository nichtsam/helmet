import {
  type ContentSecurityPolicyOptions,
  type CrossOriginEmbedderPolicyOptions,
  type CrossOriginOpenerPolicyOptions,
  type CrossOriginResourcePolicyOptions,
  type ReferrerPolicyOptions,
  type StrictTransportSecurityOptions,
  type XDnsPrefetchControlOptions,
  type XFrameOptionsOptions,
  type XPermittedCrossDomainPoliciesOptions,
  contentSecurityPolicy,
  crossOriginEmbedderPolicy,
  crossOriginOpenerPolicy,
  crossOriginResourcePolicy,
  originAgentCluster,
  referrerPolicy,
  strictTransportSecurity,
  xContentTypeOptions,
  xDnsPrefetchControl,
  xDownloadOptions,
  xFrameOptions,
  xPermittedCrossDomainPolicies,
  xXssProtection,
} from "./rules/index.js";

/**
 * Sets sensible security headers onto a Headers instance.
 *
 * This utility function configures security headers based on the provided settings.
 */
export function helmet(
  headers: Headers,
  { options = {}, html = false, cors = false }: HelmetOptions = {},
) {
  switch (options.crossOriginResourcePolicy) {
    case undefined:
    case true:
      crossOriginResourcePolicy(headers, cors ? "cross-origin" : "same-origin");
      break;
    case false:
      break;
    default:
      crossOriginResourcePolicy(headers, options.crossOriginResourcePolicy);
  }

  if (options.originAgentCluster ?? true) {
    originAgentCluster(headers);
  }

  switch (options.referrerPolicy) {
    case undefined:
    case true:
      referrerPolicy(headers);
      break;
    case false:
      break;
    default:
      referrerPolicy(headers, options.referrerPolicy);
  }

  switch (options.strictTransportSecurity) {
    case undefined:
    case true:
      strictTransportSecurity(headers);
      break;
    case false:
      break;
    default:
      strictTransportSecurity(headers, options.strictTransportSecurity);
  }

  if (options.xContentTypeOptions ?? true) {
    xContentTypeOptions(headers);
  }

  switch (options.xDnsPrefetchControl) {
    case undefined:
    case true:
      xDnsPrefetchControl(headers);
      break;
    case false:
      break;
    default:
      xDnsPrefetchControl(headers, options.xDnsPrefetchControl);
  }

  switch (options.xPermittedCrossDomainPolicies) {
    case undefined:
    case true:
      xPermittedCrossDomainPolicies(headers);
      break;
    case false:
      break;
    default:
      xPermittedCrossDomainPolicies(
        headers,
        options.xPermittedCrossDomainPolicies,
      );
  }

  if (options.xXssProtection ?? true) {
    xXssProtection(headers);
  }

  if (html) {
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
}

export type HelmetOptions = {
  /**
   * Options to enable, disable defaults, or customized security headers for your own need
   */
  options?: SecureOptions;
  /**
   * Whether the content type is html, this enables document specific security headers.
   * @default {true}
   */
  html?: boolean;
  /**
   * Whether the content is shared cross-origin, this modifys defaults to support cross origin resource sharing.
   * @default {false}
   */
  cors?: boolean;
};

export type SecureOptions = GeneralSecureOptions & HtmlSpecificSecureOptions;

type GeneralSecureOptions = {
  crossOriginResourcePolicy?: CrossOriginResourcePolicyOptions | boolean;
  originAgentCluster?: boolean;
  referrerPolicy?: ReferrerPolicyOptions | boolean;
  strictTransportSecurity?: StrictTransportSecurityOptions | boolean;
  xContentTypeOptions?: boolean;
  xDnsPrefetchControl?: XDnsPrefetchControlOptions | boolean;
  xPermittedCrossDomainPolicies?:
    | XPermittedCrossDomainPoliciesOptions
    | boolean;
  xXssProtection?: boolean;
};

type HtmlSpecificSecureOptions = {
  contentSecurityPolicy?: ContentSecurityPolicyOptions | boolean;
  crossOriginOpenerPolicy?: CrossOriginOpenerPolicyOptions | boolean;
  crossOriginEmbedderPolicy?: CrossOriginEmbedderPolicyOptions | boolean;
  xDownloadOptions?: boolean;
  xFrameOptions?: XFrameOptionsOptions | boolean;
};
