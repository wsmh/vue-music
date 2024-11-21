<script setup>
  import { ThumbsUp } from '@icon-park/vue-next';
  import { defineProps,ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFloorStore } from '@/stores/floorStore';

  const props = defineProps({
    commentInfo:{
        type:Object
    }
  })
  const floorStore = useFloorStore();
  const route = useRoute()
  const id = route.params.id;
  
  function showCommentFloor(){
    floorStore.setParentId(props.commentInfo.commentId);
    floorStore.setSongId(id);
    floorStore.getCommentFloorData();
    floorStore.showFloor();
  }
</script>

<template>
    <div class="item-con">
        <div class="avatar-con">
            <img :src="props.commentInfo.user.avatarUrl">
        </div>
        <div class="comment-main">
            <div class="user-info">
                <div class="info-con">
                    <div class="user-name">
                        {{ props.commentInfo.user.nickname }}
                    </div>
                    <div class="comment-info">
                        {{props.commentInfo.timeStr}} {{ props.commentInfo.ipLocation.location }}
                    </div>
                </div>
                <div class="like-count">
                    <div class="count-num">{{props.commentInfo.likedCount}}</div>
                    <div class="like-icon">
                        <thumbs-up theme="outline" size="18" fill="rgb(150, 148, 148)" :strokeWidth="3"/>
                    </div>
                </div>
            </div>
            <div class="comment-content">
                {{ props.commentInfo.content }}
            </div>
            <div class="layyer-detail" v-if="props.commentInfo.showFloorComment != null && props.commentInfo.showFloorComment.replyCount != 0" @touchstart="showCommentFloor">
                {{props.commentInfo.showFloorComment.replyCount}}条回复 >
            </div>
            <el-divider border-style="dotted" class="split-line"/>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
.split-line{
    margin-top: 12px;
    margin-bottom: 10px;
}
.item-con{
    display: flex;
    flex-direction: row;
    .avatar-con{
        img{
            @include circleImg(36px);
        }
    }
    .comment-main{
        width: 100%;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .user-info{
            @include center-space;
            .info-con{
                display: flex;
                flex-direction: column;
                .user-name{
                    font-size: 14px;
                    font-weight: 600;
                    color: rgb(67, 69, 74);
                }
                .comment-info{
                    margin-top: 3px;
                    font-size: 10px;
                    color: rgb(150, 148, 148);
                }
            }
            .like-count{
                @include flex-v-center;
                .count-num{
                    font-size: 12px;
                    color: rgb(150, 148, 148);
                }
                .like-icon{
                    margin-left: 3px;
                }
            }
            
        }
        .comment-content{
            margin-top: 10px;
            font-size: 14px;
            color: rgb(51, 52, 53);
        }
        .layyer-detail{
            margin-top: 10px;
            font-size: 11px;
            color: rgb(49, 113, 161);
        }
    }
}
    
        

</style>
