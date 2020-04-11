import Vue from 'vue'
import Vuetify from 'vuetify'

// App component
import App from './components/App.vue'
import store from './store/index.js'
import router from './router/index.js'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faTimes, faUser, faSignOutAlt)

Vue.use(Vuetify)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    el: '#App',
    router,
    store,
    render: h => h(App)
})
