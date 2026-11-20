---
title: Real-Time Audio Streaming Web App
summary: A low-latency audio streaming application built with React and Node.js. Focused on resilient playback and real-time delivery using chunked audio and WebRTC.
order: 1
stack: [React, Node.js, WebRTC, Web Audio API, Vitest, Jest]
source: https://github.com/splinter7/audio-streaming
year: 2026
# No live site, so the cover shows this excerpt from the repo instead of a
# screenshot. highlight uses 1-based line numbers.
coverCode:
  file: server/index.js
  highlight: [2]
  code: |
    // Check buffered amount for flow control
    if (dataChannel.bufferedAmount < 256 * 1024) {
      dataChannel.send(chunk);
      chunkIndex++;
    }
    chunkTimeoutId = setTimeout(sendChunk, 50); // ~20 chunks per second
draft: true
---

<!-- CHECK: Draft written from the repo's README, docs/ and source. Confirm the "why" in the overview, and add your role. -->

## Overview

A browser audio player that streams an MP3 from a Node server over a WebRTC DataChannel instead of a plain HTTP download. The server sends the file in chunks, and the client buffers, decodes and plays them through the Web Audio API, with play, pause and stop controls and a live buffering readout.

<!-- CHECK: Why did you build this? A prototype for work, an interview exercise, curiosity about WebRTC? One sentence here makes the rest land. -->

## The challenge

Streaming audio sounds simple until you control every layer yourself. Four problems shaped the project:

- **Pacing the sender.** Pushing a whole file into a DataChannel as fast as possible fills the channel's send buffer and starves everything else on the connection.
- **Knowing when to start playing.** The client receives raw bytes, not seconds of audio, so it has to judge "enough buffered" before it can decode anything.
- **Decoding partial MP3 data.** `decodeAudioData` fails on byte ranges that end mid-frame, which is exactly what a chunked stream produces.
- **Browser autoplay rules.** Browsers keep an `AudioContext` suspended until the user interacts with the page, so a buffer can be ready while nothing plays.

## Approach

The server reads the MP3 and sends it in **64 KB chunks every 50 ms**, roughly 20 chunks a second. Before each send it checks the DataChannel's `bufferedAmount` and only sends when less than 256 KB is queued. That simple backpressure check keeps the channel from bloating.

Connection setup uses a small HTTP signalling endpoint: the client posts an SDP offer to `/api/offer`, the server answers, and ICE candidates are exchanged to open the peer connection.

On the client, the logic is split into focused hooks (`useWebRTCConnection`, `useAudioStream`, `useAudioDecoder`, `useAudioPlayback`) plus pure utilities for buffer maths and chunk accumulation, which made each piece testable on its own.

## Design decisions

**WebRTC DataChannel over WebSockets.** WebSockets would have been simpler to set up, but the server would relay every byte through a long-lived socket. The DataChannel gives ordered, encrypted delivery over a direct connection, at the cost of a more involved signalling step. The trade-off is written up in the repo's system design doc.

**Estimate the buffer from bytes, not decoded audio.** Playback starts once **10 seconds** are buffered. Instead of decoding just to measure duration, the client estimates it from byte count using a deliberately conservative 12 KB per second (a typical 128 kbps MP3 is 16 KB per second). Under-estimating means waiting slightly longer, never starting too early.

**Treat decode errors as expected.** A failed decode on a partial frame isn't an error, it's a signal to keep buffering. The client only surfaces an error after repeated consecutive failures.

**Make autoplay a first-class state.** A small user-gesture tracker resumes the shared `AudioContext` on the first click or tap. If someone presses play before the buffer is ready, the app shows "Buffering…" and starts automatically when the threshold is reached, so they never have to press play twice.

**One `AudioContext` for the whole app.** Browsers limit how many contexts a page can open, so a singleton manager owns it and closes it on unmount.

## Outcome

The result streams reliably, recovers from dropped connections with a retry, and cleans up its connections and audio resources when stopped. The frontend is covered by Vitest tests and the server by Jest tests, and the repo includes plain-language and technical write-ups of the architecture.

Next steps I'd take: decode in a Web Worker to keep the main thread free, move to streaming decode with the MediaSource API instead of re-decoding accumulated buffers, and switch to Opus for better compression than MP3.

<!-- CHECK: Add anything you learned or would do differently, in your own words. -->
