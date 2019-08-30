<template>
    <div>
        <!-- 我么不知道什么时候能够拿到 max 值，但是，总归有一刻，会得到一个真正的 mac 值 -->
        <!-- 我们可以采用 watch 属性监听，来监听 父组件传过来的 max 值，不管 watch 会触发几次，
        最后一次，可定是一个合法的 max 值 -->
        
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input id="test" class="mui-input-numbox" type="number" value="1" ref="countN" @change="countChange" />
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
             this.$emit("getCount",parseInt(this.$refs.countN.value))
            //  console.log(this.$refs.countN.value)
        }
    },
    props:["max"],
    watch:{
        max:function(newVal, oldVal){
            mui(".mui-numbox").numbox().setOption('max',newVal);
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>