import { describe, expect, test } from "vitest";
import { contentSecurityPolicy } from "./content-security-policy";

describe("contentSecurityPolicy", () => {
  test("uses defaults", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers);
    const csp = headers.get("Content-Security-Policy");
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("font-src 'self' https: data:");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("script-src 'self'");
    expect(csp).toContain("style-src 'self' https: 'unsafe-inline'");
  });

  test("uses custom directives", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers, {
      useDefaults: false,
      directives: {
        fetch: {
          "default-src": ["'self'", "example.com"],
        },
      },
    });
    const csp = headers.get("Content-Security-Policy");
    expect(csp).toBe("default-src 'self' example.com");
  });

  test("merges custom directives with defaults", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers, {
      useDefaults: true,
      directives: {
        fetch: {
          "default-src": ["'self'", "example.com"],
        },
      },
    });
    const csp = headers.get("Content-Security-Policy");
    expect(csp).toContain("default-src 'self' example.com");
    expect(csp).toContain("font-src 'self' https: data:");
    expect(csp).toContain("object-src 'none'");
  });

  test("removes a default fetch directive set to undefined", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers, {
      directives: {
        fetch: {
          "script-src-attr": undefined,
        },
      },
    });
    const csp = headers.get("Content-Security-Policy");
    expect(csp).not.toContain("script-src-attr");
    expect(csp).toContain("script-src 'self'");
  });

  test("supports report-only mode", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers, {
      reportOnly: true,
      useDefaults: false,
      directives: {
        fetch: {
          "default-src": ["'self'"],
        },
      },
    });
    expect(headers.has("Content-Security-Policy")).toBe(false);
    expect(headers.get("Content-Security-Policy-Report-Only")).toBe(
      "default-src 'self'",
    );
  });

  test("supports a single sandbox token", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers, {
      useDefaults: false,
      directives: { document: { sandbox: "allow-forms" } },
    });
    expect(headers.get("Content-Security-Policy")).toBe("sandbox allow-forms");
  });

  test("supports multiple sandbox tokens", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers, {
      useDefaults: false,
      directives: { document: { sandbox: ["allow-forms", "allow-scripts"] } },
    });
    expect(headers.get("Content-Security-Policy")).toBe(
      "sandbox allow-forms allow-scripts",
    );
  });

  test("sets sandbox without tokens for an empty array", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers, {
      useDefaults: false,
      directives: { document: { sandbox: [] } },
    });
    expect(headers.get("Content-Security-Policy")).toBe("sandbox");
  });

  test("quotes the require-trusted-types-for keyword", () => {
    for (const value of ["'script'", "script"] as const) {
      const headers = new Headers();
      contentSecurityPolicy(headers, {
        useDefaults: false,
        directives: { other: { "require-trusted-types-for": value } },
      });
      expect(headers.get("Content-Security-Policy")).toBe(
        "require-trusted-types-for 'script'",
      );
    }
  });

  test("quotes the trusted-types allow-duplicates keyword", () => {
    for (const keyword of ["'allow-duplicates'", "allow-duplicates"] as const) {
      const headers = new Headers();
      contentSecurityPolicy(headers, {
        useDefaults: false,
        directives: { other: { "trusted-types": ["my-policy", keyword] } },
      });
      expect(headers.get("Content-Security-Policy")).toBe(
        "trusted-types my-policy 'allow-duplicates'",
      );
    }
  });

  test("does not set an empty policy", () => {
    const headers = new Headers();
    contentSecurityPolicy(headers, { useDefaults: false, directives: {} });
    expect(headers.has("Content-Security-Policy")).toBe(false);
  });
});
