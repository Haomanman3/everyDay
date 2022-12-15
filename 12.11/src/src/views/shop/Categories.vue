<template>
  <div>
    <el-card class="box-card">
      <el-button type="primary" @click="addCate">添加分类</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
        row-key="cat_id"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="cat_name" label="分类名称"> </el-table-column>
        <el-table-column prop="cat_deleted" label="是否有效">
          <template>
            <i class="el-icon-success"></i>
          </template>
        </el-table-column>
        <el-table-column prop="cat_level" label="排序">
          <template slot-scope="scope">
            <el-tag v-show="scope.row.cat_level == 0">一级</el-tag>
            <el-tag type="success" v-show="scope.row.cat_level == 1"
              >二级</el-tag
            >
            <el-tag type="warning" v-show="scope.row.cat_level == 2"
              >三级</el-tag
            >
          </template>
        </el-table-column>
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
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- <el-dialog title="添加商品分类" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="ruleForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" prop="name">
          <el-cascader v-model="value"></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog> -->
    <cateAlert
      ref="showCate"
      @submitForm="submitForm"
      @edit="edit"
      v-if="dialogFormVisible"
    />
  </div>
</template>

<script>
import { cate, delShops, addShops } from "@/api/user.js"
import cateAlert from "./Cate.vue"
export default {
  data() {
    return {
      value: "",
      tableData: [],
      dialogFormVisible: false
      // ruleForm: {
      //   roleName: "",
      //   roleDesc: ""
      // },
      // rules: {
      //   roleName: [
      //     { required: true, message: "请输入角色名称", trigger: "blur" }
      //   ],
      //   roleDesc: [
      //     { required: true, message: "请输入描述角色", trigger: "blur" }
      //   ]
      // }
    }
  },
  methods: {
    addCate() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.showCate.showCategory()
      })
    },
    submitForm(ruleForm) {
      addShops(ruleForm).then((res) => {
        console.log(res)
      })
    },
    edit(row) {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.showCate.edit(row)
      })
    },
    handleDelete(row) {
      delShops({ id: row.id }).then((res) => {
        console.log(res)
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
    }
  },
  created() {
    cate().then((res) => {
      console.log(res)
      this.tableData = res.data.data.result
    })
  },
  mounted() {},
  components: {
    cateAlert
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
.el-icon-success {
  color: #5bec7e;
}
</style>
