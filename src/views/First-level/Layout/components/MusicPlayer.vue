<script setup>
  

</script>

<template>
    <div class="vt-con">
        <div class="main-con">
            <div class='cd-con'>
                <div class="cd-bgc">
                    <img src="@/components/png/avatar.jpg">
                </div>
                <div class="song-name">Tek It </div>
                <div class="song-creator">- Cafune</div>
            </div>
            <div class="oper-con">
                <div class="stop-con">
                    <div class="circle">
                        <img src="@/components/png/stop.png">
                    </div>
                </div>
                <div class="fold-con">
                    <el-icon :size="24" style="color: rgb(70,70,70);"><Fold /></el-icon>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
    .main-con{
        width: 92%;
        @include center-space;
    }
    .vt-con{
        width: 100%;
        background-color: white;
        height: 42px;
        @include center;
    }
    .song-name{
        margin-left: 10px;
        font-size: 15px;
        color: rgb(75,74,80)
    }
    .song-creator{
        margin-left: 7px;
        font-size: 15px;
        color: rgb(140,140,140);
    }
    .stop-con{
        height: 24px;
        width: 24px;
        margin-right: 15px;
        position: relative;
        .circle{
            @include center;
            position: absolute;
            border: 2px solid rgb(100,100,100);
            height: 20px;
            width: 20px;
            border-radius: 50%;
        }
        
        img{
            height: 9px;
            width: 7px;
        }
        
    }
    .cd-con{
        @include center;

        .cd-bgc{
            background-color: rgba(10,10,10);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            @include center;
            img{
                @include circleImg(24px);
            }
        }
        
        
    }
    .oper-con{
        @include center;
        .fold-con{
            @include center;
        }
    }
</style>
