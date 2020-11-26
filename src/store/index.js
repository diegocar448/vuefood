import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from "./default";
import companies from "./modules/companies";

/* 
Assim o Vue usará o Vuex
*/
Vue.use(Vuex)

/* 
Assim instaciamos o Vuex podendo tambem passar o parâmetros de configurações
*/
const store = new Vuex.Store({
    modules: {
        companies
    },
    state,
    mutations

});

export default store