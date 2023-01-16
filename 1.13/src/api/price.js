import http from "../Untils/https"
export const salaryData = () => {
  return http.send("/company/department", "GET").then((res) => {
    return res
  })
}
export const salaryList = (data) => {
  return http.send("/salarys/list", "POST", data).then((res) => {
    return res
  })
}
