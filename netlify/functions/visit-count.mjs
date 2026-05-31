import { getStore } from "@netlify/blobs";

// Global page-load counter backed by Netlify Blobs (built-in KV).
// On Netlify, Blobs is auto-provisioned at runtime — no API keys.
// Each GET increments a single "count" key and returns { count }.
//
// Strong consistency on the read: Blobs defaults to EVENTUAL
// consistency, where a read shortly after a write can still return the
// previous value. For a read-modify-write counter that means two visits
// close together read the same number and one increment is silently lost
// (observed live: back-to-back loads both returned the same count).
// Requesting strong consistency makes each read reflect the latest
// committed write.
//
// Note: the read-modify-write is still not atomic, so two *simultaneous*
// invocations could race and miss a tick. Acceptable for a site-visit
// counter; revisit only if traffic ever makes it matter.
export default async () => {
  try {
    const store = getStore("visits");
    const next =
      (Number(await store.get("count", { consistency: "strong" })) || 0) + 1;
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
