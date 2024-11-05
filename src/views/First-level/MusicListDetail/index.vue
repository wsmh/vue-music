<script setup>
    import { defineProps,ref } from 'vue';
    import { numTrans } from '@/utils/numTrans';
    import MusicItem from './components/MusicItem.vue';

    const props = defineProps({
        MLInfo:{
            type: Object
        }
    })

    const desc = ref('清香古韵，悠长弥漫\n本单选曲均为抒情、抗燥的古典音乐，睡前服用效果亦佳\n注：本歌单纯属兴趣使然，非专业探讨。\n—————— \n茶馆与音乐艺术是两种不同文化形态，其中茶馆是中国传统茶文化的物质载体，音乐艺术乃是全世界最具有情感的艺术形式，两者的结合是社会文化发展过程中自然选择的结果。茶与音乐的结合由来已久，虽然两者属于不同文化体系并各成一派，但两者在是基于民族传统精神文化思想的基础上形成了共同的精神理念、审美意境以及人生追求，都是情感熏陶与道德修养为主已达到身心交融完美、人与自然和谐至高的境界。当代多元化的社会语境造就了多元化的文化思潮与审美思想，人们不再仅仅局限于某一种文化形式或审美类型，因而运用于茶馆中音乐艺术风格也呈现出多元化特征，既有中国古风音乐又有西方古典音乐。\n\n作为茶文化的物质载体———茶馆，其自身也蕴藏着丰富的文化内涵，在数千年的发展演变中，其从最初的茶肆发展为当前风格各异、品位独特的茶馆，以及以饮茶过程为媒体的综合性表演形式主的茶艺馆，呈现出一个地域经济文化的发展轨迹与审美特色。茶馆文化品位与其室内外的装修、装饰有密切联系，常用绘画、雕塑、音乐等营造独特的文化底蕴，尤其是茶馆经营过程中通常会播放音乐或者现场弹奏音乐，营造高雅、舒适的饮茶环境，体悟茶文化深厚的内涵。因此，茶馆与音乐联系十分紧密，尤其对于追求高层次、多元化的精神需求的消费者来说，古典音乐已成为茶馆营造优雅环境不可或缺的重要媒介。\n\n要选择相对柔和的古典音乐。之所以选择柔和音乐，首先这是与茶馆文化相匹配的，茶馆本身就是将身心高度放松的场所，因此整个茶馆的环境，更多是放松，这就使得必须播放柔和音乐来与之匹配。柔和的音乐能够有效降低茶客的焦躁度，更好的品味茶。其次，要选择愉悦温馨的音乐。选择的古典音乐，既要消除茶客的焦虑，同时还要让其感受到舒心，不能选择一些悲情、亢奋的音乐。最后，要注重多重融合原则。所谓多重融合，就是要充分考虑茶客的需求和喜好，将其与音乐内容选择相融合，此外，是古典音乐选择要与自身茶馆经营的特色相融合，要达到浑然一体的效果。\n————— \n参考文献：\n胡倩倩，《清香古韵———基于古典音乐视角的茶文化审美研究》\n吴玉敏：《浅析古典音乐在茶馆中的运用》\n李倩义：《中西文化交融背景下的现代茶馆》\n包树德：《中国音乐审美导论》，北京：中国文史出版社，2006.4版');

    function rowToSpace(str){
        str.replace('\n',' ');
        return str;
        
    }
</script>

