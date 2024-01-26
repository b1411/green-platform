<template>
    <div>
        <nav class="flex flex-row flex-nowrap justify-between items-center">
            <Logo />
            <font-awesome-icon :icon="['fas', 'bars']" v-on:click="toggleDrawer" class="text-white text-xl" />
        </nav>
    </div>
</template>

<script setup>
import { links } from './headerLinks';

let isDrawerOpen = useState('isDrawerOpen')

function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value
}
</script>
