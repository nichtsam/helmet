import {
  type CrossOriginResourcePolicyOptions,
  crossOriginResourcePolicy,
} from "./cross-origin-resource-policy.js";

/**
 * Sets appropriate resource-sharing headers onto a `Headers` instance based on the specified strategy and options.
 * By default, it assumes the resource is only for sharing within the same origin.
 */
export function resourceSharingSecurity(
  headers: Headers,
  options: ResourceSharingSecureOptions = {
    strategy: "same-origin",
  },
) {
  switch (options.crossOriginResourcePolicy) {
    case undefined:
    case true:
      if (options.strategy === "none") {
        break;
      }
      crossOriginResourcePolicy(headers, options.strategy);
      break;
    case false:
      break;
    default:
      crossOriginResourcePolicy(headers, options.crossOriginResourcePolicy);
  }
}

export type ResourceSharingSecureOptions = {
  strategy: "same-origin" | "cross-origin" | "none";
  crossOriginResourcePolicy?: CrossOriginResourcePolicyOptions | boolean;
};
