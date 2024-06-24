/*
 * @Author: renhongyun
 * @Date: 2024-03-25 21:19:03
 */
import dayjs from "dayjs";
// export function formatMonDay(date) {
//     return dayjs(date).format("MM月DD日")
// }

//调整日期格式
export function formatMonDay(date, formatStr = "MM月DD日") {
    return dayjs(date).format(formatStr)
}

export function getDiffDays(startDate, endDate) {
    return dayjs(endDate).diff(startDate, "day")
}