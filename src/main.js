//导入vue模块
import Vue from 'vue'
//导入app组件   
import app from './APP.vue'
//导入mint-ui的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
//导入mui样式
import './lib/mui/css/mui.css'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})