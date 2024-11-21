import httpInstance from "@/utils/http";

export function subscribeListAPI(t, id) {
    return httpInstance({
        url: '/playlist/subscribe',
        params: {
            t,
            id
        }
    })
}

//发送歌单评论
export function commentListAPI(id, content) {
    return httpInstance({
        url: '/comment',
        params: {
            t: 1,
            type: 2,
            id,
            content
        }
    })
}

//发送歌曲评论
export function commentSongAPI(id, content) {
    return httpInstance({
        url: '/comment',
        params: {
            t: 1,
            type: 0,
            id,
            content
        }
    })
}

//回复歌曲评论
export function replySongCommentAPI(threadId, content) {
    return httpInstance({
        url: '/comment',
        params: {
            t: 2,
            type: 0,
            threadId,
            content
        }
    })
}