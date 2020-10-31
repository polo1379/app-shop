<template>
  <div>
    <router-view></router-view>      
  </div>
</template>

<script>
export default {
  computed: {
    footer_state(){
      return this.$store.state.footer_state
    }
  },
  watch:{
    //监听底部选项卡,可以带有两个参数,参数1代表新值,参数2代表旧值
    footer_state:function(value){                                                   
        if(value == 'index'){                             
            // this.$router.push('/').catch(e=>{}); 
            this.$store.state.tabContainer_state = 'index'   
        }
        if(value == 'order'){
            // this.$router.push('/order').catch(e=>{}); 
            this.$store.state.tabContainer_state = 'order'   

        }
        if(value == 'me'){
            // this.$router.push('/me').catch(e=>{}); 
            this.$store.state.tabContainer_state = 'me'   

        }
    },    
  }
}
</script>