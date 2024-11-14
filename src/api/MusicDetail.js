import httpInstance from "@/utils/http";

export function getMusicDetail(id) {
    return httpInstance({
        url: '/song/music/detail',
        params: {
            id
        }
    })
}