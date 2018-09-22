import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Home.vue';
import City from '../pages/City/City.vue';
import HomeSearch from '../pages/Search/homesearch.vue';
import CitySearch from '../pages/Search/citysearch.vue';
import CityDetail from '../pages/Detail/Detail.vue';
import ScenicSpot from '../pages/Detail/ScenicSpot.vue';

Vue.use(VueRouter);
//配置路由
const routes = [
    { path: '/', component: Home },
    { path: '/city', component: City },
    { path: '/citysearch', component: CitySearch},
    { path: '/homesearch', component: HomeSearch},
    { path: '/CityDetail/:id',component: CityDetail},
    { path: '/ScenicSpot',component: ScenicSpot}
];
const router =new VueRouter({
    routes 
});
export default router;