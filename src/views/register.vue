<template>
  <div class="register">
    <!-- 顶部导航开始 -->
    <mt-header title="注册" class="header-color">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- <hr class="hr-color" /> -->

    <div class="inputs">
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        :attr="{ maxlength: 15 }"
        v-model="username"
        :state="usernameState"
        @blur.native.capture="checkUsername"
        class="reg"
      ></mt-field>

      <mt-field
        type="text"
        label="密码"
        placeholder="请输入密码"
        :attr="{ maxlength: 16, autocomplete: 'off' }"
        v-model="password"
        :state="passwordState"
        @blur.native.capture="checkPassword"
        class="pass"
      ></mt-field>

      <mt-field
        type="text"
        label="确认密码"
        placeholder="请再次输入密码"
        :attr="{ maxlength: 16, autocomplete: 'off' }"
        v-model="conpassword"
        :state="conpasswordState"
        @blur.native.capture="checkConpassword"
        class="apass"
      ></mt-field>

      <mt-field
        type="text"
        label="手机号码"
        placeholder="请输入手机号码"
        :attr="{ maxlength: 11, autocomplete: 'off' }"
        v-model="phone"
        :state="conphoneState"
        @blur.native.capture="checkconphone"
        class="phone"
      ></mt-field>
      <!-- <hr class="hr-color" /> -->

      <div class="peng">
        <input
          type="checkbox"
          class="kk"
          v-bind:checked="isChecked"
          v-on:click="handleDisabled"
        />
        <p>我已阅读并同意</p>
        <span>《APP用户服务协议》</span>
      </div>

      <mt-button
        type="primary"
        size="normal"
        @click="handle"
        class="kx"
        v-bind:disabled="isDisabled"
        >注册</mt-button
      >
    </div>
  </div>
</template>


<style>
.register .mint-header-button{
  padding-left: 6px;
}
.register .mint-header-title{
  font-size: 18px;
}
.register .mint-cell{
  margin-top: 10px;
}
.register .mint-cell-wrapper{
  background: none;
  border-bottom: 1px solid #d9d9d9;
  padding: 0;
  font-size: 14px;
}
.register .header-color {
  background-color: #fff;
  color: #000;
  padding: 30px 10px;
  border-bottom: 1px solid #d9d9d9;
}

.register input[type="checkbox"] {
  cursor: pointer;
  position: relative;
}

.register input[type="checkbox"]::after {
  position: absolute;
  top: 0;
  background-color: #fff;
  color: #fff;
  width: 14px;
  height: 14px;
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: " ";
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  margin-top: -1px;
  margin-left: -1px;
}

.register input[type="checkbox"]:checked::after {
  content: "";
  background-color: #037df3;
  border-color: #037df3;
  background-color: #037df3;
}

.register input[type="checkbox"]:checked::before {
  content: "";
  position: absolute;
  left: 3px;
  width: 3px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  z-index: 1;
}
.register .inputs{
  margin-top: 36px;
  padding: 0 20px;
}
.register .inputs .kx {
  width: 300px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register .inputs .hr-color {
  opacity: 0.4;
  margin-top: 0px;
}
.register .inputs .peng {
  display: flex;
  font-size: 11px;
  margin: 16px 0px;
}
.register .inputs .peng *{
  margin-right: 4px;
}
.register .inputs .peng span {
  color: rgb(87, 87, 192);
}
/* .register .inputs .peng .kk {
  margin-top: 3px;
} */
</style>

<script>
export default {
  data() {
    return {
      //用户名
      username: "",
      //密码
      password: "",
      //确认密码
      conpassword: "",
      //用户名的状态
      usernameState: "",
      //密码状态
      passwordState: "",
      //确认密码状态
      conpasswordState: "",
      //手机号码
      phone: "",
      //手机号的状态
      conphoneState: "",
      //判断
      isDisabled: true,
      isChecked: false,
    };
  },
  methods: {
    //绑定事件
    handleDisabled() {
      this.isChecked = !this.isChecked;
      if (this.isChecked == false) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },
    //校验用户名
    checkUsername() {
      let usernameRegExp = /^[0-9a-zA-Z_]{4,10}$/;
      if (usernameRegExp.test(this.username)) {
        this.usernameState = "success";
        return true;
      } else {
        this.usernameState = "error";
        this.$toast({
          message: "用户名必填俩位到十位",
          position: "",
          duration: 3000,
        });
        return false;
      }
    },
    //校验密码
    checkPassword() {
      let passwordRegExp = /^[0-9a-zA-Z_]{8,15}$/;
      if (passwordRegExp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.passwordState = "error";
        this.$toast({
          message: "密码必须为字母、数字的组合体",
          position: "",
          duration: 3000,
        });
        return false;
      }
    },

    //校验再次密码
    checkConpassword() {
      if (this.password != this.conpassword) {
        this.$toast({
          message: "俩次密码不一致",
          position: "",
          duration: 3000,
        });
        this.conpasswordState = "error";
        return false;
      } else {
        this.conpasswordState = "success";
        return true;
      }
    },
    //手机号码
    checkconphone() {
      let conphoneRegExp = /^[1][358]\d{9}$/;
      if (conphoneRegExp.test(this.phone)) {
        this.conphoneState = "success";
        return true;
      } else {
        this.conphoneState = "error";
        this.$toast({
          message: "请输入11位数字号码",
          position: "",
          duration: 3000,
        });
        return false;
      }
    },
    handle() {
      if (
        this.checkUsername() &&
        this.checkPassword() &&
        this.checkConpassword() &&
        this.checkconphone()
      ) {
        this.axios
          .post(
            "/register",
            "username=" + this.username + "&password=" + this.password + "&phone=" + this.phone
          )
          .then((res) => {
            if (res.data.code == 1) {
              this.$messagebox("注册提示", "恭喜您，注册成功");
              this.$router.push("/");
            } else {
              this.$messagebox("注册提示", "用户名已经占用");
            }
          });
      }
    },
  },
};
</script>