<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icon :ilist='iconList'></home-icon>
    <home-center></home-center>
    <home-hot-list :list='hotList'></home-hot-list>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeCenter from './components/Center'
import HomeHotList from './components/HotList'
import axios from 'axios'

export default {
  name:'App',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeCenter,
    HomeHotList
  },
  data(){
    return {
      swiperList:[],
      iconList:[],
      hotList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/index.json')
          .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data;
      if(res.ret && res.data){
      const data=res.data;
      this.swiperList=data.swiperList;
      this.iconList=data.iconList;
      this.hotList=data.hotList
      }
    }
  },
    mounted(){
    this.getHomeInfo();
    }
}
</script>

<style>

</style>

