<template>
  <div id="app">
    <van-tabbar v-model="active" active-color="#e96d30" inactive-color="#999">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat">消息</van-tabbar-item>
      <van-tabbar-item icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
};
</script>
<style scoped>
</style>