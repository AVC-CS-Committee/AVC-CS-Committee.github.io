# Weird Skience website

A silly, personalized website by the CS Club. We plan to do occassional blog posts, as well as have personal pages for members of the club who want to participate.

Currently, we still need to pick a theme in order to replace the existing template. You can view the live site here:

<https://avc-cs-committee.github.io/>

This repository is setup to publish the `docs/` folder as the root folder of the website (so that, e.g., `docs/index.html` is published at `[domain]/index.html`).

The `_markdown/` folder is used to hold all the markdown files and other files used for the Eleventy static site generator.

In order to make additions to the site, please use the static site generator. __Do not add files to `docs` manually!__

# Setup your environment

To start, you will need to have `git` and `npm` installed.

## Clone the repo

`git clone https://github.com/AVC-CS-Committee/AVC-CS-Committee.github.io`

navigate into that folder

`cd AVC-CS-Committee.github.io`

## Installing required node packages

To install all dependencies (including Eleventy), navigate to the _markdown folder (which is where we install our node packages to):

`cd _markdown`

Then tell npm to install all dependencies:

`npm install`

# Making changes to the site

## Adding a page

Navigate to the `_markdown` folder and create some file `[filename].md`. A corresponding file `[filename]/index.html` will be created in the `docs/` folder. If your `.md` file is nested, for instance `foo/bar.md`, it will create it nested in the `docs/` folder correspondingly: `foo/bar/index.html`

## Editing a page

Simply navigate to the existing markdown file in `_markdown`, edit the file, then run `npx @11ty/eleventy --serve` in order to build the site (and also run a live server that lets you view your changes).

Once you've confirmed everything looks good, quit the live server (press Ctrl+C), then commit your changes.

## Editing a template

Templates are located in `_markdown/_includes/`. You can create as many templates as you like, and you can add rules to each file for which template to use. These templates are written in HTML. Simply edit or create a template, edit any metadata on markdown files (if needed), then run eleventy to apply changes to the site.

## Adding files to the site (images, style.css, etc)

For files that are not meant to become html, you must manually add them to the `docs/` folder. For instance, the CSS stylesheet, as well as any images, are all manually added to `docs/`, since Eleventy does not handle them. Do not add these files to the `_markdown` folder.