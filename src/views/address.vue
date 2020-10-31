<template>
  <div class="address">
    <mt-header>
      <router-link to="" slot="left" @click.native="go_me">
        <mt-button icon="back">常用地址</mt-button>
      </router-link>
    </mt-header>
    <div class="address-container">
      <div class="address-details" v-for="(item,index) of $store.state.addressDetail" :key="index">
        <p>姓名: {{item.name}} <span style="float: right;">{{item.phone}}</span></p>
        <p class="dz-detail">{{item.address}}</p>
        <div class="bj-detail">
          <label>
            <input type="checkbox"/> 默认地址
          </label>
          <div class="option">
            <button><span class="iconfont icon-bianji2" ></span>编辑</button>
            <button><span class="iconfont icon-lajitong"></span>删除</button>
          </div>
        </div>
      </div>
      <div class="address-btn"><router-link to="/addAddress">添加新地址</router-link></div>
    </div>
  </div>
</template>

<style>
  .address{
    height: 667px;
    background-color:#F2F2F2;
  }
  .address .iconfont{
    color: #999999;
    margin-left: 20px;
    padding-right: 6px;
  }
  .address span[class='iconfont icon-lajitong']{
    padding-right: 4px;
  }
  .address .mint-button-icon{
    margin: 0 7px;
  }
  .address .mint-header{
    background-color: white;
    color: black;
    font-size: 16px;
    height: 60px;
    border-bottom:1px solid #f5f5f5;
  }
  .address .address-container{
    height: 507px;
    overflow: scroll;
  }
  .address .address-container .address-details{
    position: relative;
    width: 100%;
    height: 150px;
    background-color: white;
    padding: 20px 20px;
    box-sizing: border-box;
  }
  .address .address-container .address-details:not(:last-child){
    margin-bottom: 10px;
  }
  .address .address-container .address-details p{
    margin-bottom: 20px;
  }
  .address .address-container .address-details .dz-detail{
    font-size: 15px;
    color: #999999;
    margin: 0;
  }
  .address .address-container .address-details .bj-detail{
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 355px;
    bottom: 14px;
    left: 10px;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
    border-top: 1px solid #f5f5f5;
  }
  .address .address-container .address-details .bj-detail label{
    font-size: 15px;
  }
  .address .option button{
    color: black !important;
  }
  .address .address-container .address-details .bj-detail div button{
    border: 0;
    background-color: transparent;
    padding: 0;
    font-size: 14px;
    color: #8a8a8a;
  }
  .address .address-container .address-details .bj-detail div button:not(:first-child){
    margin-left: 6px;
    vertical-align: revert;
  }
  .address .address-btn{
    position: fixed;
    width: 100%;
    bottom: 50px;
    left: 0;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .address .address-btn a{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    background-color: #3A7DEE;
    border: 0;
    border-radius: 50px;
  }
</style>

<script>
export default {
  data(){
    return {
      addressDetail:[
        {
          name:'张某',
          phone:'18236459872',
          address:'湖南省长沙市爱德华镇保德花园小区38号停车场B区1楼'
        },
        {
          name:'王曼丽',
          phone:'18236459872',
          address:'湖南省长沙市爱德华镇保德花园小区38号停车场B区1楼'
        }
      ]
    }
  },
  methods: {
    go_me(){
      this.$router.push('/main')
      this.$store.commit('change_footer','me')
    }
  },
}
</script>