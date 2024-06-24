/*
 * @Author: renhongyun
 * @Date: 2024-03-21 15:54:19
 */
import { defineStore } from "pinia";
import { getCityAll } from "@/service";
import { ref } from "vue"
export const useCityStore = defineStore("city", () => {
    // state: () => ({
    //     cities: []
    // }),
    // actions: {

    // }
    const allcites = ref({})
    const fetchAllCitiesData = async () => {
        const res = await getCityAll()
        allcites.value = res.data
    }
    const currentCity = ref({cityName: "广州"})
    return { allcites, fetchAllCitiesData, currentCity }
})

