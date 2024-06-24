<!--
 * @Author: renhongyun
 * @Date: 2024-03-21 16:48:48
-->
<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #default>
            <div class="text" >{{ item.text }}</div>
          </template>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetUrl(item.image)"
              alt=""
            />
            <img v-else :src="getAssetUrl(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script setup>
import tabbarData from "@/assets/data/tabbar";
import { getAssetUrl } from "@/utils/load_assets";
import { ref } from "vue";
const currentIndex = ref(0);
</script>
<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  .tab-bar-item {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.active {
      color: var(--primary-color);
    }
    .text {
      font-size: 12px;
    }
    img {
      width: 36px;
    }
  }
}
</style>