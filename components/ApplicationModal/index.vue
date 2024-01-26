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
    async function retrieveHostel(hostelId) {
        const Parse = useParse();
        const hostelQuery = new Parse.Query("Hostels");
        const res = await hostelQuery.equalTo("objectId", hostelId).first();
        return res
    }
    const Parse = useParse();
    const Application = Parse.Object.extend("HostelApplications");
    const application = new Application();
    application.set("name", formData.name);
    application.set("surname", formData.surname);
    application.set("barcode", formData.barcode);
    application.set("phone", formData.phone);
    application.set("hostel", (await retrieveHostel(formData.hostel)).toPointer());
    try {
        await application.save();
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

let isApplicattionLoading = ref(false);

function sendApplication(e) {
    const route = useRoute()
    e.preventDefault()
    let formData = {
        name: e.target[0].value,
        surname: e.target[1].value,
        barcode: e.target[2].value,
        phone: e.target[3].value,
        hostel: route.params.hostelId
    }
    fetchApplication(formData).then((res) => {
        isApplicattionLoading.value = true
        if (!res) {
            Promise.reject('Error')
        }
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