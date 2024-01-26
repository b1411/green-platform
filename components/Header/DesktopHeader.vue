<template>
    <div class="w-full">
        <nav class="w-full flex flex-row justify-between items-center">
            <Logo />
            <ul class="inline-block text-white">
                <li v-for="link in links" :key="link.name" class="inline-block mr-6 last:mr-0">
                    <NuxtLink :href="link.href">{{ link.name }}</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { links } from './headerLinks';
import Logo from "@/components/Logo.vue"
</script>