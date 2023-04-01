<template>
  <view class="content">
    <NavigationBar :navData="navData" fixed></NavigationBar>
  </view>
</template>

<script setup lang="ts">
  import { NavData } from "../../components/NavigationBar/interface"
  import NavigationBar from "../../components/NavigationBar/NavigationBar"
  import Wait from "../../components/Wait/Wait"
  import March from "../../components/March/March"
  import Finish from "../../components/Finish/Finish"

  const navData : NavData[] = [
    { name: "待提货", component: Wait, cache: true },
    { name: "在途", component: March, cache: true },
    { name: "已完成", component: Finish, cache: true },
  ]
</script>

<style lang="scss" scoped>
  .content {
    height: calc(100vh - 50px);
    background-color: #f5f5f5;
  }
</style>