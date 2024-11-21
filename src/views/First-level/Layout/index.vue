<script setup>
import RootTabBar from './components/RootTabBar.vue';
import MusicPlayer from './components/MusicPlayer.vue';
import { useTabStore } from '@/stores/tabStore';
import { computed } from 'vue';
import { useSongStore } from '@/stores/songStore';
import MusicListPage from './components/MusicListPage.vue';

const tabStore = useTabStore();
const songStore = useSongStore();
const tabStyle = computed(() => {
    const tabState = (tabStore.isTabShow && !songStore.isFullScreen && !songStore.isListShow) ? {
    } : {
        bottom: '-70px'
    }
    return tabState;
})
const playerStyle = computed(() => {
    if (songStore.isFullScreen || songStore.isListShow) {
        return {
            bottom: '-70px'
        }
    }
    const playerState = tabStore.isTabShow ? {
    } : {
        bottom: '0px'
    }
    return playerState;
})


tabStore.show();









const tabList = [{
    id: 1,
    name: '推荐',
    imgUrl: new URL('@/components/png/logo.png', import.meta.url).href,    //踩坑,动态传入不能直接解析相对路径
    path: '/layout/recommend'
}, {
    id: 2,
    name: '发现',
    imgUrl: new URL('@/components/png/logo.png', import.meta.url).href,
    path: '/layout/explore'
}, {
    id: 3,
    name: '满意',
    imgUrl: new URL('@/components/png/logo.png', import.meta.url).href,
    path: '/'
}, {
    id: 4,
    name: '动态',
    imgUrl: new URL('@/components/png/logo.png', import.meta.url).href,
    path: '/'
}, {
    id: 5,
    name: '我的',
    imgUrl: new URL('@/components/png/logo.png', import.meta.url).href,
    path: '/layout/myspace'
}]
</script>

<template>

    <div class="main-con">
        <div class="layout-con" :class="{ banCon: songStore.isListShow }">
            <div class="main-part" v-show="!songStore.isFullScreen">
                <RouterView />
            </div>
            <div class="music-player" :style="playerStyle" v-if="songStore.currentSong">
                <MusicPlayer :is-expand="!tabStore.isTabShow" />
            </div>
            <div class="bottom-bar" :style="tabStyle">
                <RootTabBar :label-list="tabList" />
            </div>
        </div>
        <div class="musicList-con" :class="{ listPageActive: songStore.isListShow }" v-if="songStore.playList.length != 0">
            <div class="musicList-bgc" @touchstart.stop="songStore.hiddenList"></div>
            <MusicListPage class="list-page" />
        </div>

    </div>






</template>

<style scoped lang="scss">
.main-con {
    overflow: hidden;
}

.banCon {
    z-index: -10;
    filter: blur(30px);
    position: fixed;
    left: 0;
    top: 0;
}

.musicList-con {
    width: 100%;
    height: 736px;
    position: fixed;
    bottom: -800px;
    left: 0;
    transition: bottom 0.3s;
    z-index: 1000;
    overflow: hidden;

    .musicList-bgc {
        width: 100%;
        height: 220px;
    }

    .list-page {
        width: 100%;
        z-index: 1001;
    }
}

.listPageActive {
    bottom: -10px;
}

.main-part {
    margin-top: 15px;
}

.layout-con {
    .bottom-bar {
        @include center;
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0;
        transition: all 0.3s;
    }
}

.layout-con::before {
    content: "";
    background-color: rgb(249, 249, 249);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -10;
}

.music-player {
    width: 100%;
    position: fixed;
    bottom: 70px;
    transition: bottom 0.3s;
}
</style>
