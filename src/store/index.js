import Vue from 'vue'
import Vuex from 'vuex'  // Requires Promise (npm i es6-promise --save)

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sideDrawer: false
    },
    mutations: {
        toggleSideDrawer (state) {
            !state.sideDrawer
        }
    }
})