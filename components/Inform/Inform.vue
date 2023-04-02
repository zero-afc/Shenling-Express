<script setup lang="ts">
  import { reactive } from "vue";
  import { getNewsList } from "../../api/modules/news";
  import { News } from "../../api/types";

  const informList = reactive<News.InformListRes[]>([]);
  (async () => {
    const res = await getNewsList({ contentType: 201, page: 1, pageSize: 10 })
    // if (items) informList.splice(0, taskList.length, ...items)
    console.log(res); // 无数据
  })()
</script>

<template>
  <view class="content">
    <view class="clear-btn">
      <image src="../../static/news/icon_yidu@2x.png" mode=""></image>
      <text>全部已读</text>
    </view>
    <uni-card :is-shadow="false" is-full>
      <view class="title">您有新的运输任务</view>
      <view class="hr"></view>
      <view class="message">
        <view class="path">
          <text>运输车辆：京A 123456</text>
          <text>运输路线：北京—广州</text>
        </view>
        <view class="time">
          <text>2022.05.04 13:00</text>
          <button>查看详情</button>
        </view>
      </view>
    </uni-card>
  </view>
</template>

<style lang="scss" scoped>
  .content {
    padding: 0 11px;
  }

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

  .uni-card {
    border-radius: 10px;
    font-weight: 500;

    .title {
      color: #2A2929;
    }

    .message {
      color: #818181;

      &>view {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .path>view {
        width: 150px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .time {
        margin-top: 16px;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 76px;
          height: 24px;
          border: 1px solid #EF4F3F;
          border-radius: 12px;
          font-size: 12px;
          color: #EF4F3F;
          padding: 0;
          margin: 0;
        }
      }
    }

    .hr {
      width: 100%;
      height: 1px;
      margin: 12px 0;
      background-color: #F4F4F4;
    }
  }
</style>