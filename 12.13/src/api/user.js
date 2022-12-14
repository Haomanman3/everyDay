import http from "../unilts/https"
/**用户列表 */
export const getUser = (params) => {
  return http.send("/users", params).then((res) => res)
}
/**添加接口 */
export const getAdd = (params) => {
  return http.send("/users", params, "post").then((res) => res)
}
/**编辑接口 */
export const getEdit = (params) => {
  return http.send("/users/:id", params, "put").then((res) => res)
}
/**修改接口 */
export const getUpdate = (params) => {
  return http.send("/users", params, "put").then((res) => res)
}
/**搜索接口 */
export const getSearch = (id) => {
  return http.send("/users", id).then((res) => res)
}
/**删除接口 */
export const getDelete = (id) => {
  return http.send("/users", id, "delete").then((res) => res)
}
/**角色列表 */
export const getRole = () => {
  return http.send("/roles", "get").then((res) => {
    return res
  })
}
/**添加角色 */
export const getAllo = (roleName) => {
  return http.send("/roles", roleName, "post").then((res) => {
    return res
  })
}
/**编辑角色 */
export const editAllo = (params) => {
  return http.send("/roles/:id", params, "put").then((res) => {
    return res
  })
}
/**删除角色 */
export const delAllo = (id) => {
  return http.send("/roles", id, "put").then((res) => {
    return res
  })
}
/**权限列表 */
export const rightAllo = () => {
  return http.send("/rights").then((res) => {
    return res
  })
}
/**订单列表 */
export const orderAllo = (params) => {
  return http.send("/orders", params).then((res) => {
    return res
  })
}
/**删除商品 */
export const delShop = (params) => {
  return http.send("/goods", params, "delete").then((res) => {
    return res
  })
}
/**数据统计 */
export const statis = () => {
  return http.send("/reports").then((res) => {
    return res
  })
}
/**商品分类 */
export const cate = () => {
  return http.send("/categories").then((res) => {
    return res
  })
}
/**树状图 */
export const treeList = () => {
  return http.send("/rightsType").then((res) => {
    return res
  })
}
/**物流信息 */
export const kdData = () => {
  return http.send("/kuaidi/:id").then((res) => {
    return res
  })
}
/**删除分类商品 */
export const delShops = (id) => {
  return http.send("goods/:id", id).then((res) => {
    return res
  })
}
/**添加分类商品 */
export const addShops = () => {
  return http.send("goods", "post").then((res) => {
    return res
  })
}
/**编辑分类商品 */
export const editShops = () => {
  return http.send("goods/:id", "put").then((res) => {
    return res
  })
}
