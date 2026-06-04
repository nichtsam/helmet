import { describe, expect, test } from "vitest";
import { referrerPolicy } from "./referrer-policy";

describe("referrerPolicy", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    referrerPolicy(headers);
    expect(headers.get("Referrer-Policy")).toBe("no-referrer");
  });

  test("uses custom directive", () => {
    const headers = new Headers();
    referrerPolicy(headers, ["same-origin"]);
    expect(headers.get("Referrer-Policy")).toBe("same-origin");
  });

  test("handles multiple directives", () => {
    const headers = new Headers();
    referrerPolicy(headers, ["origin", "strict-origin"]);
    expect(headers.get("Referrer-Policy")).toBe("origin,strict-origin");
  });
});
