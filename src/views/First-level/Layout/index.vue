<script setup>
    import RootTabBar from './components/RootTabBar.vue';
    const tabList = [{
        name:'推荐',
        imgUrl:'',
        path:'/'
    },{
        name:'发现',
        imgUrl:'',
        path:'/'
    },{
        name:'满意',
        imgUrl:'',
        path:'/'
    },{
        name:'动态',
        imgUrl:'',
        path:'/'
    },{
        name:'我的',
        imgUrl:'',
        path:'/'
    }]
</script>

<template>
    
    <div class="layout-con">
        <RouterView/>

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
</style>
