<template>
  <div class="order">
    <h1>我的订单</h1>
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active" fixed style="margin-top:60px">
      <mt-tab-item id="1" class="font">全部订单</mt-tab-item>
      <mt-tab-item id="2" class="font">待点评</mt-tab-item>
      <mt-tab-item id="3" class="font">退款</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板开始 -->
    <div class="main">
      <mt-tab-container v-model="active">
      
        <mt-tab-container-item id="1">
          <div v-for="(i,k) of $store.state.order_arr" :key="k" class="order_in">
            <div class="order-item">
              <div class="order-img"></div>
              <div class="order-nr">
                <div class="order-nr-s">
                  <p>龙华爱尚食(民治店)<span style="float: right;">正在送达</span></p>
                  <p>{{$store.state.sold_date}}{{$store.state.sold_time}}</p>
                </div>
                <div class="order-nr-x">
                  <p>{{i.menu}} 等 {{i.count}} 件 <span style="float: right;">¥{{i.price}}</span></p>
                  <router-link class="btn btn1" to="" @click.native="again_to">再来一单</router-link>
                  <router-link class="btn" to="/aftersale">评价</router-link>
                  <div class="del" @click="del_order(k)">删除订单</div>
                </div>
              </div>
            </div>
          </div>

          <div class="refund" v-if="$store.state.order_arr.length == 0">
            <img src="../../public/img/Refund.png" alt="">
            <p>再没有订单，我们就要失业了</p>
          </div>
        </mt-tab-container-item>
        
        <mt-tab-container-item id="2">
          <div v-for="(i,k) of $store.state.order_arr" :key="k" class="order_in">
            <div class="order-item">
              <div class="order-img"></div>
              <div class="order-nr">
                <div class="order-nr-s">
                  <p>龙华爱尚食(民治店)<span style="float: right;">未评价</span></p>
                  <p>{{$store.state.sold_date}}{{$store.state.sold_time}}</p>
                </div>
                <div class="order-nr-x">
                  <p>{{i.menu}} 等 {{i.count}} 件 <span style="float: right;">¥{{i.price}}</span></p>
                  <router-link class="btn btn1" to="" @click.native="again_to">再来一单</router-link>
                  <router-link class="btn" to="/aftersale">查看评价</router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="refund" v-if="$store.state.order_arr.length == 0">
            <img src="../../public/img/Refund.png" alt="">
            <p>暂无待评价订单</p>
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="3">
          <div class="refund">
            <img src="../../public/img/Refund.png" alt="">
            <p>近2个月内无退款订单</p>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板结束 -->
  </div>
</template>

<style>
  /* .header{position: relative;} */
  /* .mint-navbar .mint-tab-item.is-selected{
    color: #000;
  } */

  .order .mint-tab-container{
    overflow: auto;
  }
  .order>h1{
    width: 100%;
    font: 21px 'Microsoft Yahei';
    padding: 20px 15px;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
  }
  .order .mint-navbar,.main .order_in .order-nr-s{
    border-bottom: 1px solid #EFEFEF;
  }
  .order .mint-tab-item-label{
    font-size: 16px;
    color: #999999;
  }
  .order .mint-navbar .mint-tab-item.is-selected{
    border: 0;
    position: relative;
  }
  .order .mint-navbar .mint-tab-item.is-selected::before{
    content: '';
    position: absolute; 
    width: 20px;
    height: 4px;
    border-radius: 5px;
    left: 52.5px;
    bottom: 0;
    background-color: #05b3ff;
    z-index: 999;
  }
  .order .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
    color: black !important;
  }
  .order{
    background-color: #f7f7f7;
    height: 100vh;
  }
  .order .main{
    padding-top: 110px;
    margin-bottom: 58px;
  }
  
  .order .main .order_in{
    margin-bottom: 10px;
  }
  .order .main .order_in .order-item{
    display: flex;
    height: 160px;
    background-color: white;
    padding: 15px 15px;
    box-sizing: border-box;
  }
  .order .main .order_in .order-img{
    width: 50px;
    height: 50px;
    background-image: url(../../public/img/shop2.png);
    background-size: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .order .main .order_in .order-nr{
    width: 80%;
  }
  /* .main .order .order-nr-s>p:first-child{
    font-size: 18px;
  } */
  .order .main .order_in .order-nr-s>p:first-child>span{
    color: #999999;
  }
  .order .main .order_in .order-nr-s>p:nth-child(2){
    font-size: 14px;
    color: #999999;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .order .main .order_in .order-nr-x>p{
    font-size: 14px;
    margin-top: 15px;
  }
  /* .form .main .order .order-nr-x>p>span{
    font-weight: bold;
  } */
  .order .main .order_in .order-nr-x a:not(:last-child){
    margin-left: 5px;
  }
  .order .main .order_in .order-nr-x a:last-child{
    padding: 0 8px;
  }
  .order .main .order_in .order-nr-x .btn.btn1{
    width: 75px;
  }
  .order .main .order_in .order-nr-x .btn{
    display: block;
    width: 60px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background-color: white;
    margin-top: 15px;
    float: right;
  }
  .order .main .order_in .order-nr-x .del{
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 60px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
    float: right;
    padding: 0 10px;
  }
  .order .refund{
    height: 100vh;
    background: white;
    color: #999999;
    text-align: center;
  }
  .order .refund img{
    margin-top: 20vh;
    width: 50%;
  }

</style>
<script>
export default {
  data(){
    return {
      active:'1',
    }
  },
  mounted(){
    // console.log(document.querySelectorAll('.mint-tab-item-label')) 
    // for(let i=3;i<=6;i++){
    //   document.querySelectorAll('.mint-tab-item-label')[i].style.font='20px'
    // }    
    
  },
  methods:{
    del_order(k){
      this.$messagebox.confirm('确定要删除订单吗?').then(action => {
        this.$store.commit('delOrder',k)
      }).catch(error =>{
        if(error == 'cancel'){
          console.log('点击取消');
        }
      })
    },
    again_to(){
      this.$router.push('/store?des=')
    },

  }
}
</script>