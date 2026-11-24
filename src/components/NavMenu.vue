<script setup>
import { projects } from '../data/site'

// The current item is derived from the URL; project pages belong to Portfolio.
const path = location.pathname.replace(/\/?$/, '/')
const isCurrent = (item) =>
  item.href === path ||
  (item.href === '/' && projects.some((project) => project.href === path))

defineProps({
  items: { type: Array, required: true },
  listClass: { type: String, default: 'menu' },
})
</script>

<template>
  <div>
    <ul :class="listClass">
      <li
        v-for="item in items"
        :key="item.href"
        :class="['menu-item', { 'current-menu-item': isCurrent(item) }]"
      >
        <a :href="item.href" :aria-current="isCurrent(item) ? 'page' : null">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
