<template>
  <div class="login">
    <h1>iHRM后台登录系统</h1>
    <div v-show="flag == false">
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.mobile">
            <i slot="prefix" class="el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" show-password
            ><i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Logins"> 登录 </el-button></el-form-item
        >
      </el-form>
    </div>
    <div v-show="flag == true">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="11位手机号">
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="ruleForm.code" placeholder="输入验证码">
            <el-button round>获取验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="ruleForm.pwd" placeholder="6-16位密码"> </el-input>
        </el-form-item>
        <el-form-item prop="affirm">
          <el-input v-model="ruleForm.affirm" placeholder="确认密码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"> 下一步 </el-button></el-form-item
        >
      </el-form>
    </div>
    <div class="footer">
      <p v-show="flag == false" @click="flag = !flag">还没有账号？立即注册</p>
      <p v-show="flag == true" @click="flag = !flag">使用已有帐户登录</p>
    </div>
  </div>
</template>

<script>
import {Login} from './api/Login.js'
import {setToken} from './Untils/auth.js'
export default {
  components: {},
  computed: {},
  data() {
    return {
      ruleForm: {
        phone: '',
        code: '',
        pwd: '',
        affirm: '' //确认密码
      },
      form: {
        mobile: '',
        password: ''
      },
      flag: false,
      rules: {}
    }
  },
  created() {

	},
  methods: {
		Logins() {
			Login(this.form).then((res) => {
				console.log(res);
				if(res.data.code == 10000){
					setToken(res.data.data)
					this.$router.push("/about")
				}else {
					alert("用户名或者密码的格式不正确")
				}
			})
		}
	},
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/11.jpg);
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  overflow: hidden;
}

h1 {
  margin: 100px auto;
  color: #fff;
}
.el-form {
  width: 500px;
  height: 380px;
  margin: 0 auto;
}
.el-input {
  width: 100%;
  height: 50px;
  margin: 5px 0;
}
.el-button {
  width: 500px;
  height: 50px;
  text-align: center;
}
.footer {
  color: #fff;
}
p {
  margin-top: 10px;
}
</style>
