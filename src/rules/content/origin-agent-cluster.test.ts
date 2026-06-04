import { describe, expect, test } from "vitest";
import { originAgentCluster } from "./origin-agent-cluster";

describe("originAgentCluster", () => {
  test("sets correct header", () => {
    const headers = new Headers();
    originAgentCluster(headers);
    expect(headers.get("Origin-Agent-Cluster")).toBe("?1");
  });
});
