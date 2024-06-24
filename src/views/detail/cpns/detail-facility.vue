<!--
 * @Author: renhongyun
 * @Date: 2024-04-10 10:46:14
-->
<template>
  <div class="facility">
    <DetailSection title="房屋设施" moreText="查看全部设施">
      <div class="wrapper">
        <template v-for="(item, index) in facilities.houseFacilitys" :key="index">
        <div class="item" v-if="facilities.facilitySort?.includes(index)">
          <div class="left">
            <img class="icon" :src="item.icon"/>
            <div class="tetxt">{{item.groupName}}</div>
          </div>
          <div class="right">
            <template v-for="(items, index) in item.facilitys.slice(0,4)" :key="index">
                <div class="wrapper">
                    <i class="icon_check icon"></i>
                <span>
                    {{ items.name }}
                </span>
                </div>

            </template>

          </div>
        </div>
      </template>
      </div>

    </DetailSection>
  </div>
</template>
<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
defineProps({
  facilities: {
    type: Object,
    default: () => {},
  },
});
</script>
<style lang="less" scoped> 
.wrapper {
    background-color: #f7f9fb;
    padding: 10px 10px;
    border-radius: 6px;
    .item{
    display: flex;
    margin: 10px 10px;
    .right {
        position: relative;
        top: -3px;
        left: 10px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        // background-color: red;
        padding: 0 0;
        .wrapper {
            font-size: 12px;;
            width: 80px;
            margin-top: -3px;;
        }
    }
    .left {
        text-align: center;
        font-size: 12px;
        
        .icon {
            width: 26px;
            margin: 5px 0;
        }
    }
}
}
// .facility-inner {
//   padding: 5px 0;
//   border-radius: 6px;
//   font-size: 12px;
//   background-color: #f7f9fb;

//   .item {
//     display: flex;
//     margin: 25px 0;

//     .head {
//       width: 90px;
//       text-align: center;

//       img {
//         width: 20px;
//         height: 20px;
//       }

//       .text {
//         margin-top: 5px;
//         color: #000;
//       }
//     }

//     .list {
//       flex: 1;
//       display: flex;
//       flex-wrap: wrap;
//       align-items: center;

//       .iten {
//         display: flex;
//         align-items: center;
//         box-sizing: border-box;
//         width: 50%;
//         margin: 4px 0;

//         .icon {
//           margin: 0 6px;
//         }

//         .text {
//           color: #333;
//         }
//       }
//     }
//   }
// }
</style>