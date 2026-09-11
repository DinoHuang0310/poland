import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './style.css'

import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

import { register } from 'swiper/element/bundle'

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(createVfm())

  register()
})