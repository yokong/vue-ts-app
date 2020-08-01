<template>
  <div class="login">
    <login-header>
      <template v-slot:container>
        <el-form
          :rules="rules"
          ref="ruleForm"
          :model="ruleForm"
          label-position="left"
          label-width="0px"
        >
          <div class="title">
            <h3>账号密码登录</h3>
          </div>
          <!-- username -->
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model="ruleForm.username"
              auto-complete="off"
              placeholder="请输入账号"
            >
              <i slot="prefix" class="fa fa-user-o"></i>
            </el-input>
          </el-form-item>
          <!-- pwd -->
          <el-form-item prop="pwd">
            <el-input type="text" v-model="ruleForm.pwd" auto-complete="off" placeholder="请输入密码">
              <i slot="prefix" class="fa fa-lock"></i>
            </el-input>
          </el-form-item>
          <!-- 登录button -->
          <el-form-item>
            <el-button
              :loading="isLogin"
              @click.native.prevent="handleSubmit"
              type="primary"
              style="width:100%"
            >登录</el-button>
          </el-form-item>

          <!-- 七天登录和忘记密码-->
          <el-form-item>
            <el-checkbox v-model="ruleForm.autoLogin" :checked="ruleForm.autoLogin">七天内自动登录</el-checkbox>
            <el-button @click="$router.push('/password')" class="forget" type="text">忘记密码</el-button>
          </el-form-item>
        </el-form>
      </template>
    </login-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import LoginHeader from "./LoginHeader.vue";
@Component({
  components: {
    LoginHeader,
  },
})
export default class Login extends Vue {
  // 存储用户信息
  @Action("setUser") setUser: any;

  public isLogin: boolean = false;
  public rules: object = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
  };
  public ruleForm: {
    username: String;
    pwd: String;
    autoLogin: boolean;
  } = {
    username: "",
    pwd: "",
    autoLogin: true,
  };

  async handleSubmit(): Promise<any> {
    (this.$refs["ruleForm"] as any).validate((valid: boolean) => {
      if (valid) {
        this.isLogin = true;
        (this as any).$axios
          .post("/api/users/login", this.ruleForm)
          .then((res: any) => {
            console.log(res.data);
            this.isLogin = false;
            // 存储token
            localStorage.setItem("tsToken", res.data.token);
            // 存储到vuex中
            this.setUser(res.data.token);
            // 登陆成功跳转
            this.$router.push("/");
          })
          .catch(() => {
            this.isLogin = false;
          });
        console.log("校验通过");
      }
    });
  }
  // @Provide() ruleForm: {
  //   username: String;
  //   pwd: String;
  //   autoLogin: boolean;
  // } = {
  //   username: "",
  //   pwd: "",
  //   autoLogin: true,
  // };
  // @Provide() rules = {};
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
.forget {
  float: right;
}
</style>
