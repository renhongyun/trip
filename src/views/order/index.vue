<!--
 * @Author: renhongyun
 * @Date: 2024-03-21 15:50:58
-->
<template>
  <div class="order">
    <h2>order</h2>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-rate v-model="rateValue" />
    <button @click="rateIncrement">加</button>

  </div>
</template>
<script setup>
import { ref } from "vue";
const rateValue = ref(0);
const rateIncrement = () => {
  rateValue.value++;
};
</script>
<style scoped>
</style>