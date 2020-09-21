<template>
    <div class="">
        <swiper v-if="list.length">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <ul class="icons-container">
                    <li class="icons-item" v-for="item of page" :key="item.id">
                        <img :src="item.imgUrl" alt="" class="icons-img">
                        <p class="icons-des">{{item.desc}}</p>
                    </li>
                </ul>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array
    },
    computed:{
       pages(){
           let pages=[];
            this.list.forEach((item,index)=>{
              let page=parseInt(index/8);
              if(!pages[page]){
                  pages[page]=[];
                }
              pages[page].push(item);
          })
          return pages;
       }
    }
}
</script>
<style lang="scss" scoped>
.icons-container{
    padding: .6rem 0;
    display: flex;
    flex-wrap: wrap;
    .icons-item{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: .4rem;
        .icons-img{
            width: 50%;
            margin-bottom: .15rem;
        }
    }
}

</style>