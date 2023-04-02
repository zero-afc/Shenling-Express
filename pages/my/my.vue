<script setup lang="ts">
  import { getUserInfo, getTaskInfo } from '../../api/modules/my';
  import { UserInfo } from "../../api/types";
  import { reactive } from "vue";

  const userInfo = reactive<UserInfo.User & UserInfo.Task>({} as any);
  const date = new Date();
  const currentDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1
  };
  (async () => {
    const res = await Promise.all([getUserInfo(), getTaskInfo(currentDate)])
    Object.assign(userInfo, res[0].data, res[1].data)
    console.log(userInfo);
  })()
</script>

<template>
  <view class="content">
    <view class="user-info">
      <view class="via">
        <image src="../../static/my/img-头像@2x.png" mode=""></image>
      </view>
      <view class="name">{{userInfo.name}}</view>
      <view class="id">司机编号：{{userInfo.number}}</view>
      <view class="phone">手机号：{{userInfo.phone}}</view>
    </view>
    <view class="panel">
      <uni-card class="task-info" :is-shadow="false" is-full>
        <view class="title">- 本月任务 -</view>
        <ul>
          <li>
            <text class="number">{{userInfo.taskAmounts}}</text>
            <text class="text">任务总量</text>
          </li>
          <li>
            <text class="number">{{userInfo.completedAmounts}}</text>
            <text class="text">完成任务量</text>
          </li>
          <li>
            <text class="number">{{userInfo.transportMileage}}</text>
            <text class="text">运输里程(km)</text>
          </li>
        </ul>
      </uni-card>
      <uni-card class="other-info" :is-shadow="false" is-full>
        <uni-list>
          <uni-list-item title="车辆信息" :to="`./chat`" showArrow />
          <uni-list-item title="任务数据" :to="`./chat`" showArrow />
          <uni-list-item title="系统设置" :to="`./chat`" showArrow />
        </uni-list>
      </uni-card>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .content {
    background-color: #f5f5f5;
  }

  .uni-card {
    background: #FFFFFF;
    border-radius: 8px;
  }

  image {
    display: block;
    width: 100%;
    height: 100%;
  }

  .user-info {
    box-sizing: border-box;
    height: 290px;
    background: url("../../static/my/img-bg@2x.png") bottom no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    padding-top: 44px;
    color: #FFFFFF;

    .via {
      width: 66px;
      height: 66px;
    }

    .name {
      font-weight: 600;
      font-size: 18px;
    }

    .id,
    .phone {
      font-size: 14px;
      font-weight: 400;
    }
  }

  .panel {
    box-sizing: border-box;
    width: 100%;
    transform: translateY(-70px);
    padding: 0 15px;
  }

  .task-info {
    margin-bottom: 15px !important;

    .title {
      text-align: center;
      margin-bottom: 20px;
    }

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        flex: 1;
        height: 55px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: #2A2929;

        .number {
          font-weight: 600;
          font-size: 18px;
        }

        .text {
          font-weight: 400;
          font-size: 12px;
        }
      }
    }
  }

  .other-info {

    ::v-deep .uni-list-item__content-title {
      font-size: 16px;
    }

    ::v-deep .uniui-arrowright::before {
      font-size: 21px;
    }

    ::v-deep .uni-list--border-top,
    ::v-deep .uni-list--border-bottom {
      height: 0;
    }
  }
</style>