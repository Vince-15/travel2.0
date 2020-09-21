<template>
    <div class="header">
        <div class="left-side">
            <div class="iconfont back-arrow">&#xe658;</div>
        </div>
        <div class="center">
            <div class="iconfont search-icon">&#xe616;</div>
            <input type="text" placeholder="输入城市/景点/游玩主题">
        </div>
        <router-link to='/city'>
            <div class="right-side">
                <p>{{this.city}}</p>
                <p class="iconfont down-arrow">&#xe65c;</p>
            </div>
        </router-link>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'HomeHeader',
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/variable.scss';
.header{
    background-color: $backgroundColor;
    height: .86rem;
    display: flex;
    align-items: center;
    .left-side{
        width: .64rem;
        color: #fff;
        line-height: .86rem;
        .back-arrow{
            font-size: .4rem;
            text-align: center;
        }
    }
    .center{
        flex: 1;
        background-color: #fff;
        height: .6rem;
        border-radius: .1rem;
        display: flex;
        align-items: center;
        .search-icon{
            font-size: .4rem;
            margin-right: .05rem;
        }
        input{
            flex: 1;
            color: #333;
            padding: 0 .05rem;
        }
    }
    .right-side{
        min-width: 1.24rem;
        padding: 0 .1rem;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;
        .down-arrow{
            font-size: .4rem;
        }
    }
}
</style>