<script setup>
import CommentItem from './components/CommentItem.vue';
import { getMusicCommentAPI, getMusicInfo } from '@/api/MusicDetail';
import { MoreOne, Viewfinder } from '@icon-park/vue-next';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useSongStore } from '@/stores/songStore';
import { getArtistsName } from '@/utils/dataHandle';
import { useScroll } from '@vueuse/core'


const route = useRoute();
const songStore = useSongStore()
const router = useRouter();
const { y } = useScroll(window)

songStore.showCommentsPage();
const id = route.params.id;
const commentsList = ref([])
const commentsCount = ref(0)
const songInfo = ref({});
const artistsName = ref('')
const disable = ref(false);
let offset = 0

onMounted(() => {
    initPage();
})


async function initPage() {
    const songRes = await getMusicInfo(id)
    songInfo.value = songRes.songs[0];
    artistsName.value = getArtistsName(songInfo.value.ar, songInfo.value.al)
    const res = await getMusicCommentAPI(id, 0, offset);
    commentsList.value = res.hotComments;
    commentsCount.value = res.total;
}

async function getMoreComments() {
    const res = await getMusicCommentAPI(id, 10, offset);
    offset += 10;
    if (offset === 40) {
        disable.value = true;
        return
    }
    commentsList.value = [...commentsList.value, ...res.comments]
}

function backPage() {
    songStore.hiddenCommentsPage();
    router.go(-1);
}

</script>

<template>
    <div class="page-con">
        <div class="header">
            <div class="header-main">
                <div class="back-arrow" @click="backPage">
                    <el-icon>
                        <Back />
                    </el-icon>
                </div>
                <div class="title">
                    评论
                </div>
                <div class="func-con">
                    <viewfinder class="func-item" theme="outline" size="30" fill="#333" :strokeWidth="3" />
                    <more-one class="func-item" theme="outline" size="30" fill="#333" :strokeWidth="1" />
                </div>
            </div>
        </div>
        <div class="comments-header-main-top" v-show="y >= 66">
            <div class="comments-header">
                <div class="comment-count">
                    评论({{ commentsCount }})
                </div>
                <div class="comment-sorted">
                    <div class="sorted-item sorted-active">推荐</div>
                    <div class="sorted-item">Hottest</div>
                    <div class="sorted-item">Latest</div>
                </div>
            </div>
        </div>
        <div class="cd-info">
            <div class="cd-cover">
                <img :src="songInfo.al?.picUrl">
            </div>
            <div class="cd-name">
                {{ songInfo.name }}
            </div>
            <div class="cd-creator">
                - {{ artistsName }}
            </div>
        </div>
        <div class="split-line"></div>
        <div class="comments-con">
            <div class="comments-header-main">
                <div class="comments-header">
                    <div class="comment-count">
                        评论({{ commentsCount }})
                    </div>
                    <div class="comment-sorted">
                        <div class="sorted-item sorted-active">推荐</div>
                        <div class="sorted-item">Hottest</div>
                        <div class="sorted-item">Latest</div>
                    </div>
                </div>
            </div>

            <div class="item-list" v-if="commentsList.length != 0" v-infinite-scroll="getMoreComments"
                :infinite-scroll-disabled="disable">
                <div class="comment-item" v-for="item in commentsList" :key="item.commentId">
                    <CommentItem :comment-info="item" />
                </div>
            </div>
        </div>
        <div class="input-bgc">
            <div class="input-con">
                <input type="text" placeholder="去蹦, 去野, 不枉为少年!">
            </div>
            <div class="send-con">
                发送
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.input-bgc {
    position: fixed;
    left: 4%;
    width: 92%;
    height: 60px;
    bottom: 0;
    background-color: white;
    @include center-space;

    .input-con {
        background-color: rgba(223, 222, 222, 0.361);
        width: 90%;
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
        font-size: 12px;
        color: rgb(203, 203, 203);
    }
}

.comments-header-main-top {
    position: fixed;
    left: 0;
    top: 50px;
    width: 100%;
    height: 40px;
    @include center;
    background-color: white;

    .comments-header {
        @include center-space;
        width: 92%;

        .comment-count {
            font-size: 14px;
            font-weight: 600;
            color: rgb(65, 65, 66);
        }

        .comment-sorted {
            @include flex-v-center;

            .sorted-item {
                @include flex-space(10px);
                font-size: 13px;
                color: rgb(150, 144, 144);
            }

            .sorted-active {
                color: rgb(70, 70, 71);
                font-weight: 600;
            }
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
    margin-top: 15px;
    width: 100%;
    @include center;
    flex-direction: column;
    overflow: hidden;
}

.header {
    @include center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    background-color: white;

    .header-main {
        @include center-space;
        width: 92%;
        position: fixed;

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

.cd-info {
    margin-top: 42px;
    @include flex-v-center;
    width: 92%;

    .cd-cover {
        background-color: black;
        width: 42px;
        height: 42px;
        @include center;
        border-radius: 50%;
        flex-shrink: 0;

        img {
            @include circleImg(28px);
        }
    }

    .cd-name {
        margin-left: 8px;
        font-size: 14px;
        @include text-eli;
    }

    .cd-creator {
        margin-left: 0.5em;
        font-size: 12px;
        color: rgb(109, 106, 106);
        @include text-eli;
    }
}

.comments-con {
    @include flex-v-center;
    flex-direction: column;
    width: 92%;
    overflow: hidden;

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
            font-size: 14px;
            font-weight: 600;
            color: rgb(65, 65, 66);
        }

        .comment-sorted {
            @include flex-v-center;

            .sorted-item {
                @include flex-space(10px);
                font-size: 13px;
                color: rgb(150, 144, 144);
            }

            .sorted-active {
                color: rgb(70, 70, 71);
                font-weight: 600;
            }
        }

    }

    .item-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: auto;
        height: 100%;
        margin-top: 20px;
    }
}
</style>
