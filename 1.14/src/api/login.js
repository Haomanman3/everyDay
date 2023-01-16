import http from "@/Untils/https"
export const LoginData = (data) => {
  return http.send("/sys/login", "POST", data).then((res) => res)
}
