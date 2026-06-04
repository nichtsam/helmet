import { describe, expect, test } from "vitest";
import { xDownloadOptions } from "./x-download-options";

describe("xDownloadOptions", () => {
  test("sets correct header", () => {
    const headers = new Headers();
    xDownloadOptions(headers);
    expect(headers.get("X-Download-Options")).toBe("noopen");
  });
});
