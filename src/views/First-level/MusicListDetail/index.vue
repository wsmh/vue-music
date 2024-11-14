<script setup>
    import { computed, onMounted,ref } from 'vue';
    import { numTrans } from '@/utils/dataHandle';
    import MusicItem from './components/MusicItem.vue';
    import { useRoute } from 'vue-router';
    import { getListDetailAPI } from '@/api/getMusicList';
    import { getMusicDetail } from '@/api/MusicDetail';
    import { getListInfoAPI } from '@/api/getMusicList';
    
    const route = useRoute();
    const songsList = ref([])
    const listInfo = ref({})
    const desc = ref('');
    const stopLoad = ref(false);
    const isFullScreen = ref(false);
    const bgcStyle = computed(()=>{
        return{
            backgroundImage: `url(${listInfo.value.coverImgUrl})`
        }
    })
    let offset = 0;

    onMounted(()=>{
        getDetailData();
        getListInfo();
    })

    async function getListInfo() {
        const res = await getListInfoAPI(route.query.id);
        listInfo.value = res.playlist;
        desc.value = listInfo.value.description;
        desc.value.replace('\n',' ');
    }

    async function load() {
        offset += 20;
        const res = await getListDetailAPI(route.query.id,20,offset)
        if(res.songs.length === 0){
            stopLoad.value = true;
            return;
        }
        for(let i = 0;i<res.songs.length;i++){
            const musicRes = await getMusicDetail(res.songs[i].id)
            res.songs[i].sq = musicRes.data.sq;
            res.songs[i].jm = musicRes.data.jm;
            res.songs[i].hr = musicRes.data.hr;
        }
        songsList.value = [...songsList.value,...res.songs];

    }

    async function getDetailData() {
        const res = await getListDetailAPI(route.query.id,20,offset)
        for(let i = 0;i<res.songs.length;i++){
            const musicRes = await getMusicDetail(res.songs[i].id)
            res.songs[i].sq = musicRes.data.sq;
            res.songs[i].jm = musicRes.data.jm;
            res.songs[i].hr = musicRes.data.hr;
        }
        songsList.value = res.songs;
        
    }

    
</script>

