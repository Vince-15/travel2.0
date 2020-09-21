<template>
    <div class="container">
        <div class="search-header">
            <router-link to="/">
                <div class="iconfont back-arrow">&#xe658;</div>
            </router-link> 
            <div class="search-title">城市选择</div>
        </div>
        <div>
            <input type="text" placeholder="输入城市名或拼音" class="search-input" @click="handleClick" v-model="keywords">
        </div>
    </div>
</template>
<script>
import eventBus from 'src/eventBus';
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return {
            keywords:''
        }
    },
    methods:{
        handleClick(){
            this.$emit('handleClickInput');
        }
    },
    watch:{
        keywords(){
            let list=[];
            if(this.keywords){
                for(let k in this.cities){
                    this.cities[k].forEach(value => {
                        if(value.spell.indexOf(this.keywords)>-1||value.name.indexOf(this.keywords)>-1){
                            list.push(value);
                        }
                    });
                }
            }else{
                list=[];
            }
            eventBus.$emit('search',list);
        }
    },
    activated(){
        this.keywords='';
    }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/variable.scss';
.container{
    background-color: $backgroundColor;
    padding: .1rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    box-sizing: border-box;
    .search-header{
        margin-bottom: .2rem;
        display: flex;
        align-items: center;
        .back-arrow{
        color: #fff;
        font-size: .5rem;
        }
        .search-title{
            text-align: center;
            flex: 1;
            box-sizing: border-box;
            padding-right: .5rem;
            color: #fff;
            font-size: .3rem;
        }
    }
    .search-input{
        box-sizing: border-box;
        width: 100%;
        height: .6rem;
        border-radius: .1rem;
        text-align: center;
        padding: 0 .1rem;
    }
}

</style>