<template>
  <div class="home">
    <div class="home-body">
      <h4 class="title">欢迎来到鱼见后台管理系统</h4>
      <p class="des">xxxxxxxxxxxxxxxxxxxxxxxx</p>
      <el-button @click="learn">进入学习</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Home extends Vue {
  public learn(): void {
    window.open("http://www.bilibili.com");
  }
}
</script>


<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat;
  background-size: 100% 100%;
  .home-body {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    padding: 100px;
    box-sizing: border-box;
    .title {
      font-size: 32px;
      font-weight: bold;
      line-height: 60px;
    }
    .des {
      font-size: 18px;
      margin: 40px 0;
    }
  }
}
</style>
