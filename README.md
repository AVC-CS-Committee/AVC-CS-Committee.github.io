# Weird Skience website

A silly, personalized website by the CS Club. We plan to do occassional blog posts, as well as have personal pages for members of the club who want to participate.

Currently, we still need to pick a theme in order to replace the existing template. You can view the live site here:

<https://avc-cs-committee.github.io/>

This repository is setup to publish the `docs/` folder as the root folder of the website (so that, e.g., `docs/index.html` is published at `[domain]/index.html`).

The `_markdown/` folder is used to hold all the markdown files and other files used for the Eleventy static site generator.

In order to make additions to the site, please use the static site generator. __Do not add files to `docs` manually!__

# Setup your environment

Prerequisites:

1) Install [git](https://git-scm.com/install/), [git for windows](https://gitforwindows.org/), or [github desktop](https://desktop.github.com/download/)
2) Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Clone the repo

```
git clone https://github.com/AVC-CS-Committee/AVC-CS-Committee.github.io

cd AVC-CS-Committee.github.io
```

## Installing required node packages

To install all dependencies (including Eleventy), run:

```
cd _markdown
npm install 
```

# Making changes to the site

## Adding a page

Navigate to the `_markdown` folder and create some file `[filename].md`. A corresponding file `[filename]/index.html` will be created in the `docs/` folder. If your `.md` file is nested, for instance `foo/bar.md`, it will create it nested in the `docs/` folder correspondingly: `foo/bar/index.html`

## Editing a page

Simply find and edit the existing markdown file in `_markdown` that corresponds to the page you would like to see changed. After saving the file, make sure your terminal is in the `_markdown` folder, then run `npx @11ty/eleventy --serve` to build and serve the site. You can preview your changes at the localhost link provided in the terminal.

Once you've confirmed everything looks good, quit the live server (press Ctrl+C), then commit your changes.

## Editing a layout

Layouts are located in `_markdown/_includes/`. You can create as many layouts as you like, and you can add rules to each file for which layout to use. These layouts are written in HTML. Simply edit or create a layout, edit any metadata on markdown files (if needed), then run eleventy to apply changes to the site.

You specify the layout for a given page by placing this at the top of the markdown file:

```
---
title: my title
layout: layout.html
---
```

replacing `layout.html` with the filename of your layout file.

**Note**: Remember that since the layout file is applied to many pages, any modifications you make will apply to all of those pages. If you want to make changes to just one particular page, please create a *new* layout file, and specify it for that page.

## Adding files to the site (images, style.css, etc)

For files that are not meant to become html, you must manually add them to the `docs/` folder. For instance, the CSS stylesheet, as well as any images, are all manually added to `docs/`, since Eleventy does not handle them. Do not add these files to the `_markdown` folder.
