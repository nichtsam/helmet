import { describe, expect, test } from "bun:test";
import { xDnsPrefetchControl } from "./x-dns-prefetch-control";

describe("xDnsPrefetchControl", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    xDnsPrefetchControl(headers);
    expect(headers.get("X-DNS-Prefetch-Control")).toBe("off");
  });

  test("uses custom directive", () => {
    const headers = new Headers();
    xDnsPrefetchControl(headers, "on");
    expect(headers.get("X-DNS-Prefetch-Control")).toBe("on");
  });
});
