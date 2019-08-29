<template>
    <div>
        <div class="newsInfocontainer">
            <h3 class="title">{{ InfoList.title}}</h3>
            <p class="subtitle">
                <span>发表时间:{{ InfoList.add_time }}</span>
                <span>点击：{{ InfoList.click }}次</span>
            </p>
            <hr>
        </div>
        <div class="content" v-html="InfoList.content"></div>
            
        <!-- 评论区 子组件  父组件 向 子组件 传值id-->
        <comment-box :id=this.id></comment-box>
    </div>   
</template>
<script>
//导入子组件
import comment from "../subcomponents/comment.vue";
export default {
    data(){
        return {
            // $route.params.id 是从上一个页面传递过来的ID值，我们挂载到data上，方便以后调用
            id : this.$route.params.id,
            InfoList:{}

        }
    },
    created(){
           this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.InfoList = [
                {id:14 ,title:'vjkjdjljd',click:2,add_time:'2015-04-167T04:05:34.000Z',content:'ljdljvdljv;djvkv;ldkldkvjv'
                +'vnnnnnvdokfdljdljd;lkjvl;dsk;lsdkfl;cvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvd'}
            ][0]
        }
    },
    //注册子组件
    components:{
       "comment-box":comment
    }
}
</script>
<style lang="scss" scoped>
.newsInfocontainer{
    padding:0 4px;
    .title{
      font-size: 16px;
      text-align:center;
      margin:15px 0;
      color:red;
    }
    .subtitle{
      font-size: 13px;
      color:#226aff;
      display: flex;
      justify-content: space-between;
    }
    .content{
    
    }
}
</style>