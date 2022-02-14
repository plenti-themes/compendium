# Compendium | Blog Template

Compendium is a [Plenti](https://plenti.co/themes) theme template for freelance bloggers. It was designed to be easily customizable via the `index.json` content file. By adjusting a few of the key values, the template can transform into a combination of layout styles, and color schemes with light and dark theming.

***Advanced***: Optionally included is a "contact page" for delivering client message requests to your specified email address. The form triggers a serverless function, which submits the contact request via the Twilio [Sendgrid API](https://sendgrid.com/). The API endpoint function was designed to work on [Cloudflare Pages](https://pages.cloudflare.com/) (see below for details).

**TODO**:
* enhance and simplify the themplate theme with [daisyui](https://daisyui.com/)
* refactor color scheme implementation

## Usage

Start a new project using this theme:

``` bash
plenti new site my-site --theme=git@github.com:plenti-themes/compendium
```

Or add this theme to an existing project:

``` bash
plenti theme add git@github.com:plenti-themes/compendium
plenti theme enable compendium
```

After adding theme, manually copy any route overrides and delete conflicting content or layouts.


## Template Settings 

Think of the `index.json` file as the content file for your site configuration. There are some key values that you should definitely set for your site and some additional attributes for your theme styling.

### Site Attributes

Some of these attributes are automatically used for SEO content, however are primarily for personalizing your site.

key | description
--- | ---
name | the name of your site (e.g. Sample Site)
site | the URL of your site (e.g. www.sample.net)
logo | the logo for your site (e.g. logo.svg)
title | Personal Blog Site
description | A personal blog template for creating JAMStack sites with Plenti of Svelte

### Social Media Links

Enables inclusion of links to social media sites, as desired. The array of values include multiple versions of the following, depending on the number social media sites you prefer to link in your Aside.

key | description
--- | ---
src | URL to your social media link (e.g. https://www.linkedin.com/in/myusername)
ico | Icon for your social media provider (e.g lab la-linkedin-in)
enabled | true or false


### SEO Attributes

Our theme comes with [OGP](https://opengraphprotocol.org/) and Twitter Cards as standard features. OGP facilitates correct display of the title, URL, summary, and image of our pages when shared on social media. The goal is to increase the likelihood that any of our articles will be shared broadly.

key | description
--- | ---
locale | en_US
twitteruser | your twitter handle (e.g. @mytag)
author | Jo Doe
author_site | url for author (i.e. your LinkedIn page)
image | logo.png


### Theme Attributes

key | description
--- | ---
postsPerPage | Page-type pagination variable for the number of posts per page (e.g. 6)
projsPerPage | Project-type pagination variable for the number of posts per page (e.g. 3). Note: "projects" may be any grouping of related posts. For example, posts of a similar type or posts related to the same project
projsSort | This is read by the `projs.svelte` component, which will <br/>1) create a list of "postsGroup", <br/>2) then sort the postsGroup, and <br/>3) then sort the posts within the postsGroup<br/><u>*Values*</u>:<br/>**Date**: sorts post groups by most recently updated post in a group. Then it sorts the posts within the postsGroup by name. Useful for posts that are logically related (i.e. projects).<br/>**Name**: sorts post groups alphabetically by name and then sort the posts within a postsGroup by date. Useful for posts that fall into a similar type, etc.
tagsPerPage | The number of posts to display on tag-type or category-type pages (e.g. 12)
mathTypesetting | true will enable [Katex](https://katex.org/) styles
codeHighlighting | true will enable [PrismJS](https://prismjs.com/) styles
featuredPage | "Hero" article carousel style for the home page <br/><u>*Values*</u>:<br/>**Bleed**: will show a featured article image on the full screen<br/>**Frame**: will show a featured article image with a border<br/>**None**: will not show featured articles
colorScheme | This optional setting allows for scripted theme changes via Node.js (see below for details). <br /><u>*Current values*</u>: Earthliness, Simplicity, or Technobeat

## Advanced Features

Although not strictly required for site development using Plenti, the current process for developing custom color schemes involves using [Node.js](https://nodejs.org/). In addition, [wrangler2](https://github.com/cloudflare/wrangler2) is used for developing serverless functions using [Cloudflare Functions](https://developers.cloudflare.com/pages/platform/functions), and for integration testing our JAMSStack. Our `package.json` file contains node scripts for automating some of the repetitive stuff, and for publishing the site to Cloudflare Pages.

### Color Schemes

Included are three sample colors schemes for inspiring new schemes. These color schemes use [tailwindcss](https://tailwindcss.com/), which by default is configured for development purposes. Each color scheme is technically a pair of color schemes, one for our light theme and another for our dark theme. Changing the color schemes currently involves replacing the existing color scheme with a desired color scheme.

For example:

``` bash
cp styles/Earthliness.css assets/color-scheme.css
```

When developing new color schemes or updating tailwind styles it is helpful to use the node scripts. For example:

``` bash
npm run theme   # resets the complete tailwind CSS and copies our color scheme using index.json value (for development)
npm run build   # compiles the site for production (e.g. purged and minified CSS)
```

### Cloudflare Functions

Cloudflare Functions enable you to run server-side code for dynamic functionality without running a dedicated server. This works by executing our code on the Cloudflare network with the help of [Cloudflare Workers](https://workers.cloudflare.com/).

We need to setup two configuration files before developing Cloudflare Functions a `.env` file to contain our Sendgrid [environment variables](https://community.cloudflare.com/t/accessing-cloudflare-pages-functions-environment-variables/329962) that we setup on Cloudflare Pages, and a `wrangler.toml` which contain our Cloudflare account settings. Once configured, we can run the following node scripts.

``` bash
npm run preview # integration testing of our plenti site with Cloudflare Functions
npm run publish # publish our fully complled and tested code to Cloudflare Pages 
```

**Note**: the filenames for both of these configuration files have been included in our `.gitignore` file. For security reasons, they should not be published to a Git repo. Below are some sample files for reference:

**.env file**:

``` env
SENDGRID_EMAIL=user@email.addr
SENDGRID_NAME=CONTACT_FORM
SENDGRID_TOKEN=API token from SendGrid account
```

**wrangler.toml file**:

``` toml
name = "blog"
type = 'webpack'
zone_id = 'id from Wrangler pages'
account_id = 'id from Wrangler pages'
route = ''
usage_model = ''
workers_dev = true
target_type = "webpack"
site = {bucket = "./deploy", entry-point = "workers-site"}
```

## Creating Posts

### Working with JSON

The basic post blueprint is a JSON file that looks as follows. The key/values are used throughout the template layouts to structure the static output. Adding keys might be an easier way to enhance the layout features if you want to change the default template. It is important to keep existing keys in place unless you actually plan to redevelop the layout files.

``` json
{
  "title": "Lorem ipsum dolor sit amet",
  "postsGroup": "Lorem One",
  "image": {
    "src": "nick-morrison-FHnnjk1Yj7Y-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@nickmorrison?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Nick Morrison</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/8/2021",
  "dateModified": "7/5/2021",
  "categories": ["Photography"],
  "tags": ["Art", "Image", "Random"],
  "featured": true,
  "draft": true,
  "articleBody": "<p>Something good here<br/><br/>Paragraph 2<br/><br/>And so on!</p>"
}
```

Description of a less obvious key values.

Key | Description
--- | ---
postsGroup | Name of post groupings. For example, if you want to group your posts project or if you want to group them by similar types of posts
featured | true to highlight the post on the homepage image carousel
articleBody | html encoded body of the post

### articulatePosts

In case you prefer writing your posts in [Markdown](https://commonmark.org/), you might try my NodeJS project [articulatePost](https://github.com/roobyz/articulatePost). It takes posts written with a Yaml header and Markdown body, and then outputs the posts in the above JSON format. It also supports the Markdown extensions Katex for math typesetting and PrismJS for code syntax highlighting.

``` yaml
---
title: "Lorem ipsum dolor sit amet"
postsGroup: "Lorem One"
image:
  src: "nick-morrison-FHnnjk1Yj7Y-unsplash.jpg"
  alt: "Post Image"
  citation: "Photo by <a href='https://unsplash.com/@nickmorrison?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Nick Morrison</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
author:
  name: "Jo Doe"
  url: "/pages/about"
dateCreated: "1/8/2021"
dateModified:
categories: [Photography]
tags: [Art, Image, Random]
featured: true
draft: true
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis purus vitae ipsum imperdiet condimentum. Nunc vel vehicula augue. Vestibulum luctus nulla nisl, at congue augue maximus et. Mauris eget massa dui. Cras sagittis accumsan lacus.

## Table of Content

More Mardown...
```
