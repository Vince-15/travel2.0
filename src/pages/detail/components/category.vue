<template>
    <div class="">
        <div class="title border-topbottom" v-for="(item,index) in categoryList" :key="index">
            {{item.title}}
            <div v-if="item.children">
                <detail-category :categoryList=item.children></detail-category>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailCategory',
    props:{
        categoryList:Array
    }
}
</script>
<style lang="scss" scoped>
    @import '~assets/style/variable.scss';

    .border-topbottom{
        &::before{
            border-color: $backgroundColor;
        }
        &::after{
            border-color: $backgroundColor;
        }
    }
    .title{
        line-height: .86rem;
        background-color: #ccc;
        width: 100%;
        box-sizing: border-box;
        padding-left: .2rem;
        color: #fff;
    }
   
</style>