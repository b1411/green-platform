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
            <div v-if="isHostelDataLoaded" class="flex flex-row justify-center items-center h-full">
                <div class="masonry-grid">
                    <HostelCard v-for="hostel in hostels" :key="hostel.id" :hostel="hostel" />
                </div>
            </div>
            <div v-else class="flex flex-row justify-center items-center h-[500px]">
                <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { HostelInfo } from '@/utils/hostels/HostelClass'

let hostels = reactive([]);
let isHostelDataLoaded = ref(false);

async function retrieveHostelsInfo() {
    const Parse = useParse();
    const hostelsQuery = new Parse.Query("Hostels");
    const res = await hostelsQuery.include('images').find();
    res.map(async (hostel) => {
        const hostelData = new HostelInfo(hostel);
        await hostelData.getImages()
        hostels.push({ ...hostelData })
    })

}

onBeforeMount(async () => {
    await retrieveHostelsInfo()
    isHostelDataLoaded.value = true
    console.log(hostels)
    isHeaderTransparent.value = true

})


const isHeaderTransparent = useState('isHeaderTransparent')

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