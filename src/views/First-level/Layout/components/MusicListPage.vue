<script setup>
    import MusicListItem from './MusicListItem.vue';
    import { useSongStore } from '@/stores/songStore';

    const songStore = useSongStore();
    

    function playThisSong(index){
        songStore.setIndex(index)
    }
</script>

<template>
    <div class="list-con">
        <div class="list-top-bar">
            <div class="split-box"></div>
            <div class="header">
                <div class="header-item">历史播放</div>
                <div class="header-item active-header">当前播放</div>
            </div>
            <div class="list-oper">
                <div class="oper-mode">
                    <div class="love-mode">                        
                        <img src="@/components/png/love_icon.png">
                        <p>心动模式</p>
                    </div>
                    <div class="detail-con">
                        i
                    </div>
                </div>
                <div class="oper-items">
                    <div class="oper-item">
                        <el-icon><Download /></el-icon>
                    </div>
                    <div class="oper-item">
                        <el-icon><FolderAdd /></el-icon>
                    </div>
                    <div class="oper-item">
                        <el-icon><Delete /></el-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-main">
            <div class="list-items">
                <div :class="{listItemActive: songStore.currentSong.name === item.name}"
                class="list-item-bgc" v-if="songStore.currentSong != null"
                v-for="item,index in songStore.playList"
                :key="item.id"
                @click="playThisSong(index)">
                    <MusicListItem :song-info="item" class="list-item"/>
                </div>
            </div>
            <div class="list-foot"></div>
        </div>
        
    </div>
    
</template>

<style scoped lang="scss">
    .list-main{
        margin-top: 10px;
        width: 100%;
        height: 500px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        .list-items{
            width: 100%;
            @include flex-v-center;
            flex-direction: column;
            .list-item-bgc{
                width: 100%;
                @include flex-v-center;
                flex-direction: column;
                height: 46px;
            }
            .list-item{
                width: 92%;
                height: 100%;
            }
            .listItemActive{
                background-color: rgba(186, 185, 185, 0.144);
            }
        }

    }
    .list-con{
        width: 100%;
        height: 70%;
        border-radius: 15px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .list-top-bar{
        width: 92%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
        .split-box{
            margin-top: 6px;
            width: 36px;
            height: 4px;
            background-color: rgb(220, 217, 217);
            border-radius: 10px;
            margin-bottom: 10px;
        }
        .header{
            @include center-space;
            width: 100%;
            .header-item{
                @include center;
                flex:1;
                font-size: 17px;
                color: rgb(176, 173, 173);
                font-weight: 600;
            }
            .active-header{
                color: $title-color;
                position: relative;
                &::before{
                    content: '';
                    position: absolute;
                    background-color: red;
                    height: 3px;
                    width: 16px;
                    border-radius: 10px;
                    bottom: -5px;
                }
            }
        }

        
        .list-oper{
            width: 100%;
            @include center-space;
            margin-top: 16px;
            .oper-mode{
                @include flex-v-center;
            }
            .love-mode{
                @include center;
                width: 80px;
                height: 30px;
                border-radius: 20px;
                background-color: rgba(238, 238, 238, 0.384);
                img{
                    height: 16px;
                }
                p{
                    margin-left: 3px;
                    font-size: 12px;
                    color: rgb(80, 80, 95);
                }
            }
            .detail-con{
                margin-left: 5px;
                font-size: 10px;
                border: 1.5px solid rgb(176, 172, 172);
                color: rgb(176, 172, 172);
                height: 11px;
                width: 11px;
                @include center;
                border-radius: 50%;
            }
        }
        .oper-items{
            @include flex-v-center;
            .oper-item{
                @include flex-space(16px);
                font-size: 18px;
                color: rgb(95, 95, 95);
            }
        }
        

        .list-items{
            width: 100%;

            .list-item{
                width: 100%;
            }
        }

</style>
