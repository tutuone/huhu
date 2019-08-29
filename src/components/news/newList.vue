<template>
    <div>
        	<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time  | dateFormat}}</span>
                                <span>点击:{{ item.click }}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
import {Toast}from 'mint-ui'
export default {
    data(){
      return {
          list:[]
      }
    },
    created(){
        this. getList()
    },
    methods:{
        getList(){
            // this.$http.post('api/getlunbo').then(result=>{
            //     if(result.body.status == 0){
            //         this.list = result.body.message;
            //     }else{
            //         Toast('加载失败');
            //     }
            // })
            this.list=[
                {id:13,title:'福建化工是滴咯和上路',add_time:'2015-04-167T04:05:34.000Z',zhaiyao:'kfhkfjhglkjld',click:1,img_url:'https://s.cn.bing.net/th?id=OJ.V8h5VF6eXAKs2Q&w=75&h=75&pid=MSNJVFeeds'},
                {id:14,title:'福建化工是滴咯和上路',add_time:'2015-04-16703:50:28.000Z',zhaiyao:'kfhkfjhglkjld',click:4,img_url:'https://s.cn.bing.net/th?id=OJ.V8h5VF6eXAKs2Q&w=75&h=75&pid=MSNJVFeeds'},
                {id:15,title:'福建化工是滴咯和上路',add_time:'2015-04-16703:50:28.000Z',zhaiyao:'kfhkfjhglkjld',click:0,img_url:'https://s.cn.bing.net/th?id=OJ.V8h5VF6eXAKs2Q&w=75&h=75&pid=MSNJVFeeds'},
                {id:16,title:'福建化工是滴咯和上路',add_time:'2015-04-16703:50:28.000Z',zhaiyao:'kfhkfjhglkjld',click:5,img_url:'https://s.cn.bing.net/th?id=OJ.V8h5VF6eXAKs2Q&w=75&h=75&pid=MSNJVFeeds'},
                {id:17,title:'福建化工是滴咯和上路',add_time:'2015-04-16703:50:28.000Z',zhaiyao:'kfhkfjhglkjld',click:7,img_url:'https://s.cn.bing.net/th?id=OJ.V8h5VF6eXAKs2Q&w=75&h=75&pid=MSNJVFeeds'},
                {id:18,title:'福建化工是滴咯和上路',add_time:'2015-04-16703:50:28.000Z',zhaiyao:'kfhkfjhglkjld',click:33,img_url:'https://s.cn.bing.net/th?id=OJ.V8h5VF6eXAKs2Q&w=75&h=75&pid=MSNJVFeeds'},
                {id:19,title:'福建化工是滴咯和上路',add_time:'2015-04-16703:50:28.000Z',zhaiyao:'kfhkfjhglkjld',click:9,img_url:'https://s.cn.bing.net/th?id=OJ.V8h5VF6eXAKs2Q&w=75&h=75&pid=MSNJVFeeds'}
            ]
        }
    }
}
</script>
<style lang = "scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size:14px;
        }
        .mui-ellipsis{
            font-size:12px;
            color:#226aff;
            display:flex;
            justify-content: space-between;
        }

    }
}
</style>