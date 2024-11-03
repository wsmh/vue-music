<script setup>
import Tab from '@/components/Tab.vue';
const tabList = [{
            id:1,
            name:'精选',
            path:'/layout/explore/music/selected'
        },{
            id:2,
            name:'排行榜',
            path:'/layout/explore/music/ranking'
        },{
            id:3,
            name:'VIP',
            path:'/layout/explore/book'
        },{
            id:4,
            name:'歌单',
            path:'/layout/explore/zhibo'
        },{
            id:5,
            name:'助眠',
            path:'/layout/explore/zhibo'
        },{
            id:6,
            name:'欧美',
            path:'/layout/explore/zhibo'
        },{
            id:7,
            name:'摇滚',
            path:'/layout/explore/zhibo'
        }]
</script>

<template>
    <div class="tab-con">
        <Tab :label-list="tabList" type="secondary"/>
        <img src="./components/arrow.png">
    </div>
    
    <RouterView/>
</template>

<style scoped lang="scss">
    .tab-con{
        display: flex;
        align-items: center;
        img{
            width: 12px;
            height: 12px;
            opacity: 0.4;
        }
    }
</style>
