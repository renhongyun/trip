<!--
 * @Author: renhongyun
 * @Date: 2024-03-30 15:07:51
-->
<template>
    <div class="categories">
      <div class="item" v-for="(item, index) in categoryData" :key="index">
        <div class="image">
          <img :src="item.pictureUrl" alt="" />
        </div>
        <div class="title">
          {{ item.title }}
        </div>
      </div>
    </div>
</template>
<script setup>
import {useHomeStore} from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categoryData } = storeToRefs(homeStore)

</script>
<style lang="less" scoped>
.categories {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 15px;
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 70px;
    font-size: 13px;

    .image {
      margin-bottom: 5px;
      img {
        width: 32px;
      }
    }
  }
}
</style>