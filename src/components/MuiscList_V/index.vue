<script setup>
    import MusicCover from './components/Music-cover.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        title:{
            type:String
        },
        musicList:{
            type:Array
        }
    })
    
</script>

<template>
    <div class="list-con">
        <div class="title">
            {{props.title}}
        </div>
        <div class="music-list">
            <MusicCover class="music-item" v-for="item in props.musicList" size="normal" :music-data="item"/>
        </div>
    </div>
  
</template>

<style scoped lang="scss">
    .title{
        color: rgba(20, 24, 41, 0.751);
        font-size: 18px;
        font-weight: 700;
    }
    .music-list{
        margin-top: 10px;
        display: flex;
        overflow-x: scroll;
        scrollbar-width: none;
    }
    .music-item{
        @include flex-space(5px)
    }
</style>
