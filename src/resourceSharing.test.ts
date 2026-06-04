import { describe, expect, test } from "vitest";
import { resourceSharingSecurity } from "./resourceSharing";

describe("resourceSharingSecurity", () => {
  test("uses the 'same-origin' strategy by default", () => {
    const headers = new Headers();
    resourceSharingSecurity(headers);
    expect(headers.get("Cross-Origin-Resource-Policy")).toBe("same-origin");
  });

  test("uses the specified strategy when provided", () => {
    const headers = new Headers();
    resourceSharingSecurity(headers, { strategy: "cross-origin" });
    expect(headers.get("Cross-Origin-Resource-Policy")).toBe("cross-origin");
  });

  test("does not apply any default when strategy is 'none'", () => {
    const headers = new Headers();
    resourceSharingSecurity(headers, { strategy: "none" });
    expect(headers.has("Cross-Origin-Resource-Policy")).toBe(false);
  });

  test("overrides with explicit policy", () => {
    const headers = new Headers();
    resourceSharingSecurity(headers, {
      strategy: "same-origin",
      crossOriginResourcePolicy: "same-site",
    });
    expect(headers.get("Cross-Origin-Resource-Policy")).toBe("same-site");
  });

  test("does not apply any rules that are explicitly set to false", () => {
    const headers = new Headers();
    resourceSharingSecurity(headers, {
      strategy: "same-origin",
      crossOriginResourcePolicy: false,
    });
    expect(headers.has("Cross-Origin-Resource-Policy")).toBe(false);
  });
});
