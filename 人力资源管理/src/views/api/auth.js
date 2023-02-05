import http from "../Untils/https"
export const authData = () => {
  return http.send("/sys/permission", "get").then((res) => {
    return res
  })
}
export const addData = (data) => {
  return http.send("/sys/permission", "post",data).then((res) => {
    return res
  })
}
export const upData = (data) => {
  return http.send(`/sys/permission/${data.id}`, "put",data).then((res) => {
		console.log(res);
    return res
  })
}
export const delData = (id) => {
  return http.send(`/sys/permission/${id}`, "DELETE").then((res) => {
		console.log(res);
    return res
  })
}