import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['astro:components', '@astrojs/internal-helpers']
  },
  ssr: {
    noExternal: ['astro']
  }
});
