<!--
 * @Author: renhongyun
 * @Date: 2024-03-23 15:03:01
-->
<template>
  <div class="city">
    <div class="top">
      <form action="/">
        <van-search
          
          show-action
          placeholder="城市/区域/位置"
          @cancel="onCancel"
          shape="round"
          :clearable="true"
        />
      </form>
      <van-tabs v-model:active="tabValue" color="#ff9854">
        <template v-for="(value, key, index) in allcites">
          <van-tab :title="value.title" :name="key"> </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <cityGroup :group-data="currentGroup"></cityGroup> -->
      <!-- 优化，之加载一次，只做样式的变化 -->
      <template v-for="(value, key, index) in allcites">
        <city-group v-show="tabValue === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
// import { getCityAll } from "@/service"
import { useCityStore } from "@/stores/modules/city";
import { storeToRefs } from "pinia";

import cityGroup from "./cpns/city-group.vue";
const router = useRouter();

//搜索功能

const onCancel = () => {
  router.back();
};
//tabbar切换
const tabValue = ref();

//网络请求城市数据
// const allCity = ref()
// getCityAll().then(res => {
//   allCity.value = res.data
// })

//从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
// const { allcites } = cityStore

// 改成响应式
const { allcites } = storeToRefs(cityStore);
// const currentGroup = computed(() => allcites.value[tabValue.value]);

</script>
<style lang="less" scoped>
.van-tab--active {
  font-weight: normal;
}
.top {
  position: relative;
  z-index: 9;
}
.content {
  overflow-y: auto;
  height: calc(100vh - 98px);
}
</style>