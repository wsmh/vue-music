<script setup>
import CommentItem from './CommentItem.vue';
import { SortOne,ThumbsUp } from '@icon-park/vue-next';
import {  ref } from 'vue';
import { useScroll } from '@vueuse/core';
import { commentSongAPI } from '@/api/userOper';
import { ElMessage } from 'element-plus';
import { useFloorStore } from '@/stores/floorStore';

const floorStore = useFloorStore()
const boxRef = ref(null)
const { y } = useScroll(boxRef)
const commentContent = ref('')

async function comment() {
    
    if(commentContent.value != ''){
        //发送评论逻辑
        const res = await commentSongAPI(id,commentContent.value)
        commentContent.value = '';
    }else{
        ElMessage({
                message: '输入的内容为空!',
                type: 'warning',
                plain: true,
                }) 
    }
}

</script>

<template>
    <div class="page-con">
        <div class="header">
            <div class="header-main">
                <div class="title">
                    回复({{ floorStore.floorData.totalCount }})
                </div>
            </div>
        </div>
        <div class="comments-header-main-top" v-show="y >= 10">
            <div class="comments-header">
                <div class="comment-count">
                    <div class="count-text">全部回复</div>
                    <div class="count-num">{{floorStore.floorData.totalCount}}</div>
                </div>
                <div class="comment-sorted">
                    <sort-one theme="outline" size="30" fill="#333" :strokeWidth="3"/>
                </div>
            </div>
        </div>
        <div class="parent-con">
            <div class="parent-info">
                <div class="parent-avatar">
                    <img :src="floorStore.floorData.ownerComment.user.avatarUrl">
                </div>
                <div class="parent-text">
                    <div class="parent-name">{{floorStore.floorData.ownerComment.user.nickname}}</div>
                    <div class="parent-loca">
                        {{floorStore.floorData.ownerComment.timeStr}} {{floorStore.floorData.ownerComment.ipLocation.location}}
                    </div>
                </div>
            </div>
            <div class="parent-content">
                {{floorStore.floorData.ownerComment.content}}
            </div>
        </div>
        <div class="split-line"></div>
        <div class="comments-con" ref="boxRef">
            <div class="comments-header-main">
                <div class="comments-header">
                    <div class="comment-count">
                        <div class="count-text">全部回复</div>
                        <div class="count-num">{{floorStore.floorData.totalCount}}</div>
                    </div>
                    <div class="comment-sorted">
                        <sort-one theme="outline" size="20" fill="#333" :strokeWidth="3"/>
                    </div>
                </div>
            </div>

            <div class="item-list">
                <div class="comment-item" v-for="item in floorStore.floorData.comments" :key="item.commentId">
                    <CommentItem :comment-info="item" />
                </div>
            </div>
        </div>
        <div class="input-bgc">
            <div class="input-con">
                <input type="text" placeholder="去蹦, 去野, 不枉为少年!" v-model="commentContent">
            </div>
            <div class="send-con" @touchstart="comment">
                <div class="like-icon">
                    <thumbs-up theme="outline" size="28" fill="rgb(70, 73, 73)" :strokeWidth="3"/>
                </div>
                <div class="count-num">{{floorStore.floorData.ownerComment.likedCount}}</div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.input-bgc {
    position: absolute;
    left: 4%;
    width: 92%;
    height: 60px;
    bottom: 0;
    background-color: white;
    @include center-space;

    .input-con {
        background-color: rgba(223, 222, 222, 0.361);
        width: 80%;
        height: 40px;
        border-radius: 50px;
        @include center;

        input {
            width: 95%;
            height: 25px;
            border: none;
            background-color: rgba(0, 0, 0, 0);
            text-indent: 0.5em;

            &::placeholder {
                color: rgb(193, 191, 191);
            }

            &:focus {
                outline: none;
            }
        }
    }

    .send-con {
        @include flex-v-center;
        
        .count-num{
            font-size: 12px;
            color: rgb(44, 43, 43);
            margin-left: 5px;
        }
    }
}

.comments-header-main-top {
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    height: 40px;
    @include center;
    background-color: white;

    .comments-header {
        @include center-space;
        width: 92%;

        .comment-count {
            display: flex;
            align-items:baseline;
            .count-text{
                font-size: 14px;
                font-weight: 600;
                color: rgb(65, 65, 66);
            }
            .count-num{
                margin-left: 3px;
                font-size: 11px;
                color: rgb(157, 156, 156);
            }
        }

        .comment-sorted {
           @include center;
        }

    }
}

.split-line {
    background-color: rgba(242, 242, 238, 0.422);
    width: 100%;
    height: 8px;
    margin-top: 10px;
}

.page-con {
    width: 100%;
    overflow-y: scroll;
    @include center;
    flex-direction: column;
    background-color: white;
}

.header {
    @include center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    background-color: white;

    .header-main {
        @include center-space;
        justify-content: center;
        width: 92%;
        position: absolute;

        .back-arrow {
            font-size: 28px;
            color: rgb(19, 19, 19)
        }

        .title {
            font-weight: 600;
            font-size: 17px;
            color: rgb(69, 67, 67);
        }

        .func-con {
            @include flex-v-center;
            margin-right: -10px;

            .func-item {
                @include flex-space(14px);
            }
        }
    }

}

.parent-con{
    @include flex-v-center;
    flex-direction: column;
    width: 92%;
    margin-top: 50px;
    flex-shrink: 0;
    .parent-info{
        width: 100%;
        @include flex-v-center;
        .parent-avatar{
            img{
               @include circleImg(36px); 
            }
        }
        .parent-text{
            margin-left: 10px;
            .parent-name{
                font-size: 14px;
                font-weight: 600;
                color: rgb(67, 69, 74);
            }
            .parent-loca{
                margin-top: 3px;
                font-size: 10px;
                color: rgb(150, 148, 148);
            }
        }
    }

    .parent-content{
        width: 100%;
        margin-top: 10px;
        font-size: 14px;
        color: rgb(51, 52, 53);
    }
}
    


.comments-con {
    @include flex-v-center;
    flex-direction: column;
    width: 92%;
    overflow: auto;
    .comments-header-main {
        width: 100%;
        flex-direction: column;
        @include flex-v-center;
        background-color: white;
    }

    .comments-header {
        margin-top: 10px;
        @include center-space;
        width: 100%;

        .comment-count {
            display: flex;
            align-items:baseline;
            .count-text{
                font-size: 14px;
                font-weight: 600;
                color: rgb(65, 65, 66);
            }
            .count-num{
                margin-left: 3px;
                font-size: 11px;
                color: rgb(157, 156, 156);
            }
        }

        .comment-sorted {
           @include center;
        }

    }

    .item-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 20px;
        margin-bottom: 50px;
    }
}
</style>
