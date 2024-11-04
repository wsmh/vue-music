<script setup>
    import MusicColumn from './components/MusicColumn.vue';
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
            <MusicColumn class="music-item" v-for="item in props.musicList" :music-info="item"/>
        </div>
    </div>
  
</template>

<style scoped lang="scss">
    .title{
        color: $title-color;
        font-size: 16px;
        font-weight: 700;
    }
    .music-list{
        margin-top: 10px;
        overflow: scroll;
        scrollbar-width: none;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 8px;
        
    }
    .music-item{
        @include flex-space(5px)
    }
</style>
