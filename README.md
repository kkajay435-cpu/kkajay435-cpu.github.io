# Zainab Kabira — Playground Clone

A complete, high-fidelity interactive clone of [Zainab Kabira's Playground](https://zainabkabira.com/playground).

## ✨ Features Included

- **3D Coverflow Carousel**:
  - Interactive 3D cards rotating in 3D perspective with realistic physics, depth, scale, and lighting.
  - 10 interactive motion & 3D experiments (Spline & Blender projects: *Membership Card*, *Exploding Burger*, *G-Land*, *Digital Innovators*, *Dispersion*, *The Frame*, *Light Streaks*, *Dystopian City*, *Realistic Donut*, and *Dungeons & Dragons*).
  - Native video autoplay & loop on focused cards with high-res poster fallbacks.
  - Interactive Lightbox modal for full-screen inspection of experiments with metadata, tools used, and description.
  - Full keyboard controls (← / → to rotate, Enter / Space to expand, Esc to close lightbox).
  - Mouse drag & touch swipe with axis-locked rotation.
  - Endless mouse wheel rotation.
- **Audio & Sound Player**:
  - Cassette / vinyl disc audio player with custom animated waveform in the nav bar.
  - Soundtrack playback (`recorder-song.mp3`).
- **Day / Night Theme Engine**:
  - Real-time theme toggle between daylight cream skies and dark starry sky with gradient mesh shaders.
- **Full Navigation & SPA Routing**:
  - Seamless curtain page transitions between **Playground**, **Work**, and **About**.
  - All case studies included (*Hatcha*, *Fireflut*, *Existence*, *Jumpable*).
- **100% Offline & Self-Contained**:
  - All 175+ media files (videos, posters, SVG vectors, shaders, textures, audio tracks) are stored locally in `/assets`.

---

## 🚀 How to Run

### Option 1: Using the included Python Server (Recommended)
This includes HTTP 206 Partial Content (Range request) support for smooth video streaming and scrubbing on Safari, Chrome, and Firefox:

```bash
python3 server.py
```
Then open:
- [http://localhost:3000](http://localhost:3000) or [http://localhost:3000/playground](http://localhost:3000/playground)

### Option 2: Using Any Static Web Server
You can also use Node.js `npx serve`, Vite, or Python's built-in server:

```bash
# Using Node
npx serve .

# Or Python built-in
python3 -m http.server 3000
```

---

## 📁 Project Structure

```
.
├── index.html                  # Main SPA entry point (defaults to Playground view)
├── playground.html             # Direct playground page
├── playground/                 # Playground route directory (SPA fallback)
│   └── index.html
├── about/                      # About route directory
│   └── index.html
├── work/                       # Case study routes
│   ├── hatcha/
│   ├── fireflut/
│   ├── existence/
│   └── jumpable/
├── css/
│   └── site.css                # Brand tokens, dark/light theme, typography, reset
├── js/
│   └── site.js                 # Shared web components (<site-nav>, <site-footer>)
├── assets/                     # 76MB of videos, posters, SVGs, audio, and shaders
│   ├── playground/             # 10 3D experiment MP4 videos, images & posters
│   └── ...
└── server.py                   # Dev server with HTTP 206 video range streaming
```
