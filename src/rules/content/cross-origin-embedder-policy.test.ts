import { describe, expect, test } from "bun:test";
import { crossOriginEmbedderPolicy } from "./cross-origin-embedder-policy";

describe("crossOriginEmbedderPolicy", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    crossOriginEmbedderPolicy(headers);
    expect(headers.get("Cross-Origin-Embedder-Policy")).toBe("require-corp");
  });

  test("uses custom directive", () => {
    const headers = new Headers();
    crossOriginEmbedderPolicy(headers, "credentialless");
    expect(headers.get("Cross-Origin-Embedder-Policy")).toBe("credentialless");
  });
});
