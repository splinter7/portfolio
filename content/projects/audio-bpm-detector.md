---
title: Audio BPM Detector
summary: A beat detection app that analyzes audio files and outputs BPM.
order: 4
stack: [JavaScript, Web Audio API, Vite, Vercel Functions]
source: https://github.com/splinter7/frontend-audio-processor
live: https://frontend-audio-processor.vercel.app/
year: 2026
---

## Overview

Drop in an audio file and get its tempo in beats per minute. The same detection code runs in three places: in the browser (the default), as an optional server-side analysis on Vercel, and as a command-line tool.

## The challenge

Tempo detection works on raw audio samples, and there's a lot of them: a three-minute stereo track at 44.1 kHz is about 16 million samples. The tool had to stay fast enough to feel instant in a browser, while handling the formats people actually have (MP3, WAV, OGG, FLAC, WebM).

There was also a privacy question. People's audio files are their own, so uploading them by default felt wrong.

## Approach

All three entry points share one module, `bpm.js`. It takes decoded audio, mixes stereo down to mono by averaging the two channels, and downsamples to about 11 kHz before handing the samples to the `music-tempo` library for beat detection. Beats show up as low-frequency energy changes, so keeping only every fourth sample loses little that matters for tempo and makes analysis far cheaper.

Decoding is the only part that differs. The browser uses the Web Audio API's `decodeAudioData`, while the CLI and the serverless function use a Node implementation of the same API.

## Design decisions

**Analyse on the device by default.** Files are processed in the browser and never leave it. Server analysis is opt-in, behind an "Analyze on server" switch.

**Respect the platform limit instead of fighting it.** Vercel caps request bodies at about 4.5 MB, so the server endpoint accepts files up to 4 MB. It streams the multipart upload, counts bytes as they arrive, discards anything past the limit, and checks the file is audio before decoding.

**Clear errors.** When there's no detectable beat, the app says so ("the audio might be too short or have no clear beat") instead of returning a meaningless number.

**One core, three shells.** Keeping detection in a single pure module meant the CLI, the web app and the API stay consistent, and fixes land everywhere at once.

## Outcome

A small, deployable tool with a private-by-default browser flow, an optional server path and a CLI. For the best results it needs a few seconds of audio with a clear beat.

