<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { NavData } from './interface';

  // 【navData】>>> name：标题名、component：组件、cache：是否需要被缓存
  // 【layout】 >>> 影响着justify-content属性值，默认 `start`
  const props = withDefaults(defineProps<{
    navData : NavData[],
    layout ?: "start" | "around" | "",
    fixed ?: "fixed" | "relative" | ""
  }>(), { layout: "start", fixed: "relative" })

  // 需要被缓存的组件
  const cacheList = computed(() => {
    const list = props.navData.filter(item => item.cache)
    return list.map(item => item.component["__name"])
  })

  const currentIndex = ref(0)
  const position = computed(() => {
    return props.fixed !== "relative" ? "fixed" : "relative"
  })
</script>

<template>
  <view class="NavigationBar">
    <view class="fixed-panel nav-box" :class="{around: layout !== 'start'}">
      <view class="nav-item" v-for="(item, index) in navData" :key="item.name">
        <view :class="{'active-class': currentIndex === index}" @click="currentIndex = index">{{item.name}}</view>
      </view>
    </view>
  </view>
  <KeepAlive :include="cacheList">
    <component :is="navData[currentIndex].component" />
  </KeepAlive>
</template>

<style lang="scss" scoped>
  view {
    box-sizing: border-box;
  }

  // 解决固定定位所带来的影响
  .NavigationBar {
    width: 100%;
    height: 50px;
    top: 0px;
  }

  .around {
    justify-content: space-around !important;
  }

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

  .fixed-panel {
    position: v-bind(position);
    top: inherit;
    width: inherit;
    height: inherit;
    overflow-x: auto;
    z-index: 999;
    background-color: #ffffff;
    color: #818181;
    font-size: 14px;
    font-weight: 600;
    font-family: "黑体";

    &::-webkit-scrollbar {
      height: 0;
    }
  }

  .nav-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .nav-item {
      flex-shrink: 0;
      padding: 0 20px;
    }
  }
</style>