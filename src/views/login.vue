<template>
  <div class="login">

    <div class="logo">
      <div class="wrap">
        <img src="../../public/img/logo.png" alt="">
      </div>
    </div>

    <div class="form">
      <div>
        <span class="iconfont icon-yonghu"></span>
        <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      
      <div>
        <span class="iconfont icon-mima"></span>
        <input type='password' placeholder="请输入密码" v-model="password" @keyup.enter="check">
      </div>
    </div>

    <div class="register">
      <p>
        <router-link to='/register'>
          <a>注册</a>
        </router-link>
      </p>
      <p>
        <a href="">忘记密码</a>
      </p>
    </div> 

    <div class="btn" @click="check">
      <p>登录</p>
      <!-- <img src="../../public/img/login_button.png" alt=""> -->
    </div>

    <div class="other_login">
      <div>其他登录方式</div>
    </div>

    <div class="login_method">
      <div class="iconfont icon-saoma"></div>
      <div class="iconfont icon-weixin1"></div>
      <div class="iconfont icon-qq"></div>
    </div>


  </div>

</template>

<script>
export default {
  data() {
    return {
      username:'',
      password:'',
    }
  },
  methods: {
    check(){
      this.axios.post(
        '/login',
        "username=" + this.username + "&password=" + this.password
      ).then((res)=>{
        if (res.data.code == 1) {
          let now = new Date()
          now.setDate(now.getDate()+1)
          let expires = now.toUTCString()
          console.log(res.data.username)
          document.cookie = `user=${res.data.username};expires=${expires};`

          this.$store.commit('change_username',res.data.username)
          this.$store.commit('change_userphone',res.data.phone)

          this.$toast({
            message: '登录成功',
            position: 'middle',
            duration: 2000,
            iconClass: 'iconfont icon-gou'
          });
          this.$router.push("/main");
          this.$store.commit('change_footer','index')
          
        } else {
          this.$messagebox("注册提示", "用户名或密码错误");
        }
      })
    },

  }
  
}

</script>


<style>
  .login{
    background-image: url(/img/login_bg.jpg);
    background-size: cover;
    height: 100vh;
    overflow: hidden;
  }

  .login .logo{
    width: 100%;
    height: 150px;
    margin: 50px 0 20px 0;
    position: relative;
  }
  
  .login .wrap{
    position: absolute;
    text-align: center;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .login .wrap img{
    width: 90%;
    margin-bottom: 10px;
  }
  .login .wrap p{
    font-size: 14px;
    color: #999;
  }

  .login .form{
    width: 100%;
    height: 140px;
    margin-top: 50px;
    text-align: center;
  }
  .login .form input{
    width: 80%;
    padding: 14px 14px 14px 60px;
    margin-bottom: 20px;
    border: none;
    border-radius: 24px;
    box-sizing: border-box;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.2);
    color: white;
  }
  .login .form input:focus{
    border: 1px solid #05b3ff;
    box-shadow: 2px 2px 10px rgba(65, 163, 255, 0.5);
  }
  .login .form input::-webkit-input-placeholder{
    color: rgba(0, 0, 0, 0.4);
  }
  .login .form div{
    position: relative;
  }
  .login .form span{
    position: absolute;
    top: -8%;
    left: 12%;
    font-size: 18px;
  }

  .login .register{
    margin: 20px auto;
    width: 70%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .login .register p:nth-child(2n+1) a{
    color: white;
  }
  .login .register p:nth-child(2n) a{
    color: white;
  }

  .login .btn{
    width: 80%;
    height: 50px;
    margin: auto;
    background: white;
    border-radius: 50px;
    box-sizing: border-box;
    text-align: center;
    line-height: 50px;
    box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.2);
  }

  .login .btn p{
    color: #1f94fe;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.5rem;  
  }
  .login .other_login{
    text-align: center;
    position: relative;
    margin-top: 60px;
  }

  .login .other_login div{
    width: 100px;
    height: 50px;
    line-height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:#b2b2b2;
    letter-spacing: 0.1rem;
    font-size: 14px;
  }
  .login .login_method{
    display: flex;
    justify-content: center;
    padding-top: 14px;
  }
  .login .iconfont{
    color: white;
    font-size: 22px;
    margin: 20px;
    text-align: center;
  }
  .login .login_method p{
    color: #222;
    font-size: 12px;
    margin-top: 6px;
  }
  .login .icon-qq{
    font-size: 24px;
  }
</style>