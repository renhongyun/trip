/*
 * @Author: renhongyun
 * @Date: 2024-03-26 23:27:04
 */
import hyRequest from "../request"

export function getHotSuggests() {
    return hyRequest.get({
        url: "/home/hotSuggests"
    })
}

export function getHomeCategories() {
    return hyRequest.get({
        url: "/home/categories"
    })
}

// export function getHouseListData(currentPage) {
//     return hyRequest.get({
//         url: "home/houselist",
//         params: {
//             page: currentPage
//         }
//     })
// }
export function getHouseListData(currentPage) {
        return hyRequest.get({
            url: "home/houselist",
            params: {
                page: currentPage
            }
        })
    }