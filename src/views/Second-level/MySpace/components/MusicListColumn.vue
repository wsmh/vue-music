<script setup>
    import { defineProps } from 'vue';
    
    // const props = defineProps({
    //     listInfo:{
    //       type:Object
    //     }
    // })

    
    
</script>

<template>
    <div class="music-item-con">
        <img src="http://p1.music.126.net/QcPJfzds8ejF1FPgBaXMTw==/109951163128461676.jpg" class="cover">
        <div class="song-info">
            <div class="song-name">
                我喜欢的音乐
            </div>
            <div class="song-desc">
               277首 · 5248次播放
            </div>
        </div>
        <div class="love-mode">
          <img src="@/components/png/love_icon.png">
          <p>心动模式</p>
        </div>
    </div>
  
</template>

<style scoped lang="scss">

    .music-item-con{
        display: flex;
        align-items: center;
        .cover{
            height: 54px;
            width: 54px;
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
        .love-mode{
          @include center;
          background-color: rgba(236, 236, 236, 0.79);
          height: 25px;
          width: 90px;
          border-radius: 40px;
          img{
            width: 14px;
          }
          p{
            margin-left: 2px;
            font-weight: 600;
            white-space: nowrap;
            color: rgb(47, 53, 85);
            font-size: 11px;
          }
        }

    }
</style>
