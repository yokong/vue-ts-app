<template>
  <el-scrollbar class="el-scrollbar">
    <el-menu class="el-menu-slide" router>
      <el-menu-item index="1">
        <i></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";
@Component({
  components: {},
})
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  width: 200px;
  border-right: 1px solid #e6e6e6;
  background: #fff;
  .el-menu-slide {
    border-right: none;
    i {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
