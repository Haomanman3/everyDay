<template>
  <div>
    <el-dialog
      :title="this.id == -1 ? '添加角色' : '编辑角色'"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确定</el-button
          >
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      id: -1,
      dialogFormVisible: false,
      ruleForm: {
        roleName: "",
        roleDesc: ""
      },
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" }
        ],
        roleDesc: [
          { required: true, message: "请输入描述角色", trigger: "blur" }
        ]
      }
    }
  },
  created() {},
  methods: {
    show1() {
      this.dialogFormVisible = true
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /**判断是添加还是修改 */
          if (this.id == -1) {
            this.$emit("submitForm", {
              ...this.ruleForm,
              id: new Date().getTime()
            })
          } else {
            this.$emit("edit", this.ruleForm)
          }
        } else {
          return false
        }
      })
    },
    edit(row) {
      this.dialogFormVisible = true
      this.ruleForm.roleName = row.roleName
      this.ruleForm.roleDesc = row.roleDesc
      this.id = row.id
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
