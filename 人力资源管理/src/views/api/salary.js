import http from "../Untils/https"
export const salData = (params) => {
  return http.send("/salarys/list", "post",params).then((res) => {
    return res
  })
}
export const componData=()=>{
	return http.send("/company/department","get").then((res)=>{
		return res
	})
}