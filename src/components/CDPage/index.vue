<script setup>
import { useSongStore } from '@/stores/songStore';
import { getArtistsName,timeFormat } from '@/utils/dataHandle';
import { watch, ref , onUnmounted,defineProps } from 'vue';

const props = defineProps({
    audioRef:{
        type:Object
    }
})

const songStore = useSongStore()
const cdBoxRef = ref(null)
const cdImgRef = ref(null)
const progressRef = ref(null)
const progressBgcRef = ref(null)
const isMoving = ref(false);

const currentPercentage = ref(0);
const currentTimeF = ref('');

let timer = setInterval(()=>{
    if(isMoving.value) return;
    currentPercentage.value = songStore.currentPercentage.toFixed(2);
},1000)

watch(()=>songStore.currentTime,value=>{
    currentTimeF.value = timeFormat(value*1000);
})

watch(()=>songStore.isPlaying,(newValue)=>{
    if(!newValue){
        const boxTransformDeg = getComputedStyle(cdBoxRef.value).transform 
        const imgTransformDeg = getComputedStyle(cdImgRef.value).transform
        cdBoxRef.value.style.transform = boxTransformDeg === 'none'?imgTransformDeg:
        imgTransformDeg.concat('',boxTransformDeg)
    }
})

onUnmounted(()=>{
    clearInterval(timer)
})

function togglePlay() {
    songStore.toggle();
    
}

function onTouchStart(e){
    isMoving.value = true;
}
function onTouchMove(e){
    const x2 = e.touches[0].pageX;
    e.touches[0].moveWidth = x2 - progressBgcRef.value.getBoundingClientRect().left;
    const movePerc = Math.min(1, Math.max(0,e.touches[0].moveWidth / progressBgcRef.value.offsetWidth));
    currentPercentage.value = movePerc.toFixed(2);
}
function onTouchEnd(){
    props.audioRef.currentTime = currentPercentage.value*props.audioRef.duration;
    isMoving.value = false;
}

function onTouchCancel(){
    isMoving.value = false;
}


</script>

<template>
    <div class="cd-main-con">
        <div class="bgc-con"></div>
        <div class="cd-main">
            <div class="header">
                <div class="arrow" @click="songStore.cancelFullScreen">
                    <el-icon>
                        <ArrowDown />
                    </el-icon>
                </div>
                <div class="list-name">{{songStore?.listName}}</div>
                <div class="share-con">
                    <el-icon>
                        <Share />
                    </el-icon>
                </div>
            </div>
            <div class="CD-con">
                <div class="cd-box" ref="cdBoxRef">
                    <img :src="songStore.currentSong?.al.picUrl" ref="cdImgRef" :class="{cdRotation:songStore.isPlaying}">
                </div>
                
            </div>
            <div class="song-info">
                <div class="song-prof">
                    <div class="song-name-con">
                        <div class="song-name">{{songStore.currentSong?.name}}</div>
                        <div class="VIP-con">VIP</div>
                    </div>
                    <div class="song-creator">
                        <div class="creator-name">{{getArtistsName(songStore.currentSong.ar,songStore.currentSong.al)}} ></div>
                    </div>
                </div>
                <div class="song-data">
                    <div class="song-loves">
                        <svg width="24" height="24" viewBox="0 0 48 48" opacity="0.8" fill="rgba(235, 234, 234, 0.11)"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                                fill="rgba(235, 234, 234, 0.71);" opacity="0.8" stroke="#333" stroke-width="1"
                                stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </div>
                    <div class="song-comments">
                        <el-icon>
                            <ChatLineRound />
                        </el-icon>
                    </div>
                </div>
            </div>
            <div class="progress-line-con">
                <div class="progress-line-bgc"
                @touchstart.prevent="onTouchStart"
                @touchmove.prevent="onTouchMove"
                @touchend.prevent="onTouchEnd"
                @touchcancel="onTouchCancel"
                ref="progressBgcRef">
                    <div class="progress-line" ref="progressRef" :style="{width: `${currentPercentage*100}%`}">
                        <div class="progress-circle"></div>
                    </div>
                </div>
            </div>
            <div class="song-state">
                <div class="duration">{{currentTimeF}}</div>
                <div class="song-qual">Standard</div>
                <div class="duration">{{timeFormat(songStore.currentSong.songTime)}}</div>
            </div>
            <div class="song-controler-con">
                <div class="song-mode">
                    <img src="@/components/png/love_icon.png">
                </div>
                <div class="song-controler" @click="songStore.preSong">
                    <img src="@/components/png/pre.png">
                </div>
                <div class="toggle-play" @click="togglePlay">
                    <img src="@/components/png/stop-white.png" v-show="songStore.isPlaying">
                        <img src="@/components/png/play.png" v-show="!songStore.isPlaying">
                </div>
                <div class="song-controler" @click="songStore.nextSong">
                    <img src="@/components/png/next.png">
                </div>
                <div class="song-mode">
                    <el-icon>
                        <Expand />
                    </el-icon>
                </div>
            </div>
            <div class="more-oper">
                <div class="oper-item">
                    <el-icon>
                        <Iphone />
                    </el-icon>
                </div>
                <div class="oper-item">
                    <el-icon>
                        <Download />
                    </el-icon>
                </div>
                <div class="oper-item">
                    <el-icon>
                        <MoreFilled />
                    </el-icon>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">

