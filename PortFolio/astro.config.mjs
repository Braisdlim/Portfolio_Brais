// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    optimizeDeps: {
      exclude: ['astro:components', '@astrojs/internal-helpers']
    },
    ssr: {
      noExternal: ['astro']
    }
  },
  output: 'static'
});