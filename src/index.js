import Vue from 'vue'
import Vuex from 'vuex'  // Requires Promise (npm i es6-promise --save)

// App component/Anchor
import App from './components/App.vue'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faTimes)

Vue.use(Vuex)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        sideDrawer: false
    },
    mutations: {
        toggleSideDrawer (state) {
            !state.sideDrawer
        }
    }
})

new Vue({
    el: '#App',
    store,
    render: h => h(App)
})