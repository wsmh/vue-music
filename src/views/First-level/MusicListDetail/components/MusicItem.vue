<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        musicInfo:{
            type: Object
        }
    })
</script>

<template>
    <div class="item-con">
        <div class="index">1</div>
        <div class="music-info">
            <div class="music-name">
                蓝色土耳其
            </div>
            <div class="music-prof">
                <div class="member-icon">
                    VIP
                </div>
                <div class="music-label">
                    超清母带
                </div>
                <div class="music-artist">
                    周传雄 - 蓝色土耳其
                </div>
            </div>
        </div>
        <div class="oper-con">
            <div class="video-icon">
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
    justify-content: space-between;
    width:100%;
    
    .index{
        color: rgb(125, 124, 124);
    }
    .music-info{
        display: flex;
        flex-direction: column;
        margin-left: -110px;
        .music-name{
            font-size: 16px;
            margin-bottom: 3px
        }
        .music-prof{
            @include flex-v-center;
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
                    padding: 0px 1px 0px 1px;
                    border-radius: 3px;
                    margin-right: 4px;
            }
            .music-artist{
                margin-left: 1px;
                font-size: 12px;
                color: rgba(97, 97, 97, 0.916);
            } 
        } 
    }
    .oper-con{
        @include flex-v-center;
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
