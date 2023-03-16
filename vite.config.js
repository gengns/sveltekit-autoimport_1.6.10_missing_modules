import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoImport from 'sveltekit-autoimport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoImport({
      module: {
        svelte: ['onMount'],
        'svelte/transition': ['fly'],
        '@vaadin/button': ['vaadin-button']
      },
    }),
    svelte()
  ]
})
