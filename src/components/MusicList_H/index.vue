<script setup>
    import MusicColumn from './components/MusicColumn.vue';
    import { defineProps,onMounted,ref } from 'vue';
    import { useSongStore } from '@/stores/songStore';
    import { getMusicUrl } from '@/api/MusicDetail';

    const songStore = useSongStore();
    const props = defineProps({
        title:{
            type:String
        },
        musicList:{
            type:Array
        }
    })
    const isUrlGetted = ref(false);
    
    const songList = ref(props.musicList)
    onMounted(()=>{
    })
    async function playThisSong(index){

        for(let i =0;i<songList.value.length;i++){
            songList.value[i].ar = songList.value[i].song.artists;
            songList.value[i].al = songList.value[i].song.album;
        }

        songStore.setListName('猜你喜欢')
        if(isUrlGetted.value){
            songStore.setIndex(index);
            songStore.play();
            return;
        }
        const id = songList.value[index].id
        const res = await getMusicUrl(id);
        songList.value[index].url = res.data[0].url;
        songList.value[index].songTime = res.data[0].time;
        songStore.playSongList(songList.value)
        songStore.setIndex(index);
        songStore.play();

        for(let i =0;i<songList.value.length;i++){
            const idd = songList.value[i].id
            const ress = await getMusicUrl(idd);
            songList.value[i].url = ress.data[0].url;
            songList.value[i].songTime = ress.data[0].time;
        }
        songStore.playSongList(songList.value)
    }
</script>

<template>
    <div class="list-con">
        <div class="title">
            {{props.title}}
        </div>
        <div class="music-list">
            <MusicColumn class="music-item" @touchstart="playThisSong(index)" v-for="item,index in props.musicList" :key="index" :music-info="item"/>
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
