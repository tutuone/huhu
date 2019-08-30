//导入vue模块
import Vue from 'vue'
//1.1导入路由
import VueRouter from 'vue-router'
//1.2
Vue.use(VueRouter)
//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//每次刚进入 网站，可定会 调用main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来
// 放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state:{  //this.$store.state.***
       car: car
    //    将 购物车中的商品的数据，用一个数组存储起来，
    //    在 car 数组中，存储一些商品的对象，
    //    咱们可以暂时讲这个商品对象，设计成这个样子
    // {id:商品的id, count:要购买的数量, price:商品的单价, selected:false}

    },
    mutations:{//this.$store.commit('方法名称','参数')
        addToCar(state,goodsinfo){
        // 点击加入购物车，把商品信息，保存到 store 中的 car 上
        // // 分析
        // 1. 如果购物车种，之前就已经有这个对应的商品了，那么，只需要更新数量count
        // 2. 如果没有，则直接把商品数据，push到 car 中即可
            
            var flag = false;
            state.car.some(item=>{
                    if(item.id == goodsinfo.id){
                        item.count +=parseInt(goodsinfo.count)  
                        flag = true; 
                        return true ;
                    }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            //当更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
          //修改购物车中的善品数量
           state.car.some(item=>{
               if(item.id == goodsinfo.id){
                  item.count = parseInt(goodsinfo.count)
                  return true;
               }
           })
           localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeForCar(state, id){
           state.car.some((item, i)=>{
               if(item.id == id){
                   state.car.splice(i, 1)
                   return true;
               }
           })
           localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id == info.id){
                    item.selected = info.selected;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        }

    },
    getters:{//this.$store.getters.***
        getAllCount(state){
            var allcount = 0;
            state.car.forEach(item=>{
               allcount += item.count;
            })
            return allcount;
        },
        getItemCount(state){
            var o = {};
            state.car.forEach(item=>{
                o[item.id] = item.count;
            })
            return o;
        },
        getGoodsSelected(state){
            var o = [];
            state.car.forEach(item=>{
                o[item.id] = item.selected;
            })
            return o;
        },
        getGoodsCountAndAmount(state){
           var o = {
               count:0,
               amount:0
           };
           state.car.forEach(item=>{
               if(item.selected){
                   o.count += item.count
                   o.amount += item.price * item.count;
               }
           })
           return o
        }
    }
})
//导入app组件   
import app from './APP.vue'
//导入mint-ui的组件(Swipe, SwipeItem 轮播图的使用)
// import {Header,Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//1.3导入自己的router.js路由模块
import router from './router.js'
//2,1 导入 vue-resource
import VueResource from 'vue-resource'
//2,2 安装 vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root="http://vue.studyit.io/";
//
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
// 设置post 时表单的组织
Vue.http.options.emulateJSON = true
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router ,  //1.4挂载路由
    store  //挂载 store
})