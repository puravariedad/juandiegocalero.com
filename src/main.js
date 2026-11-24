import { createApp } from 'vue'
import App from './App.vue'

// The hero animation (.lds-app) depends on the element height. Wait for
// the web font so the text doesn't reflow (and the animation jump) mid-way.
// Fall back after 1.5s so a slow font never blocks the page.
const fontReady = document.fonts
  ? document.fonts.load('18px "DM Sans"').catch(() => {})
  : Promise.resolve()

Promise.race([fontReady, new Promise((r) => setTimeout(r, 1500))]).then(() => {
  createApp(App).mount('#app')
})
