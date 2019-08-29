<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要说的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,i) in comments" :key="item.user_name">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time}}
                </div>
                <div class="cmt-body">
                   {{ item.content === undefined ? '此用户很懒什么也没留下':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain  @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast}from 'mint-ui'
export default {
    data(){
        return{
            pageindex: 1,  //默认为1
            comments:[],
            msg:''//发表的言论
        };
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            // this.$http.get('路径'+this.id+'?pageindex='+this.pageindex).then(result=>{
            //     if(result.body.status == 0){
            //老数据+新数据
                    // this.comments = this.comments.concat(result.body.message);
            //     }else{
            //         Toast('加载失败');
            //     }
            // })
            this.comments = [
                {user_name:'xxxx',add_time:'2015-04-16',content:'我来评论一下啦'},
                {user_name:'dddd',add_time:'2015-04-16',content: undefined},
                {user_name:'cccc',add_time:'2015-04-16',content: undefined},
        
               
                {user_name:'vvvv',add_time:'2015-04-16',content: undefined},
                {user_name:'aaaa',add_time:'2015-04-16',content: undefined},
                {user_name:'qqqq',add_time:'2015-04-16',content: undefined},
                {user_name:'wwww',add_time:'2015-04-16',content: undefined},
                {user_name:'eeee',add_time:'2015-04-16',content: undefined},
                {user_name:'rrrr',add_time:'2015-04-16',content: undefined},
                {user_name:'llll',add_time:'2015-04-16',content: undefined},
                {user_name:'kkkk',add_time:'2015-04-16',content: undefined},
                {user_name:'iiii',add_time:'2015-04-16',content: undefined},
                {user_name:'hhhh',add_time:'2015-04-16',content: undefined},
                {user_name:'yyyy',add_time:'2015-04-16',content:'评论一下啦'}
            ]
        },
        getMore(){
            this.pageindex++;
            this.getComments();
        },
        postComment(){
            if(this.msg.trim() == 0){
                  return Toast('评论不能为空');
                 
            }
            // this.$http.post( '路径'+ this.$route.params.id, {content : this.msg.trim() } ).then(result=>{
            //     if(result.body.status == 0){
            //         var cmt = {user_name:'llll',add_time:Date.now(),content: this.msg.trim()};
            //         this.comments.unshift(cmt);
            //         this.msg=''
            //     }else{
            //         Toast('加载失败');
            //     }
            // })
            // var cmt = {user_name:'llll',add_time:Date.now(),content: this.msg.trim()};
            //         this.comments.unshift(cmt);
            //         this.msg=''
        }
    },
    props:["id"]//接收到 父组件 传过来的值 放入到 props
}
</script>
<style lang="scss" scoped>

.cmt-container {
    h3 {
        font-size:18px;
    }
    textarea {
        font-size:14px;
        height:85px;
        margin:0;
    }
    .cmt-list{
        margin:5px 0;
        .cmt-item{
            font-size:13px;
            .cmt-title{
                line-height:30px;
                background-color:#ccc;
            }
            .cmt-body{
                line-height:35px;
                text-indent:2em;
            }
        }
    }
}
</style>