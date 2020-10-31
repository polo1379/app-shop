<template>
  <div class="main-wrap">
    <div class="main">
      <div class="search">
        <img src="../../public/img/ad.png" alt="" />
        <!-- 顶上 -->
        <div class="search-bar-top">
          <span class="place iconfont icon-weizhi">
            <span class="place-in">获取地理位置...</span>
          </span>
          <span class=" iconfont icon-tianqi" id="weather">获取天气信息...</span>
        </div>
        <!-- 顶中 -->
        <div class="search-bar-buttom">
          <div class="btn-search">
            <input
              type="text"
              placeholder="请输入要搜索的内容"
              autocomplete="off"
              id="sea"
              @focus="clean"
              @blur="fill"
              @keyup.enter="search"
            />
            <!-- <span class="placehoder">搜索</span> -->
          </div>
        </div>
        <!-- 顶下 -->
        <div class="search-bar-ser">
          <ul>
            <li>套餐</li>
            <span>|</span>
            <li>饭类</li>
            <span>|</span>
            <li>奶茶</li>
          </ul>
        </div>
        <!-- 分类 -->
        <div class="nav">
          <div class="row">
            <a href="#" @click="go_food1">
              <img src="../../public/img/index_info1.png" alt="" />
              <div>美食</div>
            </a>
            <a href="#" @click="go_food2">
              <img src="../../public/img/index_info2.png" alt="" />
              <div>饮品</div>
            </a>
            <a href="#" @click="go_food3">
              <img src="../../public/img/index_info3.png" alt="" />
              <div>沙拉</div>
            </a>
            <a href="#" @click="go_food4">
              <img src="../../public/img/index_info4.png" alt="" />
              <div>餐点</div>
            </a>
            <a href="#" @click="go_food5">
              <img src="../../public/img/index_info5.png" alt="" />
              <div>早餐</div>
            </a>
          </div>
        </div>
        <!-- bannar图 -->
        <div class="swipe">
          <mt-swipe :aut="3000" :speed="1000">
            <mt-swipe-item
              ><img src="../../public/img/banner1.jpg" alt=""
            /></mt-swipe-item>
            <mt-swipe-item
              ><img src="../../public/img/banner2.jpg" alt=""
            /></mt-swipe-item>
            <mt-swipe-item
              ><img src="../../public/img/banner3.jpg" alt=""
            /></mt-swipe-item>
          </mt-swipe>
        </div>
        <!-- 商家推荐 -->
        <div class="shops">
          <div class="title">商家推荐
            <span class="iconfont icon-gengduo"></span>
          </div>

          <div class="recommend">
            <div class="rec" v-for="(v,k) in foodpic" :key="k">
              <!-- <div class="rec-img"></div> -->
              <div class="rec-img">
                <img v-lazy="v.url" :key="v.url">
              </div>
              <!-- <p>黑椒牛排饭套餐</p> -->
              <p>{{v.des}}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodpic:[],
      weather:''
    }
  },
  mounted() {
    //顶部地理定位
    let point = new BMap.Point(114.046421, 22.629058);
    let geocoder = new BMap.Geocoder();
    geocoder.getLocation(point, (result) => {
      // console.log(result)
      let add = document.querySelector(".place-in");
      let position = result.addressComponents.city + result.addressComponents.district
      add.innerHTML = position;
    });

    //顶部天气获取
    this.axios({
      url: 'https://tianqiapi.com/api',
      method: "get",
      params: {
          version: 'v1',
          appid: '47367954',      // 到该网站上注册申请（操作很简单）
          appsecret: '6NKkC8f7'
      },
      headers: {
          'Content-type':'application/x-www-form-urlencoded'
      },
      
      }).then(res => {
          // console.log(res.data);
          let todayData = res.data.data[0];
          let weather = document.getElementById('weather')
          weather.innerHTML = todayData.tem
      });

    //请求美食图片
    this.axios.get('/index').then(res=>{
      this.foodpic = res.data.results
      // console.log(this.foodpic)
    })

  },
  methods: {
    clean(e) {
      e.target.placeholder = "";
    },
    fill(e) {
      e.target.placeholder = "请输入要搜索的内容";
    },
    search() {
      let val = sea.value.trim();
      this.$router.push(`/store?des=${val}`)
      this.$store.commit('change_footer','index')
    },
    go_food1(){
      this.$router.push(`/store?des=套餐`)
    },
    go_food2(){
      this.$router.push(`/store?des=奶茶`)
    },
    go_food3(){
      this.$router.push(`/store?des=沙拉`)
    },
    go_food4(){
      this.$router.push(`/store?des=饭`)
    },
    go_food5(){
      this.$router.push(`/store?des=蛋糕`)
    }
  }
};
</script>





