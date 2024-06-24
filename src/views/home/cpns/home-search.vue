<template>
  <div class="search">
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity?.cityName }}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <div class="date">
      <div class="startime">
        <div>
          <div class="text">入住</div>
          <div class="time">{{ startDateStr }}</div>
        </div>
        <div class="during" @click="dateClick">共{{ stayCount }}晚</div>
      </div>
      <div class="endtime">
        <div class="text">入住</div>
        <div class="time">{{ endDateStr }}</div>
      </div>
    </div>
    <!-- 日历 -->
    <van-calendar
      v-model:show="show"
      type="range"
      @confirm="onConfirm"
      color="#ff9854"
      :round="false"
      class="calender"
    />
    <div class="option">
      <div class="price">价格不限</div>
      <div class="count">人数不限</div>
    </div>
    <div class="options">
      <div class="info">关键字/位置/民宿名</div>
    </div>
    <!-- item.tagText.text.background.color -->
    <div class="suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="search-btn">
      <div class="btn">开始搜索</div>
    </div>


  </div>
</template>
<script setup>
import { useCityStore } from "@/stores/modules/city";
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useHomeStore } from "@/stores/modules/home.js";
import  {useMainStore}  from "@/stores/modules/main.js"
import { formatMonDay, getDiffDays } from "@/utils/format_date.js";

const router = useRouter();
const cityClick = () => {
  router.push("/city");
};
const cityStore = useCityStore();
const { currentCity } = cityStore;

// const nowDate = new Date();
// const newDate = new Date().setDate(nowDate.getDate() + 1);

// const startDate = ref(formatMonDay(nowDate));
// const endDate = ref(formatMonDay(newDate));
// const stayCount = ref(getDiffDays(nowDate, newDate));

// // 日期范围的处理
// const mainStore = useMainStore()
// const { startDate, endDate } = storeToRefs(mainStore)

// const startDateStr = computed(() => formatMonDay(startDate.value))
// const endDateStr = computed(() => formatMonDay(endDate.value))

// const stayCount = ref(getDiffDays(startDate.value, endDate.value))

// const show = ref(false);
// const dateClick = () => {
//   show.value = true;
// };
// const onConfirm = (value) => {
//   const selectStartDate = value[0];
//   const selectEndDate = value[1];
//   mainStore.startDate = formatMonDay(selectStartDate);
//   mainStore.endDate = formatMonDay(selectEndDate);
//   stayCount.value = getDiffDays(selectStartDate, selectEndDate);

//   show.value = false;
// };

// 日期范围的处理
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
// console.log(startDate)
// console.log(endDate)
const startDateStr = computed(() => formatMonDay(startDate.value))
const endDateStr = computed(() => formatMonDay(endDate.value))
// console.log(startDateStr)
const stayCount = ref(getDiffDays(startDate.value, endDate.value))

const show = ref(false)
const dateClick = () => {
  show.value = true
}
const onConfirm = (value) => {
  // 1.设置日期
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)

  // 2.隐藏日历
  show.value = false
}


const homeStore = useHomeStore();
// console.log(homeStore.hotSuggests)
const { hotSuggests } = storeToRefs(homeStore);

</script>
<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
  }
  .position {
    display: flex;
    align-items: center;
    .text {
      font-size: 12px;
    }
    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
.date {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-top: 5px;
  .startime {
    display: flex;
    align-items: center;
    flex: 1;
    .during {
      position: relative;
      left: 45px;
      bottom: 5px;
      font-size: 13px;
      color: #939496;
    }
  }
  .endtime {
    margin-right: 30px;
  }
  .text {
    color: #939496;
    font-size: 13px;
  }
  .time {
    color: #000;
    font-size: 16px;
    margin-top: 3px;
  }
}
:deep(.calender) {
  --van-calendar-popup-height: 100%;
}
.option {
  display: flex;
  justify-content: space-between;
  color: #939496;
  font-size: 14px;
  padding: 0 20px;
  line-height: 44px;
  .count {
    position: relative;
    right: 43px;
  }
}
.options {
  color: #939496;
  padding: 0 20px;
  line-height: 44px;
  font-size: 14px;
}
.suggest {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  padding-right: 25px;
  .item {
    margin: 5px;
    border-radius: 14px;
    font-size: 12px;
    padding: 3px 5px;
  }
}
.search-btn {
  padding: 0 20px;
  margin-top: 15px;
  .btn {
    // width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 16px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}



</style>