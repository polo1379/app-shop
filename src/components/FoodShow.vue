<template>
  <div class="food_item">
    <div class="food_img"><img v-lazy="imgSrc" :key="imgSrc"></div>
    <div class="food_detail">
      <h3>{{title}}</h3>
      <div class="price" ref="price">{{shop_price|priceFilter()}}</div>
    </div>
    <div class="food_control">
        <span :class="{'selected':showButton}" class="desc" @click="desc">-</span>
        <span :class="{'selected':showButton}" class="count" >{{shop_num}}</span>
        <span class="add" @click="add">＋</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showButton: false,
      shop_num:0,
    }
  },
  props:["imgSrc","title","shop_price"],
  filters:{
    priceFilter(price){
      return "¥"+ price
    }
  },
  methods: {
    add(){
      this.showButton=true
      this.shop_num++
      this.$emit("calNum",1,this.shop_price)
    },
    desc(){
      this.shop_num--
      this.$emit("calNum",-1,this.shop_price)
      if(this.shop_num===0){
        this.showButton=false
      }
    }
  },
  mounted() {
    this.shop_num = 0
  },
}
</script>

<style>
.store .mint-tab-container-wrap .food_item{
  width: 100%;
  margin:10px 0;
  display: flex;
  padding: 0 0 5px;
  box-sizing: border-box;
  position: relative;
}
.store .mint-tab-container-wrap .food_item:first-child{
  margin-top:0;
}
.store .mint-tab-container-wrap .food_item .food_img{
  width: 40%;
  height: 80px;
}
.store .mint-tab-container-wrap .food_item .food_img img{
  width: 100%;
  height:100%;
}
.store .mint-tab-container-wrap .food_item .food_detail{
  width: 70%;
  padding-left: 10px;
}
.store .food_item .food_detail {
  display: flex;
  flex-direction: column;
}
.store .food_item .food_detail h3{
  height: 30px;
  margin: 10px 0;
  letter-spacing: 0.06rem;
}
.store .food_item .food_detail div{
  color: #aaa;
  font-size: 14px;
  margin: 5px 0;
}
.store .food_item .food_detail .price{
  color: #f60;
  font-weight: bold;
  font-size: 1rem;
}
.store .food_item .food_control{
  position: absolute;
  right: 0;
  bottom: 5px;
}
.store .food_item .food_control span{
  width: 20px;
  height:20px;
  display:inline-block;
  text-align: center;
  line-height:20px;
  border-radius: 50%;
}
.store .food_item .food_control .desc{
  color: #3b84fd;
  border: 1px solid #aaa;
  background-color: #fff;
  display:none;
}
.store .food_item .food_control .count{
  display:none;
}
.store .food_item .food_control .desc.selected,.store .food_item .food_control .count.selected{
  display: inline-block;
}
.store .food_item .food_control .add{
  color: #fff;
  background-color: #3b84fd;
  margin: 6px;
}
</style>