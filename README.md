# Mozaïk demo dashboards

[![Travis CI][travis-image]][travis-url]

This repository shows how to use Mozaïk with npm extensions.

## Usage

### Clone the repo

``` sh
git clone git@github.com:plouc/mozaik-demo.git
cd mozaik-demo
git checkout mozaik-2
```

### Install packages

``` sh
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
node server.js conf/config-github.yml
```

See `conf/` directory for available config files.

### Tweaking default theme

Several themes are loaded from
[`@mozaik/themes`](https://github.com/plouc/mozaik/tree/v2.x/packages/themes)
package, you can change the default theme used by
updating this line in `src/register_themes.js`:

``` javascript
// src/register_themes.js
// …
ThemeManager.defaultTheme = wineTheme.name
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

or create an `.env` file if you want a more permanent solution
(you have a sample file available `.env.sample`):

``` sh
# .env
GITHUB_API_TOKEN=xxxxx
```

Note that `.env` file is in `.gitignore` to prevent pushing
sensible data to GitHub.

[travis-image]: https://img.shields.io/travis/plouc/mozaik-demo.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/mozaik-demo
