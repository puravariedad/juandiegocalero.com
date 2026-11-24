<script setup>
import { computed } from 'vue'
import { parseHtmlPage } from '../utils/parseHtmlPage'

const props = defineProps({ slug: { type: String, required: true } })

// Every file in src/pages/*.html is one page, edited as plain HTML.
const files = import.meta.glob('../pages/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const page = computed(() => parseHtmlPage(files[`../pages/${props.slug}.html`]))
</script>

<template>
  <div v-if="page?.layout === 'bare'" class="container about-page work-body" v-html="page.body"></div>
  <div v-else-if="page" class="container work-main">
    <div class="work-header work-container text-center lds-app">
      <h1>{{ page.title }}</h1>
      <h2 v-if="page.subtitle">{{ page.subtitle }}</h2>
    </div>
    <div class="work-body container" v-html="page.body"></div>
  </div>
  <div v-else class="container work-main text-center">
    <h1>Page not found</h1>
    <p><a href="/">Back to the portfolio</a></p>
  </div>
</template>
