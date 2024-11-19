<script setup>
    import { getTopMusicAPI,getNewMusicAPI } from '@/api/getMusicList';
    import { onMounted,ref } from 'vue';
    import RecommendHeader from './components/RecommendHeader.vue';
    import MusicList_V from '@/components/MusicList_V/index.vue';
    import MusicList_H from '@/components/MusicList_H/index.vue'
    import { getLikeMusicAPI } from '@/api/Recommend';

    const topMusicData = ref([])
    const musicList_new = ref([]);
    const music_like = ref([]);
    const nowTime = ref('')
async function getMusicData(){
  const res1 = await getTopMusicAPI(5);
  const res2 = await getNewMusicAPI(6);
  const res3 = await getLikeMusicAPI();
  topMusicData.value = res1.playlists;
  musicList_new.value = res2.playlists;
  music_like.value = res3.result;
  
  
}

    function getTimeRange(){
        const time_now = new Date();
        const hour_now = time_now.getHours();
        if(hour_now>=6&&hour_now<11){
            return '早上好';
        }else if(hour_now>=11&&hour_now<13){
            return '中午好';
        }else if(hour_now>=13&&hour_now<18){
            return '下午好';
        }else if(hour_now>=18&&hour_now<24){
            return '晚上好';
        }else{
            return '凌晨好'
        }
    }
    
    
    
    
    onMounted(()=>{
        getMusicData();
        nowTime.value = getTimeRange()
    })
</script>

<template>
    <div class='rec-bgc'>
        <div class="rec-con">
            <RecommendHeader />
            <div class="res-body">
                <div class="time-rec">
                    <p>{{nowTime}}</p>
                    <MusicList_V :music-list="topMusicData" />
                </div>
                <MusicList_V :music-list="musicList_new" title="推荐歌单 >" class="rec-songs" v-if="musicList_new.length != 0"/>
                
                <MusicList_H :music-list="music_like" v-if="music_like.length != 0" title="猜你喜欢的「今日」好歌 >"/>
                
            </div>
            <div class="rec-bottom"></div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
    .rec-bgc{
        @include center;
    }
    .rec-con{
        width: 92%;
    }
    .rec-bottom{
        width: 100%;
        height: 130px;
    }
    .time-rec{
        margin-bottom: 40px;
        p{
            font-size: 20px;
            font-weight: 600;
            color: $title-color;
        }
    }
    .rec-songs{
        margin-bottom: 30px;
    }
</style>
