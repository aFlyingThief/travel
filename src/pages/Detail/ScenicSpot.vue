<template>
    <div>
        <div class="scenic-spots">
            <router-link to='/CityDetail/0001'><span class="iconfont">&#xe624;</span></router-link>
            景区图片
        </div>
        <div class="scenic-picture">
            <div class="picitem" v-for="(item,index) in imglist" :key="index" >
            <img  :id="index" :src="item" @click="bigDisplay"/>
            </div>  
        </div>
        <div class="big-photo" @click="bigDisplays" :style="{display:result}">
        <swiper class="swiper-container-big" :options="swiperOption" >
            <swiper-slide v-for="item in imglist" :key="item.id">
            <img class="swiper-scenic" :src="item"/> 
            </swiper-slide> 
        </swiper>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'ScenicSpot',
    data(){
        return {
            imglist:[],
            result:'none',
            num:'',
            swiperOption:{
                initialSlide :0,
            }
        }
    },
    methods:{
        bigDisplay(){
            this.result='block';
            this.num=parseInt(event.target.id);
        },
        bigDisplays(){
            this.result='none';
        },
        getCityInfo(){
        axios.get('/cityDetail.json')
            .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res){
        res=res.data;
            if(res.ret && res.data){
            const data=res.data;
            this.imglist=data[0].imglist;
            }
        }
    },
    mounted(){   
    this.getCityInfo();
    },
    updated(){
        this.swiperOption.initialSlide=this.num;
    }
}
</script>

<style>
    .scenic-spots{
        text-align: center;
        height:0.88rem;
        line-height:0.88rem;
        font-size: 1.2em;
    }
    .scenic-spots span{
        position:absolute;
        left:0.2rem;
        color:rgb(80, 80, 80);
    }
    .scenic-picture{
        background: #eeeeee;
        text-align: center;
    }
    .picitem{
        width:47%;
        height:0;
        padding-bottom: 32%;
        overflow: hidden;
        display: inline-block; 
    }
    .picitem img{
        width:100%;
        margin-top: 0.1rem;
    }
    .picitem:nth-of-type(odd){
        margin-right: 0.1rem;
    }
    .big-photo{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: black;
    }
    .swiper-scenic{
        width:100%;
    }
    .swiper-container-big{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
    }
</style>
