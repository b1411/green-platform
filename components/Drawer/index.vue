<template>
    <div class="z-10 fixed w-full bg-black/20 h-full" v-if="isDrawerOpen">
        <div class="z-[11] w-[250px] bg-white relative h-full">
            <font-awesome-icon :icon="['fas', 'times']" v-on:click="toggleDrawer"
                class="text-black text-xl absolute right-2 top-2" />
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center">
                    <KeepAlive>
                        <Logo />
                    </KeepAlive>
                    <ul class=" flex flex-col">
                        <li v-for="link in links" :key="link.name" class="inline-block mb-2 last:mb-0">
                            <NuxtLink :href="link.href">{{ link.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>  

<script setup>
import { links } from '../Header/headerLinks';
let isDrawerOpen = useState('isDrawerOpen')

function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value
}
</script>