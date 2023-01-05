<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#43a7fe"
          background-color="#5081fc"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#fff"
          router
        >
          <el-menu-item index="/home/good">
            <el-icon><Odometer /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/home/organ">
            <el-icon><setting /></el-icon>
            <span>组织架构</span>
          </el-menu-item>
          <el-menu-item index="/home/staff">
            <el-icon><User /></el-icon>
            <span>员工</span>
          </el-menu-item>
          <el-menu-item index="/home/company">
            <el-icon><setting /></el-icon>
            <span>公司设置</span>
          </el-menu-item>
          <el-menu-item index="/home/type">
            <el-icon><setting /></el-icon>
            <span>权限设置</span>
          </el-menu-item>
          <el-menu-item index="/home/social">
            <el-icon><Menu /></el-icon>
            <span>社保</span>
          </el-menu-item>
          <el-menu-item index="/home/work">
            <el-icon><DocumentCopy /></el-icon>
            <span>考勤</span>
          </el-menu-item>
          <el-menu-item index="/home/price">
            <el-icon><Calendar /></el-icon>
            <span>工资</span>
          </el-menu-item>
          <el-menu-item index="/home/approve">
            <el-icon><Postcard /></el-icon>
            <span>审批</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="top">
            <div class="left">
              <span>三</span>
              <span class="name">江苏传智播客教育可挤股份有限公司</span>
              <div class="exper">体验版</div>
            </div>
            <div class="right">
              <span>11</span>
              <span>22</span>
              <span>33</span>
              <span>44</span>
              <span>55</span>
              <div>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    星爷
                    <el-icon class="el-icon--right">
                      <arrow-down />
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>首页</el-dropdown-item>
                      <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { Setting , Odometer , User , Menu , DocumentCopy, Calendar, Postcard} from "@element-plus/icons-vue"
const store = useStore()
const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
.el-menu {
  height: 100%;
}
.el-main {
  padding: 0;
  background-color: #edeff2;
}
.el-header{
	height: 50px;
	line-height: 50px;
	background-color: #4777fa;
}
.top{
	display: flex;
	justify-content: space-between;
	color: #fff;
}
.left,.right{
	display: flex;
	align-items: center;


}
.el-dropdown-link{
	color: #fff;
	margin-top: 18px;
}
.name{
	margin: 0 10px;
}
.exper{
	width: 80px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border-radius: 15px;
	background-color: rgba(255, 255, 255, 0.579);
	margin-left: 10px;
}
.flex{
	display: flex;
.imgs{
	flex: 1;
}}
</style>
