<script setup>
import {  RouterView } from 'vue-router'
import { useSongStore } from './stores/songStore';
import CDPage from '@/components/CDPage/index.vue'
import {  watch, ref } from 'vue';

    const songStore = useSongStore();
    const audioRef = ref(null);

    watch(()=>songStore.isPlaying,(newValue)=>{
        if(newValue){
            audioRef.value.play();
            
        }else{
            audioRef.value.pause();
        }
    })

    watch(()=>songStore.currentSong,(newValue)=>{
        const audioEl = audioRef.value;
        if(!newValue.url){
            return;
        }
        audioEl.src = newValue.url;
        audioEl.play();
        songStore.play();
    })

    function updateTime(){
        songStore.setCurrentTime(audioRef.value.currentTime)
        
    }
</script>

<template>
  <RouterView></RouterView>
  <CDPage v-show="songStore.isFullScreen&&!songStore.isCommentsPageShow" :audio-ref="audioRef" v-if="songStore.currentSong"/>
  <audio @timeupdate="updateTime" @ended="songStore.nextSong" src="/media/cc0-audio/t-rex-roar.mp3" ref="audioRef"></audio>
</template>

<style scoped></style>
