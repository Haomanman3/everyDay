<template>
  <div>
    <el-dialog
      :title="id == -1 ? '添加用户' : '编辑用户'"
      :visible.sync="visible"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="ruleForm.username"
            :disabled="!this.id == -1"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="this.id == -1">
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
          <el-button @click="quxiao">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      visible: false,
      id: -1,
      ruleForm: {
        username: "",
        password: "",
        mobile: "",
        email: ""
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
    /**模态框显示 */
    show() {
      this.visible = true
    },
    /**添加 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /**判断是添加还是修改 */
          if (this.id == -1) {
            this.$emit("submitForm", this.ruleForm)
          } else {
            this.$emit("edit", this.ruleForm)
          }
        } else {
          return false
        }
      })
    },
    /**回填 */
    edit(row) {
      // console.log(row)
      this.visible = true
      this.id = row.id
      this.ruleForm.username = row.username
      this.ruleForm.mobile = row.mobile
      this.ruleForm.email = row.email
    },
    /**点击取消让模态框隐藏 */
    quxiao() {
      this.visible = false
      this.id = -1
      this.ruleForm = {}
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
