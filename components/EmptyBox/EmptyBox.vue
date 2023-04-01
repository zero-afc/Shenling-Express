<template>
  <view class="EmptyBox">
    <image src="../../static/task/不存在@2x.png"></image>
  </view>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .EmptyBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 80px);

    image {
      transform: scale(0.7);
    }
  }
</style>