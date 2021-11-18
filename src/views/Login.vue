<template>
  <div class="login_page">
    <div class="login_form_container">
      <div class="login_form_header">
        <div class="login_logo"></div>
      </div>
      <el-form
        ref="loginForm"
        :model="loginFormData"
        label-width="50px"
        :rules="rules"
        :hide-required-asterisk="true"
        class="login_form_content"
        size="small"
      >
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="loginFormData.account"
            placeholder="请输入账号"
            :clearable="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginFormData.password"
            placeholder="请输入密码"
            :clearable="true"
            :show-password="true"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <span class="login_form_forgot_password" @click="goPage('forgetPwd')"
            >忘记密码?</span
          >
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm"
            class="btn_login_form_submit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="login_form_footer">
        <span class="login_form_register" @click="goPage('register')"
          >立即注册</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
// 接受组件传值

// 变量定义
type loginFormDataData = {
  account: string
  password: string
}
const loginFormData = reactive<loginFormDataData>({
  account: '',
  password: ''
})
const loginForm = ref<HTMLFormElement>({} as HTMLFormElement)

const rules = reactive({
  account: [
    {
      required: true,
      message: '请输入正确账号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入正确的密码',
      trigger: 'blur'
    }
  ]
})

// 生命周期函数

// TODO:跳转页面需要修改
const goPage = (pagename: string) => {
  alert(`go to ${pagename} page`)
}
// 方法
const submitForm = async () => {
  loginForm.value.validate((valid: boolean) => {
    if (valid) {
      const { account, password } = loginFormData
      console.log('success', account, password)
      // TODO:登录验证需要修改
      if (account === '1' && password === '1') {
        goPage('main')
      }
      return true
    }
    console.log('error submit!!')
    return false
  })
}
</script>
<style scoped>
.login_page {
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_logo {
  height: 100px;
  margin-top: 30px;
  position: relative;
  background-color: azure;
}
.login_form_container {
  width: 360px;
  height: 400px;
  background-color: aqua;
  border-radius: 10px;
  display: flex;
  position: relative;
  padding: 20px;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-items: center;
}
.login_form_content {
  margin-top: 30px;
  padding: 0 40px;
}
.login_form_forgot_password {
  float: right;
  cursor: pointer;
  text-decoration: underline;
}
.btn_login_form_submit {
  /* margin-top: 30px; */
  width: 200px;
}

.login_form_footer {
  background-color: white;
  flex: 1;
  /* display: flex; */
  position: relative;
}
.login_form_register {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
}
.login_form_register:hover {
  color: bisque;
}
</style>
