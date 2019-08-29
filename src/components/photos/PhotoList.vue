<template>
    <div>
        <!-- 借助于 mui -->
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll"><!--只有mui中可以这么用 将@click 变为@tap 适应手机模式-->
						<a :class="['mui-control-item', item.id == 0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" @tap="getImgs(item.id)" data-wid="tab-top-subpage-1.html">
							{{ item.title }}
						</a>
					
                       
					</div>
				</div>

		</div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link  v-for="item in imgList" :key="item.id"  :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <div class="info-title"> {{ item.title }}</div>
                    <div class="info-body">{{ item.zhaiyao}}</div>
                </div>

            </router-link >
        </ul>

    </div>
</template>
<script>
//1引包
import mui from '../../lib/mui/js/mui.js'

export default {
    data(){
       return {
           catas:[],
           imgList:[]
       };
    },
    created(){
        this.getCates();
        this.getImgs(0);
    },
    mounted(){
        //2.初始化 官方文档中  
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getCates(){
            // this.$http.get('路径').then(resule=>{
            //     if(resule.body.status == 0){
            //         result.body.message.unshift({id:0,title:'全部'})
            //         this.cates = result.body.message;
            //     }else{
            //         //报错
            //     }
            // })
            this.cates = [{id:0,title:'全部'},{id:1,title:'家具精品'},{id:2,title:'潮流服饰'},
                          {id:3,title:'安全电器'},{id:4,title:'运动风尚'},{id:5,title:'精致小饰品'}]

        },
        
        getImgs(imgid){
            //imgid  分类id
            this.imgList = [
                {id:50, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:1, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:20, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:33, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:24, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:9, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:51, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:11, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:21, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:34, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:25, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:19, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'},
                {id:6, title:'气质且可爱美丽不失大方', img_url:'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg', zhaiyao:'气质且可爱美丽不失大方'}
            ]
        }
    }
};
</script>
<style lang="scss" scoped>
*{
    /*
    滑动的时候报警：Unable to preventDefault inside passive event listener due to target being treated as passive.
     See https://www.chromestatus.com/features/5093566007214080 
    */
    touch-action:pan-y;
} 
.photo-list{
    list-style: none;
    margin:0;
    padding:10px;
    padding-bottom: 0px;
    li{
        width:100%;
        background-color: #ccc;
        text-align:center;
        margin-bottom: 10px;
        box-shadow: 0 0 6px #999;
        position: relative;
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        img{
            width: 360px;
            height: 300px; 
            vertical-align: middle; 
        }
        .info{
            position: absolute;
            bottom: 0px;
            color:white;
            text-align:left;
            background-color:rgba(0,0,0,0.4);
            // max-height:84px;
            .info-title{
                font-size:14px;
            }
            .info-body{
                font-size:13px;
            }
        }
    } 
} 

</style>