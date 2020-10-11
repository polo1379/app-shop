<template>
  <div>
    <mt-tabbar v-model="tabbar" fixed>
      <mt-tab-item id="class">
          <p class="iconfont icon-kechengguanli"></p>
          课程   
      </mt-tab-item>

      <mt-tab-item id="sort">
          <p class="iconfont icon-ziyuan"></p>
          分类     
      </mt-tab-item>

      <mt-tab-item id="info">
          <p class="iconfont icon-icon-"></p>
          消息     
      </mt-tab-item>

      <mt-tab-item id="me">
          <p class="iconfont icon-wode"></p>
          我的  
      </mt-tab-item>

    </mt-tabbar>
  </div>
</template>

<style scoped>
  .mint-tabbar{
    margin-bottom: -1px;
  }
  .mint-tabbar>.mint-tab-item{
    color: #999999;
  }
  .mint-tabbar>.mint-tab-item.is-selected{
    color: #6685fc;
    /* background: none; */
  }
  .iconfont{
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
      tabbar:'class'
    }
  },
  watch:{
    //监听底部选项卡,可以带有两个参数,参数1代表新值,参数2代表旧值
    tabbar(value){                                                   
        if(value == 'class'){
            this.$router.push('/').catch(e=>{});                    
        }
        if(value == 'sort'){
            this.$router.push('/sort').catch(e=>{});                 
        }
        if(value == 'info'){
            this.$router.push('/info').catch(e=>{});                 
        }
        if(value == 'me'){
            this.$router.push('/me').catch(e=>{});                 
        }
    }
  }

}
</script>