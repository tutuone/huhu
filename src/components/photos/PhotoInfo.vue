<template>
    <div class="photoinfo-container">
        <h3>{{ list.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{list.add_time}}</span>
            <span>点击：{{ list.click }}次数</span>
        </p>
        <hr>
        <!-- Vue preview plugin -->
        <!-- 第一种方式 -->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <!-- 之前版本现在已经不能用 （实现缩略图）-->
        <!-- <img  class="preview-img" v-for="(item, index) in tupian" :src="item.src" height="100"
        @click="$preview.open(index, tupian)" :key="item.src"> -->


        <!-- <div class="conten" v-html="list.content"></div> -->
        <div class="content">{{ list.content }}</div>

        <cmt-box :id=this.id></cmt-box>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id: this.$route.params.id,
            list:{},
            // tupian:[]   <!-- 之前版本现在已经不能用 （实现缩略图）-->
            //第一种方式：
            slide1: [
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            },
            {
                src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                alt: 'picture2',
                title: 'Image Caption 2',
                w: 1200,
                h: 900
            }
            ]
        }
    },
    created(){
        this.getPhotoInfo();
        // this. getTupian();<!-- 之前版本现在已经不能用 （实现缩略图）-->
    },
    methods:{
        getPhotoInfo(){
            this.list = [
                {id:43,title:'开发该局领导',add_time:'2019-12-12',click:3,content:'积分可能包括你看你看女科技开发局领导看得开了激烈的减肥了大家风格魅力的梅兰芳科目V领'}
            
            ][0];
        },
        handleClose () {
            console.log('close event')
        }
        // <!-- 之前版本现在已经不能用 （实现缩略图）-->
        // getTupian(){
        //     this.tupian = [
        //         {src:'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',w:600,h:400},
        //         {src:'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',w:600,h:400}
        //     ]
        // }
    },
    components:{
        "cmt-box" : comment
    }
}
</script>
<style lang="scss" scoped>
.photoinfo-container{
    padding: 3px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
}  
</style>