<script setup>
    import { defineProps } from 'vue';
    import { ref } from 'vue';
    
    const props = defineProps({
        musicInfo:{
            type: Object
        }
    })

    const songInfo = ref(props.musicInfo.song)
    const artistsNames = ref('');
    console.log(props.musicInfo);
    getArtistsName();


    function getArtistsName(){
        const nameArr = songInfo.value.artists.map(item=>{
            return item.name;
        })
        artistsNames.value = nameArr.join('/')
        artistsNames.value = artistsNames.value+' - '+songInfo.value.album.name
    }
    
    
</script>

<template>
    <div class="music-item-con">
        <img :src="props.musicInfo.picUrl" class="cover">
        <div class="song-info">
            <div class="song-name">
                {{songInfo.name}}
            </div>
            <div class="song-desc">
                {{ artistsNames }}
            </div>
        </div>
        <img src="@/components/png/play-black.png" class="play-icon">
    </div>
  
</template>

<style scoped lang="scss">
    .music-item-con{
        display: flex;
        align-items: center;
        .cover{
            height: 48px;
            width: 48px;
            border-radius: 5px;
        }
        .song-info{
            margin-left: 10px;
            width: 270px;
            .song-name{
                color: $title-color;
                font-weight: 600;
                width: 250px;
            }
            .song-desc{
                margin-top: 3px;
                font-size: 12px;
                width: 250px;
                color: rgba(91, 90, 90, 0.918);
            }
        }
        .play-icon{
            width: 16px;
        }
    }
</style>
