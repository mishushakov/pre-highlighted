# pre-highlighted

HTML5 custom element that extends `<pre>` element with syntax highlighting using ShikiJS

https://user-images.githubusercontent.com/10400064/145210244-e19c9299-2b8e-422f-8d2c-3e0bca9a00f0.mov

## Installation

1. Load Shiki into DOM

```html
<script src="https://unpkg.com/shiki@latest/dist/index.unpkg.iife.js"></script>
```

2. Load the custom element

```html
<script src="https://unpkg.com/pre-highlighted@latest"></script>
```

Using npm

```sh
npm i pre-highlighted
```

## Usage

```html
<pre-highlighted lang="css" theme="github-dark">
  .red {
    background: red;
  }
</pre-highlighted>
```

Or alternatively:

```html
<pre is="pre-highlighted" lang="css" theme="github-dark">
  .red {
    background: red;
  }
</pre>
```

### Attributes

- `lang`, programming language
- `theme`, theme, consult [Shiki docs](https://github.com/shikijs/shiki/blob/main/docs/themes.md) for more
