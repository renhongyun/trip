<!--
 * @Author: renhongyun
 * @Date: 2024-04-09 10:37:33
-->
<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
            <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

    </van-swipe>
  </div>
</template>
<script setup>
defineProps ({
    swipeData: Object,
    default: () => {}
})
</script>
<style lang="less" scoped>
// .my-swipe .van-swipe-item {
//   color: #fff;
//   font-size: 20px;
//   line-height: 150px;
//   text-align: center;
//   background-color: #39a9ed;
// }
.swipe {
    .swipe-list {
        .item {
        img{
            width: 100%;
        }
        
    }
    }

}
</style>