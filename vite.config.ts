import hotReloadExtension from 'hot-reload-extension-vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'

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
      backgroundPath: 'src/main.ts' // relative path to background script file
    })
  ]
}
