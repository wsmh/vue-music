import { defineStore } from "pinia";
import { loginAPI } from "@/api/Login";
import { ref } from "vue";

export const useUserStore = defineStore('user-store', () => {
    //state
    const userData = ref({})
    const isLogin = ref(false);
    //method
    async function login(phone, cap) {
        const res = await loginAPI(phone, cap);
        console.log(res);

        userData.value = res;
        isLogin.value = true;
    }
    function clearData() {
        userData.value = {};
    }
    //return

    return {
        userData,
        login,
        clearData,
        isLogin
    }
}, {
    persist: true
})