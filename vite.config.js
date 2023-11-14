/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      services: '/src/domain/services',
    },
  },
  test: {
    globals: true,
    setupFiles: ['./setupTests.js'], // es importante definirlo en un archivo aparte para que se ejecute en otro contexto
    environment: 'jsdom',
    // coverage: {
    //   reporter: ['text', 'json', 'html', 'json-summary'],
    // },
  },
})
