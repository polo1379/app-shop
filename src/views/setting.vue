<template>
  <div class="setting">
    <mt-header title="设置">
        <router-link to="" slot="left" @click.native="go_me">
        <mt-button icon='back'></mt-button>
          <!-- <img src="../../public/img/icon.png" alt="" width="20" height="20"> -->
        </router-link>
    </mt-header>
    <div class="devide"></div>
    <mt-cell title="推送开关">
        <span class="button">
          <mt-switch :value.sync="value"></mt-switch>
        </span>
    </mt-cell>
    <div class="devide"></div>
    <mt-cell title="分享给朋友" is-link>
    </mt-cell>
    <div class="devide"></div>
    <mt-cell title="给我打分" is-link>
    </mt-cell>
    <div class="devide"></div>
    <mt-cell title="意见反馈" is-link>
    </mt-cell>
    <mt-cell title="清楚缓存" is-link>
       <span>0KB</span>
    </mt-cell>
    <mt-cell title="版本更新" is-link>
       <span>
         当前版本{{version}}
        </span>
    </mt-cell>
    <mt-cell title="社区规则" is-link>
    </mt-cell>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: true,
      version:""
    }
  },
  methods: {
    getversion(){
      let user = navigator.userAgent;
      let version = user.split("Version/")[1].split("/")[0].split(" ")[0];
      this.version = version
    },
    go_me(){
      this.$router.push('/main')
      this.$store.commit('change_footer','me')
    }
  },
  created() {
    this.getversion()
  }
}
</script>

<style>
.setting{
  min-height: 100vh;
  background-color: #f5f5f5;
}
.setting .mint-header{
  background-color: #fff;
  height: 60px;
  color: #000;
  font-size: 1.2rem;
}
.setting .mint-header .mint-header-title{
  font-weight: 500;
}
.setting .devide{
  height: .8rem;
  background-color: transparent;
}
.mint-cell-wrapper{
  background: none;
}
.mint-cell{
  min-height: 52px;
  border-bottom: 1px solid #f5f5f5;
}
</style>