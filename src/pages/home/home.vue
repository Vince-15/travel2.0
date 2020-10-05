<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :list=swiperList></home-swiper>
        <home-icons :list=iconList></home-icons>
        <home-recommend :list=recommendList></home-recommend>
        <home-weeken :list=weekendList></home-weeken>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeeken from './components/weeken'
import axios from 'axios'
export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeeken
    },
    data(){
        return {
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
        }
    },
    methods:{
        getData(){
            axios.get('/api/index.json').then(res=>{
                let data=res.data;
                if(data.ret&&data.data){
                    let res=data.data;
                    this.swiperList=res.swiperList;
                    this.iconList=res.iconList;
                    this.recommendList=res.recommendList;
                    this.weekendList=res.weekendList;
                }
            })
        }
    },
    mounted(){
        this.getData();
    },
}
</script>
<style scoped lang='scss'>

</style>