<template>
  <div>
    <Header />
    <Drawer />
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
