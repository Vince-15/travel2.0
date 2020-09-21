<template>
    <div>
        <div class="title">热销推荐</div>
        <ul class="content-list">
            <router-link class="content-item border-bottom" v-for="item of list" :key="item.id" tag="li" :to="{name:'Detail',params:{id:item.id}}">
                <div class="content-img">
                    <img v-lazy="item.imgUrl" alt="">
                </div>
                <div class="content-des">
                    <div class="content-title">{{item.title}}</div>
                    <div class="content-detail">{{item.desc}}</div>
                    <div class="content-price">￥56起</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/mixin.scss';
.title{
    height: .68rem;
    background-color: #eee;
    padding-left: .2rem;
    line-height: .68rem;
}
.content-item{
    display: flex;
    padding: .3rem;
    .content-img{
        width: 25%;
        img{
            width: 100%;
        }
    }
    .content-des{
        width: 75%;
        box-sizing: border-box;
        padding: .1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: .2rem;
        .content-title{
            width: 100%;
            font-size: .4rem;
            @include ellipsis();
        }
        .content-detail{
            width: 100%;
            font-size: .3rem;
            color: #999;
            @include ellipsis();
        }
        .content-price{
            font-size: .3rem;
            color: red;
        }
    }
    
}
</style>