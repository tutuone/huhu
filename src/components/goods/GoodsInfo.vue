<template>
    <div class="goodsinfo-container">
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
                        <p>购买数量：
                        </p>
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                <input id="test" class="mui-input-numbox" type="number" value="5" />
                                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small">加入购物车</mt-button>
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
export default {
    data(){
        return{
            id:this.$route.params.id,
            goodsSrc:[],
            goodsInfos:{}

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
            }
    },
    components:{
        swiper
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
}
</style>