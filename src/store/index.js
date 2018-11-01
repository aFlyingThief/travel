import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        city:localStorage.city||'北京',
        spell:'beijing',
        URL:{
            weihai:'/weihai.json',
            beijing:'/beijing.json'
        }
    },
    mutations: {
        mountCity(state,payload) {
            state.spell= payload.spell;
            state.city=payload.city;
            localStorage.city=payload.city;
        }
    }
});