import http from "../Untils/https"

function staData(params) {
	console.log(params);
	return http.send("/sys/user", "get", params)


}
// 员工列表

function getRole() {
	return http({
		url: http.send("/sys/role"),
		method: "get"
	})
}
// 权限列表

function getUserRole(id) {
	return http({
		url: http.send("sys/user/" + id),
		method: "get"
	})
}
// 获取员工权限

function getAssignRoles(data) {
	return http({
		url: http.send("/sys/user/assignRoles"),
		method: "put",
		data
	})
}
// 分配权限

export {
	staData,
	getRole,
	getUserRole,
	getAssignRoles
}