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
      <el-button type="primary" @click="dialogFormVisible = true"
        >添加用户</el-button
      >

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
              @click="edit(scope.row, scope.$index)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="handleDelete(scope.$index)"
            ></el-button>
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="edit1(scope.row, scope.$index)"
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

    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确定</el-button
          >
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible1">
      <el-form
        :model="ruleForm1"
        :rules="rules"
        ref="ruleForm1"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm1.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm1.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm1.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="update">修改</el-button>
          <el-button @click="dialogFormVisible1 = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="分配角色" :visible.sync="dialogFormVisible2">
      <el-form ref="form" :model="form">
        <el-form-item label="当前的用户">
          <el-input v-model="form.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="当前的角色">
          <el-input v-model="form.role_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="分配新角色">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="update1">修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // input: "",
      tableData: [],
      table: [],
      region: "",
      params: {
        query: "",
        pagenum: 1,
        pagesize: 1
      },
      total: 0,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      i: -1,
      ruleForm: {
        username: "",
        password: "",
        mobile: "",
        email: ""
      },
      ruleForm1: {
        username: "",
        password: "",
        mobile: "",
        email: ""
      },
      form: {
        username: "",
        role_name: "",
        region: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        mobile: [{ required: true, message: "请输入电话", trigger: "blur" }]
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.params.pagesize = val
      this.pages()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.params.pagenum = val
      this.pages()
    },
    pages() {
      this.tableData = this.table.slice(
        (this.params.pagenum - 1) * this.params.pagesize,
        this.params.pagenum * this.params.pagesize
      )
    },
    search() {
      this.tableData = this.table.filter((item) => {
        return item.username.includes(this.params.query)
      })
    },
    edit(row, index) {
      this.dialogFormVisible1 = true
      this.ruleForm1.username = row.username
      this.ruleForm1.email = row.email
      this.ruleForm1.mobile = row.mobile
      this.i = index
    },
    edit1(row, index) {
      this.dialogFormVisible2 = true
      this.form.role_name = row.role_name
      this.form.username = row.username
    },

    update() {
      this.tableData[this.i].email = this.ruleForm1.email
      this.tableData[this.i].mobile = this.ruleForm1.mobile
      this.dialogFormVisible1 = false
    },
    update1() {
      this.$message.error("更新失败")
      this.dialogFormVisible2 = false
    },

    handleDelete(index) {
      // console.log(index);
      this.tableData.splice(index, 1)
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!")
          let obj = {
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            mobile: this.ruleForm.mobile,
            email: this.ruleForm.email
          }
          this.table.push(obj)
          this.dialogFormVisible = false
          this.ruleForm = {}
        } else {
          console.log("error submit!!")
          return false
        }
      })
      this.pages()
    }
  },
  created() {
    this.$http({
      url: "/api/users",
      method: "get",
      params: this.params
    }).then((res) => {
      console.log(res)
      this.tableData = res.data.data.users
      this.total = res.data.data.total
      this.params.pagenum = res.data.data.pagenum
      this.table = this.tableData
      this.pages()
    })
  },
  mounted() {},
  components: {},
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
