<script setup>
  import { useSongStore } from '@/stores/songStore';
  import { ref, defineProps, onMounted } from 'vue';
  import { getArtistsName } from '@/utils/dataHandle';

    const songStore = useSongStore();

    const props = defineProps({
        songInfo:{
            type : Object
        }
    })
    const artistName = ref('')
    
    onMounted(()=>{
        console.log(props.songInfo);
        
        console.log(props.songInfo.ar);
        console.log(props.songInfo);
        console.log(props.songInfo.al);
        artistName.value = getArtistsName(props.songInfo.ar,props.songInfo.al)
    })

    
</script>

<template>
    <div class="item-con">
        <div class="item-info" :class="{itemInfoActive: songStore.currentSong.name === props.songInfo.name}">
            <div class="isPlaying-icon">
                <el-icon><Histogram /></el-icon>
            </div>
            <div class="vip-icon" v-if="props.songInfo.fee === 1">VIP</div>
            <div class="song-name">{{props.songInfo.name}}</div>
            <div class="song-artist">· {{artistName}}</div>
        </div>
        <div class="delete-icon">
            <el-icon><Close /></el-icon>
        </div>

    </div>
    
</template>

<style scoped lang="scss">
.item-con{
    width: 100%;
    height: 40px;
    @include center-space;
}
.vip-icon{
    font-size: 8px;
    width: 14px;
    height: 9px;
    @include center;
    font-weight: 600;
    border: 1px solid rgb(220, 95, 96);
    color: rgb(220, 95, 96);
    border-radius: 2px;
    margin-right: 4px;
}
    .item-info{
        @include flex-v-center;
        width: 70%;
        .isPlaying-icon{
            display: none;
        }
        .song-name{
            color: rgb(25, 26, 30);
            font-size: 14px;
            white-space: nowrap;
        }
        .song-artist{
            margin-left: 0.5em;
            color: rgb(145, 141, 141);
            font-size: 12px;
            @include text-eli;
        }
    }
    .itemInfoActive{
        @include flex-v-center;
        width: 70%;
        .isPlaying-icon{
            @include center;
            color: rgb(220, 95, 96);
            font-size: 14px;
            margin-right: 4px;
        }
        .song-name{
            color: rgb(220, 95, 96);
            font-size: 14px;
        }
        .song-artist{
            margin-left: 0.5em;
            color: rgb(220, 95, 96);
            font-size: 12px;
        }
    }
    .delete-icon{
        color: rgb(193, 191, 191);
        font-size: 18px;
    }

</style>
