<template>
    <div>
        <NuxtLink :to="`/hostels/${id}`">
            <div class="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-4">
                <div class="flex flex-col justify-between items-center">
                    <img :src="images[0].image" :alt="name" class="w-full h-48 object-cover rounded-lg shadow-lg" />
                    <h2 class="text-xl font-bold text-gray-800 mt-4">{{ name }}</h2>
                </div>
                <div class="flex flex-col justify-between items-start w-full mt-4">
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
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps(['hostel'])
let { id, name, images, description, address, price, square } = props.hostel
</script>

<style>
/* Добавьте эти стили в ваш стилевой файл */
.hostel-info {
    display: flex;
    align-items: center;
    width: 100%;
}

.info-title, .info-value {
    white-space: nowrap;
}

.info-title{ 
    font-weight: 700;
    color: #4B5563;
}

.dot-fill {
    flex-grow: 1;
    margin: 0 10px;
    border-bottom: 4px dotted #00000021;
    content: '';
    display: block;
    height: 10px; /* Высота элемента */
    position: relative; /* Сдвигаем границу вниз */
}
</style>