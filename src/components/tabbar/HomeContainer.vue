<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to = "/home/newList">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link ></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to ="/home/photoList">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
		        
		</ul> 
        <!-- <h3>HomeContainer</h3> -->
    </div>
</template>
<script>
import {Toast}from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'

export default {
    data(){
        return{
            lunbotuList:[]//保存轮播图的数据
        }
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){
            // this.$http.get('api/getlunbo').then(result=>{
            //     if(result.body.status == 0){
            //           this.lunbotuList = result.body.message;
            //     }else{
            //           Toast("获取失败。。。。")
            //     }
            // })
            this.lunbotuList=['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1443361933,911214453&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4140785490,19045763&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=236991697,603991298&fm=26&gp=0.jpg'];
        }
    },
    components:{
        swiper
    }
}
</script>
<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
    .mui-media-body{
    font-size:13px;
}
}

</style>