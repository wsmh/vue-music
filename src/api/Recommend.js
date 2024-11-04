import httpInstance from "@/utils/http";

export function getLikeMusicAPI() {
    return httpInstance({
        url: '/personalized/newsong'
    })
}