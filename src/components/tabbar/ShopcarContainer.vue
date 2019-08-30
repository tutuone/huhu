<template>
    <div class="shopcar-container">
        <!-- 商品列表区域 -->
        <div class="goods-list" v-for="(item, i) in shopCarList" :key="item.id" >
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedChange(item.id, $store.getters.getGoodsSelected[item.id])"
                        ></mt-switch>
                        <img :src="item.thubm_path" alt="">
					    <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span>
                                <numbox :initcount="$store.getters.getItemCount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#"@click.prevent="remove(item.id, i)">删除</a>
                            </p>
                        </div>
                    </div>
				</div>
			</div>
        </div>
        <!-- 商品结算区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计(不含运费)</p>
                            <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count}}</span> 件,
                             总价 ￥<span class="red">{{ $store.getters.getGoodsCountAndAmount.amount}}</span></p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
		</div>
    </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
       return {
           shopCarList:[]
       };
    },
    created(){
        this.getShopCarList();
    },
    methods:{
       getShopCarList(){
           var idArr = [];
           this.$store.state.car.forEach(item=>{
                idArr.push(item.id)
           })
           if(idArr.length == 0){
               return;
           }
        //    this.$http.get('./'+idArr.join(',')).then(result=>{
        //        if(result.body.status == 0){
        //               this.shopCarList = result.body.message;
        //        }
        //    })
        this.shopCarList = [
            {cou:1, id:1, sell_price:2198, thubm_path:'https://img.alicdn.com/bao/uploaded/i2/TB1AMUaf3HqK1RjSZFPaEswapXa_051838.jpg_sum.jpg'},
            {cou:1, id:2, sell_price:2198, thubm_path:'https://img.alicdn.com/imgextra/i1/3515402915/O1CN01nwv9eN1XP75U2s9OI_!!3515402915.jpg_430x430q90.jpg'},
            {cou:1, id:3, sell_price:2198, thubm_path:'https://img.alicdn.com/imgextra/i4/1714128138/O1CN01BskDXS29zFfws06J4_!!1714128138.jpg_430x430q90.jpg'}
        ]
       },
       remove(id, index){
            // 删除store 和goodlist
            this.shopCarList.splice(index, 1);
            this.$store.commit("removeForCar",id)

       },
       selectedChange(id, val){
           var o ={id:id, selected:val};
           this.$store.commit("updateGoodsSelected",o);

       }

    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
       .mui-card-content-inner{
           display:flex;
           align-items: center;
       }
       img{
          width:60px;
          height:60px; 
       }
       h1{
           font-size:13px;
       }
       .info{
           
           
           p{
              display:flex;
              .price{
                    color:red;
                    font-weight: bold;

               }
            
           }
       }
    }
    .jiesuan{
        display:flex;
        justify-content: space-between;
        align-items:center;
        .red{
            color:red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>