import httpInstance from "@/utils/http";

export function getMusicDetail(id) {
    return httpInstance({
        url: '/song/music/detail',
        params: {
            id
        }
    })
}

export function getMusicInfo(ids) {
    return httpInstance({
        url: '/song/detail',
        params: {
            ids
        }
    })
}

export function getMusicUrl(id) {
    return httpInstance({
        url: '/song/url/v1',
        params: {
            id,
            level: 'standard'
        }
    })
}

export function getMusicCommentAPI(id, limit, offset) {
    return httpInstance({
        url: '/comment/music',
        params: {
            id,
            limit,
            offset
        }
    })
}

//歌曲楼层评论
export function getCommentFloorAPI(parentCommentId, id) {
    return httpInstance({
        url: '/comment/floor',
        params: {
            parentCommentId,
            id,
            type: 0,
        }
    })
}