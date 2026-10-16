# Priyam Srivastav — DevOps & Cloud Portfolio

A responsive React + Vite portfolio built with modular components and JSON data. Includes an animated interactive spider-web canvas, generated click sounds, and a custom music-file player.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL Vite prints in your terminal. To make a production build:
```bash
npm run build
npm run preview
```

## Add your own music
1. Put your music file in the `public/` folder.
2. Name it `music.mp3`, or change the `src` in `src/effects/MusicPlayer.jsx` to match your filename, for example `/my-track.ogg`.
3. The browser waits for the visitor's first click/tap/key press before starting playback because browsers commonly block autoplay with sound. The floating button mutes/unmutes the music.

Supported common formats include MP3, WAV and OGG, depending on the browser. Use audio you have permission to publish. This starter expects a single file at `/music.mp3`.

## Add your resume PDF
The supplied resume has been copied to `public/resume.pdf` and the hero includes a link to view it. Replace that PDF whenever you update your resume.

## Fill in the missing details later
Edit JSON data rather than component markup:
- `src/data/profile.json`: LinkedIn URL, GitHub profile URL, personal vision statement and introductory text.
- `src/data/projects.json`: repository URL in the `github` field for each project. Keep it as an empty string until you have the real URL.
- `src/data/certifications.json`: add a credential URL if you have one.
- `src/data/experience.json`: job description and accomplishments.
- `src/data/skills.json`: skills list.
- `src/data/education.json`: education details.

No GitHub or LinkedIn URLs have been fabricated. Project performance metrics are included as reported in the supplied resume; verify them before using the portfolio publicly if you need to substantiate them.

## Modular layout
```text
src/
  App.jsx
  main.jsx
  styles.css
  components/
    Navbar.jsx
    Hero.jsx
    SectionHeading.jsx
    Experience.jsx
    Skills.jsx
    Projects.jsx
    Certifications.jsx
    Vision.jsx
    Footer.jsx
  data/
    profile.json
    experience.json
    skills.json
    projects.json
    certifications.json
    education.json
  effects/
    spiderWeb.jsx
    MusicPlayer.jsx
    clickSound.js
```

## Notes
- The spider-web background is drawn in the browser and reacts to pointer/touch movement.
- Click sounds are synthesized with the Web Audio API; no click-sound asset is needed.
- Music is loaded from `public/music.mp3` and is not included in this source archive. Add your own file.
- Google Fonts are loaded online; system fallbacks are used if they are unavailable.
