<script setup lang="ts">
  import { SubBtnColor } from "../../enum";
  import { Tasks } from "../../api/types";
  defineProps<{
    model : Tasks.TaskItem
  }>()
  defineEmits<{
    (e : 'onPickUp', id : string) : void
  }>()
</script>

<template>
  <uni-card :is-shadow="false" is-full>
    <view class="title">任务编号：{{model.transportTaskId}}</view>
    <view class="address">
      <view class="start">
        <text class="icon" style="background-color: #2A2929;">起</text>
        <span style="width: 90%;">{{model.startAddress}}</span>
      </view>
      <view class="end">
        <text class="icon" style="background-color: #EF4F3F;">止</text>
        <span>{{model.endAddress}}</span>
      </view>
    </view>
    <hr>
    <view class="time-box">
      <view class="time">
        <view>提货时间</view>
        <view style="color: #000000;">{{model.created}}</view>
      </view>
      <button :disabled="!model.enablePickUp"
        :style="`background:${model.enablePickUp ? SubBtnColor.ACTIVATE : SubBtnColor.FREEZE};`"
        @click="$emit('onPickUp', model?.id)">提货</button>
    </view>
  </uni-card>
</template>

<style lang="scss" scoped>
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    background: #2A2929;
    border-radius: 11px;
    text-align: center;
    line-height: 22px;
    color: #ffffff;
  }

  .uni-card {
    border-radius: 10px;
    font-weight: 500;

    .title {
      font-size: 16px;
      color: #2A2929;
      margin-bottom: 10px;
    }

    .address {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      &>view {
        position: relative;
        z-index: 99;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
        color: #818181;
      }

      &::after {
        content: "";
        position: absolute;
        left: 10px;
        height: 50%;
        width: 0px;
        border: 1px dashed #D9D9D9;
      }
    }

    .time-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 15px;

      .time {
        flex: 1;

        &>view:nth-child(1) {
          margin-bottom: 7 px;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 32px;
        // background: v-bind(bgcolor);
        border-radius: 16px;
        color: #ffffff;
        font-size: 14px;

        &::after {
          border: none;
        }
      }
    }
  }
</style>