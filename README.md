#Mozaïk demo dashboards

[![Travis CI][travis-image]][travis-url]

This repository shows how to use Mozaïk with npm extensions.

## Installation

### Clone the repo

```bash
git clone git@github.com:plouc/mozaik-demo.git
```

### Install packages

```bash
cd mozaik-demo
npm install
```

### Publish assets (js/css)

```bash
gulp build
```

### Add github and open weather map tokens in a `.env` file

You should use the `.env.sample` file provided with this repo,
just rename it to `.env` and put in your own credentials.


### Run the app

```bash
node app.js
```

[travis-image]: https://img.shields.io/travis/plouc/mozaik-demo.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/mozaik-demo

