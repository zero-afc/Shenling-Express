<template>
  <view class="content">
    <NavigationBar :navData="navData"></NavigationBar>
    <main>
      1111
    </main>
  </view>
</template>

<script setup lang="ts">
  import NavigationBar from "../../components/NavigationBar/NavigationBar"
  import { reactive, ref, watchEffect } from 'vue'
  const navData = [
    { name: "待提货", url: "" },
    { name: "在途", url: "" },
    { name: "已完成", url: "" },
  ]
</script>

<style lang="scss" scoped>
.content{
  height: 100vh;
  background-color: #f5f5f5;
  
  main{
    padding: 15px;
  }
}
</style>