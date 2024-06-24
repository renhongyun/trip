<!--
 * @Author: renhongyun
 * @Date: 2024-03-27 21:02:38
-->
<template>
  <div class="house-item-v3" >
    <div class="wrapper">
      <div class="cover">
        <img :src="itemData.image.url" alt="" class="cover" />
      </div>
      <div class="bottom">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" class="icon" />
          <div class="area">
            {{ itemData.location }}
          </div>
        </div>
        <div class="text">
          {{ itemData.houseName }}
        </div>
        <div class="rate">
          {{ itemData.summaryText }}
        </div>
        <div class="price">
          <div class="finalPrice">￥{{ itemData.finalPrice }}</div>
          <div class="productPrice">￥{{ itemData.productPrice }}</div>
          <div class="text">{{ itemData.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    required: true,
  },
});
// const itemcLick = () => {
//   console.log("id", props.itemData.houseId)
// }
</script>
<style lang="less" scoped>
.house-item-v3 {
  width: 50%;
  .wrapper {
    margin: 5px;
    overflow: hidden;
    border-radius: 6px;
  }
  .cover {
    img {
      width: 100%;
    }
  }
  .bottom {
    padding: 10px;
    .location {
      display: flex;
      font-size: 14px;
      color: #666666;
      margin-bottom: 3px;
      img {
        width: 12px;
        height: 12px;
      }
    }

    .text {
      margin: 5px 0;
      font-size: 14px;
      color: #333;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .rate {
      font-size: 14px;
      margin-bottom: 5px;
    }
    .price {
      display: flex;
      .finalPrice {
        color: var(--primary-color);
      }
      .productPrice {
        margin: 0 3px;
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
      }
      .text {
        font-size: 14px;
        color: #fff;
        padding: 0 6px;
        border-radius: 8px;
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
      }
    }
  }
}
</style>