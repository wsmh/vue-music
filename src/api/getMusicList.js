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