import { describe, expect, test } from "vitest";
import { crossOriginResourcePolicy } from "./cross-origin-resource-policy";

describe("crossOriginResourcePolicy", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    crossOriginResourcePolicy(headers);
    expect(headers.get("Cross-Origin-Resource-Policy")).toBe("same-origin");
  });

  test("uses custom directive", () => {
    const headers = new Headers();
    crossOriginResourcePolicy(headers, "cross-origin");
    expect(headers.get("Cross-Origin-Resource-Policy")).toBe("cross-origin");
  });
});
