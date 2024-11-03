import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'


// 创建axios实例(可多次执行以生成baseURL不同的实例)
const httpInstance = axios.create({
    baseURL: 'http://localhost:3000',   //前面要加上http
    timeout: 30000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config;
},
    e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data,
    e => {
        Promise.reject(e)
    })




export default httpInstance;