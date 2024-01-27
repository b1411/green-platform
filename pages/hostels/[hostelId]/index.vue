<template>
    <div class="page-container pt-[119px] md:pt-[139px] pb-[50px]" style="
        max-width: 1140px;
    ">
        <div class="w-full h-full flex md:flex-row flex-col mb-10">
            <div class="left-section flex-row flex-wrap md:w-1/2 w-full flex">
                <div class="info-section w-full bg-gray-100">
                    <h1 class="uppercase">{{ name }}</h1>
                    <div class="hostel-info">
                        <span class="info-title">Адрес:</span>
                        <span class="dot-fill"></span>
                        <span class="info-value">{{ address }}</span>
                    </div>
                    <div class="hostel-info">
                        <span class="info-title">Цена:</span>
                        <span class="dot-fill"></span>
                        <span class="info-value">{{ price }} тг/мес</span>
                    </div>
                    <div class="hostel-info">
                        <span class="info-title">Площадь:</span>
                        <span class="dot-fill"></span>
                        <span class="info-value">{{ square }} м²</span>
                    </div>
                </div>
                <div class="description-section bg-gray-100">
                    <p>{{ description }}</p>
                </div>
            </div>
            <Carousel class="image-section md:w-1/2 w-full h-fit">
                <Slide v-for="image in images" :key="image">
                    <img :src="image" />
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <!-- <div v-else class="h-[500px] mt-[89px] flex justify-center items-center">
            <div class=" loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32">
            </div>
        </div> -->
        <div class="flex w-full">
            <button class="mx-auto btn w-[250px] btn-primary" v-on:click="openModalForm">Оставить заявку</button>
            <ApplicationModal />
        </div>
    </div>
</template>


<script setup>
import { HostelInfo } from '~/utils/hostels/HostelClass';
import 'vue3-carousel/dist/carousel.css'
const route = useRoute()

let data = useState('currentHostel');

let { name, images, description, address, price, square } = data.value

function openModalForm() {
    document.getElementById('application_modal').showModal()
}


let title = useState('title')

title.value = name.toUpperCase()

</script>

<style>
.left-section {
    flex: 1;
    /* Takes as much space as possible */
    margin-right: 20px;
}

.info-section,
.description-section {
    /* Light grey background for distinction */
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    /* Space between info and description sections */
}

.image-section {
    flex: 1;
}

.image-section img {
    height: auto;
    border-radius: 5px;
    /* Optional: Adds rounded corners to the image */
}

h1 {
    @apply text-gray-700 font-bold;
    margin-bottom: 10px;
}

p {
    @apply text-gray-500;
    line-height: 1.5;
    /* Improves readability */
}

.carousel__prev,
.carousel__next {
    color: #1C7E66;
    width: 2rem;
}
</style>