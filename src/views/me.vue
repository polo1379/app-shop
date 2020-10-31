<template>
  <div class="me">

    <div class="header">
      <div class="introduce">
        <div class="avatar">
          <img src="../../public/img/avatar.jpg" alt="">
        </div>
        <p>
          {{$store.state.user_name}}
          <span v-if="!$store.state.user_name">游客</span> 
        </p>
        <p>
          <span v-if="!$store.state.user_phone">12345678</span> 
          {{$store.state.user_phone}}
        </p>
      </div>
        <span class="iconfont icon-qiandao" @click="go_sign"></span>   
    </div>

    <div class="list">
      <mt-cell title="账户余额">
        <span slot="icon" class="iconfont icon-yue" style="color:#ff7c0b"></span>
        <span class="money">￥6.00</span>
      </mt-cell>
      <mt-cell title="积分管理" is-link @click.native="go_credit">
        <span slot="icon" class="iconfont icon-jifen" style="color:#fff800"></span>
      </mt-cell>
      <mt-cell title="实名认证" is-link @click.native="go_authentication">
        <span slot="icon" class="iconfont icon-shimingrenzheng" style="color:#ef4f4f"></span>
      </mt-cell>
      <mt-cell title="收货地址" is-link @click.native="go_address">
        <span slot="icon" class="iconfont icon-shouhuodizhi" style="color:#26a2ff"></span>
      </mt-cell>
      <mt-cell title="设置" is-link @click.native="go_setting">
        <span slot="icon" class="iconfont icon-setting" style="color:#4fef5c"></span>
      </mt-cell>
      <!-- <mt-cell title="分享赚积分" is-link>
        <span slot="icon" class="iconfont icon-share" style="color:yellow"></span>
      </mt-cell> -->
    </div>

    <mt-button size="large" @click="exit">退出登录</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      islogined: true
    }    
  },
  methods: {
    go_sign(){
      this.$router.push('/signin')
    },
    go_setting() {
      this.$router.push('/setting')
    },
    go_credit() {
      this.$router.push('/credit')
    },
    go_authentication() {
      this.$router.push('/authentication')
    },
    go_address() {
      this.$router.push('/address')
    },
    exit(){
      this.$router.push('/')
      let now = new Date()
      now.setDate(now.getDate()-2)
      let expires = now.toUTCString()
      document.cookie = `user="";expires=${expires};`
    }
  }
}
</script>

<style>
.me .iconfont{
  vertical-align: middle;
  font-size: 20px;
}

.me{
  height: 100vh;
  background-color: #f5f5f5;
}
.me .header{
  background-image: url("../../public/img/my_bg.png");
  width: 100%;
  height: 220px;
  color: #fff;
  font-size: 1.2rem;
  position: relative;
}
  .me .header .introduce{
  width: 50%;
  height: 100%;
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
  .me .header .introduce p{
  font-size: 16px;
}
  .me .header .introduce p:last-child{
  margin-top:-10px;
}
  .me .header .introduce .avatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: bottom;
  overflow: hidden;
  position: relative;
}
  .me .header .introduce .avatar img{
  width: 100%;
  height: 100%;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
  .me .header>span{
  position: absolute;
  top: 30px;
  right: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
  .me .list .money{
  color:#05b3ff;
  font-weight: bold;
  font-size: 1.2rem;
}
.me .mint-cell-wrapper{
  color: #303030;
  padding: 0 1rem;
}

.me .mint-cell-wrapper .mint-cell-title>.iconfont{
  margin-right: 8px;
}
.me .mint-cell-wrapper .mint-cell-title .mint-cell-text{
  color: #303030;
  font-size: 1rem;
}
.me .mint-button{
  width: 90%;
  height: 50px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 30px;
  background: #fff;
}
.me .mint-button .mint-button-text{
  font-size: 1.1rem;
  color: #303030;
}
.me .mint-cell-allow-right:after{
  border:2px solid #303030;
  border-bottom-width:0;
  border-left-width:0;
}
</style>