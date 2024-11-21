import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { getCommentFloorAPI } from "@/api/MusicDetail";

export const useFloorStore = defineStore('floor-store', () => {
    //state
    const floorData = ref({})
    const songId = ref('')
    const parentId = ref('')
    const isFloorShow = ref(false)

    //method
    function showFloor() {
        isFloorShow.value = true;
    }
    function hiddenFloor() {
        isFloorShow.value = false;
    }
    function setParentId(id) {
        parentId.value = id;
    }
    function setSongId(id) {
        songId.value = id;
    }
    async function getCommentFloorData() {
        const res = await getCommentFloorAPI(parentId.value, songId.value)
        floorData.value = res.data;

    }

    //return
    return {
        floorData,
        getCommentFloorData,
        setParentId,
        setSongId,
        showFloor,
        hiddenFloor,
        isFloorShow

    }
})