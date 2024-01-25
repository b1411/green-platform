<template>
    <div class="page-container pt-[189px]  ">
        <div class="w-full h-full flex md:flex-row flex-col mb-10">
            <div class="left-section flex-row flex-wrap md:w-1/2 w-full">
                <div class="info-section w-full bg-[#F4E04D] ">
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
                <div class="description-section bg-[#F4E04D]">
                    <p>{{ description }}</p>
                </div>
            </div>
            <div class="image-section md:w-1/2 w-full">
                <img :src="images[0].image" alt="Hostel Image">
            </div>
        </div>
        <div class="flex w-full">
            <button class="mx-auto btn w-[250px] btn-primary" v-on:click="openModalForm">Оставить заявку</button>
            <ApplicationModal />
        </div>
    </div>
</template>


<script setup>
const route = useRoute()

const { data } = await useFetch(`http://127.0.0.1:8000/api/hostels/${route.params.hostelId}/`, {
    method: 'GET',
})

const { name, images, description, address, price, square } = data.value

function openModalForm() {
    document.getElementById('application_modal').showModal()
}
</script>

<style scoped>
.left-section {
    flex: 1;
    /* Takes as much space as possible */
    margin-right: 20px;
    display: flex;
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
</style>