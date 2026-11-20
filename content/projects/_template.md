---
# Copy this file to <slug>.md (the filename becomes the URL: /projects/<slug>).
# Files starting with "_" are ignored.
title: Project name
summary: One or two sentences. Shown on the home page card and as the intro on the case study.
order: 5                 # position on the home page
stack: [React, Node.js]  # shown on the card and in the sidebar
source: https://github.com/you/repo
live: https://example.com   # optional
year: 2026                  # optional
role: Solo project          # optional
# Optional. The cover shows a screenshot of the live site (add one to
# app/components/projectCovers.tsx); without one, it shows this code instead.
# highlight uses 1-based line numbers.
coverCode:
  file: src/index.js
  highlight: [1]
  code: |
    export function core() {
      return "the line that matters";
    }
draft: true    # drafts have a page in development only; remove when it's ready to publish
---

## Overview

What it is and who it's for, in a short paragraph.

## The challenge

The hard part. What made this more than a tutorial?

## Approach

How you broke the problem down and what you built.

## Design decisions

The choices that mattered, the alternatives you rejected, and why.

## Outcome

What works now, what you learned, and what you'd do next.
