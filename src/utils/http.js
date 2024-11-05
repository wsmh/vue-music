import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/userStore";
import router from "@/router";

// 创建axios实例(可多次执行以生成baseURL不同的实例)
const httpInstance = axios.create({
    baseURL: 'http://localhost:3000',   //前面要加上http
    timeout: 30000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = useUserStore();
    // const token = userStore.userData.token
    // if (token) {
    //     config.headers.Authorization = token;
    // }
    return config;
},
    e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data,
    e => {
        Promise.reject(e)
    })




export default httpInstance;