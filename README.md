# 🚀 SubashCS - Personal Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/subashcs/ssg-personal-blog/blob/deploy/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/subashcs)
[![Stars](https://img.shields.io/github/stars/subashcs/subashcs.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/subashcs/subashcs)
[![Forks](https://img.shields.io/github/forks/subashcs/subashcs.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/subashcs/subashcs)

<details open>
<summary>Table of Contents</summary>

- [🚀 SubashCS - Personal Blog](#-subashcs---personal-blog)
  - [Demo](#demo)
  - [Getting started](#getting-started)
    - [Project structure](#project-structure)
    - [Available Commands](#available-commands)
    - [Configuration](#configuration)
    - [Deploy](#deploy)
      - [Deploy to production (manual)](#deploy-to-production-manual)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)

</details>

<br>

## Demo

📌 [https://subashcs.com.np/](https://subashcs.com.np/)

<br>

## Getting started

**SubashCS** is a clone of AstroWind template that uses [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).


### Project structure

Inside this repo, you'll see the following folders and files:

```
/
├── data/
|   └── blog/
|       ├── post-slug-1.md
|       ├── post-slug-2.mdx
|       └── ...
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
│   │   ├── blog/
│   │   ├── core/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── [...blog]/
|   |   |   ├── [...page].astro
|   |   |   └── [slug].astro
│   |   ├── [...categories]/
|   |   |   └── [category]/
|   |   |       └── [...page].astro
│   |   ├── [...tags]/
|   |   |   └── [tag]/
|   |   |       └── [...page].astro
│   |   ├── index.astro
|   |   ├── 404.astro
|   |   └-- rss.xml.js
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit original template AstroWind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/AstroWind/tree/main)

### Available Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
export const SITE = {
  name: 'Example',

  origin: 'https://example.com',
  basePathname: '/', // Change this if you need to deploy to Github Pages, for example
  trailingSlash: false, // Generate permalinks with or without "/" at the end

  title: 'Example - This is the homepage title of Example',
  description: 'This is the homepage description of Example',

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false, // or some value,
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,

  blog: {
    disabled: false,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: '', // empty for /some-post, value for /pathname/some-post
  },

  category: {
    disabled: false,
    pathname: 'category', // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
};
```

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.


## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/AstroWind/graphs/contributors).

## License

**SubashCS** is licensed under the MIT license — see the [LICENSE](https://github.com/subashcs/ssg-personal-blog/blob/deploy/LICENSE.md) file for details.
