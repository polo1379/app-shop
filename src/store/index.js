import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    sign:false,
    order_arr:[], 
    footer_state:'index',
    tabContainer_state:'index',
    user_name:'',
    user_phone:'',
    sold_date:'',
    sold_time:'',
    addressDetail:[
      {
        name:'张某',
        phone:'18236459872',
        address:'湖南省长沙市爱德华镇保德花园小区38号停车场B区1楼'
      }
    ]
  },

  mutations:{  
    change_username(state,val){
      state.user_name = val
    }, 
    change_userphone(state,val){
      state.user_phone = val
    },                                     
    signin(state){
      state.sign = true
    }, 
    filling(state,arr){
      state.order_arr.push(arr)
    },
    delOrder(state,k){
      state.order_arr.splice(k,1)
    },
    change_footer(state,val){
      state.footer_state = val
    },
    change_date(state,val){
      state.sold_date = val
    },
    change_time(state,val){
      state.sold_time = val
    }
  },

  actions:{     

  },

  modules:{
      
  },

  getters:{                                            
      
  }
})