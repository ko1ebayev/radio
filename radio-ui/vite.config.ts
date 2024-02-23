import { defineConfig } from 'vite'

// https://vitejs.dev/config/

// Library build
export default defineConfig({
  build: {
    lib: {
      entry: './src/entry-point.ts',
      formats: ['es']
    },
    minify: false,
    rollupOptions: {
      external: /^lit/
    }
  }
});

// Application build
// export default defineConfig({});