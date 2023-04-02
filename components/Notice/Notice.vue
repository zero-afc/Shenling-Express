<script setup lang="ts">
  import { reactive } from "vue";
  import { getNewsList } from "../../api/modules/news";
  import { News } from "../../api/types";

  const messageList = reactive<News.MessageListRes[]>([]);
  (async () => {
    const res = await getNewsList({ contentType: 200, page: 1, pageSize: 10 })
    // if (items) messageList.splice(0, taskList.length, ...items)
    console.log(res); // 无数据
  })()
</script>


<template>
  <view class="content">
    <view class="clear-btn">
      <image src="../../static/news/icon_yidu@2x.png" mode=""></image>
      <text>全部已读</text>
    </view>
    <ul>
      <li v-for="_ in 3">
        <i class="flag"></i>
        <view class="title">标题区域</view>
        <text style="font-size: 12px;color: #818181;">时间</text>
      </li>
    </ul>
  </view>
</template>

<style lang="scss" scoped>
  .clear-btn {
    width: 25%;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 3px;
    margin: 18px 0;
    font-weight: 400;
    font-size: 14px;
    color: #818181;

    image {
      width: 15px;
      height: 15px;
    }
  }

  ul {
    padding: 0;
  }

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    height: 55px;
    background-color: #ffffff;
    border: 1px solid #F4F4F4;

    .title {
      flex: 1;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .flag {
      position: absolute;
      left: 8px;
      width: 6px;
      height: 6px;
      background-color: red;
      border-radius: 50%;
    }
  }
</style>