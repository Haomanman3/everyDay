let express = require("express")
let Mock = require("mockjs")
const loginData = require("./common/login.json")
const menusData = require("./common/menus.json")
const userData = require("./common/users.json")
const roleData = require("./common/roles.json")
const rightData = require("./common/rights.json")
const goodData = require("./common/goods.json")
let app = express()
app.use("/login", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
app.use("/menus", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})
app.use("/users", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...userData
    })
  )
})
app.use("/roles", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...roleData
    })
  )
})
app.use("/rights", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...rightData
    })
  )
})
app.use("/goods", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...goodData
    })
  )
})
app.listen("8090", () => {
  console.log("监听端口 8090")
})
