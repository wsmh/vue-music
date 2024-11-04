<script setup>
import { getBannerAPI } from '@/api/Selected';
import { getTopMusicAPI } from '@/api/getMusicList';
import { getNewMusicAPI } from '@/api/getMusicList';
import { onMounted, ref } from 'vue';
import {register} from 'swiper/element/bundle'
import MusicList_V from '@/components/MusicList_V/index.vue';

register();

const bannerData = ref([]);
const musicList_high = ref([]);
const musicList_new = ref([]);

async function getMusicData(){
  const res1 = await getBannerAPI();
  const res2 = await getTopMusicAPI(5);
  const res3 = await getNewMusicAPI(5);
  bannerData.value = res1.banners;
  musicList_high.value = res2.playlists;
  musicList_new.value = res3.playlists;
  
}

onMounted(()=>{
  getMusicData();
})




</script>

<template>
      <div class="main-con">
        <swiper-container class="swiper" loop="true" lazy="true" :autoplay="{delay:3000}">
          <swiper-slide class="swiper-slide" v-for="item in bannerData">
            <img :src="item.pic">
          </swiper-slide>
        </swiper-container>
        
        <MusicList_V :musicList="musicList_high" title="甄选歌单" v-if="musicList_high.length != 0"/>
        <MusicList_V class="new-list" :musicList="musicList_new" title="云村新鲜事" v-if="musicList_new.length != 0"/>

        <div class="bottom-con"></div>
      </div>
</template>
    
<style scoped lang="scss">
    .swiper{
      margin-top: 5px;
      width: 100%;
      height: 200px;
      margin-bottom: 30px;
      .swiper-slide{
        display: flex;
        img{
          width: 100%;
          border-radius: 10px;
        }
      }
    }
    .new-list{
      margin-top: 35px;
    }

    .bottom-con{
      width: 100%;
      height: 100px;
    }
    
</style>
