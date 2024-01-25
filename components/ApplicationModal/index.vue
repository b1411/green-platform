<template>
    <dialog id="application_modal" class="modal">
        <div class="modal-box pt-10">
            <form method="dialog" class="modal-backdrop">
                <button class="btn absolute top-2 right-2 w-fit h-fit p-1 min-h-0">
                    x
                </button>
            </form>
            <h4 class="text-neutral text-center">Оставить заявку</h4>
            <div class="w-full">
                <form class="flex flex-col gap-6 mx-auto w-[250px] items-center" @submit="sendApplication">
                    <input type="text" autocomplete="name" required placeholder="Имя"
                        class="input input-bordered input-neutral w-full" />
                    <input type="text" autocomplete="additional-name" required placeholder="Фамилия"
                        class="input input-bordered input-neutral w-full" />
                    <input type="text" placeholder="Баркод" required class="input input-bordered input-neutral w-full" />
                    <input type="text" autocomplete="mobile" required placeholder="Номер телефона"
                        class="input input-bordered input-neutral w-full" />
                    <input type="number" v-show="false" :value="$route.params.hostelId" />
                    <button class="btn btn-primary w-full" type="submit" v-if="!isApplicattionLoading">Отправить</button>
                    <button class="btn btn-primary" v-else>
                        <span class="loading loading-spinner"></span>
                        Загрузка
                    </button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script setup>
async function fetchApplication(formData) {
    const { data } = await useFetch('http://127.0.0.1:8000/api/hostel-request/', {
        method: "POST", body: JSON.stringify(formData), headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return data
}

let isApplicattionLoading = ref(false);

function sendApplication(e) {
    e.preventDefault()
    let formData = {
        name: e.target[0].value,
        surname: e.target[1].value,
        barcode: e.target[2].value,
        phone: e.target[3].value,
        hostel: e.target[4].value
    }
    fetchApplication(formData).then(() => {
        isApplicattionLoading.value = true
    }).then(() => {
        document.getElementById('application_modal').close()
        useNuxtApp().$toast.success('Заявка успешно отправлена')
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        e.target.reset()
        isApplicattionLoading.value = false

    })
}
</script>