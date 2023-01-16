import http from "../Untils/https"
export const RoveData = () => {
  return http.send("/user/process/instance/1/10", "PUT").then((res) => {
    return res
  })
}
