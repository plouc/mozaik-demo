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
gulp publish
```

### Add heroku & github tokens in a `.env` file

```
GITHUB_API_TOKEN=xxxxx
HEROKU_API_TOKEN=xxxxx
```

### Run the app

```bash
node app.js
```

[travis-image]: https://img.shields.io/travis/plouc/mozaik-demo.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/mozaik-demo

