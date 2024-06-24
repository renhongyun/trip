<template>
  <div class="infos">
    <div class="name">
      {{ topInfos.houseName }}
    </div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags">
        <span
          class="item"
          v-if="item.tagText"
          :key="index"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="score">{{ topInfos.commentBrief.overall }}</span>
        <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">
          {{ topInfos.commentBrief.totalCount }}条评论
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="position extra">
      <div class="address">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">
        地图·周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background-color: #fff;
  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }
  .tags {
    // display: flex;
    // justify-content: space-between;
    margin: 10px 0px;
    .item {
      padding: 1px 3px;
      // border-radius: 3px;
      margin: 0 2px;
      font-size: 12px;
    }
  }
  // 公用样式extra
  .extra {
    display: flex;
    justify-content: space-between;
    background-color: #f5f7fa;
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 5px;
    margin: 12px 0;
    // align-items: center;
    .right {
      color: #ff9857;
    }
  }
  .comment {
    .score {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }
    .title {
      color: #333;
      font-weight: 700;
      margin: 0 3px;
    }
    .brief {
      color: #666;
    }
  }

  .position {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}
</style>
