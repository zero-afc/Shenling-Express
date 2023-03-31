<template>
  <view class="NavigationBar">
    <view class="nav-box">
      <view class="nav-item" v-for="(item, index) in navData" :key="item.name">
        <navigator :url="`${item.url}?query=${index}`">
          <view :class="{'active-class': currentIndex === index}">{{item.name}}</view>
        </navigator>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref, watchEffect } from 'vue'
  import { onLoad } from "@dcloudio/uni-app";
  const props = defineProps<{
    navData : Array<{ name : string, url : "string" }>
  }>()
  const currentIndex = ref(0)
  onLoad((option) => {
    if(option!.query) currentIndex.value = option!.query
  })
</script>

<style lang="scss" scoped>
  view {
    box-sizing: border-box;
  }

  // 解决固定定位所带来的影响
  .NavigationBar {
    width: 100%;
    height: 50px;
  }

  .nav-box {
    position: fixed;
    top: 0px;
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    overflow-x: auto;
    z-index: 999;
    background-color: #ffffff;

    &::-webkit-scrollbar {
      height: 0;
    }

    .nav-item {
      padding: 0 20px;
      color: #818181;
      font-size: 14px;
      font-weight: 600;
      font-family: "黑体";

      .active-class {
        position: relative;
        display: flex;
        justify-content: center;
        color: #000000;

        &::after {
          content: "";
          position: absolute;
          bottom: -9px;
          height: 4px;
          width: 23px;
          background-image: linear-gradient(210deg, #F25C4D 25%, #E52D21 100%, #E52D21 100%);
          border-radius: 2px;
        }
      }
    }
  }
</style>