<template>
        <div class="main" v-show="!isFullScreen">
            <div class="page-bgc" :style="bgcStyle"></div>
            <div class="page-info-con">
                <div class="info-con">
                <div class="header">
                    <div class="back-btn" @click="$router.go(-1)">
                        <el-icon :size="28" style="color:white;"><ArrowLeft /></el-icon>
                    </div>
                    <div class="header-text">
                        歌单
                    </div>
                    <div class="header-tools">
                        <div class="search-icon">
                            <el-icon :size="24" style="color:white;"><Search /></el-icon>
                        </div>
                        <div class="more-con">
                            <el-icon class="more-icon" :size="24"><MoreFilled /></el-icon>
                        </div>
                    </div>
                </div>
                <div class="info-body">
                    <div class="main-info">
                        <div class="cover">
                            <div class="cover-bgc"></div>
                            <img :src="listInfo.coverImgUrl">
                            <div class="listen-count">
                                <img src="@/components/png/play.png">
                                <p>{{numTrans(listInfo.playCount)}}</p>
                            </div>
                        </div>
                        <div class="list-info">
                            <div class="list-title">
                                <div class="title-text">
                                    {{ listInfo.name }}
                                </div>
                                <div class="arrow-con">
                                    <el-icon style="color: rgba(255, 255, 255, 0.7);" :size="14"><ArrowDown /></el-icon>
                                </div>
                            </div>
                            <div class="list-creator">
                                <div class="creator-avatar">
                                    <img :src="listInfo.creator?.avatarUrl">
                                </div>
                                <div class="creator-name">
                                    {{ listInfo.creator?.nickname }}
                                </div>
                                <div class="subs-btn">
                                    <div class="plus-icon">+</div>
                                    <div class="subs-text">关注</div>
                                </div>
                            </div>
                            <div class="list-tags">
                                <div class="tag-con" v-if="listInfo.score != null">
                                    {{ listInfo.score }}分 >
                                </div>
                                <div class="tag-con" v-for="tag,index in listInfo.tags" :key="index">
                                    {{ tag }} >
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="desc-con" @click="isFullScreen = true">
                        <p class="desc"> {{ desc }}
                        </p>
                        <div class="expand-con">
                            <el-icon :size="15" style="color: rgba(255, 255, 255, 0.7)"><ArrowRight /></el-icon>
                        </div>
                    </div>
                    <div class="oprt-btns">
                        <div class="btn-item">
                            <el-icon :size="24" style="color: white;"><Share /></el-icon>
                            <p>{{numTrans(listInfo.shareCount)}}</p>
                        </div>
                        <div class="btn-item">
                            <el-icon :size="24" style="color: white;"><Comment /></el-icon>
                            <p>{{numTrans(listInfo.commentCount)}}</p>
                        </div>
                        <div class="btn-item-subs">
                            <el-icon :size="24" style="color: white;"><CirclePlusFilled /></el-icon>
                            <p>{{numTrans(listInfo.subscribedCount)}}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="music-list-con">
                <div class="music-list">
                    <div class="music-oper-con">
                        <img src="@/components/png/play-red.png">
                        <div class="music-play-text">
                            <div class="text-h">
                                播放全部
                            </div>
                            <div class="music-count">
                                ({{ listInfo.trackCount }})
                            </div>
                        </div>
                        
                        <div class="down-manage-con">
                            <div class="down"><el-icon :size="22" style="color: rgba(0,0,0,0.8);"><Download /></el-icon></div>
                            <div class="manage"><el-icon :size="22" style="color: rgba(0,0,0,0.8);"><Fold /></el-icon></div>
                        </div>
                    </div>
                    <div class="music-items" v-infinite-scroll="load" :infinite-scroll-disabled="stopLoad">
                        <div class="music-item" v-for="(item,index) in songsList">
                            <div class="index">
                                <p>{{index+1}}</p>
                            </div>
                            <MusicItem :music-info="item"/>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div class="full-page" v-show="isFullScreen" @click="isFullScreen = false">
            <div class="page-bgc full-bgc" :style="bgcStyle"></div>
            <div class="full-main-con">
                <div class="quit-con">
                    X
                </div>
                <div class="full-cover-con">
                    <img :src="listInfo.coverImgUrl">
                </div>
                <div class="full-title">
                    {{ listInfo.name }}
                </div>
            </div>
            <div class="full-page-text">
                <div class="full-list-tags">
                    <div class="tags-text">Tags:</div>
                    <div class="full-tag-con" v-if="listInfo.score != null">
                        {{ listInfo.score }}分
                    </div>
                    <div class="full-tag-con" v-for="tag,index in listInfo.tags" :key="index">
                        {{ tag }}
                    </div>
                </div>
                <div class="full-desc">
                    {{ listInfo.description }}
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
    .full-page-text{
        margin-top: 30px;
        width: 92%;
        .full-desc{
            white-space: pre-line;
            color: white;
            font-size: 12px;
            font-family:Georgia, 'Times New Roman', Times, serif;
            margin-top: 12px;
            margin-bottom: 15px;
        }
        .full-list-tags{
            @include flex-v-center;
            .tags-text{
                color: rgba(255, 255, 255, 0.813);
                font-size: 13px;
                margin-bottom: 2px;
                margin-right: 32px;
            }
            .full-tag-con{
                background-color: $btn-tran-color;
                color: rgba(255, 255, 255, 0.813);
                font-size: 12px;
                padding: 4px 6px 4px 6px;
                border-radius: 200px;
                @include flex-space(5px);
            }
        }
    }
    
    .full-page{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .full-title{
            color: white;
            font-size: 15px;
            margin-top: 15px;
        }
        .full-main-con{
            margin-top: 20px;
            width: 92%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .full-bgc{
            width: 100%;
            height: 100%;
            filter: blur(50px);
        }
        .quit-con{
            color: white;
            font-weight: 300;
            width: 100%;
            height: 50px;
            font-size: 18px;
            text-align: end;
        }
        .full-cover-con{
            width: 200px;
            height: 200px;
            border-radius: 10px;
            background-color: white;
            img{
                border-radius: 10px;
                height: 100%;
            }
        }
    }
    .index{
        margin-bottom: 5px;
        @include center;
        width: 20px;
        height: 20px;
        margin-left: -6px;
        p{
        color: rgb(125, 124, 124);
        font-size: 14px;
        }

    }
    .list-foot{
        width: 100%;
        height: 10px;
        background-color: white;
    }
    .main{
        @include flex-v-center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .music-list-con{
        width: 100%;
        margin-top: 30px;
        border-radius: 15px;
        @include flex-v-center;
        flex-direction: column; 
        background-color: white;
        .music-oper-con{
            width: 100%;
            height: 56px;
            @include flex-v-center;
            margin-top: 2px;
            justify-content: space-between;
            img{
                width: 24px;
                margin-left: -9px;
            }
            .music-play-text{
                margin-left: -190px;
                display: flex;
                .text-h{
                    font-size: 16px;
                    font-weight: 600;
                    color: rgb(56, 62, 92);
                }
                .music-count{
                    font-size: 10px;
                    margin-left: 5px;
                    margin-top: 7px;
                    color: rgb(56, 62, 92);
                }
            }
            .down-manage-con{
                @include center;

                .down{
                    margin-right: 10px;
                }
            }
        }
        .music-list{
            width: 92%;
            height: 100%;
            .music-items{
                width: 100%;
                .music-item{
                    width: 100%;
                    @include flex-v-center;
                    margin-bottom: 12px;
                }
            }
            
        }
        
    }
    
    .page-bgc{
        position: fixed;
        background-size: cover;
        filter: blur(100px);
        width: 100%;
        height: 350px;
        top: 0;
        left: 0;
        z-index: -10;
    }
    .cover{
        position: relative;
        margin-top: 8px;
        .listen-count{
            position: absolute;
            display: flex;
            align-items: center;
            top: -5px;
            left: 50px;
            .headset-con{
                height: 12px;
                width: 12px;
                color: white;
            }
            p{
                margin-left: 2px;
                font-size: 10px;
                color: white;
                font-weight: 700;
            }
            img{
                width: 8px;
            }
        }
        img{
            width: 108px;
            border-radius: 10px;
            position: relative;
            
        }   
        .cover-bgc{
            position: absolute;
            z-index: 0;
            background-color: rgb(225, 222, 222);
            width: 90px;
            height: 10px;
            border-radius: 6px;
            top: -4.5px;
            left: 9px;
        }
        
    }
    .page-info-con{
        width: 100%;
        height: 100%;
        margin-top: 15px;
        @include flex-h-center;
        .info-con{
            width: 92%;
        }
        .header{
            position: fixed;
            top: 20px;
            left: 12px;
            width: 100%;
            height: 50px;
            @include flex-v-center;
            justify-content:space-between;
            .more-icon{
                color: white;
                transform: rotate(0.25turn);
            }
            .more-con{
                margin-left: 25px;
            }
            .header-tools{
                display: flex;
                align-items: center;
                margin-right: 20px;
            }
            .header-text{
                margin-left: 50px;
                margin-top: -5px;
                color: white;
                font-size: 17px;
            }
        }
    }
    .info-body{
        margin-top: 80px;

        .desc-con{
            position: relative;
            margin-top: 10px;
            .desc{
                white-space: nowrap;
                color: rgba(246, 246, 246, 0.507);
                text-overflow: clip;
                font-size: 12px;
                @include text-linner(90%)
            }
            .expand-con{
                position: absolute;
                height: 20px;
                width: 20px;
                top: -1.5px;
                right: -10px;
                @include center;
            }
        }
        
        .main-info{
            @include flex-v-center;
            .list-info{
                margin-left: 10px;
                .list-title{
                    @include flex-v-center;
                    .title-text{
                        color: white;
                        font-size: 18px;
                    }
                    .arrow-con{
                        margin-top: -20px;
                        @include center;
                        padding: 0;
                        width: 24px;
                        height: 20px;
                        border-radius: 14px;
                        background-color: rgba(141, 141, 141, 0.242);
                    }
                }
                .list-tags{
                    @include flex-v-center;

                    .tag-con{
                        margin-top: 10px;
                        background-color: rgba(138, 138, 138, 0.308);
                        color: rgba(255, 255, 255, 0.813);
                        font-size: 12px;
                        padding: 2px 3px 2px 5px;
                        border-radius: 5px;
                        @include flex-space(5px);
                    }
                }
                .list-creator{
                    @include flex-v-center;
                    margin-top: 10px;
                    .creator-avatar{
                        img{
                            @include circleImg(24px);
                            vertical-align: middle;
                        }
                        margin-right: 5px;
                    }
                    .creator-name{
                        color: rgb(199, 195, 195);
                        font-size: 14px;
                        margin-right: 5px;
                    }

                    .subs-btn{
                        color: rgb(199, 195, 195);
                        @include center;
                        background-color: rgba(199, 199, 199, 0.258);
                        padding-left: 6px;
                        padding-right: 9px;
                        height: 25px;
                        border-radius: 25px;
                        .subs-text{
                            font-size: 13px;
                        }
                        .plus-icon{
                            font-size: 20px;
                            margin-bottom: 3px;
                            margin-right: 2px;
                        }
                    }
                }
            }
        }
    }
    .oprt-btns{
        margin-top: 20px;
        @include flex-v-center;
        justify-content: space-between;
        width: 100%;
        .btn-item,.btn-item-subs{
            @include center;
            background: $btn-tran-color;
            height: 40px;
            width: 115px;
            border-radius: 60px;
            p{
                color: white;
                margin-left: 4px;
                margin-top: 15px;
            }
        }
        .btn-item-subs{
            background-color: rgba(249, 16, 55, 0.961);
        }
    }
    
</style>
