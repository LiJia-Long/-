<template>
  <div id="app">
    <div class="cont">
      <div class="dao">
        <van-row>
          <van-col span="24">
            <van-search
              v-model="value"
              background="#ec7531"
              show-action
              label="地址"
              placeholder="请输入搜索关键词"
              @search="onSearch"
            >
              <template #action>
                <van-icon name="scan" class="s" />
              </template>
            </van-search>
          </van-col>
        </van-row>
      </div>
      <div class="lb">
        <van-row>
          <van-col span="24">
            <van-swipe
              class="my-swipe"
              :autoplay="3000"
              indicator-color="white"
            >
              <van-swipe-item
                ><img src="../assets/img/Lb1.png" width="100%"
              /></van-swipe-item>
              <van-swipe-item
                ><img src="../assets/img/Lb2.png" width="100%"
              /></van-swipe-item>
              <van-swipe-item
                ><img src="../assets/img/Lb3.png" width="100%"
              /></van-swipe-item>
              <van-swipe-item
                ><img src="../assets/img/Lb4.png" width="100%"
              /></van-swipe-item>
              <van-swipe-item
                ><img src="../assets/img/Lb5.png" width="100%"
              /></van-swipe-item>
            </van-swipe>
          </van-col>
        </van-row>
      </div>
      <div class="sp1">
        <van-row>
          <van-col span="24">
             <img src="../assets/img/1.png" width="40%" align="left" />
        <div class="p">
          <p>日韩耳环15元系列</p>
          <p>卡戴尔钻业</p>
          <p>上海五角世贸城sh91000</p>
          <p>￥53.57</p>
        </div>
          </van-col>
        </van-row>
       
      </div>
      <div class="sp1 mar">
       <van-row>
          <van-col span="24">
             <img src="../assets/img/2.png" width="40%" align="left" />
        <div class="p">
          <p>日韩耳环15元系列</p>
          <p>卡戴尔钻业</p>
          <p>上海五角世贸城sh91000</p>
          <p>￥53.57</p>
        </div>
          </van-col>
        </van-row>
      </div>
      <div class="sp1 mar">
        <van-row>
          <van-col span="24">
             <img src="../assets/img/1.png" width="40%" align="left" />
        <div class="p">
          <p>日韩耳环15元系列</p>
          <p>卡戴尔钻业</p>
          <p>上海五角世贸城sh91000</p>
          <p>￥53.57</p>
        </div>
          </van-col>
        </van-row>
      </div>
      <div class="sp1 mar">
        <van-row>
          <van-col span="24">
             <img src="../assets/img/1.png" width="40%" align="left" />
        <div class="p">
          <p>日韩耳环15元系列</p>
          <p>卡戴尔钻业</p>
          <p>上海五角世贸城sh91000</p>
          <p>￥53.57</p>
        </div>
          </van-col>
        </van-row>
      </div>
      <div class="sp1 mar">
        <van-row>
          <van-col span="24">
             <img src="../assets/img/1.png" width="40%" align="left" />
        <div class="p">
          <p>日韩耳环15元系列</p>
          <p>卡戴尔钻业</p>
          <p>上海五角世贸城sh91000</p>
          <p>￥53.57</p>
        </div>
          </van-col>
        </van-row>
      </div>
      <div class="sp1 mar">
        <van-row>
          <van-col span="24">
             <img src="../assets/img/1.png" width="40%" align="left" />
        <div class="p">
          <p>日韩耳环15元系列</p>
          <p>卡戴尔钻业</p>
          <p>上海五角世贸城sh91000</p>
          <p>￥53.57</p>
        </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <Di></Di>
  </div>
</template>
<script>
import Di from "../components/Di";
export default {
  name: "Shou",
  components: {
    Di,
  },
};
</script>
<style scoped>
.s {
  color: #ffffff;
  font-size: 30px;
  float: right;
}
.dao {
  width: 100%;
  position: fixed;
  z-index: 9;
  top: 0%;
}
.lb {
  margin-top: 55px;
}
.cont {
  background: #eeeeee;
}
.sp1 img {
  float: left;
  margin: 10px;
}
.mar {
  margin-top: 10px;
  height: 190px;
}
.sp1 {
  width: 100%;
  background: #ffffff;
  height: 190px;
}
.sp1 div {
  float: left;
}
.p p {
  line-height: 25px;
}
.p p:nth-of-type(1) {
  font-size: 20px;
  font-weight: bold;
}
.p p:nth-of-type(2) {
  font-size: 13px;
  color: #999999;
}
.p p:nth-of-type(3) {
  font-size: 13px;
  color: #999999;
}
.p p:nth-of-type(4) {
  color: red;
  font-weight: bold;
}
</style>