//导入vue模块
import Vue from 'vue'
//1.1导入路由
import VueRouter from 'vue-router'
//1.2
Vue.use(VueRouter)
//导入app组件   
import app from './APP.vue'
//导入mint-ui的组件(Swipe, SwipeItem 轮播图的使用)
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//1.3导入自己的router.js路由模块
import router from './router.js'
//2,1 导入 vue-resource
import VueResource from 'vue-resource'
//2,2 安装 vue-resource
Vue.use(VueResource)



var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router   //1.4挂载路由
})