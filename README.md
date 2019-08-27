#这是一个vue商城项目  非常看好的商城ndshhkcd
#制作首页app组件
1.完成header区域使用mint-UI的header组件
2.制作底部tabbar区域，使用mui的tabbar.html

+在制作购物车 小图标的时候，操作会多一些
+先把 扩展图标的 css样式，拷贝到项目中  import './lib/mui/css/icons-extra.css'
+拷贝 扩展字体库 ttf文件到项目中  icons-***。tff文件到fonts文件中
+为购物车 小图标，添加如下样式 mui-icon mui-icon-extra mui-icon-extra-cart
+高亮显示 在router.js 中配置  linkActiveClass:'mui-active'     mui-active为程序自带的高亮效果类


3.要在中间区域放置一个router-view来展示路由匹配的组件
#改造  tabbar 为 router-link
#
#点击 tabbar中的路由连接，展示对应的路由组件

#制作首页轮播图

#加载首页轮播图数据
1.使用VUE-resource获取数据