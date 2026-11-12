import { describe, expect, test } from "vitest";
import { contentSecurity } from "./content";

describe("contentSecurity", () => {
  test("does not set Cross-Origin-Embedder-Policy by default", () => {
    const headers = new Headers();
    contentSecurity(headers);
    expect(headers.has("Cross-Origin-Embedder-Policy")).toBe(false);
  });

  test("sets Cross-Origin-Embedder-Policy to 'require-corp' when enabled", () => {
    const headers = new Headers();
    contentSecurity(headers, { crossOriginEmbedderPolicy: true });
    expect(headers.get("Cross-Origin-Embedder-Policy")).toBe("require-corp");
  });

  test("uses the specified Cross-Origin-Embedder-Policy", () => {
    const headers = new Headers();
    contentSecurity(headers, { crossOriginEmbedderPolicy: "credentialless" });
    expect(headers.get("Cross-Origin-Embedder-Policy")).toBe("credentialless");
  });
});
