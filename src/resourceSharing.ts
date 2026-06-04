import {
  type CrossOriginResourcePolicyOptions,
  crossOriginResourcePolicy,
} from "./rules/resourceSharing/cross-origin-resource-policy.js";

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
      if (options.strategy === "custom" || options.strategy === "none") {
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
  /**
   * Different strategies result in different default security
   * headers and configurations being applied.
   *
   * Use "custom" to disable automatic defaults and configure
   * all headers manually.
   *
   * "none" is a deprecated alias of "custom".
   */
  strategy: "same-origin" | "cross-origin" | "custom" | "none";
  crossOriginResourcePolicy?: CrossOriginResourcePolicyOptions | boolean;
};
