import { expect, it } from "vitest";
import { GET } from "./route";

it("responds 200 with status ok", async () => {
  const res = GET();
  expect(res.status).toBe(200);
  expect(await res.json()).toMatchObject({ status: "ok" });
});
