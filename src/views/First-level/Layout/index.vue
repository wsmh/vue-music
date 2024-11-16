<script setup>
    import RootTabBar from './components/RootTabBar.vue';
    import MusicPlayer from './components/MusicPlayer.vue';
    import { useTabStore } from '@/stores/tabStore';
    import { computed, watch, ref } from 'vue';
    import CDPage from '@/components/CDPage/index.vue'
    import { useSongStore } from '@/stores/songStore';

    const tabStore = useTabStore();
    const songStore = useSongStore();
    const tabStyle = computed(()=>{
        const tabState = (tabStore.isTabShow&&!songStore.isFullScreen)?{
        }:{
            bottom:'-70px'
        }
        return tabState;
    })
    const playerStyle = computed(()=>{
        if(songStore.isFullScreen){
            return{
                bottom: '-70px'
            }
        }
        const playerState = tabStore.isTabShow?{
        }:{
            bottom:'0px'
        }
        return playerState;
    })

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

    tabStore.show();









    const tabList = [{
        id:1,
        name:'推荐',
        imgUrl: new URL('@/components/png/logo.png',import.meta.url).href,    //踩坑,动态传入不能直接解析相对路径
        path:'/layout/recommend'
    },{
        id:2,
        name:'发现',
        imgUrl: new URL('@/components/png/logo.png',import.meta.url).href,
        path:'/layout/explore'
    },{
        id:3,
        name:'满意',
        imgUrl: new URL('@/components/png/logo.png',import.meta.url).href,
        path:'/'
    },{
        id:4,
        name:'动态',
        imgUrl: new URL('@/components/png/logo.png',import.meta.url).href,
        path:'/'
    },{
        id:5,
        name:'我的',
        imgUrl: new URL('@/components/png/logo.png',import.meta.url).href,
        path:'/'
    }]
</script>

<template>
    
  
    <CDPage v-show="songStore.isFullScreen"  v-if="songStore.currentSong"/>

    <div class="layout-con">
        <div class="main-part"  v-show="!songStore.isFullScreen">
            <RouterView/>
        </div>
        <div class="music-player" :style="playerStyle" v-if="songStore.currentSong">
            <MusicPlayer :is-expand="!tabStore.isTabShow"/>
        </div>
        <div class="bottom-bar" :style="tabStyle">
            <RootTabBar :label-list="tabList"/>
        </div>
    </div>

    <audio src="/media/cc0-audio/t-rex-roar.mp3" ref="audioRef"></audio>
    
    
    
    
</template>

<style scoped lang="scss">
    .main-part{
        margin-top: 15px;
    }
    .layout-con{
        .bottom-bar{
            @include center;
            width: 100%;
            height: 70px;
            position: fixed;
            bottom: 0;
            transition: all 0.3s;
        }
    }
    .layout-con::before{
        content: "";
        background-color: rgb(249, 249, 249);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: -10;
    }
    .music-player{
        width: 100%;
        position: fixed;
        bottom: 70px;
        transition: bottom 0.3s;
    }

</style>
