import http from "../Untils/https"
export const checkData = (params) => {
  return http.send("/attendances", "get",params).then((res) => {
    return res
  })
}
export const reportData = () => {
  return http.send("/attendances/reports", "get").then((res) => {
    return res
  })
}