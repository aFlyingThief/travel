<template>
<div>
    <div class='hot-list-title'>
        <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" /> 
        <span>热门榜单</span>
        <span>全部榜单 ></span>
    </div>
    <ul class='hot-list-content'>
    <swiper :options="swiperOption" class="hotswiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <li>
            <img :src="item.imgUrl" />
            <p>{{item.desc}}</p>
            <p>￥<span>{{item.price}}</span>起</p>
        </li>
      </swiper-slide>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> 
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
            slidesOffsetBefore:10,
            spaceBetween:-260
            }
        }
    }
}
</script>
<style>
.hot-list-title{
    float:left;
    line-height: 0.6rem;
    width:100%;
}
.hot-list-title img{
    width:.3rem;
    height:.3rem;
    margin-left:.2rem
}
.hot-list-title span:last-of-type{
   float:right;
   margin-right:.2rem
}
.hot-list-content{
    width:100%;
    height:0;
    padding-bottom: 70%;
    float:left;
    font-size: 80%;
    line-height:0.3rem;
}
.hot-list-content img{
    width:100%;
    border-radius:10px;
}
.hot-list-content li{
    width:25%;
    height:0;
    padding-bottom: 25%;
    text-align:center;
}
.hotswiper{
    height:10rem;
}
.hot-list-content span{
    color:tomato;
}
</style> 