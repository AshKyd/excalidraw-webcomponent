# excalidraw-wc

A lightweight, self-contained Web Component wrapper around [Excalidraw](https://excalidraw.com/). It allows you to embed Excalidraw in any project (Vanilla JS, Svelte, React, Vue, etc.) without requiring React or complex bundler setups.

## Installation

Install the package via npm:

```bash
npm install excalidraw-wc
```

## Usage

### 1. Vanilla HTML & JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Excalidraw WC Demo</title>
  <!-- Load the style sheet -->
  <link rel="stylesheet" href="node_modules/excalidraw-wc/dist/excalidraw-wc.css">
</head>
<body>

  <!-- Use the custom element -->
  <excalidraw-wc id="my-canvas" theme="light"></excalidraw-wc>

  <!-- Import the web component -->
  <script type="module">
    import 'excalidraw-wc';

    const canvas = document.getElementById('my-canvas');

    // Listen for changes
    canvas.addEventListener('change', (event) => {
      const { elements, appState, files } = event.detail;
      console.log('Canvas changed:', elements);
    });

    // To get the SVG content of the current drawing
    async function exportToSvg() {
      const svgString = await canvas.getSvg();
      console.log(svgString);
    }
  </script>
</body>
</html>
```

### 2. Svelte 5

```svelte
<script lang="ts">
  import 'excalidraw-wc';
  import 'excalidraw-wc/style.css';

  let theme = $state<'light' | 'dark'>('light');
  let canvasEl = $state<any>(null);

  async function handleExport() {
    if (canvasEl) {
      const svg = await canvasEl.getSvg();
      console.log(svg);
    }
  }
</script>

<button onclick={() => theme = theme === 'light' ? 'dark' : 'light'}>
  Toggle Theme ({theme})
</button>

<button onclick={handleExport}>Export SVG</button>

<div style="width: 800px; height: 600px;">
  <excalidraw-wc
    bind:this={canvasEl}
    {theme}
    onchange={(e) => console.log(e.detail.elements)}
  />
</div>
```

---

## Self-Hosting Assets

Excalidraw loads external font assets at runtime. To self-host these assets:

1. Copy the fonts directory from `@excalidraw/excalidraw` to your public/served assets directory:
   ```bash
   cp -R node_modules/@excalidraw/excalidraw/dist/prod/fonts public/
   ```
2. Set `window.EXCALIDRAW_ASSET_PATH` to the path where the fonts are served (e.g., `/` if copied directly into `public/`) before the component initialized:
   ```html
   <script>
     window.EXCALIDRAW_ASSET_PATH = "/";
   </script>
   ```

---

## API Reference

### Attributes / Properties

| Attribute | Property | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `theme` | `theme` | `'light' \| 'dark'` | `'light'` | Sets the dark/light mode of the editor. Can be updated dynamically. |
| `enabled-tools` | `enabledTools` | `string` | `null` | Comma/space-separated list of enabled drawing tools. Non-listed tools will be hidden. If omitted, all tools are enabled. |
| `app-state` | `customAppState` | `Object \| string` | `{}` | Native Excalidraw `AppState` configurations to merge and apply. |
| - | `initialData` | `Object` | `null` | Pre-populates the drawing area. Structure matches `{ elements, appState, files }`. |

### Methods

#### `getSvg(): Promise<string>`
Exports the current canvas drawing to an SVG string.

### Events

#### `change`
Fired whenever elements, appState, or files are updated on the canvas.
- **Event detail**: `{ elements: Array, appState: Object, files: Object }`
