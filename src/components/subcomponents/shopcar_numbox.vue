<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max' style="height:25px">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="countN" @change="countChange" readonly/>
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
    mounted(){
         mui(".mui-numbox").numbox();
    },
    methods:{
        countChange(){
            
            this.$store.commit("updateGoodsInfo",{
                id:this.goodsid,
                count:this.$refs.countN.value
                })
        }
    },
    props:['initcount','goodsid']
}
</script>
<style lang="scss" scoped>
  .mui-numbox {
      margin:0 3px;
  }
</style>