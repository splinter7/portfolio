---
title: JCarousel JavaScript Carousel Library
summary: A dependency-free JavaScript carousel that loops infinitely, keeping five items in view with the centre item as the current selection.
order: 2
stack: [JavaScript, HTML, CSS]
source: https://github.com/splinter7/JCarousel
live: https://j-carousel.vercel.app/
year: 2020
---

## Overview

JCarousel is a small, dependency-free JavaScript class for an infinite-loop carousel. Give it an array of five or more items and it maintains a window of five, with the centre item as the current selection. A demo page adds the visual layer: animated transitions, next and previous buttons, arrow-key navigation and zoom controls.

## The challenge

An infinite carousel looks trivial until you reach the ends of the list. The visible window has to wrap seamlessly from the last item back to the first, in both directions, without duplicating items or jumping. It also has to stay predictable enough that the centre slot always means "selected".

## Approach

I separated the model from the presentation. The `Carousel` class knows nothing about the DOM. It tracks a single index into the source array, and `next()` and `prev()` move that index with wrap-around at both ends. After each move, the class rebuilds a five-item queue starting from the index, and if it runs off the end of the array it fills the remaining slots from the start.

Because the logic is plain JavaScript, it can be exercised in a browser console: create a carousel, call `next()` or `prev()`, and `print()` the current queue. The demo then renders that queue and animates items between positions.

## Design decisions

**Logic first, DOM second.** Keeping state in a framework-free class makes the wrap-around behaviour easy to reason about and reuse in any UI.

**The centre item is the selection.** Fixing the selected item at the middle position gives users a stable focal point and keeps two items of context visible on each side.

**Keyboard support in the demo.** Arrow keys mirror the buttons, so the carousel isn't mouse-only.

## Outcome

A compact, framework-agnostic carousel class with a live demo.

