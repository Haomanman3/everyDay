import http from "../Untils/https"
export const ChartData = () => {
  return http.send("/company/department", "GET").then((res) => {
    return res
  })
}
