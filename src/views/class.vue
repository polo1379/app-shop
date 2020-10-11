<template>
  <div class="index">

    <mt-header title="课程" fixed>    
      <p slot="right" class="iconfont icon-ribao1"></p>      
    </mt-header>

    <div class="search">
      <span class="iconfont icon-fangdajing"></span>
      <input type="text" class="search-box" placeholder="搜索课程或文章">
    </div>

    
    <div class="contain">    
      <div class="swipe">
        <mt-swipe :auto="5000" @change="handleChange">
          <mt-swipe-item v-for="(v,k) of bannerSrc" :key="k">
            <img :src="v" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      
      <ul class="list">
        <li>
          <i class="iconfont icon-duihuaziliao"></i> 
          <p>语言学习</p>
        </li>
        <li>
          <i class="iconfont icon-zhichangjinsheng"></i>
          <p>职场成长</p> 
        </li>
        <li>
          <i class="iconfont icon-gangbi1"></i>
          <p>考试考证</p> 
        </li>
        <li>
          <i class="iconfont icon-yumaobi"></i>
          <p>设计技能</p> 
        </li>
        <!-- <div>
          <i class="iconfont icon-xingquaihao"></i>
          <p>兴趣生活</p> 
        </div> -->
      </ul>

      <ul class="ad">
        <li>
          <img src="../../public/img/ad1.jpg" alt="">
        </li>

        <li>
          <img src="../../public/img/ad2.jpg" alt="">
        </li>
      </ul>

      
        <mt-cell title="今日推荐" value='更多' is-link>
          <img src="../../public/img/column.jpg" alt="" slot="icon" width="4">
        </mt-cell>

        <div class="recommend-content">
          <div v-for="(v,k) of arr" :key="k">
            <img :src='v.pic_src' alt="">
            <p>{{v.text}}</p>
          </div>
        
        </div>
    </div>
    
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerSrc:[
        'https://img.alicdn.com/tfs/TB1VKNHWvb2gK0jSZK9XXaEgFXa-1570-610.png',
        'https://a.vpimg2.com/upload/flow/2020/09/29/181/16013678666070.jpg',
        'https://a.vpimg2.com/upload/flow/2020/09/29/121/16013702982386.jpg'
      ],
      arr:[]
    }
  },
  methods: {
    handleChange(index) {
      // alert(index)
    }
  },
  mounted() {
    this.axios.get('/pic').then(res=>{
      this.arr=res.data.result
    });
  },
}
</script>


<style scoped>
  .iconfont{
    color: #999999;
    font-weight: 400;
  }
  .index{
    padding: 0 10px;
    box-sizing: border-box;
  }
  .contain{
    margin-top: 106px;
    margin-bottom: 58px;
  }
  .mint-header{
    background: white;
    color: black;
    font-size: 20px;
    font-weight: 600;
    padding: 30px 10px;
  }
  .search{
    width: 100%;  
    background: white;
    position: fixed;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
    top: 60px;
    left: 0;
    z-index: 1;
  }
  .search-box{
    background: #f0f1f2;
    display: block;
    border: none;
    font-size: 12px;
    color: #666666;
    padding: 10px;
    padding-left: 40px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px;
  }
  .icon-fangdajing{
    position: absolute;
    top: 10px;
    left: 24px;
  }
  .swipe{
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;  
  }
  .mint-swipe{
    height: 160px;
  }
  .mint-swipe-item img{
    width: 100%;
    height: 100%;
  }
  .list{
    display: flex;
    justify-content:space-around;
    text-align: center;
    padding: 20px 0;
  }
  .list i{
    font-size: 36px;
    color: #6685fc;
  }
  .list p{
    margin-top: 10px;
    font-size: 14px;
    letter-spacing: 2px;
  }
  .ad{
    display: flex;
    justify-content:space-between;
  }
  .ad li{
    width: 48%;
  }
  /* .ad li:first-child{
    margin-right: 10px;
  } */
  .ad img{
    width: 100%;
  }

  .recommend-content{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
  }
  /* .recommend-content div:nth-child(2n+1){
    margin-right: 3%;
  } */
  .recommend-content div{
    width: 48%;
    margin-bottom: 10px;
  }
  .recommend-content div img{
    width: 100%;
    margin-bottom: 4px;
  }
  .recommend-content div p{
    font-size: 14px;
    line-height: 1.2rem;
  }
</style>

