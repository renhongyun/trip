<!--
 * @Author: renhongyun
 * @Date: 2024-03-21 15:32:19
-->
<template>
  <div class="app">
    <router-view></router-view>
    <TabBar v-if="!route.meta.notShowTabbar"></TabBar>
    
  </div>

</template>
<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue"
import { useRoute } from "vue-router";
const route = useRoute()
</script>
<style scoped>

</style>