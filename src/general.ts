import { resourceSharingSecurity } from "./resourceSharing.js";
import { originAgentCluster } from "./rules/general/origin-agent-cluster.js";
import {
  type ReferrerPolicyOptions,
  referrerPolicy,
} from "./rules/general/referrer-policy.js";
import {
  type StrictTransportSecurityOptions,
  strictTransportSecurity,
} from "./rules/general/strict-transport-security.js";
import { xContentTypeOptions } from "./rules/general/x-content-type-options.js";
import {
  type XDnsPrefetchControlOptions,
  xDnsPrefetchControl,
} from "./rules/general/x-dns-prefetch-control.js";
import {
  type XPermittedCrossDomainPoliciesOptions,
  xPermittedCrossDomainPolicies,
} from "./rules/general/x-permitted-cross-domain-policies.js";

/**
 * Applies general security headers with sensible defaults.
 */
export function generalSecurity(
  headers: Headers,
  options: GeneralSecureOptions = {},
) {
  if (options.sameOrigin ?? true) {
    resourceSharingSecurity(headers, { strategy: "same-origin" });
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
}

export type GeneralSecureOptions = {
  sameOrigin?: boolean;
  originAgentCluster?: boolean;
  referrerPolicy?: ReferrerPolicyOptions | boolean;
  strictTransportSecurity?: StrictTransportSecurityOptions | boolean;
  xContentTypeOptions?: boolean;
  xDnsPrefetchControl?: XDnsPrefetchControlOptions | boolean;
  xPermittedCrossDomainPolicies?:
    | XPermittedCrossDomainPoliciesOptions
    | boolean;
};
