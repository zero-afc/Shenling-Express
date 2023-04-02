<script setup lang="ts">
  import { reactive } from "vue";
  import { getTaskList } from "../../api/modules/tasks";
  import { Tasks } from "../../api/types";
  import EmptyBox from "../../components/EmptyBox/EmptyBox";
  import CardList from "../../components/CardList/CardList";

  const taskList = reactive<Tasks.TaskItem[]>([]);
  (async () => {
    const { data: { items } } = await getTaskList({ status: 6, page: 4, pageSize: 10 })
    if (items) taskList.splice(0, taskList.length, ...items)
    console.log(items);
  })()

  function onPickUp(id : string) {
    console.log(id);
  }
</script>

<template>
  <view class="content">
    <EmptyBox v-if="taskList.length === 0" />
    <block v-for="item in taskList" :key="item.id">
      <CardList :model="item" @onPickUp="onPickUp" />
    </block>
  </view>
</template>

<style lang="scss" scoped>
  .content {
    box-sizing: border-box;
    padding: 15px;
  }
</style>