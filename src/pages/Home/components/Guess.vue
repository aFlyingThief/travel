<template>
    <div>
        <div class="guess-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
            猜你喜欢
        </div>
        <router-link style="display:block" :to="'/CityDetail/'+item.id" v-for='item in list' :key='item.id'>
        <div class="guess-content" >
            <img :src="item.imgUrl" />
            <ul>
                <li>{{item.title}}</li>
                <li><span class="uio">￥{{item.price}}</span>起<span>{{item.city}}</span></li>
            </ul> 
        </div>
        </router-link>
    </div>
</template>

<script>
export default{
    name:'HomeGuessList',
    props:{
        list:Array
    }
}
</script>

<style>
    .guess-title{
        line-height: 0.56rem;
    }
    .guess-title img{
        width:0.3rem;
        height:0.3rem;margin-top:-0.1rem;
    }
    .guess-content{
        display: flex;
        align-items:center;
        overflow: hidden;
        margin:0.2rem;
        color: #1a1a1a;
        font-family:Sans-serif；
    }
    .guess-content img{
        width:30%;
    }
    .guess-content ul{
        width:70%;
        display: inline-block;
        
    }
    .guess-content li{
        margin: 0.28rem 0;
        margin-left:0.2rem;   
    }
    .guess-content span{
        font-size:0.28rem;
    }
    .guess-content li:nth-of-type(1){ 
        font-size: 1.3em;
    }
    .guess-content li:nth-of-type(2){ 
        color:#404040;
        position: relative;
    }
    .guess-content li:nth-of-type(2) span:first-of-type{
        font-size: 1.5em;
        color:#ff7500
    }
    .guess-content li:nth-of-type(2) span:last-of-type{
        position:absolute;
        bottom: 0;
        right:0;
    }
    .guess-content li:nth-of-type(2)::first-letter{
        font-size:0.5em;
    }

</style>