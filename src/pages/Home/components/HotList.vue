<template>
<div style="background-color:white;margin-top:0.5em;">
    <div class='hot-list-title'>
        <div>
        <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" /> 
        <span>热门榜单</span>
        </div>
        <div>
        <span>全部榜单</span>
        <img src="./right.png"/>
        </div>
    </div> 
    <ul class='hot-list-content'>  
    <swiper :options="swiperOption" class="hot-swiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <li>
            <img :src="item.ranking" v-show="ok"/>
            <img :src="item.imgUrl" />
            <p>{{item.desc}}</p>
            <p><span>￥{{item.price}}</span>起</p>
        </li>
      </swiper-slide>
    </swiper>
    </ul>
</div>
</template>
<script>
export default{
    name:'HomeHotList',
    props:{
        list:Array
    },
    data(){
        return {
            swiperOption:{
                slidesPerView: 3.5,
                spaceBetween:10,
                slidesOffsetBefore:10,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    clickable: true
                }
            }
        }
    }
}
</script>
<style>
.hot-list-title{
    line-height: 0.6rem;
    width:100%;
    display:flex;
    justify-content: space-between;
}
.hot-list-title img{
    width:.4rem;
    height:.4rem;
}
.hot-list-content{
    width:100%;
    height:0;
    padding-bottom: 40%;
    margin:0.5em 0;
}
.hot-list-content li{
    width:100%;
    text-align:center;
}
.hot-list-content p{
    font-size:95%;
    padding-top:0.1rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: clip;
}
.hot-list-content img{
    width:100%;
}
.hot-list-content span{
    font-size:1.2em;
    color:tomato;
}
.hot-swiper{
    height:3rem
}
</style> 