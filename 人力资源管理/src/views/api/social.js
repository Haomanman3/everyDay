import http from "../Untils/https";
export const socialData = () => {
	return http.send("/social_securitys/list", "post").then((res) => {
		return res
	})
}
export const componData = () => {
	return http.send("/company/department", "get").then((res) => {
		return res
	})
}
export const cityData = () => {
	return http.send("/sys/city", "get").then((res) => {
		return res
	})
}
export const topData = () => {
	return http.send("/social_securitys/historys/2020/list", "get").then((res) => {
		// console.log(res);
		return res
	})
}
export const hisData = (params) => {
	console.log(params);
	return http.send("/social_securitys/historys/202001", "get", params).then((res) => {
		console.log(res);
		return res
	})
}
export const monData = (params) => {
	console.log(params);
	return http.send("/social_securitys/historys/202004", "get", params).then((res) => {
		console.log(res);
		return res
	})
}