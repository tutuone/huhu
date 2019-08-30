<template>
    <div class="goods-list">

        <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" 
        :to="'/home/goodsinfo/'+ item.id"  tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_pricr }}</span>
                    <span class="old">￥{{ item.mark_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link> -->
        <!-- 网页中，有两种跳转方式：
        方式1 ：使用 a 标签的形式跳转
        方式2：使用 window.location.href 的形式  编程式导航 -->
         <div class="goods-item" v-for="item in goodslist" :key="item.id" 
         @click="goDetial(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_pricr }}</span>
                    <span class="old">￥{{ item.mark_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

         <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            pageIndex: 1,
            goodslist: []
        }
    },
    created(){
        this.getGoods();
    },
    methods:{
            getGoods(){
                // this.$http.get('./path'+this.pageIndex).then(result=>{
                //     if(result.body.status ==0 ){
                //        this.goodslist = this.goodslist.concat(result.body.message);
                //     }
                // })
                this.goodslist = [
                    {id:1, title:'小米官方旗舰店红米note8 pro/redmi', add_timd:'2019-12-12', zhaiyao:'eeeeeeee', click:0, img_url:'https://img.alicdn.com/bao/uploaded/i2/TB1AMUaf3HqK1RjSZFPaEswapXa_051838.jpg_sum.jpg', sell_pricr:2195,
                    mark_price:2499, stock_quantity:60},
                    {id:2, title:'小米官方旗舰店红米note8 pro/redmi', add_timd:'2019-12-12', zhaiyao:'eeeeeeee', click:0, img_url:'https://img.alicdn.com/imgextra/i1/3515402915/O1CN01nwv9eN1XP75U2s9OI_!!3515402915.jpg_430x430q90.jpg', sell_pricr:2195,
                    mark_price:2499, stock_quantity:60},
                    {id:3, title:'小米官方旗舰店红米note8 pro/redmi', add_timd:'2019-12-12', zhaiyao:'eeeeeeee', click:0, img_url:'https://img.alicdn.com/imgextra/i4/1714128138/O1CN01BskDXS29zFfws06J4_!!1714128138.jpg_430x430q90.jpg', sell_pricr:2195,
                    mark_price:2499, stock_quantity:60}

                    ]
            },
            getMore(){
                this.pageIndex++;
                this.getGoods();
            },
            // router
            // 详情见https://router.vuejs.org/zh/guide/essentials/navigation.html
            // 一下都适用
                // router.push('home')

                // // 对象
                // router.push({ path: 'home' })

                // // 命名的路由
                // router.push({ name: 'user', params: { userId: '123' }})

                // // 带查询参数，变成 /register?plan=private
                // router.push({ path: 'register', query: { plan: 'private' }})

            goDetial(id){
                this.$router.push("/home/goodsinfo/" + id);
            }
    }

}
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    .goods-item{
        padding:2px;
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px#ccc;
        margin: 3px 0;
        // display: flex;
        // flex-direction: colum;
        // justify-content: space-between;
        // min-height: 292px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin:0;
                padding: 5px;
            }
            .price{
                .now{
                    color:red;
                    font-weight: bold;
                    font-size:16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display:flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }

}
</style>