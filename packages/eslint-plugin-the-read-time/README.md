# eslint-plugin-the-read-time

eslint plugin for [@silverage/the-read-time](https://github.com/yuhongda/the-read-time)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-the-read-time`:

```sh
npm install eslint-plugin-the-read-time --save-dev
```

## Usage

Add `the-read-time` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "the-read-time"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "the-read-time/steps": 1
    }
}
```

## Supported Rules

* `the-read-time/steps`
