import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // Performance optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Optimize chunk splitting
        manualChunks: {
          vendor: ['vue', 'axios'],
        },
      },
    },
    // Optimize CSS
    cssCodeSplit: true,
    // Sourcemap for debugging in production if needed
    sourcemap: false,
  },
  // Optimize development server
  server: {
    host: true,
    port: 3000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'axios'],
  },
})
