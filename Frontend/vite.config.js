import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', // CRITICAL: Fixes MIME error and blank screen issues on deployments
  build: {
    target: 'esnext',
    minify: 'terser', // Advanced compression and minification
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // Groups all third-party dependencies into a separate chunk
          }
        },
      },
    },
  },
})
