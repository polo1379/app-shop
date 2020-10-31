<template>
  <div class="header">
    <mt-header title="我的积分">
      <router-link to="" slot="left" @click.native="go_me">
        <mt-button icon='back'></mt-button>      
      </router-link>
      <div slot="right" class="iconfont icon-duihua"></div>
      <!-- <mt-button slot="right" icon='back'></mt-button> -->
    </mt-header>
    <!-- <div class="header-nav">
    <a href="" class="nav-left iconfont ">图标</a>
    <span>我的积分</span>
    <a href="" class="nav-right">图标</a>
    </div> -->

    <div class="circle">
      <span>9800</span>
      </div>
    <div class="midllen-nav">
      <span>积分兑换</span>
      <p>更多></p>  
    </div>
    <hr class="hr">


    <div class="foot-one">
      <div class="foot-top">
        <span>10</span>
        <p>积分</p>
      </div>
      <div class="foot-midllen">
        <span>爱尚食VIP折扣优惠券1天</span>
        <p>库存：66件</p>
      </div>
      <div class="foot-buttom"> 
        <span>兑换</span>
      </div>
    </div> 


    <div class="foot-two">
      <div class="foot-top">
        <span>30</span>
        <p>积分</p>
      </div>
      <div class="foot-midllen">
        <span>爱尚食VIP折扣优惠券3天</span>
        <p>库存：66件</p>
      </div>
      <div class="foot-buttom"> 
        <span>兑换</span>
      </div>
    </div> 

    
    <div class="foot-there">
      <div class="foot-top">
        <span>50</span>
        <p>积分</p>
      </div>
      <div class="foot-midllen">
        <span>爱尚食VIP折扣优惠券5天</span>
        <p>库存：66件</p>
      </div>
      <div class="foot-buttom"> 
        <span>兑换</span>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  methods: {
    go_me(){
      this.$router.push('/main')
      this.$store.commit('change_footer','me')
    }
  },
}
</script>

<style>
.header{
  position: relative;
  background-image: url('/img/my_bg.png');
  height: 220px;
}
.header .mint-header{
  background: none;
  height: 60px;
  font-size: 16px;
  padding-top: 10px;
}
.header .mint-header-title{
  font-size: 18px;
}
.header .header-nav{
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  padding: 20px 0;
  color: #fff;
}
.header .circle{
  width: 100px;
  display: flex;
  justify-content: center;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 20px auto 10px;
 
}
.header .circle span{
  color: #fff;
  margin: 38px 0;
  font-size: 20px;
}
 .header .midllen-nav{
   /* border: 1px solid red; */
   width: 371px;
   position: absolute;
   top: 240px;
   display: flex;
   justify-content: space-between;
 }
 .header .midllen-nav span{
   margin: 0 15px;
 }
 .header .midllen-nav p{
   display: flex;
   color: #888888;
   font-size: 12px;
  margin: 3px 5px;
 }
 .header .hr{
   width: 350px;
   margin-top: 94px;
   opacity: 0.2;
 } 

 .header .foot-one{
   position: relative;
   /* border: 1px solid red; */
   margin: 14px 10px 20px;
   display: flex;
   justify-content: space-between;
 }
 .header .foot-one .foot-top{
   width: 75px;
   height: 75px;
   /* margin: 0 13px; */
   /* border: 1px solid #000; */
   background: #05b3ff;
   border-radius: 4px;
   z-index: 11;

 }
.header .foot-one .foot-top span{
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 30px;
  color:#fff;
}
.header .foot-one .foot-top p{
font-size: 10px;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 28px;
  
}

 .header .foot-one .foot-midllen{
   position: relative;
   width: 206px;
   height: 75px;
   /* border: 1px solid #000; */
   margin-left: -57px;
   background: #fff;
   left: 28px;
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   box-shadow: 0px 0px 5px 0.9px rgb(181, 201, 245);
 }
.header .foot-one .foot-midllen span{
  font-size: 15px;
  padding: 10px 10px;
  position: absolute;
  top: 8px;
}
.header .foot-one .foot-midllen p{
  position: absolute;
  top: 48px;
  left: 10px;
  color: #888888;
  font-size: 13px;
}

 .header .foot-one .foot-buttom {
   width: 75px;
   height: 75px;
   background: #fff;
  /* border-left: 1px solid #000; */
  position: relative;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
   box-shadow: 0px 0px 5px 0.9px rgb(181, 201, 245);
 }
 .header .foot-one .foot-buttom span{
   position: absolute;
   top: 28px;
   left: 22px;
 }

 /* two */
 .header .foot-two{
   position: relative;
   /* border: 1px solid red; */
   margin: 20px 10px;
   display: flex;
   justify-content: space-between;
   
 }
 .header .foot-two .foot-top{
   width: 75px;
   height: 75px;
   /* margin: 0 13px; */
   /* border: 1px solid #000; */
   background: orange;
   border-radius: 4px;
   z-index: 11;

 }
.header .foot-two .foot-top span{
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 30px;
  color:#fff;
}
.header .foot-two .foot-top p{
font-size: 10px;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 28px;
  
}

 .header .foot-two .foot-midllen{
   position: relative;
   width: 206px;
   height: 75px;
   /* border: 1px solid #000; */
   margin-left: -57px;
   background: #fff;
   left: 28px;
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   box-shadow: 0px 0px 5px 0.9px rgb(250, 227, 184);
 }
.header .foot-two .foot-midllen span{
  font-size: 15px;
  padding: 10px 10px;
  position: absolute;
  top: 8px;
}
.header .foot-two .foot-midllen p{
  position: absolute;
  top: 48px;
  left: 10px;
  color: #888888;
  font-size: 13px;
}

 .header .foot-two .foot-buttom {
   width: 75px;
   height: 75px;
   background: #fff;
  /* border-left: 1px solid #000; */
  position: relative;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
      box-shadow: 0px 0px 5px 0.9px rgb(250, 227, 184);
 }
 .header .foot-two .foot-buttom span{
   position: absolute;
   top: 28px;
   left: 22px;
 }

 /* there */
 .header .foot-there{
   position: relative;
   /* border: 1px solid red; */
   margin: 20px 10px;
   display: flex;
   justify-content: space-between;
   
 }
 .header .foot-there .foot-top{
   width: 75px;
   height: 75px;
   /* margin: 0 13px; */
   /* border: 1px solid #000; */
   background: red;
   border-radius: 4px;
   z-index: 11;

 }
.header .foot-there .foot-top span{
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 30px;
  color:#fff;
}
.header .foot-there .foot-top p{
font-size: 10px;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 28px;
  
}

 .header .foot-there .foot-midllen{
   position: relative;
   width: 206px;
   height: 75px;
   /* border: 1px solid #000; */
   margin-left: -57px;
   background: #fff;
   left: 28px;
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   box-shadow: 0px 0px 5px 0.9px rgb(250, 198, 198);
 }
.header .foot-there .foot-midllen span{
  font-size: 15px;
  padding: 10px 10px;
  position: absolute;
  top: 8px;
}
.header .foot-there .foot-midllen p{
  position: absolute;
  top: 48px;
  left: 10px;
  color: #888888;
  font-size: 13px;
}

 .header .foot-there .foot-buttom {
   width: 75px;
   height: 75px;
   background: #fff;
  /* border-left: 1px solid #000; */
  position: relative;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
   box-shadow: 0px 0px 5px 0.9px rgb(250, 198, 198);
 }
 .header .foot-there .foot-buttom span{
   position: absolute;
   top: 28px;
   left: 22px;
 }
 </style>