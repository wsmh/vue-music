import httpInstance from "@/utils/http";

export function sendCapAPI(phone) {
    return httpInstance({
        url: '/captcha/sent',
        params: {
            phone
        }
    })
}

export function checkCapAPI(phone, captcha) {
    return httpInstance({
        url: '/captcha/verify',
        params: {
            phone,
            captcha
        }
    })
}

export function loginAPI(phone, captcha) {
    return httpInstance({
        url: '/login/cellphone',
        params: {
            phone,
            captcha
        }
    })
}