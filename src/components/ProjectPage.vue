<script setup>
import { computed } from 'vue'
import { parseHtmlPage } from '../utils/parseHtmlPage'
import SkipProjects from './SkipProjects.vue'
import { projects } from '../data/site'

const props = defineProps({ slug: { type: String, required: true } })

// Every file in src/projects/*.html is one project, edited as plain HTML.
const files = import.meta.glob('../projects/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const page = computed(() => parseHtmlPage(files[`../projects/${props.slug}.html`]))

const index = computed(() => projects.findIndex((p) => p.slug === props.slug))
const previous = computed(() => projects[index.value - 1] ?? null)
const next = computed(() => projects[index.value + 1] ?? null)
</script>

<template>
  <div v-if="page" class="container work-main work-post">
    <div class="work-header work-container text-center lds-app">
      <h1>{{ page.title }}</h1>
      <h2>{{ page.subtitle }}</h2>
    </div>
    <div class="work-body container-sm" v-html="page.body"></div>
    <SkipProjects :previous="previous" :next="next" />
  </div>
</template>
