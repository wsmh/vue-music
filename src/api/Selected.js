import httpInstance from "@/utils/http";

export function getBannerAPI() {
    return httpInstance({
        url: '/banner',
        params: {
            type: 2
        }
    })
}