<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <div>
                <div class="title">您的位置</div>
                <div class="current-city-container">
                    <p class="current-city border">{{this.$store.state.city}}</p>
                </div>
            </div>
            <div>
                <div class="title">热门城市</div>
                <div class="hot-city-container">
                    <div class="hot-city border" v-for="item in hotCities" :key="item.id" @click="changeCity(item.name)">{{item.name}}</div>
                </div>
            </div>
            <div v-for="key in letters" :key="key" class="city-list" :ref="key">
                <div class="title">{{key}}</div>
                <ul>
                    <li class="city-list-item border-topbottom" v-for="item in cities[key]" :key="item.id" @click="changeCity(item.name)">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import eventBus from 'src/eventBus'
export default {
    name:'CityList',
    props:{
        hotCities:Array,
        letters:Array,
        cities:Object,
    },
    data(){
        return {
            letter:''
        }
    },
    methods:{
        changeCity(city){
            this.$store.commit('changeCity',city);
            this.$router.push('/');
        },
        elementHeight(){
            this.letters.forEach(letter=>{
                const element=this.$refs[letter][0];
                console.log(element.clientHeight);
            })
        }
    },
    created(){
        eventBus.$on('handelLetterClick',letter=>{
            this.letter=letter;
        });
        eventBus.$on('touchLetter',letter=>{
            this.letter=letter;
        })
    },
    mounted(){
        console.log(1)
        this.elementHeight();
        this.scroll = new BScroll(this.$refs.wrapper);
        this.scroll.on('scroll',pos=>{
               console.log(1);
           });
        
    },
    watch:{
        letter(){
            if(this.letter){
                const element=this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper{
    overflow: hidden;
    height: 100%;
    position: absolute;
    top: 1.5rem;
    left: 0;
    right: 0;
    .title{
        height: .40rem;
        background-color: #eee;
        padding-left: .2rem;
        line-height: .40rem;
    }
    .current-city-container{
        box-sizing: border-box;
        padding: .2rem;
        .current-city{
        width: 30%;
        text-align: center;
        line-height: .6rem;
        color: #00bcd4;
        }
        .border::before{
            border-color: #00bcd4;
            border-radius: .2rem;
        }
    }
    .hot-city-container{
        display: flex;
        flex-wrap: wrap;
        padding: .2rem .4rem 0;
        .hot-city{
            width: 30%;
            text-align: center;
            line-height: .6rem;
            margin-bottom: .2rem;
            margin-right: .2rem;
            &:nth-child(3){
                margin-right: 0;
            }
        }
        .border::before{
            border-color: #999;
            border-radius: .2rem;
        }
    }
    .city-list{
        .city-list-item{
            line-height: .6rem;
            padding-left: .2rem;
            font-weight: bold;
        }
        .border-topbottom::before{
            border-color: #999;
        }
    }
}


</style>