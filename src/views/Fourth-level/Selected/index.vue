<script setup>
import { register } from 'swiper/element/bundle'
register() // 注册 swiper 组件,如果安装方法使用的是 cdn,则不需要这一步,也不需要上方的引入
const swiperOptions = {
  autoplay: {
    delay: 3000,
    enabled: true
  }
}
</script>

<template>
  <main>
    <swiper-container
      class="swiper-container"
      navigation="false"
      ref="mainSwiper"
      pagination="false"
      loop="true"
      :autoplay="swiperOptions.autoplay"
    >
      <swiper-slide v-pre>Slide 1</swiper-slide>
      <swiper-slide v-pre>Slide 2</swiper-slide>
      <swiper-slide v-pre>Slide 3</swiper-slide>
    </swiper-container>
  </main>
</template>
    
<style scoped>
    .swiper-container{
        margin-top: 5px;
        height: 200px;
    }
</style>
