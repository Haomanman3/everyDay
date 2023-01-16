import http from "../Untils/https"
export const SocialData = () => {
  return http.send("/company/department", "GET").then((res) => {
    return res
  })
}
export const SocialList = () => {
  return http.send("/social_securitys/list", "POST").then((res) => {
    return res
  })
}
export const HisTop = () => {
  return http
    .send("/social_securitys/historys/2020/list", "GET")
    .then((res) => {
      return res
    })
}
export const HisList = () => {
  return http
    .send(
      "/social_securitys/historys/202001?month=202001&year=2020&opType=2",
      "GET"
    )
    .then((res) => {
      return res
    })
}
export const MonthList = () => {
  return http
    .send("/social_securitys/historys/202001?month=202001&opType=1", "GET")
    .then((res) => {
      return res
    })
}
