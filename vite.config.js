import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  head: {
    title: 'pentacle-timeline',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@5.3.6/css/swiper.min.css' },
    ],
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/swiper@5.3.6/js/swiper.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/vue-awesome-swiper"
      },
    ],
  },
  plugins: [vue()]
})

