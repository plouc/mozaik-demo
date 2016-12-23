# Mozaïk demo dashboards

[![Travis CI][travis-image]][travis-url]

This repository shows how to use Mozaïk with npm extensions.

## Usage

### Clone the repo

``` sh
git clone git@github.com:plouc/mozaik-demo.git
```

### Install packages

``` sh
cd mozaik-demo
yarn install
```

### Build assets (js/css)

``` sh
yarn build
```

### Run the default demo

``` sh
node server.js
```

### Running an alternative demo

This repo provides several config files targeting specific
extensions demo, to run another demo, simply pass the config
file as first argument:

``` sh
node server.js config-github.yml
```

Just search for `config-*.yml` files to see what's available.

### Tweaking default theme

Several themes are loaded from
[`mozaik-themes`](https://github.com/plouc/mozaik-themes)
package, you can change the default theme used by
updating this line in `src/index.js`:

``` javascript
// src/index.js
ThemeManager.defaultTheme = wine.name
```

### Adding environment variables

Some extensions requires additional settings, you
can add it via environment variables to avoid
modifying config files, you can use `export`:

``` sh
export GITHUB_API_TOKEN="xxxxx"
node server.js config-github.yml
```

or prepend it to the command:

``` sh
GITHUB_API_TOKEN="xxxxx" node server.js config-github.yml
```

or create an `.env` file if you want a more permanent solution:

``` sh
# .env
GITHUB_API_TOKEN=xxxxx
node server.js config-github.yml
```

Note that `.env` file is in `.gitignore` to prevent pushing
sensible data to GitHub.


[travis-image]: https://img.shields.io/travis/plouc/mozaik-demo.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/mozaik-demo
