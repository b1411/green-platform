<template>
  <div>
    <head>
      <Title>{{ title }} | GREEN PLATFORM</Title>
    </head>
    <Header />
    <Drawer />
    <NuxtPage />
  </div>
</template>

<script setup>
import "@/assets/css/main.css"
let isDrawerOpen = useState('isDrawerOpen', () => false)
let title = useState('title', () => 'Главная')
let currenntHostel = useState('currentHostel', () => null);

useHead({
  htmlAttrs: {
    'data-theme': 'light'
  }
})
</script>
