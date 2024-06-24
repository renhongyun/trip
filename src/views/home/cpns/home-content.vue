<!--
 * @Author: renhongyun
 * @Date: 2024-03-29 17:38:22
-->
<template>
  <div class="home-content">
    <h2 class="title">热门推荐</h2>

    <div class="recommend">
      <template v-for="(item, index) in houseListData" :key="item.data.houseId">
        <house-item3
          v-if="item.discoveryContentType === 3"
          :itemData="item.data"
          @click="itemClick(item.data)"
        >
        </house-item3>
        <house-item9
          v-else-if="item.discoveryContentType === 9"
          :itemData="item.data"
          @click="itemClick(item.data)"
        >
        </house-item9>
      </template>
    </div>
  </div>
</template>
<script setup>
import { useHomeStore } from "@/stores/modules/home.js";
import { storeToRefs } from "pinia";
import houseItem3 from "@/components/house-item-v3/house-item-v3.vue";
import houseItem9 from "@/components/house-item-v9/house-item-v9.vue";
import router from "@/router";

const homeStore = useHomeStore();
const { houseListData } = storeToRefs(homeStore);

const itemClick = (item) => {
  console.log(item.houseId);
  router.push("/detail/" + item.houseId)
};


// let currentPage = 1;
// homeStore.fetchHouseListData(currentPage);
// homeStore.fetchHouseListData();

// const showMore = () => {
//     console.log("加载更多数据")
//     currentPage++;
//     console.log(currentPage)
//     homeStore.fetchHouseListData(currentPage);
// }
</script>
<style lang="less" scoped>
.home-content {
  .title {
    font-size: 22px;
    // padding: 10px;
    margin: 10px;
    margin-top: 15px;
  }
  .recommend {
    display: flex;
    flex-wrap: wrap;
    margin: 0 5px;
    background-color: #fff;
  }
}
</style>