<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
let isDrawerOpen = useState('isDrawerOpen', () => false)

useHead({
  htmlAttrs: {
    'data-theme': 'light'
  }
})
</script>
