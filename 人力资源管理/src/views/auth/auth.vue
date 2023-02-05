<template>
  <div>
    <!-- 权限 -->
    <el-card class="box-card">
      <div class="btn">
        <span></span>
        <el-button type="primary" @click="add">添加权限</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table
        :data="$store.state.auth.auData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column label="名称" prop="name"> </el-table-column>
        <el-table-column label="标识" prop="code"></el-table-column>
        <el-table-column label="描述" prop="description"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="add">添加</el-button>
            <el-button type="text" size="small" @click="edit(scope.row)">
              编辑</el-button
            >
            <el-button type="text" size="small" @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <dialogs ref="daialog" />
  </div>
</template>

<script>
import dialogs from './dialog.vue'
export default {
  components: {
    dialogs
  },
  computed: {},
  data() {
    return {}
  },
  created() {
    this.auths()
  },
  methods: {
    auths() {
      this.$store.dispatch('auth/authList')
    },
    add() {
      this.$refs.daialog.dialogVisible = true
    },
    edit(row) {
      this.$refs.daialog.ht(row)
    },
    del(obj) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store.dispatch('auth/dels', obj.id)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box-card {
  margin: 10px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
