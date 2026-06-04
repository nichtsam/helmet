import { describe, expect, test } from "bun:test";
import { xFrameOptions } from "./x-frame-options";

describe("xFrameOptions", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    xFrameOptions(headers);
    expect(headers.get("X-Frame-Options")).toBe("SAMEORIGIN");
  });

  test("uses custom directive", () => {
    const headers = new Headers();
    xFrameOptions(headers, "DENY");
    expect(headers.get("X-Frame-Options")).toBe("DENY");
  });
});
