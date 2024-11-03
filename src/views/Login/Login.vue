<script setup>
import Form from './components/Form.vue';
</script>

<template>
    <div class="bgc-con">
        <div class="guest-login">Guest</div>
    </div>
    <div class="logo">
        <img src="@/components/logo.png">
    </div>
    <div class="text">天 翼 账 号 提 供 认 证 服 务</div>
    <Form />
    <div class="more">
        <div class="more-text">登录遇到问题 </div>
        <div class="split"> | </div>
        <div class="more-text"> 其他登录方式></div>
    </div>
</template>

<style scoped lang="scss">

.more{
    @include center;
    margin-top: 50px;
    .more-text{
        color: $info-color;
        font-size: 12px;
    }
    .split{
        color: rgba(0,0,0,0.1);
        font-size: 12px;
        margin: 0 6px 0 6px;
    }
}

.bgc-con{
    z-index: -1;
    position: absolute;
    height: 60%;
    width: 100%;
    background-size: cover;
    background: linear-gradient(rgba(253, 213, 213, 0.514),rgba(253, 253, 253, 0.4));
    @include center;

    .guest-login{
        position: absolute;
        z-index: 1;
        color: $info-color;
        font-size: 13px;
        top: 30px;
        right: 20px;
    }
}
.logo{
    height: 400px;
    @include center;
    img{
        @include circleImg(56px)
    }
}

.text{
    text-align: center;
    font-size: 8px;
    color: rgba(155, 155, 155, 0.822);
    margin-bottom: 15px;
}
</style>
