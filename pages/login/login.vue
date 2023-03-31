<template>
  <view class="content">
    <uni-title type="h2" title="神领快递" align="center"></uni-title>
    <view class="hint">
      <h2>账号登录</h2>
      <view class="text">
        <text>手机号登录</text>
        <image src="../../static/login/indicate.png" style="width: 10px;height: 10px;"></image>
      </view>
    </view>
    <view class="formPanel">
      <uni-forms ref="form" :model="formData" :rules="rules">
        <uni-forms-item name="account">
          <uni-easyinput placeholder="请输入账号" v-model="formData.account" />
        </uni-forms-item>
        <uni-forms-item name="password">
          <uni-easyinput type="password" placeholder="请输入密码" v-model="formData.password" />
        </uni-forms-item>
      </uni-forms>
      <button @click="onSubmit">提交</button>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref, watchEffect } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  import { loginValidate as rules } from '../../utils/validate';
  import { SubBtnColor } from '../../enum';
  import { sendLogin } from '../../api/modules/login';

  const form = ref() // 表单节点
  const bgcolor = ref(SubBtnColor.FREEZE)  // 按钮颜色
  const formData = reactive({ account: "hdsj001", password: "" }) // 表单数据
  onReady(() => { form.value.setRules(rules) })
  watchEffect(() => {
    if (formData.account && formData.password) {
      bgcolor.value = SubBtnColor.ACTIVATE
    } else bgcolor.value = SubBtnColor.FREEZE
  })
  async function onSubmit() {
    try {
      await form.value.validate()
      uni.showLoading({ title: "拼命加载中..." })
      const { data } = await sendLogin({ ...formData }) // 密码：hdsj001
      if (!data) await Promise.reject([{ errorMessage: "登录失败,请重新登录" }])
      uni.hideLoading()
      uni.showToast({ title: "登录成功" })
      uni.setStorageSync("token", data)
    } catch (err) {
      uni.hideLoading()
      uni.showToast({
        // @ts-ignore
        title: err[0].errorMessage, icon: 'none', // 可选值：success/loading/none
        duration: 1000, mask: true
      })
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 0 32px;

    .hint {
      margin: 50px 0 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text {
        display: flex;
        align-items: center;
        gap: 7px;
        font-weight: bold;
        font-size: 15px;
        color: #EF4F3F;
      }
    }

    .formPanel {
      button {
        margin-top: 50px;
        height: 50px;
        background: v-bind(bgcolor);
        border-radius: 24.77px;
        color: #ffffff;

        &::after {
          border: none;
        }
      }
    }
  }

  ::v-deep .is-input-border {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
  }

  ::v-deep .uni-easyinput__content-input {
    padding-left: 0 !important;
  }
</style>