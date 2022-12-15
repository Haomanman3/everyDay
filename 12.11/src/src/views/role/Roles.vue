<template>
  <div>
    <el-card class="box-card">
      <el-button type="primary" @click="addRole">添加角色</el-button>
      <el-table
        :data="roleList"
        style="width: 100%"
        row-key="id"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="trees"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <roleAdd ref="addRole" @submitForm="submitForm" @edit="edit" />
    <tree ref="treeList" />
  </div>
</template>

<script>
import roleAdd from "./AddOrUpdate.vue"
import tree from "./Tree.vue"
import { getAllo, getRole, delAllo } from "@/api/user.js"
export default {
  data() {
    return {
      roleList: [],
      dialogFormVisible: false,
      showTree: false
    }
  },
  methods: {
    roleLists() {
      getRole().then((res) => {
        console.log(res)
        this.roleList = res.data.data
      })
    },
    addRole() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.addRole.show1()
      })
    },
    edit(row) {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.addRole.edit(row)
      })
      this.ruleForm = {}
    },
    trees() {
      this.showTree = true
      this.$nextTick(() => {
        this.$refs.treeList.show()
      })
    },

    // update() {
    //   this.roleList[this.i].roleName = this.ruleForm1.roleName
    //   this.roleList[this.i].roleDesc = this.ruleForm1.roleDesc
    //   this.dialogFormVisible1 = false
    // },

    handleDelete(row) {
      // console.log(index);
      delAllo({ id: row.id }).then((res) => {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.roleList.filter((item) => {
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

        this.roleLists()
      })
    },
    submitForm(ruleForm) {
      getAllo(ruleForm).then((res) => {
        // console.log(res)
      })
      this.roleLists()
      this.dialogFormVisible = false
      this.ruleForm = {}
    }
  },
  created() {
    this.roleLists()
  },
  mounted() {},
  components: {
    roleAdd,
    tree
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
</style>
