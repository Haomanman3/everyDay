<template>
  <div>
    <el-card class="box-card">
      <el-input
        placeholder="请输入内容"
        v-model="params.query"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
      <el-button type="primary" @click="addorupdate">添加用户</el-button>

      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色"> </el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="edit(scope.row)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="handleDelete(scope.row)"
            ></el-button>
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="allos(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[1, 5, 7, 10]"
        :page-size="this.params.pagesize"
        :pagenum="this.params.pagenum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
      >
      </el-pagination>
    </el-card>

    <UserAddOrUpdate
      v-if="visible"
      ref="addorupdate"
      @submitForm="submitForm"
      @edit="edit"
    />
    <Alloca ref="Allo" @update="update" />
  </div>
</template>

<script>
import UserAddOrUpdate from "./User-Add-Update.vue"
import Alloca from "./Allo.vue"
import { getUser, getAdd, getDelete, getSearch, getUpdate } from "@/api/user.js"
import { STATUS } from "@/status/status.js"
export default {
  components: {
    UserAddOrUpdate,
    Alloca
  },
  data() {
    return {
      tableData: [],
      table: [],

      params: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      /**添加或修改的显示/隐藏 */
      visible: false
    }
  },
  methods: {
    /**添加弹出框 */
    addorupdate() {
      this.visible = true
      this.$nextTick(() => {
        this.$refs.addorupdate.show()
      })
    },
    /**用户列表 */
    initList() {
      getUser(this.params).then((res) => {
        // console.log(res)
        const { msg, status } = res.data.meta
        if (status == STATUS.SUCCESS) {
          const { total, users } = res.data.data
          this.tableData = users
          this.total = total
        } else {
          this.$message.error(msg)
        }
      })
    },
    /**添加数据 */
    submitForm(ruleForm) {
      getAdd(ruleForm).then((res) => {
        console.log(res)
        this.initList()
        this.visible = false
      })
    },
    /**编辑数据 */
    edit(row) {
      this.visible = true
      this.$nextTick(() => {
        this.$refs.addorupdate.edit(row)
      })
    },
    /**每页几条 */
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.params.pagesize = val
      this.initList()
    },
    /**当前页切换 */
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      /**修改当前页 */
      this.params.pagenum = val
      /**重新渲染 */
      this.initList()
    },
    /**删除 */
    handleDelete(row) {
      getDelete({ id: row.id }).then(() => {
        // console.log(res, id)
        this.$confirm("此操作将永久删除, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.tableData.filter((item) => {
              return !item.id
            })
            this.$message({
              type: "success",
              message: "删除成功!"
            })
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            })
          })
      })
    },
    /**搜索 */
    search(params) {
      getSearch(params).then((res) => {
        console.log(res)
        const { data, meta } = res.data
        if (meta.status == STATUS.SUCCESS) {
          this.tableData = data.users
          this.$message.success(meta.msg)
          this.initList()
        } else {
          this.$message.error(meta.msg)
        }
      })
    },
    /**分配权限 */
    allos(row) {
      console.log(row)
      this.visible = true
      this.$nextTick(() => {
        this.$refs.Allo.allo(row)
      })
    },
    update(obj) {
      getUpdate(obj).then((res) => {
        console.log(res)
      })
    }
  },
  created() {
    this.initList()
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.center {
  margin: 10px 0;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.el-input {
  width: 450px;
  margin-right: 10px;
}
.el-table {
  margin-top: 10px;
}
</style>
