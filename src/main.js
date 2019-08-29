//导入vue模块
import Vue from 'vue'
//1.1导入路由
import VueRouter from 'vue-router'
//1.2
Vue.use(VueRouter)
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
    router   //1.4挂载路由
})