<!--
 * @Author: renhongyun
 * @Date: 2024-03-31 10:50:13
-->
<template>
  <div class="load-wrapper">
    <div class="loading" v-show="mainStore.isLoading" @click="loadClick">
      <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
      </div>
    </div>
  </div>
</template>
<script setup>

import {useMainStore} from '@/stores/modules/main';

const mainStore = useMainStore();


const loadClick = () => {
    mainStore.isLoading = false
}
</script>
<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.2);
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>