<template>
  <div id="app">
    <div class="cont">
      <div class="zhu">
        <p>注册</p>
      </div>
      <p class="bt">用户登录</p>
      <div class="bd">
        <van-tabs v-model="active">
          <van-tab title="账号密码登录">
            <van-form @submit="onSubmit">
              <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
              />
              <div style="margin: 16px">
                <van-button round block type="info" native-type="submit">
                  登录
                </van-button>
              </div>
            </van-form>
          </van-tab>
          <van-tab title="手机验证码登录">内容 2</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style scoped>
.cont {
  width: 100%;
  background: #ec7531;
  height: 200px;
}
.zhu {
  float: right;
  padding-right: 20px;
  color: #ffffff;
  font-size: 20px;
}
.bt {
  float: left;
  padding-top: 30px;
  padding-left: 30px;
  font-size: 20px;
  color: #ffffff;
}
.bd {
  width: 375px;
  height: 250px;
  float: left;
  margin-left: 20px;
  border-radius: 10px;
  border: 1px solid #dedede;
}
</style>