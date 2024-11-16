import httpInstance from "@/utils/http";

export function getMusicDetail(id) {
    return httpInstance({
        url: '/song/music/detail',
        params: {
            id
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