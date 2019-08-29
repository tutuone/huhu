<template>
    <div>

        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item">
                <img :src="item" :class="{full : isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>
<style lang="scss" scoped>
.mint-swipe {
    
    height:200px;
    
    .mint-swipe-item {
        text-align:center;
        // &:nth-child(1){
        //     background-color: red;
        // } 
        // &:nth-child(2){
        //     background-color: yellow;
        // } 
        // &:nth-child(3){
        //     background-color: green;
        // } 
        img{
            // width:100%;
            height:100%;
        }
    }  
}
full{
    width:100%;
}
</style>