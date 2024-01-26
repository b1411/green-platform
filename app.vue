<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
import "@/assets/css/main.css"
let isDrawerOpen = useState('isDrawerOpen', () => false)

useHead({
  htmlAttrs: {
    'data-theme': 'light'
  }
})
</script>
