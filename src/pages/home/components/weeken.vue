<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="weeken-item border-bottom" v-for="item of list" :key="item.id">
                <img :src="item.imgUrl" alt="" class="weeken-img">
                <p class="weeken-title">{{item.title}}</p>
                <p class="weeken-desc">{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeeken',
    props:{
        list:Array
    }
}
</script>
<style lang="scss" scoped>
.title{
    height: .68rem;
    background-color: #eee;
    padding-left: .2rem;
    line-height: .68rem;
}
.weeken-item{
    box-sizing: border-box;
    padding-bottom: .2rem;
    .weeken-title,
    .weeken-desc{
        margin-left: .2rem;
        margin-top: .2rem;
    }
    .weeken-title{
        font-size: .3rem;
        font-weight: bold;
    }
    .weeken-img{
        width: 100%;
    }
}

</style>