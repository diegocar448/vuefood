import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from "./default";
import companies from "./modules/companies";
import cart from "./modules/cart/cart";
import auth from "./modules/auth/auth";

/* 
Assim o Vue usará o Vuex
*/
Vue.use(Vuex)

/* 
Assim instaciamos o Vuex podendo tambem passar o parâmetros de configurações
*/
const store = new Vuex.Store({
    modules: {
        companies,
        cart,
        auth,
    },
    state,
    mutations

});

export default store