<template>
<div class="container">
    <detail-header></detail-header>
    <div class="wrapper" ref="wrapper">
        <div class="content">
           
            <detail-banner
            :sightName=sightName
            :bannerImg=bannerImg
            :gallaryImgs=gallaryImgs
            >
            </detail-banner>
            <detail-category :categoryList=categoryList class="detailCategory"></detail-category>
        </div>
    </div>
</div> 
</template>
<script>
import DetailBanner from './components/banner'
import DetailCategory from './components/category'
import DetailHeader from './components/header'
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
    components:{
        DetailBanner,
        DetailCategory,
        DetailHeader
    },
    data(){
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            categoryList:[]
        }
    },
    methods:{
        getData(){
            axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.getDataSucc);
        },
        getDataSucc(res){
            res=res.data;
            if(res.ret && res.data){
                const data=res.data;
                this.sightName=data.sightName;
                this.bannerImg=data.bannerImg;
                this.gallaryImgs=data.gallaryImgs;
                this.categoryList=data.categoryList;
            }
        }
    },
    mounted(){
        this.getData();
        // this.scroll = new BScroll(this.$refs.wrapper);
    },
    activated(){
        this.getData();
    }
}
</script>
<style lang="scss" scoped>

.container{
    height: 100%;
    .wrapper{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        .detailCategory{
            height: 60rem;
        }
    }   
}



</style>