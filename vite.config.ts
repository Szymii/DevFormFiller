import hotReloadExtension from 'hot-reload-extension-vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';

export default {
  plugins: [
    vue(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src"'
      },
      overlay: {
        initialIsOpen: false
      }
    }),
    hotReloadExtension({
      log: true,
      backgroundPath: 'src/background/index.ts' // relative path to background script file
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // map '@' to './src'
    }
  },
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
        // content: resolve(__dirname, 'src/pages/content/index.ts'),
        background: resolve(__dirname, 'src/background/index.ts')
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name]/index.js'
      }
    }
  }
};
