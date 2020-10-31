<template>
  <div class="footer">
    <mt-tabbar v-model="tabbar" fixed>
      <mt-tab-item id="index">
          <p class="iconfont icon-icon_home"></p>
          首页   
      </mt-tab-item>

      <mt-tab-item id="order">
          <p class="iconfont icon-dingdan"></p>
          订单     
      </mt-tab-item>

      <mt-tab-item id="me">
          <p class="iconfont icon-wode1"></p>
          我的  
      </mt-tab-item>

    </mt-tabbar>
  </div>
</template>

<style>

  .footer .mint-tabbar{
    margin-bottom: -1px;
    background: white;
  }
  .footer .mint-tabbar>.mint-tab-item{
    color: #999999;
  }
  .footer .mint-tabbar>.mint-tab-item.is-selected{
    color: #05b3ff;
    /* background: none; */
  }
  .footer .iconfont{
    font-size: 20px;
    margin: 6px;
  }
  /* .mint-tabbar>.mint-tab-item.is-selected{
    background: none;
  } */
</style>

<script>
export default {
  data() {
    return {
      tabbar:'index',
    }
  },
  props:['tab'],
  watch:{
    //监听底部选项卡,可以带有两个参数,参数1代表新值,参数2代表旧值
    tabbar(value){                                                   
        if(value == 'index'){                             
            this.$router.push('/').catch(e=>{});    
        }
        if(value == 'order'){
            this.$router.push('/order').catch(e=>{});          
        }
        if(value == 'me'){
            this.$router.push('/me').catch(e=>{});                           
        }
    }

  }
}
</script>