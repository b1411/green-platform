<template>
    <div class="h-screen w-full hostel-bg pt-[89px] ">
        <div class="page-container">
            <div class="h-screen mt-[-44.5px]">
                <div class="flex flex-col justify-center h-full mt-[-45.5px]">
                    <h1 class="">Проживание для студентов UIB</h1>
                    <h3 class="">Ознакомьтесь с хостелами, которые предлагают наши партнеры</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-base-100">
        <div class="page-container mb-10">
            <h2></h2>
            <div v-if="data" class="flex flex-row justify-center items-center h-full">
                <div class="masonry-grid">
                    <HostelCard v-for="hostel in data" :key="hostel.id" :hostel="hostel" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch('http://127.0.0.1:8000/api/hostels/', {
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
})

const isHeaderTransparent = useState('isHeaderTransparent')

onMounted(() => {
    isHeaderTransparent.value = true
})

onUnmounted(() => {
    isHeaderTransparent.value = false
})


</script>

<style scoped>
.hostel-bg {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/bg/hostels.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.h-screen {
    height: 100dvh;
}

.masonry-grid {
    column-count: 3;
    column-gap: 1em;
    max-width: fit-content;
}

.masonry-grid>div {
    break-inside: avoid-column;
    margin-bottom: 1em;
}

@media screen and (max-width: 768px) {

    /* Для экранов среднего размера, например планшетов */
    .masonry-grid {
        column-count: 2;
    }
}

@media screen and (max-width: 480px) {

    /* Для маленьких экранов, например мобильных телефонов */
    .masonry-grid {
        column-count: 1;
        max-width: 100%;
    }
}
</style>