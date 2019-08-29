<template>
    <div class="goods-container">
        <h3>{{info.title}}</h3>
        <hr>
        <!-- content为html格式 -->
        <!-- <div class="content" v-html="info.content"></div> -->
        <div class="content">{{info.content}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            info:{}
        }
    },
    crezted(){
        this.getGoodsDetial();
    },
    methods:{
        getGoodsDetial(){
            // this.$http.get('./'+this.$route.params.id).then(result=>{
            //       if(){

            //       }
            // })
            this.info=[{title:'',content:''}][0]
        }
    }
}
</script>
<style lang="scss" scoped>
.goods-container{
    h3{
        font-size: 16px;
        color:#226aff;
        text-align:center;
        margin:15px 0;
        padding:4px;
    }
    // content中有图片：图片需要调格式：需要做两件事
    // 第一件：去掉scoped
    // 第二件：设置图片宽度
    // .content{
    //     img{
    //         width:100%;
    //     }
    // }
}   
</style>