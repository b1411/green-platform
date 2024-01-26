<template>
    <div class="page-container pt-[189px]" >
        <div class="w-full h-full flex md:flex-row flex-col mb-10" v-if="isDataLoaded">
            <div class="left-section flex-row flex-wrap md:w-1/2 w-full">
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
            <div class="image-section md:w-1/2 w-full">
                <img :src="images[0]" alt="Hostel Image">
            </div>
        </div>
        <div v-else class="h-[500px] flex justify-center items-center">
            <div
                class=" loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64">
            </div>
        </div>
        <div class="flex w-full" v-if="isDataLoaded">
            <button class="mx-auto btn w-[250px] btn-primary" v-on:click="openModalForm">Оставить заявку</button>
            <ApplicationModal />
        </div>
    </div>
</template>


<script setup>
import { HostelInfo } from '~/utils/hostels/HostelClass';
const route = useRoute()

let data = reactive({})

let name = ref('')
let images = ref([])
let description = ref('')
let address = ref('')
let price = ref('')
let square = ref('')
let isDataLoaded = ref(false)

async function retrieveHostelInfo() {
    const Parse = useParse();
    const hostelQuery = new Parse.Query("Hostels");
    const res = await hostelQuery.equalTo("objectId", route.params.hostelId).first();
    const hostelData = new HostelInfo(res)
    await hostelData.getImages()
    data = { ...hostelData }
    name.value = data.name
    images.value = data.images
    description.value = data.description
    address.value = data.address
    price.value = data.price
    square.value = data.square

}

onBeforeMount(async () => {
    await retrieveHostelInfo()
    isDataLoaded.value = true
})



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

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loader {
    border-top-color: #3498db;
    border-left-color: #3498db;
    border-bottom-color: #3498db;
    animation: spin 1s infinite linear;
}
</style>