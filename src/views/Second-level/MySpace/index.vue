<script setup>
    import {  ref } from 'vue';
    import MusicListColumn from './components/MusicListColumn.vue';
    
    const activeItem = ref(0)
    const activeKind = ref(0)

</script>

<template>
        <div class="main">
            <div class="page-bgc"></div>
            <div class="page-info-con">
                <div class="info-con">
                    <div class="header">
                    <div class="menu-btn">
                        <img src="@/components/png/menu-white.png">
                    </div>
                    <div class="header-text">
                        + 添加状态
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
                    <div class="info-prof">
                        <div class="avatar-con">
                            <img src="@/components/png/avatar.jpg">
                        </div>
                        <div class="user-name">最美的星空遇见最美的你</div>
                        <div class="user-desc">掌控生命殊非易事</div>
                        <div class="user-honor">12枚勋章 | 教授乐迷 · 上海市 · 村龄7年</div>
                        <div class="attr-items">
                            <div class="attr-item">
                                <div class="attr-value">45</div>
                                <p>关注</p>
                            </div>
                            <div class="attr-item">
                                <div class="attr-value">14</div>
                                <p>粉丝</p>
                            </div>
                            <div class="attr-item">
                                <div class="attr-value">Lv.8</div>
                                <p>等级</p>
                            </div>
                            <div class="attr-item">
                                <div class="attr-value">2118时</div>
                                <p>听歌</p>
                            </div>
                        </div>
                        <div class="oprt-btns">
                            <div class="btn-item">
                                <el-icon style="color: rgba(255,255,255,0.8);" :size="18"><List /></el-icon>
                                <p>最近</p>
                            </div>
                            <div class="btn-item">
                                <el-icon style="color: rgba(255,255,255,0.8);" :size="18"><Management /></el-icon>
                                <p>本地</p>
                            </div>
                            <div class="btn-item">
                                <el-icon style="color: rgba(255,255,255,0.8);" :size="18"><UploadFilled /></el-icon>
                                <p>云盘</p>
                            </div>
                            <div class="btn-item">
                                <el-icon style="color: rgba(255,255,255,0.8);" :size="18"><CircleCheckFilled /></el-icon>
                                <p>已购</p>
                            </div>
                            <div class="btn-item-grid">
                                <el-icon style="color: rgba(255,255,255,0.8);" :size="18"><Menu /></el-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="music-list-con">
                <div class="list-header">
                    <div class="header-item" @click="activeItem = 0" :class="{active:activeItem === 0}">音乐</div>
                    <div class="header-item" @click="activeItem = 1" :class="{active:activeItem === 1}">播客</div>
                    <div class="header-item" @click="activeItem = 2" :class="{active:activeItem === 2}">动态</div>
                </div>
                <div class="list-kinds">
                    <div class="kinds-text">
                        <div class="list-kind" @click="activeKind = 0" :class="{kindActive:activeKind === 0}">
                            <div>创建</div>
                            <p>23</p>
                        </div>
                        <div class="list-kind" @click="activeKind = 1" :class="{kindActive:activeKind === 1}">
                            <div>收藏</div>
                            <p>143</p>
                        </div>
                    </div>
                    <div class="more-con-2">
                        <el-icon class="more-icon-2" :size="16"><MoreFilled /></el-icon>
                    </div>
                </div>
                <div class="music-list">
                    <MusicListColumn/>
                </div>
                    
                <div class="list-foot"></div>
            </div>
            
        </div>
</template>

<style scoped lang="scss">

    .more-con-2{
        @include center;
        .more-icon-2{
            color: rgba(128, 128, 128, 0.539);
            transform: rotate(0.25turn);
        }
    }
    .list-header{
        margin-top: 10px;
        width: 100%;
        @include center-space;

        .header-item{
            @include center;
            font-size: 16px;
            color: rgba(47, 53, 85, 0.288);
            font-weight: 600;
            flex:1;
        }
        .active{
            color: rgb(47, 53, 85);
            position: relative;

            &::before{
                content: '';
                position: absolute;
                width: 14px;
                height: 3.5px;
                border-radius: 5px;
                background-color: rgb(241, 33, 33);
                bottom: -6px;
                left: 62px;
                z-index: 1;
            }
        }
    }
    .list-kinds{
        display: flex;
        justify-content: space-between;
        width: 92%;
        .kinds-text{
            display: flex;
        }
        .list-kind{
            display: flex;
            align-items: center;
            @include flex-space(20px);
            color: rgba(77, 76, 76, 0.393);
            div{
                font-size: 14px;
                font-weight: 600;
            }
            p{
                margin-bottom: 22px;
                margin-left: 1px;
                font-size: 10px;
            }
        }
        .kindActive{
            color: rgb(47, 53, 85);
        }
    }
    .oprt-btns{
        margin-top: 10px;
        @include flex-v-center;
        justify-content: space-between;
        width: 100%;
        .btn-item,.btn-item-grid{
            @include center;
            @include flex-space(10px);
            height: 35px;
            width: 75px;
            border-radius: 10%;
            background: rgba(138, 138, 138, 0.308);
            p{
                color: rgb(193, 187, 187);
                margin-left: 4px;
                margin-top: 15px;
                font-size: 12px;
                white-space: nowrap;
            }
        }
        .btn-item-grid{
            height: 35px;
            width: 35px;
        }
    
    }

    .info-con{
        margin-top: 50px;
        color: white;
        @include center;
        .avatar-con{
            @include center;
            img{
                @include circleImg(68px);
            }
        }
        .user-name{
            @include center;
            font-size: 18px;
            margin-top: 20px;
        }
        .user-desc,.user-honor{
            @include center;
            font-size: 12px;
            color: rgb(193, 187, 187);
            margin-top: 5px;
        }
        .user-honor{
            @include center;
        }
        .attr-items{
            @include center;
            margin-top: 5px
        }
        .attr-item{
            @include flex-v-center;
            @include flex-space(10px);

            .attr-value,p{
                font-size: 14px;
            }
            p{
                color: rgb(193, 187, 187);
                margin-left: 2px;
            }
        }
    }
    
    .menu-btn{
        img{
            width: 25px;
            height: 30px;
        }
    }
    .list-foot{
        width: 100%;
        height: 10px;
        background-color: white;
    }
    .main{
        overflow-x: hidden;
        @include flex-v-center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        z-index: 10;
    }
    .music-list-con{
        width: 100%;
        height: 500px;
        border-radius: 15px;
        @include flex-v-center;
        flex-direction: column; 
        background-color: white;
        
        .music-list{
            margin-top: 3px;
            width: 92%;
            height: 100%;
            
        }
        
    }
    
    .page-bgc{
        @include bgImg('http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg');
        height: 400px;
        top: 0;
        left: 0;
    }
    
    
    .page-info-con{
        width: 100%;
        height: 350px;
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
                color: rgba(205, 193, 193, 0.963);
                font-size: 12px;
            }
        }
    }
    

    
</style>
