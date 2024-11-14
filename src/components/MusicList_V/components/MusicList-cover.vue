<script setup>
    import { defineProps, onMounted,ref } from 'vue';
    import { numTrans } from '@/utils/dataHandle';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const props = defineProps({
        musicData:{
            type:Object
        },
        size:{
            type:String
        }
    })

    const imgSize = {
        normal:{
            width: '108px',
            height: '108px',
            borderRadius: '6px',
        }
    }

    const thisSize = ref({});
    onMounted(()=>{
        thisSize.value = imgSize[props.size];
        
    })

   function toDetailPage(){
        router.push({
            path:'/musiclist',
            query:{
                id:props.musicData.id
            }
        })
    }
</script>

<template>
    <div class="con" :style="{width: thisSize.width}" @click="toDetailPage">
        <div class="cover-con" :style="thisSize">
            <div class="listen-count">
                <el-icon class="headset-con"><Headset /></el-icon>
                <p>{{numTrans(props.musicData.playCount)}}</p>
            </div>
            <img :src="props.musicData.coverImgUrl" :style="thisSize">
            <div class="play-icon">
                <img src="../../png/play.png">
            </div>
          </div>
          <div class="desc">{{props.musicData.name}}</div>
    </div>
  
</template>

<style scoped lang="scss">
    
    .con{
        display: flex;
        flex-direction: column;
    }
    .cover-con{
        position: relative;
        img{
            height: 100%;
        }
        .play-icon{
            position: absolute;
            img{
                width: 18px;
            }
            right: 6px;
            bottom: 6px;
        }

        .listen-count{
            position: absolute;
            display: flex;
            align-items: center;
            left: 5px;
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
        }
        
    }
    .desc{
        width: 100%;
        height: 36px;
        color: rgb(59, 57, 57);
        font-size: 13px;
        overflow: hidden;
        margin-top: 5px;
        text-overflow: ellipsis;
        display: -webkit-box;        /* 使用WebKit的盒模型 */  
        -webkit-box-orient: vertical; /* 设置为垂直方向 */  
        -webkit-line-clamp: 2;       /* 限制显示的行数为2 */   
    }
</style>
