<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#5283fd"
          text-color="#fff"
          active-text-color="#43a7fe"
          router
        >
          <el-menu-item index="/about/index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/about/staff">
            <i class="el-icon-setting"></i>
            <span slot="title">员工</span>
          </el-menu-item>
          <el-menu-item index="/about/set">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
          <el-menu-item index="/about/auth">
            <i class="el-icon-setting"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="/about/social">
            <i class="el-icon-setting"></i>
            <span slot="title">社保</span>
          </el-menu-item>
          <el-menu-item index="/about/rove">
            <i class="el-icon-setting"></i>
            <span slot="title">审批</span>
          </el-menu-item>
          <el-menu-item index="/about/check">
            <i class="el-icon-setting"></i>
            <span slot="title">考勤</span>
          </el-menu-item>
          <el-menu-item index="/about/salary">
            <i class="el-icon-setting"></i>
            <span slot="title">工资</span>
          </el-menu-item>
          <el-menu-item index="/about/chart">
            <i class="el-icon-setting"></i>
            <span slot="title">组织架构</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="footer">
          <div class="flex">
            <div>
              <i class="el-icon-s-fold"></i>
            </div>
            <div>江苏传智播客教育科技股份有限公司</div>
            <div>体验版</div>
          </div>

          <div class="flex">
            <div>1212</div>
            <div>
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  <img src="../assets/logo.png" alt="" /><i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="skip">首页</el-dropdown-item>
                  <el-dropdown-item>项目地址</el-dropdown-item>
                  <el-dropdown-item divided command="back"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu></el-dropdown
              >
            </div>
          </div>
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from "./Untils/auth"
export default {
  components: {},
  computed: {},
  data() {
    return {}
  },
  created() {},
  methods: {
    handleCommand(command) {
      console.log(command)
      this.skip()
      this.back()
    },
    skip() {
      console.log(1)
      this.$router.push("/index")
    },
    back() {
      this.$router.push("/login")
      removeToken()
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.el-container,
.el-menu {
  height: 100%;
}
.footer {
  height: 50px;
  width: 100%;
  background-color: #4879fa;
  display: flex;
  justify-content: space-between;
}
.el-main {
  padding: 0;
  background-color: #fefefe;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
.flex {
  display: flex;
  align-items: center;
  color: #fff;
  div {
    margin: 0 10px;
  }
}
.el-icon--right {
  color: #fff;
}
</style>


