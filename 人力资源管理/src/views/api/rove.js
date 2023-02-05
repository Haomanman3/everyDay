import http from "../Untils/https"

export const roveData = () => {
  return http.send("/user/process/instance/1/10", "put").then((res) => {
    return res
  })
}