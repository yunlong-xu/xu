<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- 导航栏 -->
    <!-- 登录表单 -->
    <van-cell-group>
      <van-field required clearable label="手机号" placeholder="请输入手机号" />

      <van-field type="password" label="验证码" placeholder="请输入验证码" required />
    </van-cell-group>
    <!-- 登录表单 -->
    <!-- 登录按钮 -->
    <div class="btn-wrap">
      <van-button class="btn" type="info">登录</van-button>
    </div>
    <!-- 登录按钮 -->
  </div>
</template>

<script>
export default {
  name: 'LoginIndex'
}
</script>

<style lang="less" scoped>
.login {
  .btn-wrap {
    padding: 20px;
    .btn {
      width: 100%;
      background-color: #6db4fb;
      color: #fff;
    }
  }
}
</style>
