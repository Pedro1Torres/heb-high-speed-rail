# H-E-B High Speed Rail

What if H-E-B had a high-speed rail station at every store in Texas? This interactive map imagines it: H-E-B stores stand as 3D buildings, rail routes link them, and animated trains run between the stations.

## Built with

- **Astro**: site framework
- **MapLibre GL JS**: the interactive map
- **Three.js**: the 3D stores, cowboy-hat markers and trains, drawn in a custom map layer
- **Blender**: the 3D models (store, cowboy hat, train)
- **Netlify**: hosting, plus a serverless visit counter on Netlify Blobs
- **Claude**: AI pair programmer

## Highlights

- **Route-striped stores.** A store served by several routes gets horizontal color bands wrapped around the 3D building. The GLSL is injected into Three.js's standard material (`attachStripeShader` in `src/components/HEBShinkansenLanding.astro`).
- **Real-world scale.** Models are placed and sized in meters, then converted to map coordinates. Trains grow at state-level zoom so they stay visible.
- **Animated trains.** Each train follows its route, turns to face its direction of travel, and pauses at stations.

## Run it locally

```bash
npm install
npm run dev
```

The visit counter is a Netlify Function, so it only runs on Netlify or under `netlify dev`.

---

Fan project. Not affiliated with or endorsed by H-E-B.
