import { describe, expect, test } from "vitest";
import { xXssProtection } from "./x-xss-protection";

describe("xXssProtection", () => {
  test("sets correct header", () => {
    const headers = new Headers();
    xXssProtection(headers);
    expect(headers.get("X-XSS-Protection")).toBe("0");
  });
});