<template>
    <div class="page-bgc">
        <div class="main">
            <div class="page-info-con"><div class="info-con">
                <div class="header">
                    <div class="back-btn">
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
                            <img src="http://p1.music.126.net/QcPJfzds8ejF1FPgBaXMTw==/109951163128461676.jpg">
                            <div class="listen-count">
                                <img src="@/components/png/play.png">
                                <p>{{numTrans(31415286)}}</p>
                            </div>
                        </div>
                        <div class="list-info">
                            <div class="list-title">
                                <div class="title-text">
                                    古典清香 I 我的茶馆里住着巴赫与肖邦
                                </div>
                                <div class="arrow-con">
                                    <el-icon style="color: rgba(255, 255, 255, 0.7);" :size="14"><ArrowDown /></el-icon>
                                </div>
                            </div>
                            <div class="list-creator">
                                <div class="creator-avatar">
                                    <img src="http://p1.music.126.net/xXp7rcgDZpK2dG3gR-l2Xw==/109951164388323891.jpg">
                                </div>
                                <div class="creator-name">
                                    不二叔爱听歌
                                </div>
                                <div class="subs-btn">
                                    <div class="plus-icon">+</div>
                                    <div class="subs-text">关注</div>
                                </div>
                            </div>
                            <div class="list-tags">
                                <div class="tag-con">
                                    8.6 分 >
                                </div>
                                <div class="tag-con">
                                    华语 >
                                </div>
                                <div class="tag-con">
                                    流行 >
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="desc-con">
                        <p class="desc"> {{ rowToSpace(desc) }}
                        </p>
                        <div class="expand-con">
                            <el-icon :size="15" style="color: rgba(255, 255, 255, 0.7)"><ArrowRight /></el-icon>
                        </div>
                    </div>
                    <div class="oprt-btns">
                        <div class="btn-item">
                            <el-icon :size="24" style="color: white;"><Share /></el-icon>
                            <p>{{numTrans(15809)}}</p>
                        </div>
                        <div class="btn-item">
                            <el-icon :size="24" style="color: white;"><Comment /></el-icon>
                            <p>{{numTrans(1661)}}</p>
                        </div>
                        <div class="btn-item-subs">
                            <el-icon :size="24" style="color: white;"><CirclePlusFilled /></el-icon>
                            <p>{{numTrans(523913)}}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="music-list-con">
                <div class="news-con">
                    <div class="news-icon">
                        11.11
                    </div>
                    <div class="news-text">
                        VIP 低至4.9折! 双11送茅台
                    </div>
                    <div class="news-link">
                        立即抢购 >
                    </div>
                    
                </div>
                <div class="music-list">
                    <div class="music-oper-con">
                        <img src="@/components/png/play-red.png">
                        <div class="music-play-text">
                            <div class="text-h">
                                播放全部
                            </div>
                            <div class="music-count">
                                (249)
                            </div>
                        </div>
                        
                        <div class="down-manage-con">
                            <div class="down"><el-icon :size="22" style="color: rgba(0,0,0,0.8);"><Download /></el-icon></div>
                            <div class="manage"><el-icon :size="22" style="color: rgba(0,0,0,0.8);"><Fold /></el-icon></div>
                        </div>
                    </div>
                    <div class="music-items">
                        <MusicItem/>
                    </div>
                </div>
            </div>
            
            
            
        
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main{
        @include flex-v-center;
        flex-direction: column;
        width: 100%;
    }
    .music-list-con{
        position: relative;
        width: 100%;
        margin-top: 50px;
        @include flex-v-center;
        flex-direction: column;
        background-color: white;
        .music-oper-con{
            width: 100%;
            height: 56px;
            @include flex-v-center;
            justify-content: space-between;
            img{
                width: 28px;
                margin-left: -9px;
            }
            .music-play-text{
                margin-left: -190px;
                display: flex;
                .text-h{
                    font-size: 16px;
                    font-weight: 600;
                    color: rgb(72, 72, 74);
                }
                .music-count{
                    font-size: 12px;
                    margin-left: 5px;
                    margin-top: 3px;
                }
            }
            .down-manage-con{
                @include center;

                .down{
                    margin-right: 10px;
                }
            }
        }
        .news-con{
            .news-icon{
                margin-left: 8px;
                font-size: 8px;
                font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                color: rgb(249, 115, 4);
                height: 16px;
                width: 16px;
                border-radius: 12px;
                border: 2px solid rgb(249, 115, 4);
                @include center;
            }
            .news-text{
                font-size: 14px;
                margin-left: -130px;
                color: rgb(30, 30, 41);
            }
            .news-link{
                margin-right: 8px;
                font-size: 11px;
                color: rgba(24, 24, 24, 0.427);
            }
            position: absolute;
            @include flex-v-center;
            justify-content: space-between;
            z-index: -5;
            width: 100%;
            height: 45px;
            border-radius: 5px;
            top: -40px;
            left: 0;
            background-color: rgb(235, 242, 247);
        }
        .music-list{
            width: 92%;
        }

    }
    
    .page-bgc{
        @include bgImg('http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg');
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
            z-index: -10;
            background-color: rgba(128, 128, 128, 0.84);
            width: 90px;
            height: 10px;
            border-radius: 6px;
            top: -4.5px;
            left: 9px;
        }
        
    }
    .page-info-con{
        width: 100%;
        margin-top: 15px;
        @include flex-h-center;
        
        .info-con{
            width: 92%;
        }
        .header{
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
        margin-top: 10px;

        .desc-con{
            position: relative;
            margin-top: 10px;
            .desc{
                white-space: nowrap;
                color: rgba(246, 246, 246, 0.507);
                overflow: hidden;
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
            background: rgba(138, 138, 138, 0.308);;
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
