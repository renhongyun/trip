/*
 * @Author: renhongyun
 * @Date: 2024-03-21 15:54:41
 */
import { defineStore } from "pinia/dist/pinia";

const useSearchStore = defineStore("search", {
    state: () => ({
        search: []
    }),
    actions: {

    }
})

export default useSearchStore