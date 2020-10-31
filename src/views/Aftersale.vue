<template>
  <div class="aftersale">
    <mt-header title="我的评价">
      <router-link to="" slot="left" @click.native="to">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="cus">
      <div class="waiter">
        <img src="../../public/img/waiter.jpg" alt="">
      </div>
      <div>
        <p>爱尚食客服</p>
        <p>24小时全天候,竭诚为您服务</p>
      </div>
    </div>
    <h1>点评客服服务</h1>
    <div class="evaluate">
      <ul class="score">
        <li v-for="(i,k) in 5" :key="k" @click="seleted(i)">
          <img v-show="cur<i" src="../../public/img/star_off.png">
          <img v-show="cur>=i" src="../../public/img/star_on.png">
        </li>
      </ul>
      <textarea maxlength="125" type="text" placeholder="您的评价让我们做的更好..."></textarea>
      <div class="camera">
        <div id="dele">
            <img src="../../public/img/dele.png">
        </div>
        <div class="pz">
          <img src="../../public/img/camera.png">
          <p>拍照片</p>
        </div>
      </div>
      <h1>最多上传3张照片</h1>
    </div>
    <button class="btn">提交</button>
  </div>
</template>
<style>
  .aftersale{
    height: 667px;
    background-color: #f7f7f7;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .aftersale .mint-header{
    background-color: transparent;
    color: black;
    padding: 0;
    height: 48px;
    font-size: 16px;
  }
  .aftersale .cus{
    width: 100%;
    display: flex;
    height: 70px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 0 15px;
  }
  .aftersale .cus div:first-child{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .aftersale .cus div:last-child p:first-child{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .aftersale .cus div:last-child p:last-child{
    font-size: 12px;
    color: #999999;
  }
  .aftersale .cus .waiter img{
    width: 100%;
  }
  .aftersale .evaluate{
    width: 100%;
    height: 420px;
    background-color: white;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 20px;
    padding: 15px 10px 10px 10px;
    box-sizing: border-box;
  }
  .aftersale .evaluate .score{
    display: flex;
    margin-bottom: 20px;
  }
  .aftersale .evaluate textarea{
    width: 100%;
    height: 180px;
    font-size: 16px;
    color: black;
    font-family:'Microsoft Yahei';
    resize: none;
    border: 0;
    outline: none;
    box-sizing: border-box;
  }
  .aftersale .evaluate .camera{
    width: 100%;
    height: 100px;
    display: flex;
    margin-top: 10px;
  }
  .aftersale .evaluate .camera #dele{
    text-align: right;
  }
  .aftersale .evaluate .camera .pz{
    padding-top: 14px;
    box-sizing: border-box;
  }
  .aftersale .evaluate .camera .pz img{
    width: 40%;  
  }
  .aftersale .evaluate .camera .pz p{
    font-size: 13px;
    margin-top: 6px;
  }
  .aftersale .evaluate .camera div{
    position: relative;
    width: 80px;
    height: 80px;
    text-align: center;
    align-self: center;
    background-color: #f5f5f5;
    color: #707070;
    border-radius: 10px;
  }
  .aftersale .evaluate .camera div a{
    position: absolute;
    top: -5px;
    right: -5px;
    z-index: 100;
  }
  .aftersale .evaluate .camera div:not(:first-child){
    margin-left: 5px;
  }
  .aftersale .evaluate h1{
    font-size: 14px;
    color: #999999;
    margin-top: 10px;
  }
  .aftersale .btn{
    display: block;
    width: 150px;
    text-align: center;
    color: white;
    border-radius: 50px;
    background-color: #4886F2;
    border: 0;
    outline: none;
    line-height: 30px;
    margin: 0 auto;
  }
</style>
<script>

export default {
  data(){
    return {
      cur:-1
    }
  },
  methods:{
    seleted(i){
      this.cur = i;
    },
    to(){
      this.$router.push('/main')
      this.$store.commit('change_footer','order')
    }
  },
  
}

</script>