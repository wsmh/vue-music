<script setup>
    import { defineProps } from 'vue';
    import { ref } from 'vue';
    import { getArtistsName } from '@/utils/dataHandle';

    const props = defineProps({
        musicInfo:{
            type: Object
        }
    })

    const songInfo = ref(props.musicInfo.song)
    

    
    
</script>

<template>
    <div class="music-item-con">
        <img :src="props.musicInfo.picUrl" class="cover">
        <div class="song-info">
            <div class="song-name">
                {{songInfo.name}}
            </div>
            <div class="song-desc">
               <div class="quality-icon"> {{songInfo.album.subType}} </div> 
                <div class="song-spec-desc">{{ getArtistsName(songInfo.artists,songInfo.album) }}</div>
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
            }
            .song-desc{
                margin-top: 3px;
                font-size: 12px;
                display: flex;
                align-items: center;
                color: rgba(91, 90, 90, 0.918);
                .song-spec-desc{
                    @include text-eli;
                }
                .quality-icon{
                    white-space: nowrap;
                    border: 1px solid rgba(251, 139, 139, 0.856);
                    font-size: 11px;
                    font-weight: 600;
                    color: rgb(240, 86, 35);
                    padding: 1px 2px 1px 2px;
                    border-radius: 4px;
                    margin-right: 4px;
                }
            }
        }
        .play-icon{
            width: 16px;
        }
    }
</style>
