import { defineStore } from "pinia";
import { ref } from "vue";

export const useTabStore = defineStore('tab-store', () => {
    //state
    const isTabShow = ref(true)

    //method
    function hidden() {
        isTabShow.value = false;
    }
    function show() {
        isTabShow.value = true;
    }
    //return

    return {
        isTabShow,
        hidden,
        show
    }
})