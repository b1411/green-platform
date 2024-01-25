<template>
    <div class="z-10 px-5 mx-auto fixed top-0 left-0 w-full py-5 transition-colors" :class="{ 'bg-primary': bgColor, 'bg-transparent': !bgColor }">
        <div class="max-w-4xl mx-auto">
            <MobileHeader v-if="isMobile" />
            <DesktopHeader v-else />
        </div>
    </div>
</template>

<script setup>
import MobileHeader from './MobileHeader.vue'
import DesktopHeader from './DesktopHeader.vue'

let isMobile = ref(false);
let wasScrolled = ref(false);

function resizeEvent() {
    isMobile.value = window.innerWidth < 768
}

let isHeaderTransparent = useState('isHeaderTransparent', () => false)

let bgColor = computed(() => wasScrolled.value || !isHeaderTransparent.value);

onMounted(() => {
    resizeEvent()
    window.addEventListener('resize', resizeEvent)
    window.addEventListener('scroll', () => {
        wasScrolled.value = window.scrollY > 200
    })
})

onUnmounted(() => {
    window.removeEventListener('resize', resizeEvent)
})
</script>