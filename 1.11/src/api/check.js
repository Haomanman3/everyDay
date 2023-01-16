import http from "../Untils/https"
export const checkData = () => {
  return http.send("/company/department", "GET").then((res) => {
    return res
  })
}
export const checkList = () => {
  return http
    .send("/attendances?page=1&pagesize=10&total=0", "GET")
    .then((res) => {
      return res
    })
}
export const checkMenus = () => {
  return http.send("/attendances/reports", "GET").then((res) => {
    return res
  })
}
