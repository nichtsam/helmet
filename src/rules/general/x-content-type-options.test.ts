import { describe, expect, test } from "bun:test";
import { xContentTypeOptions } from "./x-content-type-options";

describe("xContentTypeOptions", () => {
  test("sets correct header", () => {
    const headers = new Headers();
    xContentTypeOptions(headers);
    expect(headers.get("X-Content-Type-Options")).toBe("nosniff");
  });
});
