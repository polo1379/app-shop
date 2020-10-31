<template>
  <div class="signin">

    <div class="header">
      <mt-header title="每日签到">
        <router-link to="" slot="left" @click.native="go_me">
          <!-- <img src="../../public/img/icon.png" alt="" width="20" height="20"> -->
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="sigin_inner" >
        <mt-button type="primary" v-if="isSigned">
          已签到
        </mt-button>
        <mt-button type="primary" @click="signing()" v-else>点击签到</mt-button>
        <p>
          <span v-if="isSigned">已签到 {{days}} 天，加油 !</span>
          <span v-else>今天还没有签到</span>
        </p>
      </div>
    </div>
    <div class="calender">
        <Calendar :sundayStart="isSunStart" :textTop="textTop" 
        ></Calendar>
    </div>

    <div class="mask"></div>

    <div class="toast">
      <div class="toast_top">
        <div class="iconfont icon-qiandao">
          <!-- <img src="../../public/img/icon.png" alt="" width="40" height="40"> -->
        </div>
        <div>签到成功</div>
      </div>
      <div class="toast_bottom">
        <p>恭喜获得</p>
        <p>
          <span>10积分</span>
          积分可兑换礼品哦
        </p>
        <mt-button type="primary" @click="close">我知道了</mt-button>
        <div class="close" @click="close">×</div>
      </div>
    </div>

  </div>
</template>

<script>
import Calendar from 'vue-calendar-component';
export default {
  data(){
    return {
      isSunStart: true,
      isSigned:false,
      days:0,
      textTop:["日","一","二","三","四","五","六"]
    }
  },
  components:{
    Calendar
  },
  methods: {
    signing(){
      if(!window.sessionStorage.getItem("sign")){
        this.isSigned = true
        this.days += 1;
        let wh_today = document.querySelector(".wh_isToday");
        let mask = document.querySelector(".mask")
        let toast = document.querySelector(".toast")
        // console.log(wh_today.classList)
        wh_today.classList.add("wh_signed")
        toast.style.display = "block"
        mask.style.display = "block"
        window.sessionStorage.setItem("sign","true")
      } 
    },
    close(){
      let mask = document.querySelector(".mask")
      let toast = document.querySelector(".toast")
      toast.style.display = "none";
      mask.style.display = "none"
    },
    go_me(){
      this.$router.push('/main')
      this.$store.commit('change_footer','me')
    }
  },
  mounted(){
    let bg = document.querySelector('.signin').parentElement
    bg.style.backgroundColor='#f5f5f5'
    bg.style.height='100vh'

    if(window.sessionStorage.getItem("sign")){
      this.isSigned = true
      this.days += 1;
      let wh_today = document.querySelector(".wh_isToday");
      let mask = document.querySelector(".mask")
      let toast = document.querySelector(".toast")
      console.log(wh_today.classList)
      wh_today.classList.add("wh_signed")
    }
  },
}
</script>

<style>

.signin{
  position: relative;
}
.signin .header{
  background-image: url("../../public/img/my_bg.png");
  width: 100%;
  height: 200px;
  position: relative;
  padding: 10px 0;
}
.signin .mint-header{
  background-color: transparent;
}
.signin .mint-header .mint-header-title{
  font-size: 19px;
}
.signin .sigin_inner{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-40%);
  display: flex;
  flex-direction: column;
}
.signin .sigin_inner button{
  width: 100%;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 20px;
  background-color: transparent;
}
.signin .sigin_inner button .mint-button-text{
  margin: 10px;
  font-size: 1rem;
}
.signin .sigin_inner p{
  margin-top: 20px;
  color: #fff;
}
.signin .calender{
  width: 90%;
  margin: 0 auto;
  position: absolute;
  top: 85%;
  left: 5%;
}
.signin .wh_content_all{
  background-color: #fff;
  border-radius: 10px;
}
.signin .wh_top_changge li,.signin .wh_content_item, .signin .wh_content_item_tag{
  color:#000;
}
.signin .wh_jiantou1,.signin .wh_jiantou2{
  border-color: #000;
}
.signin .wh_content_item .wh_chose_day{
  background-color: #fff;
}
.signin .wh_content_item .wh_signed{
   position: relative;
   border-radius: 50%;
}
.signin .wh_content_item .wh_signed::before{
  content: "√";
  color: #fff;
  background-color: #1aa1fe;
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-block;
}
.signin .toast{
  display: block;
}
.signin .toast{
  width: 70%;
  position: absolute;
  left:50%;
  top: 50%;
  transform: translate(-50%,0%);
  height: 300px;
  z-index: 999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  display: none;
}
.signin .mask{
  width: 100%;
  position: absolute;
  height: 100vh;
  top:0;
  left: 0;
  right: 0;
  z-index: 666;
  background-color: rgba(0,0,0,.5);
  display: none;
}
.signin .toast .toast_top{
  flex: 4;
  background-image: url("../../public/img/my_bg.png");
  color: #fff;
  padding: 20px 0;
}
.signin .toast .toast_top>div{
  width:50%;
  margin: 20px auto 10px;
  text-align: center;
  font-size: 1.2rem;
}
.signin .toast .toast_bottom{
  flex: 6;
  background-color: #fff;
  padding: 40px 0;
  font-size: #222;
  font-size: 1.2rem;
  text-align: center;
  position: relative;
}
.signin .toast .toast_bottom>p{
  margin-bottom: 10px;
}
.signin .toast .toast_bottom span{
  color:#1aa1fe;
}
.signin .toast .toast_bottom .mint-button{
  border-radius: 20px;
  margin-top: 30px;
}
.signin .toast .toast_bottom .mint-button .mint-button-text{
  margin:0 20px;
}
.signin .toast .toast_bottom .close{
  width: 40px;
  height: 40px;
  line-height: 35px;
  border-radius: 50%;
  color: #fff;
  font-size:40px;
  text-align: center;
  border: 1px solid #FFF;
  position: absolute;
  bottom: -40%;
  left: 50%;
  transform: translateX(-50%);
}
</style>