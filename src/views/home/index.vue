<!--
 * @Author: renhongyun
 * @Date: 2024-03-21 15:47:46
-->
<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <homeSearch></homeSearch>
    <home-categories />

    <div v-if="isShowSearch" class="search-bar">
      <search ></search>
    </div>

    <homeContent />
    <loading></loading>
  </div>
</template>
<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearch from "./cpns/home-search.vue";
import homeContent from "./cpns/home-content.vue";
import homeCategories from "./cpns/home-categories.vue";
import search from "@/components/search/search.vue";
import loading from "@/components/loading/loading.vue";

import { useHomeStore } from "@/stores/modules/home.js";
import useScroll from "@/hooks/useScroll.js";
import { watch, ref, computed } from "vue";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.fetchHouseListData();
homeStore.fetchCategoryData();

const { isReachBottom, scrollTop } = useScroll();

watch(isReachBottom, (newVal) => {
  console.log("监听到滚动到底部");
  //当isReachBottom的值更新为true时
  // if(newVal){
  //   console.log('到底了')
  //   homeStore.fetchHouseListData()
  //   isReachBottom.value = false
  // }
  //更加严谨的写法：fetchHouseListData返回一个promise，当promise执行完成时，再修改isReachBottom的值
  if (newVal) {
    console.log("监听到滚动到底部")
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false;
    });
  }
});

//搜索框的控制与隐藏
// 如何传递给子组件?子组件怎么知道距离顶部有100了？
//答： 使用hooks拿到值scrollTop,监听scrollTop的变化

// const isShowSearch = ref(false)
// watch(scrollTop, (newVal) => {
//   isShowSearch.value = newVal > 100 ? true : false
// })
//computed可以定义出可响应式数据，并且在数据发生变化时回调。针对数据
const isShowSearch = computed(() => {
  return scrollTop.value > 350 ? true : false;
});
</script>
<style lang="less" scoped>
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  line-height: 44px;
  padding: 16px 16px 10px;

  text-align: center;
  background-color: #fff;
  z-index: 9;
}
</style>