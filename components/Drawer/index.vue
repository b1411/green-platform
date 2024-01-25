<template>
    <div class="z-10 w-full bg-black/20 h-full" v-if="isDrawerOpen">
        <div class="z-[11] w-[250px] bg-white">
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center">
                    <Logo />
                    <h1 class="text-2xl font-bold text-center">Nuxt Tailwind</h1>
                </div>
                <ul class="mt-5">
                    <li v-for="link in links" :key="link.name" class="inline-block mr-2 last:mr-0">
                        <NuxtLink :href="link.href">{{ link.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>  

<script setup>

let isDrawerOpen = useState('isDrawerOpen')
</script>