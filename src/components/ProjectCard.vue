<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  href: { type: String, required: true },
  image: { type: String, required: true },
  width: Number,
  height: Number,
})

const imageUrl = computed(
  () => new URL(`../assets/img/${props.image}`, import.meta.url).href,
)
</script>

<template>
  <a :href="href" class="card card-snippet">
    <img
      :src="imageUrl"
      :width="width"
      :height="height"
      alt=""
      decoding="async"
      loading="lazy"
    >
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </a>
</template>
