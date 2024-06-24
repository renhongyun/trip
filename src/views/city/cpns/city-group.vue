<!--
 * @Author: renhongyun
 * @Date: 2024-03-25 09:10:29
-->
<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="热门城市" />
      
      <div class="list">
        <template
          v-for="(city, index) in groupData.hotCities"
          :key="index"
        >
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>

  <!-- <template v-for="(group, index) in groupData?.cities" :key="index">
      <div class="group-item">
        <h2 class="title">{{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in group.cities" :key="indey">
            <div class="city">{{ city.cityName }}</div>
          </template>
        </div>
      </div>
    </template> -->
</template>

<script setup>
import { computed } from 'vue';
import { useCityStore } from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});
const indexList = computed(() => {
    const indexList = props.groupData.cities.map(item => item.group )
    indexList.unshift("#")
    return indexList
})
const cityStore = useCityStore()
const cityClick = (city) => {
    // currentCity.value = city
    cityStore.currentCity = city
    router.back()
}

// const { currentCity } = storeToRefs(cityStore)
</script>
<style lang="less" scoped>
:deep(.van-index-bar__index) {
  color: #7e7871;
}
.list {
    display: flex;
    justify-content: space-evenly;
    padding:10px;
    padding-right: 25px;
    flex-wrap: wrap;
    .city {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        background-color: #fff4ec;
        margin-top:10px;
    }
}
</style>