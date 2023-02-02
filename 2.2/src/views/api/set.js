import http from "../Untils/https"
// 设置列表数据
export const SetData = (params) => {
  return http.send("/sys/role", "GET", params).then((res) => {
    return res
  })
}

//删除
export const delData = (id) => {
  return http.send("/sys/role", "DELETE", id).then((res) => {
    return res
  })
}
//分配权限
export const alloData = (id) => {
  return http.send("/sys/role", "GET", id).then((res) => {
    return res
  })
}
