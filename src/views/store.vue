<template>
  <div class="store">
    <div class="store_header">
      <div class="header_mask">
        <mt-header>
          <router-link slot="left" to="" @click.native="to">
            <mt-button icon="back"></mt-button>
          </router-link>
           <mt-button icon="more" slot="right" >
          </mt-button>
        </mt-header>
        <!-- <div class="search">
          <input type="text" placeholder="请输入搜索商品">
          <span><img src="../../public/img/my_bg.png" width="30" height="30"></span>
        </div> -->
      </div>
    </div>
    <div class="store_label">
      <p>龙华爱尚食(民治店)</p>
      <div class="store_detail">
        <span>月售&nbsp;450</span>
        <span>获赞&nbsp;48</span>
        <span>30分钟 &nbsp;&nbsp;814m</span>
      </div>
      <div class="button_list">
        <mt-button plain size="small" type="danger">22&nbsp;减&nbsp;5</mt-button>
        <mt-button plain size="small" type="danger">30&nbsp;减&nbsp;6</mt-button>
        <mt-button plain size="small" type="danger">50&nbsp;减&nbsp;20</mt-button>
      </div>
    </div>
    <div class="store_shop">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">
          点餐
        </mt-tab-item>
        <mt-tab-item id="2">店评</mt-tab-item>
        <mt-tab-item id="3">商家</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="food_category">
            <li :class="(selected_category==0?'selected_category':'')" @click="selectedLi(0)">热门销售</li>
            <li :class="(selected_category==1?'selected_category':'')" @click="selectedLi(1)">快餐小炒</li>
            <li :class="(selected_category==2?'selected_category':'')" @click="selectedLi(2)">盖浇拉面</li>
            <li :class="(selected_category==3?'selected_category':'')" @click="selectedLi(3)">家常小菜</li>
            <li :class="(selected_category==4?'selected_category':'')" @click="selectedLi(4)">奶茶饮品</li>
          </ul>
          <div v-for="(item,index) in 5" :key="index" :class="(selected_category==index?'is_selected':'')" class="food_category_wrapper" >
            <!-- 美食详情框 -->
            <food-show v-for="(v,k) in foodpic" :key="k" @calNum="calNum" :imgSrc="v.url" :title="v.des" :shop_price="v.price"></food-show>
            <p style="margin: 10px auto 40px;text-align:center"><span>没有更多数据了</span></p>
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="2">
          <img src="img/Notyet.jpg" alt="">
          <p>暂时没有店评哦</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <img src="img/Notyet.jpg" alt="">
          <p>暂时没有商家信息哦</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="shopping_cart">
     <div class="left">
      <div class="shopping_cart_logo">
        <img src="../../public/img/shop.png">
        <span class="shop_count">{{shop_count}}</span>
      </div>
     </div>
     <div class="middle">
      <p ref="total">¥{{total_price.toFixed(2)}}</p>
      <div>另需配送费2元</div>
     </div>
     <div class="right">
      <mt-button type="primary" @click="submit">确定</mt-button>
     </div>
    </div>
  </div>
