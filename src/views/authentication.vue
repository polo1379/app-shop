<template>
  <div class="ation">
    <mt-header title="实名认证">
      <router-link to="" slot="left" @click.native="go_me">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="ation-subject">
      <p>请确认是您本人操作,验证通过后不可修改!</p>
      <mt-field label="姓名" placeholder="请输入真实姓名"></mt-field>
      <div class="ation-id">
        <div class="id-sf">
          <p>证件类型</p>
        </div>
        <button class="ation-btn" @click="actionSheet">
          <label>
            <span>{{actions[actionLenght].name}}</span>
            <span class="iconfont icon-gengduo"></span>
          </label>
        </button>
        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible"
        >sfz</mt-actionsheet>
      </div>
      <mt-field label="证件号" placeholder="请输入证件号码"></mt-field>
      <label class="ation-ty">
        <input type="checkbox" @click="checkbox" /> 已阅读并同意 <span>《用户协议》</span>及<span>《隐私条款》</span>
      </label>
      <mt-button :disabled="!disablede" class="btn_primary" size="large">验证信息</mt-button>
    </div>
  </div>
</template>

<style>
  .ation{
    height: 667px;
  }
  .ation .mint-header{
    height: 60px;
  }
  .ation .mint-header-title{
    font-size:18px
  }
  .ation .mint-header,.btn_primary{
    background-color: #05b3ff;
    color: white;
  }
  .ation .ation-subject{
    height: 600px;
    padding: 10px 20px 10px;
    box-sizing: border-box;
  }
  .ation .ation-subject>p{
    font-size: 14px;
    color: #999999;
    margin-bottom: 40px;
  }
  .ation .mint-cell-wrapper{
    background: none;
  }
  .ation .mint-cell{
    border-bottom: 1px solid #dddddd;
  }
  .ation .mint-cell:not(:last-child),.ation .ation-subject .ation-id{
    margin-bottom: 10px;
  }
  .ation .ation-subject .ation-id{
    display: flex;
    width: 335px;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid #dddddd;
  }
  .ation .ation-subject .ation-id .id-sf{
    width: 105px;
  }
  .ation .ation-subject .ation-id .ation-btn{
    width: 100%;
    text-align: left;
    border: 0;
    outline: none;
    background-color: transparent;
    flex: 1;
    padding: 0;
  }
  .ation .ation-subject .ation-id .ation-btn label{
    display: flex;
    justify-content: space-between;
    padding: 0 2px;
  }
  .ation .ation-subject .ation-id .ation-btn label span{
    line-height: 32px;
  }
  .ation .ation-subject .ation-ty{
    display: block;
    color: #888888;
    font-size: 13px;
    margin: 14px 0 30px;
    padding-left: 10px;
  }
  .ation .ation-subject .ation-ty input{
    vertical-align: bottom;
  }
  .ation .ation-subject .ation-ty span{
    color:  #3A7DEE;
  }
  .ation .iconfont .icon-gengduo:before{
    font-size: 22px;
  }
  .ation .mint-button.btn_primary{
    top: 20px;
  }
  .ation .icon-gengduo:before{
    font-size: 22px;
  }
</style>

<script>
export default {
  data(){
    return {
      actions:[
        {
          name:'居民身份证',
          method: this.sf
        },
        {
          name:'港澳通行证',
          method: this.tx
        },
        {
          name:'外国人暂时居留证',
          method: this.wg
        }
      ],
      sheetVisible:false,
      actionLenght:0,
      disablede:false,
    }
  },
  methods:{
    actionSheet(){
      this.sheetVisible=true;
    },
    sf(){
      this.actionLenght = 0;
    },
    tx(){
      this.actionLenght = 1; 
    },
    wg(){
      this.actionLenght = 2; 
    },
    checkbox(){
      this.disablede = event.target.checked
    },
    go_me(){
      this.$router.push('/main')
      this.$store.commit('change_footer','me')
    }
  }
}
</script>