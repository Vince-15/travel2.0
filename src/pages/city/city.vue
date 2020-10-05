<template>
    <div class="city">
        <!-- <city-search @handleClickInput=handleClickInput :cities=cities></city-search> -->
        <city-list 
        :hotCities=hotCities
        :cities=cities
        :letters=letters
        v-show="!showResult"
        >
        </city-list>
        <city-alphabet :letters=letters v-show="!showResult"></city-alphabet>
        <city-result v-show="showResult" @handleReultClick=handleReultClick></city-result>
    </div>
</template>
<script>
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
import CityResult from './components/result'
import axios from 'axios'
export default {
    components:{
        CitySearch,
        CityList,
        CityAlphabet,
        CityResult
    },
    data(){
        return{
            hotCities:[],
            cities:{},
            showResult:false
        }
    },
    computed:{
         letters(){
            let letters=[];
            for(let k in  this.cities){
                letters.push(k);
            }
            return letters;
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(res=>{
                const data=res.data;
                if(data.ret && data.data){
                    this.hotCities=data.data.hotCities;
                    this.cities=data.data.cities;
                }
            })
        },
        handleClickInput(){
            this.showResult=true;
        },
        handleReultClick(){
            this.showResult=false;
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>
<style lang="scss" scoped>
</style>