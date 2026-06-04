import { describe, expect, test } from "vitest";
import { strictTransportSecurity } from "./strict-transport-security";

describe("strictTransportSecurity", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    strictTransportSecurity(headers);
    expect(headers.get("Strict-Transport-Security")).toBe(
      "max-age=31536000;includeSubDomains",
    );
  });

  test("merges partial custom options with defaults", () => {
    const headers = new Headers();
    strictTransportSecurity(headers, { maxAge: 60 });
    const sts = headers.get("Strict-Transport-Security");
    expect(sts).toContain("max-age=60");
    expect(sts).toContain("includeSubDomains");
  });

  test("uses custom options", () => {
    const headers = new Headers();
    strictTransportSecurity(headers, {
      maxAge: 60,
      includeSubDomains: false,
      preload: true,
    });
    expect(headers.get("Strict-Transport-Security")).toBe("max-age=60;preload");
  });
});
