<template>
  <div>
    <div class="title">
      <img src="../../public/img/login_title.jpg" alt="">
    </div>

    <div class="logo">
      <div class="wrap">
        <img src="../../public/img/logo.png" alt="">
        <p>点击上传头像</p>
      </div>
    </div>

    <div class="form">
      <div>
        <span>账号：</span>
        <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      
      <div>
        <span>密码：</span>
        <input type="text" placeholder="请输入密码" v-model="password">
      </div>
    </div>

    <div class="register">
      <p>
        <a href="">注册</a>
      </p>
      <p>
        <a href="">忘记密码</a>
      </p>
    </div> 

    <div class="btn" @click="check">
      <p>登录</p>
          <img src="../../public/img/login_button.png" alt="">
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
      if(this.username=='zc' & this.password=='12345'){
        this.$router.push('/class')
      }else{
        this.$messagebox('错误提示','用户名或密码错误')
      }
      console.log(this.username,this.password)
    }
  }
}
</script>


<style scoped>
  .title img{
    width: 100%;
  }

  .logo{
    width: 100%;
    height: 150px;
    margin: 10px 0;
    position: relative;
  }
  
  .wrap{
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .wrap img{
    width: 40%;
    margin-bottom: 10px;
  }
  .wrap p{
    font-size: 14px;
    color: #999;
  }

  .form{
    text-align: center;
  }
  .form input{
    width: 80%;
    padding: 14px 14px 14px 80px;
    margin-bottom: 20px;
    border: 1px solid #d2d2d2;
    border-radius: 24px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form input:focus{
    border: 1px solid #4cb1f9;
    box-shadow: 2px 2px 10px rgba(76, 177, 249, 0.5);
  }
  .form div{
    position: relative;
  }
  .form span{
    position: absolute;
    top: 19%;
    left: 17%;
    font-size: 18px;
    font-weight: 600;
  }

  .register{
    margin: 20px auto;
    width: 70%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .register p:nth-child(2n+1) a{
    color: #307ff6;
  }
  .register p:nth-child(2n) a{
    color: #999;
  }

  .btn{
    width: 80%;
    margin: 50px auto;
    position: relative;
  }
  .btn img{
    width: 100%;
    cursor: pointer;
    /* box-shadow: 10px 10px 5px #0255c4; */
  }
  .btn p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.5rem;
  
  }
</style>