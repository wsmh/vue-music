<script setup>
    import MusicCover from '@/components/Music-cover.vue';
    import { getTopMusicAPI } from '@/api/getTopMusic';
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
    <MusicCover size="normal" :music-data="topMusicData[0]" v-if="topMusicData.length != 0"/>
</template>

<style scoped></style>
