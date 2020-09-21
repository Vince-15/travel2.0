<template>
    <div class="city-result" @click="handleClick">
        <div class="blank"></div>
        <div>
            <ul class="result-list">
                <li class="result-item border-topbottom" v-for="item in list" :key="item.id" @click="handleItemClick(item.name)">
                    {{item.name}}
                </li>
                <li class="result-item border-topbottom" v-show="!list.length">
                    没有数据
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import eventBus from 'src/eventBus';
export default {
    name:'CityResult',
    data(){
        return {
            list:[]
        }
    },
    methods:{
        handleClick(){
            this.$emit('handleReultClick');
        },
        handleItemClick(city){
            this.$store.commit('changeCity',city);
            this.$router.push('/');
        }
    },
    mounted(){
        eventBus.$on('search',list=>{
            this.list=list;
        })
    }
}
</script>
<style lang="scss" scoped>
.city-result{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: #fff;
    .blank{
        height: 1.5rem;
    }
    .result-item{
        line-height: .5rem;
        padding-left: .2rem;
        font-size: .3rem;
    }
}
</style>