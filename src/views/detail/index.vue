<!--
 * @Author: renhongyun
 * @Date: 2024-04-01 08:45:47
-->
<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="leftClick"
    >
    </van-nav-bar>
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
    <detail-infos-bar :topInfos="mainPart.topModule"></detail-infos-bar>
    <detail-facility :facilities="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
    <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>

      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>
<script setup>
import {ref, computed, watch} from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import {getDetailInfos} from "@/service/modules/detail"

import detailSwipe from "./cpns/detail-swipe.vue";
import detailInfosBar from "./cpns/detail-infos-bar.vue"
import detailFacility from "./cpns/detail-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailIntro from "./cpns/detail_08-intro.vue"

const router = useRouter();
const route = useRoute();

//获取当前商品id
console.log(route.params.id);
const houseId = route.params.id

//监听返回按钮
const leftClick = () => {
  router.back();
};

//请求数据
const detailInfos = ref({})
//由于主要数据在mainPart中，所以拆解数据。
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})
console.log(mainPart);


</script>
<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>