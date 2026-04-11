export const runtime = "edge";

// In-memory store as fallback, KV for production
let memoryStore: unknown[] = [];

export async function GET(request: Request) {
  // Try KV first (Cloudflare), fall back to memory
  try {
    const env = (request as unknown as { env?: { COMMENTS?: KVNamespace } }).env;
    if (env?.COMMENTS) {
      const data = await env.COMMENTS.get("all", "json");
      return Response.json(data || []);
    }
  } catch { /* fallback */ }
  return Response.json(memoryStore);
}

export async function POST(request: Request) {
  const comment = await request.json();
  try {
    const env = (request as unknown as { env?: { COMMENTS?: KVNamespace } }).env;
    if (env?.COMMENTS) {
      const data = (await env.COMMENTS.get("all", "json") || []) as unknown[];
      data.push(comment);
      await env.COMMENTS.put("all", JSON.stringify(data));
      return Response.json(comment, { status: 201 });
    }
  } catch { /* fallback */ }
  memoryStore.push(comment);
  return Response.json(comment, { status: 201 });
}

export async function PUT(request: Request) {
  const { id, ...updates } = await request.json();
  try {
    const env = (request as unknown as { env?: { COMMENTS?: KVNamespace } }).env;
    if (env?.COMMENTS) {
      const data = (await env.COMMENTS.get("all", "json") || []) as Record<string, unknown>[];
      const idx = data.findIndex((c) => c.id === id);
      if (idx !== -1) { data[idx] = { ...data[idx], ...updates }; await env.COMMENTS.put("all", JSON.stringify(data)); }
      return Response.json(data[idx] || {});
    }
  } catch { /* fallback */ }
  const idx = memoryStore.findIndex((c: unknown) => (c as Record<string, unknown>).id === id);
  if (idx !== -1) memoryStore[idx] = { ...(memoryStore[idx] as Record<string, unknown>), ...updates };
  return Response.json(memoryStore[idx] || {});
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    const env = (request as unknown as { env?: { COMMENTS?: KVNamespace } }).env;
    if (env?.COMMENTS) {
      const data = (await env.COMMENTS.get("all", "json") || []) as Record<string, unknown>[];
      const filtered = data.filter((c) => c.id !== id);
      await env.COMMENTS.put("all", JSON.stringify(filtered));
      return Response.json({ ok: true });
    }
  } catch { /* fallback */ }
  memoryStore = memoryStore.filter((c: unknown) => (c as Record<string, unknown>).id !== id);
  return Response.json({ ok: true });
}

// KV type for Cloudflare
interface KVNamespace {
  get(key: string, type: "json"): Promise<unknown>;
  put(key: string, value: string): Promise<void>;
}
