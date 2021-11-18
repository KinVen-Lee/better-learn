<template>
  <div class="register_page">
    <div class="register_container">
      <div class="register_header">
        <el-steps :active="1" align-center class="register_header_steps">
          <el-step title="Step 1" description="填写注册信息"></el-step>
          <el-step title="Step 2" description="结果"></el-step>
        </el-steps>
      </div>
      <div class="register_content"></div>
      <div class="register_foorter"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.register_page {
  background-color: white;
  height: 100%;
}
.register_container {
  background-color: aquamarine;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.register_header {
  /* height: 50px; */
  /* width: 500px; */
  width: 100%;
  background-color: aliceblue;
}
.register_header_steps {
  margin: 20px auto;
  width: 500px;
}
.register_content {
  flex: 1;
  background-color: red;
}
.register_foorter {
  height: 50px;
  background-color: aliceblue;
}
</style>
