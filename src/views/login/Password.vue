<template>
  <div class="password">
    <login-header>
      <el-form
        slot="container"
        :rules="rules"
        ref="ruleForm"
        :model="ruleForm"
        label-position="left"
        label-width="0px"
      >
        <div class="title">
          <h3>找回密码</h3>
        </div>
        <!-- username -->
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm.username" placeholder="账号">
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>
        <!-- email -->
        <el-form-item prop="email">
          <el-input type="text" v-model="ruleForm.email" placeholder="邮箱">
            <i slot="prefix" class="fa fa-envelope-o"></i>
          </el-input>
        </el-form-item>
        <!-- 确认 -->
        <el-form-item>
          <el-button
            type="primary"
            @click.native.prevent="handleSubmit"
            style="width:100%"
            :loading="loading"
          >确定</el-button>
        </el-form-item>
      </el-form>
    </login-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";
@Component({
  components: {
    LoginHeader,
  },
})
export default class Login extends Vue {
  public loading: boolean = false; //是否发起网络请求
  public ruleForm: { username: string; email: string } = {
    username: "",
    email: "",
  };
  public rules: object = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    email: [
      {
        required: true,
        message: "请输入正确的邮箱地址",
        trigger: "blur",
      },
      {
        type: "email",
        message: "请输入正确邮箱地址",
        trigger: ["blur", "change"],
      },
    ],
  };
  handleSubmit(): void {
    (this.$refs["ruleForm"] as any).validate((valid: boolean) => {
      if (valid) {
        this.loading = true;
        // 网络请求
        (this as any).$axios
          .post("/api/users/findPwd", this.ruleForm)
          .then((res: any) => {
            console.log(res.data);
            this.loading = false;
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            this.$router.push("/login");
          })
          .catch((err: any) => {
            this.loading = false;
          });
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

i {
  font-size: 14px;
  margin-left: 8px;
}
</style>
