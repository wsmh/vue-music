import httpInstance from "@/utils/http";

export function getTopMusicAPI(limit) {
    return httpInstance({
        url: '/top/playlist/highquality',
        params: {
            limit
        }
    })
}

export function getNewMusicAPI(limit) {
    return httpInstance({
        url: '/top/playlist',
        params: {
            limit
        }
    })
}

//获取歌单基本信息
export function getListInfoAPI(id) {
    return httpInstance({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}


//获取歌单所有歌曲
export function getListDetailAPI(id, limit, offset) {
    return httpInstance({
        url: '/playlist/track/all',
        params: {
            id,
            limit,
            offset
        }
    })
}