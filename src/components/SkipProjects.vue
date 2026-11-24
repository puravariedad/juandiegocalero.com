<script setup>
// Links to the neighbouring projects. Each side renders only when it exists.
defineProps({
  previous: { type: Object, default: null },
  next: { type: Object, default: null },
})
</script>

<template>
  <nav class="skip-projects container-sm" aria-label="Projects">
    <div class="skip-projects-side skip-projects-previous">
      <a v-if="previous" :href="previous.href" rel="prev">
        <svg class="chev chev-l" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 8l8 8 8-8-1.5-1.5L12 13 5.5 6.5z" />
        </svg>
        <span>
          <small>Previous project</small>
          {{ previous.title }}
        </span>
      </a>
    </div>
    <div class="skip-projects-side skip-projects-next">
      <a v-if="next" :href="next.href" rel="next">
        <span>
          <small>Next project</small>
          {{ next.title }}
        </span>
        <svg class="chev chev-r" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 8l8 8 8-8-1.5-1.5L12 13 5.5 6.5z" />
        </svg>
      </a>
    </div>
  </nav>
</template>
