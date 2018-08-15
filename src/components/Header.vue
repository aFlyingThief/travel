<template>
    <div class="header">
        <div class="header-left"><span class="iconfont">&#xe624;</span></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <div class="header-right"><span class="iconfont">&#xe64a;</span></div>
    </div>
</template>

<script>
    export default{
        name:'HomeHeader',
}
</script>

<style>
    .header{
        background:#00bcd4;
        display:flex;
        height:.86rem;
        line-height:.86rem;
        color:#fff
    }
    .header-left{
        width:.64rem;
        float:left;
        text-align:center
    }
   
    .header-input{
        flex:1;
        background:#fff;
        height:.64rem;
        border-radius:.1rem;
        margin-top:.12rem;
        padding-left:.2rem;
        line-height:.64rem;
        color:#ccc
    }
    .header-right{
        width:1.24rem;
        float:right;
        text-align:center
    }
    
</style>


