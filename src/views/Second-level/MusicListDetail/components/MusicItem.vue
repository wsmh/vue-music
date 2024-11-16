<script setup>
    import { defineProps } from 'vue';
    import { getArtistsName } from '@/utils/dataHandle';

    const props = defineProps({
        musicInfo:{
            type: Object
        }
    })
    
    
</script>

<template>
    <div class="item-con">
        <div class="music-info">
            <div class="music-name">
                {{ props.musicInfo.name }}
            </div>
            <div class="music-prof">
                <div class="member-icon" v-if="props.musicInfo.fee === 1">
                    VIP
                </div>
                <div class="music-label" v-if="props.musicInfo.jm != null && props.musicInfo.hr === null">
                    超清母带
                </div>
                <div class="music-label"  v-if="props.musicInfo.hr != null">
                    沉浸声
                </div>
                <div class="music-label"  v-if="props.musicInfo.sq != null && props.musicInfo.hr === null && props.musicInfo.jm === null">
                    SQ
                </div>
                <div class="music-artist">
                    {{ getArtistsName(props.musicInfo.ar,props.musicInfo.al) }}
                </div>
            </div>
        </div>
        <div class="oper-con">
            <div class="video-icon" v-if="props.musicInfo.mv != 0 ">
                <el-icon :size="18" style="color: rgba(0,0,0,0.4);"><VideoPlay /></el-icon>
            </div>
            <div class="more-icon">
                <el-icon class="more" :size="15"  style="color: rgba(0,0,0,0.3)"><MoreFilled /></el-icon>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .item-con{
        @include flex-v-center;
        width:100%;
    
        .music-info{
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        .music-name{
            font-size: 14px;
            margin-bottom: 3px;
            color: rgb(47, 53, 85);
            width: 280px;
            @include text-eli;
        }
        .music-prof{
            @include flex-v-center;
            width: 280px;
            .member-icon{
                white-space: nowrap;
                    border: 1px solid rgba(251, 139, 139, 0.856);
                    font-size: 8px;
                    font-weight: 600;
                    color: rgb(240, 86, 35);
                    padding: 0px 1px 0px 1px;
                    border-radius: 3px;
                    margin-right: 4px;
            }
            .music-label{
                white-space: nowrap;
                    border: 1px solid rgb(223, 198, 38);
                    font-size: 8px;
                    font-weight: 600;
                    color: rgb(223, 198, 38);
                    padding: 0.5px 1.5px 0.5px 1.5px;
                    border-radius: 3px;
                    margin-right: 4px;
            }
            .music-artist{
                margin-left: 1px;
                font-size: 12px;
                color: rgba(97, 97, 97, 0.916);
                @include text-eli;
            } 
        } 
    }
    .oper-con{
        @include flex-v-center;
        margin-left: auto;
        .video-icon{
            @include center;
            margin-right: 20px;
        }
        .more-icon{
            @include center;
            
            .more{
                rotate: 0.25turn;
            }
        }
    }
}

    
    
</style>
