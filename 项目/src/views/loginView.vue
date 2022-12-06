<template>
  <div class="home">
    <img src="../../public/xxxx.gif" alt="" class="img" />
    <div class="login">
      <img src="../assets/1.png" alt="" class="img1" />

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密  码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      // console.log(this ,'48');
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!")
          this.$http({
            url: "/api/login",
            method: "post",
            data: this.ruleForm
          }).then((res) => {
            console.log(res)
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  position: fixed;
}
.img {
  width: 100%;
  height: 100%;
}
.img1 {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  border-radius: 100px;
}
.login {
  width: 500px;
  height: 300px;
  background-color: rgba(123, 123, 123, 0);
  margin: 100px auto;
  position: absolute;
  top: 50px;
  left: calc(50% - 250px);
  padding: 25px;
  border-radius: 10px;
}
.el-form {
  margin-top: 80px;
}
</style>
