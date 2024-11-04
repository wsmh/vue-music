<script setup>
    import { getTopMusicAPI } from '@/api/getMusicList';
    import { onMounted,ref } from 'vue';

    const topMusicData = ref([])
    async function getTopMusicData() {
         const res = await getTopMusicAPI(5);
         topMusicData.value = res.playlists;
         
    }
    
    onMounted(()=>{
        getTopMusicData();
    })
</script>

<template>
    推荐页
</template>

<style scoped></style>
