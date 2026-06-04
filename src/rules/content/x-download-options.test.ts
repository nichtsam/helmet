import { describe, expect, test } from "bun:test";
import { xDownloadOptions } from "./x-download-options";

describe("xDownloadOptions", () => {
  test("sets correct header", () => {
    const headers = new Headers();
    xDownloadOptions(headers);
    expect(headers.get("X-Download-Options")).toBe("noopen");
  });
});
