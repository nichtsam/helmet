import { describe, expect, test } from "bun:test";
import { xPermittedCrossDomainPolicies } from "./x-permitted-cross-domain-policies";

describe("xPermittedCrossDomainPolicies", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    xPermittedCrossDomainPolicies(headers);
    expect(headers.get("X-Permitted-Cross-Domain-Policies")).toBe("none");
  });

  test("uses custom directive", () => {
    const headers = new Headers();
    xPermittedCrossDomainPolicies(headers, "all");
    expect(headers.get("X-Permitted-Cross-Domain-Policies")).toBe("all");
  });
});
