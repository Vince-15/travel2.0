<template>
<div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="list.length">
        <swiper-slide v-for="item of list" :key="item.id">
            <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
export default {
    name:'HomeSwiper',
    data(){
        return {
            swiperOptions:{
                pagination: {
                    el: '.swiper-pagination'
                },
                loop:true
            }
        }
    },
    props:{
        list:Array
    }
}
</script>
<style lang="scss" scoped>
// .wrapper::v-deep.swiper-pagination-bullet-active{
//     background: #fff;
// }
::v-deep .swiper-pagination-bullet-active{
    background: #fff;
}
.wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    img{
    width: 100%;
    }

}

</style>