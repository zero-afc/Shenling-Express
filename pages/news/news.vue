<script setup lang="ts">
  import { NavData } from "../../components/NavigationBar/interface"
  import NavigationBar from "../../components/NavigationBar/NavigationBar"
  import Notice from "../../components/Notice/Notice"
  import Inform from "../../components/Inform/Inform"

  const navData : NavData[] = [
    { name: "公告", component: Notice },
    { name: "任务通知", component: Inform },
  ]
</script>

<template>
  <view class="content">
    <NavigationBar :navData="navData" layout fixed></NavigationBar>
  </view>
</template>

<style lang="scss" scoped>
  ::v-deep .NavigationBar{
    top: 44px !important;
  }
  .content {
    min-height: calc(100vh - 94px);
    background-color: #f5f5f5;
  }
</style>