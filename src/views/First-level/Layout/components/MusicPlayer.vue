<script setup>
    import { defineProps,computed,ref } from 'vue';
    import { useSongStore } from '@/stores/songStore';
    import { getArtistsName } from '@/utils/dataHandle';

  const props = defineProps({
    isExpand:{
        type:Boolean
    }
  })
  
  const songStore = useSongStore();


  const size = computed(()=>{
    const state = props.isExpand?{
        height:'62px'
    }:{

    }
    return state
  })

  function togglePlay() {
    songStore.toggle();
    
}

</script>

<template>
    <div class="vt-con" :style="size">
        <div class="main-con">
            <div class='cd-con' @click="songStore.toFullScreen">
                <div class="cd-bgc">
                    <img :src="songStore.currentSong?.al.picUrl">
                </div>
                <div class="cd-text">
                    <div class="song-name">{{songStore.currentSong?.name }}</div>
                    <div class="song-creator">- {{getArtistsName(songStore.currentSong?.ar,songStore.currentSong?.al)}}</div>
                </div>
                
            </div>
            <div class="oper-con">
                <div class="stop-con">
                    <div class="circle" @click="togglePlay">
                        <img src="@/components/png/stop.png" v-show="songStore.isPlaying">
                        <img src="@/components/png/play-black.png" v-show="!songStore.isPlaying">
                    </div>
                </div>
                <div class="fold-con">
                    <el-icon :size="24" style="color: rgb(70,70,70);"><Fold /></el-icon>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
    .main-con{
        width: 92%;
        
        @include center-space;
    }
    .vt-con{
        width: 100%;
        background-color: white;
        height: 42px;
        @include center;
    }
    .cd-text{
        @include flex-v-center;
        @include text-eli;
        width: 280px;
        .song-name{
            margin-left: 10px;
            font-size: 15px;
            color: rgb(75,74,80);
            white-space: nowrap;
            @include text-eli;
        }
        .song-creator{
            margin-left: 7px;
            font-size: 15px;
            flex: 1;
            @include text-eli;
            color: rgb(140,140,140);
        }
    }
    
    .cd-con{
        @include center;
        width: 100%;
        .cd-bgc{
            background-color: rgba(10,10,10);
            flex-shrink:0;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            @include center;
            img{
                @include circleImg(24px);
            }
        }
        
        
    }
    .oper-con{
        @include center;
        .fold-con{
            @include center;
        }
        .stop-con{
            height: 24px;
            width: 24px;
            margin-right: 15px;
            position: relative;
            .circle{
                @include center;
                position: absolute;
                border: 2px solid rgb(100,100,100);
                height: 20px;
                width: 20px;
                border-radius: 50%;
            }
            
            img{
                height: 9px;
                width: 8px;
            }
            
        }
    }
</style>
