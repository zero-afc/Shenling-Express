<template>
  <view class="content">
    <view class="uni-margin-wrap">
      <swiper
        class="swiper"
        circular
        indicator-dots
        autoplay
        interval="2000"
        duration="500">
        <swiper-item>
          <view class="swiper-item uni-bg-red">A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">C</view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  let background = reactive<any>([])
  // uni.request({
  //   url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
  // }).then(res=>{
  //   console.log(res);
  // })
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .uni-margin-wrap {
    width: 690rpx;
    width: 100%;
  }
  .swiper {
    height: 300rpx;
  }
  .swiper-item {
    display: block;
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
  }
</style>
