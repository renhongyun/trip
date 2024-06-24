/*
 * @Author: renhongyun
 * @Date: 2024-03-23 20:18:28
 */
import hyRequest from "../request"

export function getCityAll() {
    return hyRequest.get({
        url: "/city/all"
    })
}