<style>
.main-wrap .recommend::-webkit-scrollbar {
  display: none;
}
.main-wrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.main {
  position: relative;
}
.main .search > img {
  position: absolute;
  width: 100%;
  top: -28px;
}
.main .search .search-bar-top {
  position: absolute;
  width: 335px;
  height: 55px;
  /* border: 1px solid #333; */
  z-index: 111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;
}
.main .search .search-bar-top .place {
  color: #fff;
  font-size: 16px;
}

.main .search .search-bar-top .place .place-in {
  padding-left: 8px;
}

.main-wrap .iconfont {
  margin: 0;
}

.main-wrap .icon-tianqi:before {
  padding-right: 4px;
}

.main .search .search-bar-top #weather {
  float: right;
  font-size: 16px;
}

.main .search .search-bar-buttom {
  position: absolute;
  width: 375px;
  height: 55px;
  /* border: 1px solid #333; */
  z-index: 111;
  top: 58px;
}

.main .search .search-bar-buttom .btn-search {
  height: 30px;
  margin: 0 20px;
  /* background-color: #ffffff; */
  /* border: 1px solid black; */
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.main .search .search-bar-buttom .btn-search input {
  padding: 10px 10px 10px 32px;
  width: 100%;
  border-radius: 20px;
  outline: none;
  border: none;
  font-size: 13px;
  background-image: url(../../public/img/sea.png);
  background-repeat: no-repeat;
  background-size: 5%;
  background-position: 10px 10px;
  caret-color: #d73582;
}

.main .search .search-bar-buttom .placehoder {
  color: #999;
  font-size: 13px;
  margin-left: 5px;
}
.main .search .search-bar-ser {
  position: absolute;
  width: 371px;
  height: 20px;
  /* border: 1px solid #333; */
  z-index: 112;
  top: 94px;
}
.main .search .search-bar-ser ul {
  display: flex;
  font-size: 12px;
  overflow: hidden;
  color: #fff;
  margin: 5px 20px;
}
.main .search .search-bar-ser ul li {
  margin: 0 13px;
}

.main .search .nav {
  position: absolute;
  width: 375px;
  height: 180px;
  /* border: 1px solid #333; */
  z-index: 112;
  top: 288px;
}
.main .search .nav .row {
  display: flex;
  justify-content: space-around;
}
.main .search .nav a {
  display: block;
  padding: 0 10px;
}
.main .search .nav a img {
  width: 27px;
  height: 27px;
}
.main .search .nav a div {
  text-decoration: none;
  font-size: 12px;
  margin: 12px 0;
  align-items: center;
}
.main .search .swipe {
  position: absolute;
  width: 345px;
  height: 120px;
  /* border: 1px solid #333; */
  /* z-index: 112; */
  top: 368px;
  margin: 0 15px;
  margin-top: -10px;
}
.main .search .swipe .mint-swipe-items-wrap {
  border-radius: 10px;
}
.main .search .swipe img {
  width: 100%;
  height: 100%;
}

.main .search .shops {
  position: absolute;
  /* border: 1px solid red; */
  width: 375px;
  /* height: 100px; */
  top: 496px;
  z-index: 999;
  margin-top: -6px;
}
.main .search .shops .title {
  margin: 0 15px;
  font-size: 15px;
  padding-bottom: 8px;
}
.main .search .shops .title span{
  float:right;
  font-size: 18px;
}
.main .search .shops .recommend {
  width: 91%;
  height: 102px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
}
.main .search .shops .recommend .rec {
  width: 23%;
  text-align: center;
  margin-right: 9px;
}
.main .search .shops .recommend .rec-img {
  width: 80px;
  height: 64px;
}
.main .search .shops .recommend .rec-img img{
  width: 100%;
  height: 100%;
}
.main .search .shops .recommend .rec p {
  font-size: 12px;
  margin-top: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>