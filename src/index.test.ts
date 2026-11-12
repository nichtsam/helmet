import { describe, expect, test } from "vitest";
import { helmet } from "./index";

describe("helmet", () => {
  test("uses the 'same-origin' resource sharing strategy by default", () => {
    const headers = new Headers();
    helmet(headers);
    expect(headers.get("Cross-Origin-Resource-Policy")).toBe("same-origin");
  });

  test("uses the specified resource sharing strategy", () => {
    const headers = new Headers();
    helmet(headers, { resourceSharing: { strategy: "cross-origin" } });
    expect(headers.get("Cross-Origin-Resource-Policy")).toBe("cross-origin");
  });

  test("does not set Cross-Origin-Resource-Policy with the 'custom' strategy", () => {
    const headers = new Headers();
    helmet(headers, { resourceSharing: { strategy: "custom" } });
    expect(headers.has("Cross-Origin-Resource-Policy")).toBe(false);
  });
});
