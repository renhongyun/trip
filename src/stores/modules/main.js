/*
 * @Author: renhongyun
 * @Date: 2024-03-21 15:54:19
 */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
    const token = ref("");

    const startDate = ref(new Date());
    const endDate = ref(new Date());

    endDate.value.setDate(startDate.value.getDate() + 1);

    const isLoading = ref(false);

    return {  startDate, endDate, isLoading };
});


