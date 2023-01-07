<template>
  <div class="login">
    <h1>iHRM后台登录系统</h1>
    <div v-show="flag == false">
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.username">

          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password">
           
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button></el-form-item
        >
      </el-form>
    </div>
    <div v-show="flag == true">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        :size="formSize"
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

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import type { FormInstance, FormRules } from 'element-plus'

import LoginDefind from "./api/LoginDefind"
const store = useStore();
const router = useRouter();
const route = useRoute();
const components={
   LoginDefind
}
const form = reactive({
  username: "",
  password: "",
});
const ruleForm = reactive<FormRules>({
  phone:"",
  code: "",
  pwd: "",
  affirm: "",//确认密码
});
const flag = ref(false);
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/1.jpg);
  font-family: "Courier New", Courier, monospace;
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
  line-height: 50px;
}
.footer {
  color: #fff;
}
</style>
