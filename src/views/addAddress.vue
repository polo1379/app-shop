<template>
  <div class="addAddress">
    <mt-header>
      <router-link to="/address" slot="left">
        <mt-button icon="back">新增地址</mt-button>
      </router-link>
    </mt-header>
    <div class="addAddress-container">
      <mt-field label="联系人" placeholder="姓名" v-model="textarea.name"></mt-field>
      <mt-field
        label="电话"
        placeholder="手机号码"
        :attr="{maxlength:11,autocomplete:'off'}"
        :state="state"
        v-model="textarea.phone"
        @blur.native.capture="checkPhone"
      ></mt-field>
      <mt-field label="地址" placeholder="请输入有效地址" v-model="textarea.address"></mt-field>
      <div class="addAddress-btn"><button @click="setAddress">保存地址</button></div>
    </div>
  </div>
</template>
<style>
  .addAddress{
    height: 667px;
  }
  .addAddress .mint-header{
    background-color: transparent;
    color: black;
    font-size: 16px;
    height: 60px;
  }
  .addAddress .addAddress-container{
    height: 607px;
    padding: 0 10px;
  }
  .addAddress .addAddress-container .mint-cell{
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 15px;
  }
  .addAddress .addAddress-container .addAddress-btn{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .addAddress .addAddress-container .addAddress-btn button{
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
  .addAddress .mint-button-icon{
    margin: 0 7px;
  }
</style>
<script>
export default {
  data(){
    return {
      textarea:{
        name:'',
        phone:'',
        address:''
      },
      state:''
    }
  },
  methods:{
    setAddress(){
      if(this.textarea.name.length != 0 && this.textarea.phone.length != 0 && this.textarea.address.length != 0){
        let store = this.$store.state.addressDetail;
        store.unshift(this.textarea);
        this.$router.push("/address")
      }else{
        this.$toast({
          message:'请完善资料',
          position: "",
          duration: 1000
        });
      }
      // console.log(this.textarea.name.length);
    },
    checkPhone(){
      let phoneExp = /^[1][3589]\d{9}$/;
      if(phoneExp.test(this.textarea.phone)){
        this.state = 'success';
      }else{
        this.state = 'error';
        this.$toast({
          message:'请输入正确11位电话号码',
          position: "",
          duration: 1000
        })
      }
    }
  }
}
</script>