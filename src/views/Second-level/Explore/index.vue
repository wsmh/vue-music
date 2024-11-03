<script setup>
import Tab from '@/components/Tab.vue';

const tabList = [
        {
            id:1,
            name:'音乐',
            path:'/layout/explore/music'
        },{
            id:2,
            name:'播客',
            path:'/layout/explore/player'
        },{
            id:3,
            name:'听书',
            path:'/layout/explore/book'
        },{
            id:4,
            name:'直播',
            path:'/layout/explore/zhibo'
        }
    ]
</script>

<template>
    <div class="header">
        <img src="@/components/png/menu.png" class="menu-icon">
        <Tab :label-list="tabList" type="main"/>
        <img src="@/components/png/search.png" class="search-icon">
    </div>
    <RouterView/>
</template>

<style scoped lang="scss">
    .header{
        display: flex;
        align-items: center;
        .menu-icon{
            width: 25px;
            height: 30px;
            margin:0 25px 0 10px ;
        }

        .search-icon{
            width: 25px;
            height: 25px;
            opacity: 0.5;
            margin-left: 20px;
        }
    }
</style>
