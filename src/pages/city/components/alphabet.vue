<template>
    <ul class="city-alphabet" >
       <li 
       class="alphabet-item" 
       v-for="item in letters" 
       :key="item" 
       @click="handelLetterClick(item)"
       @touchmove='handleTouchMove'
       :ref="item"
       >
       {{item}}
       </li>
    </ul>
</template>
<script>
import eventBus from 'src/eventBus'
export default {
    name:'CityAlphabet',
    props:{
        letters:Array
    },
    data(){
        return {
            timer:null
        }
    },
    methods:{
        handelLetterClick(letter){
            eventBus.$emit('handelLetterClick',letter);
        },
        handleTouchMove(e){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=>{
                let clientY=e.touches[0].clientY;
                let index=parseInt((clientY-130)/20);
                let letter=this.letters[index];
                eventBus.$emit('touchLetter',letter);
            },8)
        }
    }
}
</script>
<style lang="scss" scoped>
.city-alphabet{
    height: 100%;
    position: fixed;
    right: 0;
    top: 2.6rem;
    .alphabet-item{
        width: .4rem;
        line-height: .4rem;
        text-align: center;
        color: #00bcd4;
    }
    .current{
        color: red;
    }
}
</style>