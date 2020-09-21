<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <router-link to="/" tag="div">
                <div class="iconfont back-arrow">&#xe658;</div>
            </router-link>
            <img :src="bannerImg" class="banner-img">
            <div class="banner-desc">
                <p>{{sightName}}</p>
                <div class="img-desc">
                    <div class="iconfont">&#xe610;</div>
                    <div class="img-count">{{gallaryImgs.length}}</div>
                </div>
            </div>
        </div>
        <transition>
            <div class="banner-view" v-show="showView" @click="handleViewClick">
                <swiper :options="swiperOptions" class="wrapper" v-if="imgData">
                    <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
                        <img :src="item" class="view-img">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </transition>
    </div>
</template>
<script>
import eventBus from 'src/eventBus'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    },
    data(){
        return{
            swiperOptions:{
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                }
            },
            showView:false
        }
    },
    computed:{
        imgData(){
            return this.gallaryImgs.length;
        }
    },
    methods:{
        handleBannerClick(){
            this.showView=true;
            eventBus.$emit('handleHeaderShow',this.showView);
        },
        handleViewClick(){
            this.showView=false;
            eventBus.$emit('handleHeaderShow',this.showView);
        }
    }
}
</script>
<style scoped lang='scss'>
.banner{
    position: relative;
    .back-arrow{
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        background-color: #000;
        opacity: .5;
        position: absolute;
        top: .2rem;
        left: .2rem;
        line-height: .8rem;
        text-align: center;
        font-size: .8rem;
        color: #fff;
    }
    .banner-img{
    width: 100%;
    }
    .banner-desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:.2rem;
        color: #fff;
        background: linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,0));
        .img-desc{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.2rem;
            height: .5rem;
            background-color: #000;
            opacity: .7;
            border-radius: 35%;
            .img-count{
                margin-left: .1rem;
            }
        }
    }
}
// .banner-view >>> .swiper-pagination{
//     bottom: -1.8rem;
//     color: #fff;
// }
::v-deep .swiper-pagination{
    bottom: -1.8rem;
    color: #fff;
}
.banner-view{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .wrapper{
        width: 100%;
        overflow: initial;
        .view-img{
            width: 100%;
        }
    }
    
}
.v-enter-active,.v-leave-active{
    transition: opacity .3s;
}
.v-enter,.v-leave-to{
    opacity: 0;
}

</style>