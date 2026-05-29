import { getStore } from "@netlify/blobs";

// Global page-load counter backed by Netlify Blobs (built-in KV).
// On Netlify, Blobs is auto-provisioned at runtime — no API keys.
// Each GET increments a single "count" key and returns { count }.
//
// Note: read-modify-write is not atomic, so under heavy concurrency a
// visit could occasionally be missed. Acceptable for a site-visit
// counter; revisit only if traffic ever makes it matter.
export default async () => {
  try {
    const store = getStore("visits");
    const next = (Number(await store.get("count")) || 0) + 1;
    await store.set("count", String(next));
    return new Response(JSON.stringify({ count: next }), {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "counter unavailable" }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      },
    );
  }
};
