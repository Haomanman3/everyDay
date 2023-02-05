import http from "../Untils/https"
export const Login = (data) => {
	return http.send("/sys/login", "POST", data).then((res) => res)
}