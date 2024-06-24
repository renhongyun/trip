/*
 * @Author: renhongyun
 * @Date: 2024-03-30 15:52:49
 */
import { onMounted, onUnmounted, ref } from "vue";
import {throttle} from "underscore"
export default function useScroll() {
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const clientHeight = ref(0)
  const scrollHeight = ref(0)

  //节流
  const scrollListenerHandler = throttle(() => {
    scrollListener();
  }, 100);

  const scrollListener = () => {
    scrollTop.value = document.documentElement.scrollTop;
     clientHeight.value = document.documentElement.clientHeight;
     scrollHeight.value= document.documentElement.scrollHeight;

    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      console.log("change")
      isReachBottom.value = true;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });
  return { isReachBottom, scrollTop, clientHeight, scrollHeight };
}