</template>
<script>
import FoodShow from "../components/FoodShow"
export default {
  data(){
    return {
      selected:"1",
      isShow: false,
      shop_count:0,
      total_price:0.00,
      selected_category:0,
      foodpic:[],
      page: 1,
      loading: false,
      isImmediate:false,
    }
  },
  components:{
    FoodShow,
  },
  methods: {
    calNum(data,price){
      this.shop_count+=data
      this.total_price = this.shop_count*price
    },
    selectedLi(index){
      // console.log(index)
      this.selected_category=index
    },
    loadMore(){
      this.loading = true;
      this.axios.get(`/food_detail?page=${this.page}`).then(res=>{
        if(this.page<=4){
          this.page++;
          let arr = res.data.results;
          arr.forEach(element => {
            this.foodpic.push(element)
          });
          this.loading = false
        }else{
          console.log("没有更多数据了!")
        }
      })
    },
    submit(){
      let count = this.shop_count
      let price = parseInt(this.total_price)
      if(!count==0){
        let menu = document.querySelector('.selected').parentElement.previousElementSibling.firstElementChild.innerHTML
        this.$store.commit('filling',{menu:menu,count:count,price:price})

        //发送下单日期与时间
        let old_date = new Date().toLocaleDateString()
        let date = old_date.replace(/\//g,'-')

        let hour = new Date().getHours()
        let minute = new Date().getMinutes()
        let time = ' ' + hour + ':' + minute

        this.$store.commit('change_date',`${date}`)
        this.$store.commit('change_time',`${time}`)

        //提示内容及跳转
        this.$messagebox('提示','下单成功');
        this.$router.push('/main')
        this.$store.commit('change_footer','index')
      }else{
        this.$messagebox('提示','还未选择商品');
      } 
          
    },
    to(){
      this.$router.push('/main')
      this.$store.commit('change_footer','index')
    }
    
  },
  mounted(){
    let des = this.$route.query.des
    this.axios.get(`/food_detail?des=${des}`).then(res=>{
      this.foodpic = res.data.results
      // console.log(this.foodpic)
    },err=>{
        throw err
    })
    // console.log(this.$route.query)

    //body禁用滚动条    
    let body = document.body
    body.style.overflowY='hidden'

  }
}
</script>
<style>
.store .store_header{
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  background-image: url("../../public/img/shop.jpg");
  background-size: cover;
  background-position-y: 160px;
}
.store .header_mask{
  width: 100%;
  height:100%;
  /* background-color: rgba(0,0,0,.3); */
  position: relative;
  overflow: hidden;
}
.store .store_header .mint-header{
  background-color: transparent;
  margin: 8px;
}
.store .header_mask .search{
  height:30px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  padding-top: 10px;
}
.store .header_mask .search input{
  width: 200px;
  height: 30px;
  box-sizing: border-box;
  outline:none;
  border: 1px solid #ccc;
  padding: 0;
  margin:0;
  padding-left: 3px;
  font-size: 12px;
}
.store .header_mask .search span{
  width: 20px;
  height: 30px;
}
.store .store_label{
  width: 90%;
  border-radius: 10px;
  margin: 0 auto;
  transform: translateY(-40%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  padding: 10px 15px;
  box-sizing: border-box;
  color: #646464;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px #aaa;
}
.store .store_label div{
  margin: 15px 0;
}
.store .store_label .button_list{
  margin:10px 0;
}
.store .store_label .store_detail{
  color:#aaa;
  font-size: 12px;
}
.store .store_label .store_detail span{
  margin-right: 20px;
}
.store .store_label .button_list .mint-button{
  height: 20px;
  padding:0 5px;
  font-size: 12px;
  margin: 0 10px;
} 
.store .store_label .button_list .mint-button:first-child{
  margin-left: 0;
}
.store .store_shop{
  margin-top: -40px;
}
.store .mint-navbar{
  background: none;
}
.store .mint-navbar .mint-tab-item.is-selected{
  border-bottom:0;
}
.store .mint-navbar .mint-tab-item .mint-tab-item-label{
  font-size: 1rem;
}
.store .mint-tab-container-wrap {
  height:940px;
  overflow: auto;
}
.store .mint-tab-container-wrap ul{
  width: 22%;
  /* height: 100%; */
  color: #aaa;
  text-align: center;
  float: left;
  margin-left: 8px;
}
.store .mint-tab-container-wrap .food_category_wrapper{
  width: 70%;
  height: 326px;
  float: right;
  display: none;
  overflow: auto;
}

/* .store .mint-tab-container-wrap .food_category_wrapper .data_finish{
  width: 100%;
  height: 80px;
  margin: 10px 0;
  display: block;
} */

.store .mint-tab-container-wrap .food_category_wrapper.is_selected{
  display: block;
}

.store .mint-tab-container-wrap ul li~li{
  width: 100%;
  margin: 30px 0;
}
.store .mint-tab-container-wrap ul li.selected_category{
  color: #000;
}
.store .is-selected{
  position: relative;
}
.store .is-selected:after{
  width: 10%;
  content:"";
  border: 1px solid #26a2ff;
  position: absolute;
  bottom: 10px;
  left:50%;
  transFORM: translateX(-50%);
}
.store .mint-tab-container-wrap{
  padding: 10px 18px 0;
}
.store .shopping_cart{
  position: fixed;
  bottom:-1px;
  left:0;
  z-index:999;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  box-shadow:0px -3px 5px #ccc;
  padding:0 0 0 15px;
  background-color: #fff;
}
.store .shopping_cart .left,.store .shopping_cart .right{
  width:30%;
  height: 100%;
  text-align: center;
}
.store .shopping_cart .middle{
  height: 100%;
  width: 60%;
  padding:6px 15px 0;
  box-sizing: border-box;
}
.store .shopping_cart .left .shopping_cart_logo{
  height: 120%;
  width: 80%;
  margin:-20px auto 0;
  box-shadow:0px -3px 5px #ccc;
  border: 1px solid #ccc;
  border-radius: 50%;
  text-align: center;
  background-color: #fff;
  position: relative;
}
.store .shopping_cart .left img{
  width:48px;
  height:48px;
  margin-top:10px;
}
.store .shopping_cart .left .shopping_cart_logo .shop_count{
  color: #fff;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
}
.store .shopping_cart .middle p{
  font-weight: bold;
  font-size: 1.2rem;
  margin: 5px 0;
}
.store .shopping_cart .middle div{
  color: #aaa;
  font-size: .8rem;
}
.store .shopping_cart .right .mint-button{
  width: 100%;
  height: 100%;
  background-color: #3c84fd;
  border-radius: 0;
}
.store .mint-tab-container-item~.mint-tab-container-item{
  text-align: center;
  margin-top: 50px;
}
.store .mint-tab-container-item~.mint-tab-container-item img{
  width: 40%;
  margin-bottom: 6px;
}
</style>