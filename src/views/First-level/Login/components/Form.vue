<script setup>
import { ref } from 'vue';
import { sendCapAPI,checkCapAPI } from '@/api/Login';
import { useUserStore } from '@/stores/userStore';
import { ElMessage } from 'element-plus';

    const userStore = useUserStore();
    const inTimeout = ref(false)
    const time = ref(60);
    const telepn = ref('')
    const capInput = ref('')
    const firPh = ref('+86')
    const capBtn = ref(null)
    const isAccept = ref (true)
    const btnText = ref('发送验证码')
    const options = ref([
        '+86','+69','+22'
    ])


    async function getCaptcha(){
        
        if(telepn.value === ''){
                ElMessage({
                message: '手机号尚为空',
                type: 'warning',
                plain: true,
                })
                return;    
            }else if(telepn.value.length != 11){
                ElMessage({
                message: '手机号有误',
                type: 'warning',
                plain: true,
                })  
                return; 
            }
            await sendCapAPI(telepn.value);
            inTimeout.value = true;
            start(60);
            ElMessage({
                message: '发送验证码成功!',
                type: 'success',
                plain: true,
                })  
    }

    function start(t) {
        time.value = t;
        let timer = setInterval(() => {
            time.value--;
            btnText.value = `${time.value}s后重新发送`;
            if (time.value === 0) {
                inTimeout.value = false;
                btnText.value = `发送验证码`;
                clearInterval(timer);
            }
        }, 1000);
    }

    async function login(){
        if(telepn.value === '' || capInput.value === '' || isAccept === false){
            if(telepn.value === ''){
                ElMessage({
                message: '手机号尚为空',
                type: 'warning',
                plain: true,
                })    
            }else if(telepn.value.length != 11){
                ElMessage({
                message: '手机号有误',
                type: 'warning',
                plain: true,
                })    
            }else if(capInput.value === ''){
                ElMessage({
                message: '验证码尚为空',
                type: 'warning',
                plain: true,
                })    
            }else if(isAccept === false){
                ElMessage({
                message: '请阅读并勾选相关条款',
                type: 'warning',
                plain: true,
                })    
            }
            return;
        }
        const res = await checkCapAPI(telepn.value,capInput.value);
        if(res){
            ElMessage({
                message: '登录成功!',
                type: 'success',
                plain: true,
                })  
            await userStore.login(telepn.value,capInput.value);
        }
        else{
            ElMessage({
                message: '验证码有误',
                type: 'warning',
                plain: true,
                })    
                return;
        }
    }
</script>

<template>
    <div class="form-con">
        <div class="ph-input">
            <select v-model="firPh" data-tap-disabled="true">
                <option v-for="item in options" :key="item" :value="item">{{item}}</option>
            </select>
            <span class="split"> | </span>
            <button class="captcha-btn" @click="getCaptcha" :disabled="inTimeout" ref="capBtn">{{btnText}}</button>
            <input type="text" v-model="telepn" placeholder="请输入手机号" class="input-text">
        </div>

        <div class="ph-input-captcha">
            <input type="text" v-model="capInput" placeholder="请输入验证码" class="input-text">
        </div>

        <el-button @click="login" type="primary" round class="login-btn">一键登录
            <div class="btn-ps">
                推荐
            </div>
        </el-button>

        <div class="check-con">
            <input type="checkbox" class="check-box" v-model="isAccept">
        <div class="check-text-1">我已阅读并同意
            <a href="#">《服务条款》 , </a>
            <a href="#">《隐私政策》</a>
        </div>
        </div>
        
        <div class="check-text-2">
            <a href="#">《天翼账号服务协议》</a>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .form-con{
        @include center;
        flex-direction: column;
        .check-box{
            display: inline;
            vertical-align:middle;
            margin-right: 5px;
        }
        .check-text-1{
            display: inline;
        }
        .check-text-1,.check-text-2{
            color: $info-color;
            font-size: 12px;
            a{
                color: rgb(26, 93, 181);
            }
        }
        .ph-input{
            height: 50px;
            position: relative;
            width: 290px;
            border-radius: 10px;
            background-color: rgba(185, 185, 185, 0.226);
            .input-text{
              font-weight: 700;
              text-indent: 5px;
              color: black;
              font-size: 16px;
                
            }

            .captcha-btn{
                @include center;
                font-size: 11px;
                white-space: nowrap;
                position: absolute;
                top: 13px;
                right: 10px;
                width: 80px;
                height: 25px;
                border-radius: 15px;
                color: white;
                background-color: rgba(3, 3, 3, 0.324);

                &:disabled{
                    background-color: rgba(3, 3, 3, 0.146);
                }
                }
            input:focus{
                outline: none;
            }
            select:focus{
                outline: none
            }
            select,input,.split{
                @include transp;
                height: 100%;
                padding: 0;
            }
            select{
                padding-left: 4px;
                font-size: 17px;
                font-weight: 600;
                color: gray;
                width: 19%;
            }
            .split{
                background-color: rgba(0,0,0,0);
                color: rgba(145, 144, 144, 0.201);
            }
        }
        .ph-input-captcha{
            margin-left: -160px;
            height: 50px;
            margin-top: 10px;
            position: relative;
            width: 130px;
            border-radius: 10px;
            background-color: rgba(185, 185, 185, 0.226);
            .input-text{
              font-weight: 700;
              text-indent: 5px;
              color: black;
              font-size: 14px;
              @include transp;
              height: 100%;
              padding: 0;
              text-indent: 1em;
            }
            input:focus{
                outline: none;
            }
        }
        .login-btn{
            margin-top: 15px;
            width: 290px;
            height: 40px;
            margin-bottom: 5px;
        }
        .btn-ps{
            position: relative;
            right: -6px;
            font-size: 8px;
            align-items: center;
            background-color: rgba(192, 192, 192, 0.411);
            padding: 2px;
            border-radius: 10px;
        }
    }
</style>