.cdRotation{
    animation: cdRotate 20s linear infinite;
}
@keyframes cdRotate {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.cd-main-con {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    z-index: 100;

    .bgc-con {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgb(92, 61, 38);
        z-index: -1;
    }

    .cd-main {
        margin-top: 15px;
        width: 90%;
        height: 100%;
        .header {
            @include center-space;

            .arrow {
                color: rgba(235, 234, 234, 0.751);
                font-size: 24px;
            }

            .list-name {
                color: rgba(235, 234, 234, 0.751);
                font-size: 14px;
            }

            .share-con {
                color: rgba(235, 234, 234, 0.751);
                font-size: 24px;
                opacity: 0.7;
            }
        }

        .CD-con {
            margin-top: 80px;
            width: 100%;
            height: 400px;
            @include center;

            .cd-box{
                width: 320px;
                height: 320px;
                background-color: rgb(16, 16, 16);
                border-radius: 50%;
                @include center;
                img {
                    @include circleImg(240px)
                }
            }
            
        }

        .song-info {
            @include center-space;

            .song-prof {
                .song-name-con {
                    @include flex-v-center;
                    max-width: 200px;
                    .song-name {
                        color: rgba(250, 250, 250, 0.587);
                        @include text-eli;
                    }

                    .VIP-con {
                        color: rgba(198, 197, 197, 0.518);
                        font-size: 10px;
                        margin-left: 5px;
                        font-weight: 600;
                        height: 16px;
                        width: 22px;
                        line-height: 16px;
                        text-align: center;
                        border-radius: 2px;
                        background-color: rgba(118, 114, 114, 0.244);
                    }
                }

                .song-creator {
                    margin-top: 6px;
                    @include flex-v-center;
                    max-width: 200px;
                    .creator-name {
                        color: rgba(235, 234, 234, 0.486);
                        font-size: 14px;
                        @include text-eli;
                    }

                }

            }

            .song-data {
                @include flex-v-center;

                .song-loves {
                    margin-right: 40px;
                }

                .song-comments {
                    color: rgba(235, 234, 234, 0.751);
                    font-size: 24px;
                }
            }
        }


        .progress-line-con {
            margin-top: 20px;
            height: 8px;
            @include center;
            width: 100%;
            .progress-line-bgc {
                width: 100%;
                height: 3px;
                background-color: rgba(222, 222, 222, 0.313);
                border-radius: 30px;
                position: relative;

                .progress-line{
                    position: absolute;
                    height: 3px;
                    border-radius: 30px;
                    background-color: rgba(222, 222, 222, 0.726);

                    .progress-circle {
                        position: absolute;
                        top: -1.5px;
                        right: -3.5px;
                        width: 7px;
                        height: 7px;
                        border-radius: 50%;
                        background-color: rgb(255, 255, 255);
                    }
                }
            }

        }

        .song-state {
            margin-top: 8px;
            @include center-space;
            width: 100%;
            .song-qual {
                color: rgba(235, 234, 234, 0.297);
                font-size: 10px;
            }

            .duration {
                font-size: 10px;
                color: rgba(235, 234, 234, 0.297);
            }
        }

        .song-controler-con {
            margin-top: 30px;
            @include center-space;

            .song-controler {
                img {
                    height: 20px;
                }
            }

            .toggle-play {
                height: 33px;
                width: 33px;
                @include center;
                img {
                    height: 32px;
                }
            }

            .song-mode {
                img {
                    height: 24px;
                    opacity: 0.8;
                }

                color: rgba(237, 236, 236, 0.799);
                font-size: 24px;
            }
        }

        .more-oper {
            width: 100%;
            margin-top: 25px;
            @include center-space;

            .oper-item {
                @include center;
                flex: 1;
                color: rgba(224, 219, 219, 0.379);
                font-size: 20px;
            }
        }
    }



}
</style>
