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

The map and 3D code lives in [`src/components/HEBShinkansenLanding.astro`](src/components/HEBShinkansenLanding.astro).

- **Route-striped stores.** A store served by several routes gets horizontal color bands wrapped around the 3D building. The GLSL is injected into Three.js's standard material. Code: [stripe shader][stripe-shader].
- **Real-world scale.** Models are placed and sized in meters, then converted to map coordinates. Trains grow at state-level zoom so they stay visible. Code: [store placement][store-scale], [train zoom scaling][train-scale].
- **Animated trains.** Each train follows its route, turns to face its direction of travel, and pauses at stations. Code: [route following][train-route], [station stops][train-stops].

[stripe-shader]: https://github.com/Pedro1Torres/heb-high-speed-rail/blob/2ef27a0d75e3d58321f9725e6a2f6186aa4f8406/src/components/HEBShinkansenLanding.astro#L3226-L3272
[store-scale]: https://github.com/Pedro1Torres/heb-high-speed-rail/blob/2ef27a0d75e3d58321f9725e6a2f6186aa4f8406/src/components/HEBShinkansenLanding.astro#L3813-L3848
[train-scale]: https://github.com/Pedro1Torres/heb-high-speed-rail/blob/2ef27a0d75e3d58321f9725e6a2f6186aa4f8406/src/components/HEBShinkansenLanding.astro#L2578-L2595
[train-route]: https://github.com/Pedro1Torres/heb-high-speed-rail/blob/2ef27a0d75e3d58321f9725e6a2f6186aa4f8406/src/components/HEBShinkansenLanding.astro#L2524-L2602
[train-stops]: https://github.com/Pedro1Torres/heb-high-speed-rail/blob/2ef27a0d75e3d58321f9725e6a2f6186aa4f8406/src/components/HEBShinkansenLanding.astro#L2604-L2695

## Run it locally

```bash
npm install
npm run dev
```

The visit counter is a Netlify Function, so it only runs on Netlify or under `netlify dev`.

---

Fan project. Not affiliated with or endorsed by H-E-B.
