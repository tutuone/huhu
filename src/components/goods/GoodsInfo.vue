<template>
    <div class="goodsinfo-container">
        <!-- 加入购物车的小球设置动画 -->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        
        <!-- 图片轮播图 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotuList="goodsSrc" :isfull="false"></swiper>
					</div>
				</div>
		</div>
        <!-- 商品 -->
        <div class="mui-card">
				<div class="mui-card-header">{{goodsInfos.title}}商品名称</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价:<del>￥{{goodsInfos.market_price}}</del>&nbsp;&nbsp;
                            销售价:
                            <span class="now_price">￥{{goodsInfos.sell_price}}</span>


                        </p>
                        <p>购买数量：<numberBox @getCount="getBoxNum" :max="goodsInfos.stock_quantity"></numberBox></p>
                        
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
				
		</div>
        <!-- 商品参数 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsInfos.goods_no}}</p>
                        <p>库存情况：{{goodsInfos.stock_quantity}}件</p>
                        <p>上架时间：{{goodsInfos.add_time}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" plain size="large" @click="goDesc(id)">图文介绍</mt-button>

                    <mt-button type="danger" plain size="large" @click="goComment(id)">商品评论</mt-button>
                </div>
		</div>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import numberBox from '../subcomponents/numberbox.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            goodsSrc:[],
            goodsInfos:{},
            ballFlag:false,
            boxCount:1

        }
    },
    created(){
        this.getgoodsSrc();
        this.getgoodsInfo();
    },
    methods:{
            getgoodsSrc(){
                // this.$http.get('./'+ this.id).then(result=>{
                //     if(result.body.status == 0){
                //         this.goodsSrc = result.body.message;
                //     }

                // })
                 var arr = [
                    {src:'https://img.alicdn.com/imgextra/i4/1714128138/O1CN01BskDXS29zFfws06J4_!!1714128138.jpg_430x430q90.jpg'},
                    {src:"https://img.alicdn.com/imgextra/i1/3515402915/O1CN01nwv9eN1XP75U2s9OI_!!3515402915.jpg_430x430q90.jpg"}
                    
                ];
                var brr = [];
                arr.forEach(item =>{
                     brr.push(item.src);
                })
                // console.log(brr);
                this.goodsSrc = brr;

            },
            getgoodsInfo(){
                // this.$http.get('./'+this.id).then(result=>{
                //     if(result.body.status ==0 ){
                //              this.goodsInfos= this.result.body.message;
                //     }
                // })
                this.goodsInfos=[{id:0,title:'商品名称',add_time:'2019-12-12',goods_no:'df65464646',
                stock_quantity:20,market_price:269,sell_price:199}][0]
            },
            goDesc(id){
                this.$router.push({name:'goodsdesc',parmas:{id}})
            },
            goComment(id){
                this.$router.push({name:'goodscomment',parmas:{id}})
            },
            addShopcar(){
                this.ballFlag = !this.ballFlag;
                // {id:商品的id, count:要购买的数量, price:商品的单价, selected:false}
                var goodsinfo = { 
                    id: this.id, 
                    count: this.boxCount, 
                    price: this.goodsInfos.sell_price, 
                    selected: true 
                };
                this.$store.commit('addToCar',goodsinfo)

            },
            beforeEnter(el){
                el.style.transform = "translate(0, 0)";
            },
            enter(el,done){
                el.offsetWidth;
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const badgePosition = document.getElementById("badge").getBoundingClientRect();
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;

                el.style.transform = `translate(${xDist}px, ${yDist}px)`;
                el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el){
                this.ballFlag = !this.ballFlag;
            },
            getBoxNum(count){
                // console.log(count);
                this.boxCount = count;
                
            }
    },
    components:{
        swiper,
        numberBox
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container {
    background-color:#eee;
    overflow: hidden;
    .now_price{
        color:red;
        font-size:16px;
        font-weight:blod;
    }
    .mui-card-footer{
        display:block;
        button{
            margin:15px 0;
        }
    }
    .ball{
        width:15px;
        height:15px;
        border-radius: 50%;
        background-color:red;
        position: absolute;
        z-index:99;
        top:390px;
        left:146px;
        // transform:translate(93px, 230px);
    }
}
</style>