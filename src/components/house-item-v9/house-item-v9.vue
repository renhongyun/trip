<!--
 * @Author: renhongyun
 * @Date: 2024-03-27 21:03:29
-->
<template>
  <div class="house-item-v9">
    <div class="wrapper">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="text">
        <div class="rate">
          {{ itemData.summaryText }}
        </div>
        <div class="name">
          {{ itemData.houseName }}
        </div>
        <div class="rank">
          <div class="star">
            
            <van-rate v-model="itemScore" readonly allow-half color="#fff" />
          </div>
          <div class="price">
            ￥{{ itemData.finalPrice }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  itemData: {
    type: Object,
    required: true,
  },
});
const itemScore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>
<style lang="less" scoped>
.house-item-v9 {
  width: 50%;
  .wrapper {
    margin: 5px;
    overflow: hidden;
    border-radius: 6px;
    position: relative;
  }

  .cover {
    img {
      width: 100%;
    }
  }
  .text {
    position: absolute;
    bottom: 0;
    padding: 8px 10px;
    color: #fff;
    .rate {
      font-size: 12px;
    }
    .name {
      margin: 5px 0;
      //多余文本以省略号形式显示
      overflow: hidden;
      text-overflow: ellipsis;
      //用于将对象作为弹性盒子模型显示
      display: -webkit-box;
      // 用于限制文本的行数
      -webkit-line-clamp: 2;
      // 子元素应该垂直排列
      -webkit-box-orient: vertical;
    }
    .rank {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      van-rate {
        font-size: 12px;
      }
    }
    
  }
}

</style>