<script setup>
import { ref } from 'vue';
    const telepn = ref('')
    const firPh = ref('+86')
    const options = ref([
        '+86','+69','+22'
    ])
</script>

<template>
    <div class="form-con">
        <div class="ph-input">
            <select v-model="firPh" data-tap-disabled="true">
                <option v-for="item in options" :key="item" :value="item">{{item}}</option>
            </select>
            <span class="split"> | </span>
            <input type="text" v-model="telepn" placeholder="请输入手机号">
        </div>
        

        <el-button type="primary" round class="login-btn">一键登录
            <div class="btn-ps">
                推荐
            </div>
        </el-button>

        <div class="check-con">
            <input type="checkbox" class="check-box">
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
            width: 290px;
            border-radius: 10px;
            background-color: rgba(185, 185, 185, 0.226);
            input{
              font-weight: 700;
              text-indent: 5px;
              color: black;
              font-size: 16px;
            }
            input:focus{
                outline: none
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
