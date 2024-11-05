import { defineStore } from "pinia";
import { loginAPI } from "@/api/Login";
import { ref } from "vue";

export const useUserStore = defineStore('user-store', () => {
    //state
    const userData = ref({})

    //method
    async function login(phone, cap) {
        const res = await loginAPI(phone, cap);
        userData.value = res;
    }
    function clearData() {
        userData.value = {};
    }
    //return

    return {
        userData,
        login,
        clearData
    }
}, {
    persist: true
})