import '@/assets/styles/main.css'

import { createApp } from 'vue'
import ContentApp from '@/content/ContentApp.vue'

const rootEl = document.createElement('div')
rootEl.id = 'crxjs'
document.body.prepend(rootEl)

const app = createApp(ContentApp)
app.mount(rootEl)
