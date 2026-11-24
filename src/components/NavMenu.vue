<script setup>
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
        :class="['menu-item', { 'current-menu-item': item.current }]"
      >
        <a :href="item.href" :aria-current="item.current ? 'page' : null">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
