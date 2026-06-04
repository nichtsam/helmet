import { describe, expect, test } from "vitest";
import { crossOriginOpenerPolicy } from "./cross-origin-opener-policy";

describe("crossOriginOpenerPolicy", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    crossOriginOpenerPolicy(headers);
    expect(headers.get("Cross-Origin-Opener-Policy")).toBe("same-origin");
  });

  test("uses custom directive", () => {
    const headers = new Headers();
    crossOriginOpenerPolicy(headers, "unsafe-none");
    expect(headers.get("Cross-Origin-Opener-Policy")).toBe("unsafe-none");
  });
});
