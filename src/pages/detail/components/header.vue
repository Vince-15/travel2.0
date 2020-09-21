<template>
    <div class="header" ref="header" v-show="showHeader">
        <router-link to="/" tag="div">
            <div class="iconfont back-arrow">&#xe658;</div>
        </router-link>
        <div class="title">景点详情</div>
    </div>
</template>
<script>
import eventBus from "src/eventBus";
export default {
    name:'DetailHeader',
    data(){
        return {
            showHeader:true
        }
    },
    methods:{
        changeBackground(){
            let scrollTop=document.documentElement.scrollTop;
            this.$refs.header.style.opacity=scrollTop*1/43;
        }
    },
    mounted(){
        eventBus.$on('handleHeaderShow',showView=>{
            if(showView){
                this.showHeader=false;
            }else{
                 this.showHeader=true;
            }
        })
    },
    activated(){
         window.addEventListener('scroll',this.changeBackground);
    },
    deactivated(){
        window.removeEventListener('scroll',this.changeBackground);
    }
    
}
</script>
<style lang="scss" scoped>
@import '~assets/style/variable.scss';
    .header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: $backgroundColor;
        height: .86rem;
        display: flex;
        color: #fff;
        font-size: .3rem;
        z-index: 99;
        opacity: 0;
        .back-arrow{
            width: .864rem;
            line-height: .86rem;
            text-align: center;
            font-size: .6rem;
        }
        .title{
            flex: 1;
            padding-right: .86rem;
            text-align: center;
            line-height: .86rem;
        }
    }
</style>