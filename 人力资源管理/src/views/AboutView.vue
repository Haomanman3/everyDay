<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse == false ? '200px' : '60px'">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#5283fd"
          text-color="#fff"
          active-text-color="#43a7fe"
          router
          :collapse="isCollapse"
        >
          <el-menu-item
            :index="'/about' + item.path"
            v-for="item in list"
            :key="item.title"
            @click="change(item)"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="footer">
          <div class="flex">
            <div @click="isCollapse = !isCollapse">
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
				<div>
              <el-tag
                v-for="(tag, index) in list1"
                :key="tag"
                closable
                :disable-transitions="false"
                @close="handleClose(tag, index)"
                @click="$router.push(`/about${tag.path}`)"
              >
                {{ tag.title }}
              </el-tag>
            </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from './Untils/auth'
export default {
  components: {},
  computed: {},
  data() {
    return {
      isCollapse: false,
      list: [
        {
          title: '首页',
          icon: 'el-icon-c-scale-to-original',
          path: '/index'
        },
        {
          title: '员工',
          icon: 'el-icon-edit-outline',
          path: '/staff'
        },
        {
          title: '设置',
          icon: 'el-icon-s-flag',
          path: '/set'
        },
        {
          title: '权限管理',
          icon: 'el-icon-s-flag',
          path: '/auth'
        },
        {
          title: '社保',
          icon: 'el-icon-s-grid',
          path: '/social'
        },
        {
          title: '审批',
          icon: 'el-icon-s-promotion',
          path: '/rove'
        },
        {
          title: '考勤',
          icon: 'el-icon-s-promotion',
          path: '/check'
        },
        {
          title: '工资',
          icon: 'el-icon-s-promotion',
          path: '/salary'
        },
        {
          title: '组织架构',
          icon: 'el-icon-s-promotion',
          path: '/chart'
        }
      ],
      list1: []
    }
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
      this.$router.push('/index')
    },
    back() {
      this.$router.push('/login')
      removeToken()
    },
    change(item) {
      console.log(item)
      this.list1.push({ title: item.title, path: item.path })
      console.log(this.list1)
      // this.list1.forEach((ele, i) => {
      //   if (ele == item) {
      //     this.list1.splice(i, 1)
      //   }
      //   this.list1.unshift(item)
      // })
    },
    handleClose(tag, index) {
      console.log(tag)
      this.list1.splice(index, 1)
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
