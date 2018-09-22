<template>
    <div>
        <div class="displays">
        <router-link to='/ScenicSpot'>
        <img :src="displayImg">
        </router-link>
        <p>{{name}}</p>
        <router-link to='/'><span class="iconfont">&#xe624;</span></router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default{
        name:'CityDetail',
        data(){
            return {
                displayImg:'',
                name:''
            }
        },
        methods:{
        getCityInfo(){
        axios.get('/cityDetail.json')
            .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res){
        res=res.data;
        if(res.ret && res.data){
        const data=res.data;
        this.displayImg=data[0].imgurl;
        this.name=data[0].name;
        }
        }
  },
    mounted(){
    this.getCityInfo();
    }
    }
</script>

<style>
    .displays img{
        width:100%;
    }
    .displays p{
        color:white;
        margin-top:-0.7rem;
        font-size:1.3em;
        padding-left:0.3rem;
    }
    .displays span{
        border-radius:100%;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        width:0.72rem;
        height:0.72rem;
        position:absolute;
        left:0.1rem;
        top:0.1rem;
        color:white;
        line-height: 0.72rem;
    }
</style>
