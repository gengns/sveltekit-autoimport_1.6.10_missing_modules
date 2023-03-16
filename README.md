# sveltekit-autoimport issue DIS

Can't use 'svelte/transitions' and 'vaadin' with auto import.

**vite.config.js**
```js
  module: {
    'svelte/transition': ['fly'],
    '@vaadin/button': ['vaadin-button']
  },
```

Check **App.svelte**

Minimal reproducible example in a temporary repository.

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Recommended IDE Setup

[VS Codium](https://vscodium.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Get started

Install dependencies and run dev...

```bash
cd sveltekit-autoimport_1.6.19_missing_modules
npm install && npm run dev
```

## References

[Issue](https://github.com/yuanchuan/sveltekit-autoimport/issues/34)
