export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ status: "ok", commit: process.env.COMMIT_SHA ?? "local" });
}
