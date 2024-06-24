/*
 * @Author: renhongyun
 * @Date: 2024-03-26 23:24:33
 */
import { defineStore } from "pinia";
import { getHotSuggests, getHomeCategories, getHouseListData } from "@/service";
import { ref } from "vue"
export const useHomeStore = defineStore("home", () => {
    const hotSuggests = ref({})
    const fetchHotSuggestsData = async () => {
        const res = await getHotSuggests()
        hotSuggests.value = res.data
    }

    const categoryData = ref({})
    const fetchCategoryData = async () => {
        const res = await getHomeCategories()
        categoryData.value = res.data
    }

    const houseListData = ref([])

    // const fetchHouseListData = async (currentPage) => {
    //     const res = await getHouseListData(currentPage)
    //     houseListData.value.push(...res.data)
    // }
    const currentPage = ref(1)
    const fetchHouseListData = async () => {
        const res = await getHouseListData(currentPage.value)
        houseListData.value.push(...res.data)
        currentPage.value++
    }

    return { 
        hotSuggests,
        fetchHotSuggestsData,
        categoryData,
        fetchCategoryData,
        houseListData,
        fetchHouseListData,
        currentPage
    }
})

