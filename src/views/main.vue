<template>
  <div class="merge">
    <mt-tab-container v-model="$store.state.tabContainer_state">
      <mt-tab-container-item id="index">
        <my-index></my-index>
      </mt-tab-container-item>
      
      <mt-tab-container-item id="order">
        <my-order></my-order>
      </mt-tab-container-item>
      
      <mt-tab-container-item id="me">
        <my-me></my-me>
      </mt-tab-container-item>


    </mt-tab-container>

    <mt-tabbar v-model="$store.state.footer_state" fixed>
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

<script>
import myFooter from '../components/footer'
import myIndex from './index'
import myOrder from './order'
import myMe from './me'

export default {
  data() {
    return {
      state:'index',
      tabbar:'order'
    }
  },
  components:{
    myIndex,
    myOrder,
    myMe,

  }
}
</script>


<style>
  .merge .mint-tabbar{
    margin-bottom: -1px;
    background: white;
  }
  .merge .mint-tabbar>.mint-tab-item{
    color: #999999;
  }
  .merge .mint-tabbar>.mint-tab-item.is-selected{
    color: #05b3ff;
    /* background: none; */
  }
  .merge .iconfont{
    font-size: 20px;
    margin: 6px;
  }
</style>