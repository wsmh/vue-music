<script setup>
    import RootTabBar from './components/RootTabBar.vue';
    import MusicPlayer from './components/MusicPlayer.vue';
    
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
    
    <div class="layout-con">
        <div class="main-part">
            <RouterView/>
        </div>
        <div class="music-player">
            <MusicPlayer/>
        </div>
        <div class="bottom-bar">
            <RootTabBar :label-list="tabList"/>
        </div>
    </div>
    
    
    
</template>

<style scoped lang="scss">
    .layout-con{
        .bottom-bar{
            @include center;
            width: 100%;
            height: 70px;
            position: fixed;
            bottom: 0;
        }
        .main-part{
            margin-top: 15px;
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
    }
</style>
