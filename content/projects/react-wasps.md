---
title: React Wasps
summary: A simple React app showcasing some animated flying wasps.
order: 3
stack: [React, Vite, GSAP, styled-components, Web Audio API]
source: https://github.com/splinter7/React-Wasps
live: https://react-wasps.vercel.app/
year: 2020
---

## Overview

An animated scene of wasps hovering over a cinematic backdrop. Each wasp flaps its wings from a sprite sheet and drifts up and down on its own rhythm. A thunder soundtrack makes the background flicker in time with the loudest moments of the audio.

## The challenge

Making a few sprites feel alive without them moving in lockstep, and tying a visual effect to sound in real time without coupling the audio code to the rendering code.

## Approach

**Wing flaps from a sprite sheet.** Each wasp steps through three frames of a sprite sheet by shifting its background position every 30 ms, which gives a fast, convincing flutter without any image swapping.

**Flight with GSAP.** A small `WaspAnimation` class tweens each wasp between a top and bottom position with a sine ease, then reverses on completion for an endless hover. Each instance picks a random range and duration, so no two wasps share a rhythm.

**Depth from scale.** The wasps are defined as data: three sizes with matching z-index, so the smaller, farther wasps sit behind the larger, nearer one.

**Thunder that drives the light.** The thunder track is routed through a Web Audio `AnalyserNode`. Every animation frame, the app computes the RMS loudness of the waveform, ignores anything below a threshold, and maps the rest to a 0–1 flicker intensity.

## Design decisions

**Randomness per instance, not per frame.** Randomising each wasp's range and timing once, at creation, produces natural variety without jitter.

**Events between audio and visuals.** The loudness loop doesn't touch the DOM. It dispatches a `thunder-flicker` custom event with the intensity, and the background listens for it. Either side can change without the other knowing.

**A threshold on loudness.** Without one, every rumble would cause a flicker. Only the peaks above the threshold light up the scene, which reads more like real lightning.

**Clean teardown.** Each animation can stop its interval and kill its tweens, and the flicker loop returns a stop function that cancels its animation frame and resets the intensity.

## Outcome

A small, self-contained animation piece that combines sprite animation, tweening and live audio analysis. It's also where I first connected Web Audio analysis to visuals, an idea I've kept coming back to.

