---
title: A Tutorial Page with example components
description: A quick guide using blocks like code, file tree, and step instructions.
sidebar:
  label: Custom sidebar label
  order: 2
  badge:
    text: New
    variant: tip
blocks:
  - type: rte
    title: 'My Article'
    description: 'A short summary'
    content: |
      ## Steps with content and Code
      The Code should also get a **lang** parameter.
      ### subheadline1
      - Step 1 - title, content, code, lang
      ### subheadline2
      - Item 2 - title, content, code, lang
      [Link](https://example.com)
  - type: steps
    title: Installation Steps
    steps:
      - title: Install via npm
        content: |
          Use npm to install the CLI tool globally.
        code: |
          npm install -g my-tool
      - title: Make sure to build something awesome
        content: |
          We all are looking for the next great thing to believe in,
          to support and strive for. To talk about and to visit daily.
        filetree:
          type: filetree
          title: Project Structure
          tree: |
            - astro.config.mjs # great comment!
            - package.json # weird comment
            - src
                - components
                - Header.astro
                - **Title.astro**
                - pages/
      - title: Verify installation
        content: |
          Check the version to confirm it was installed correctly.
        # Removed code entirely because this step has nothing to execute
      - title: Verify installation JS
        content: |
          Check the version to confirm it was installed correctly.
        lang: js
        code: |
          export function onRequest(context, next) {
              context.locals.title = "New title";
              return next();
          };
  - type: rte
    title: 'Filetree'
    description: 'A short summary'
    content: |
      ## The FileTree
      ### subheadline11
      The FileTree also supports Comments and Highlights from the Starlight docs.
      ### subheadline22
      Bla bla bla
  - type: filetree
    title: Project Structure
    tree: |
      - astro.config.mjs # great comment!
      - package.json # weird comment
      - src
        - components
          - Header.astro
          - **Title.astro**
        - pages/
  - type: code
    title: Example Config File
    lang: json
    code: |
      {
        "name": "my-project",
        "scripts": {
          "start": "node src/index.js"
        }
      }
---
