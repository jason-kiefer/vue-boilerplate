<!-- 
    - Entry point to Vue application
    - Components use bootstrap for style, with some local css files for customizing
    - Examples includes Navbar, SideDrawer and Footer 
-->
<style lang='scss'>
    @import '../assets/scss/backgrounds.scss';
    @import '../assets/scss/borders.scss';
    @import '../assets/scss/buttons.scss';
    @import '../assets/scss/colors.scss';
    @import '../assets/scss/fontcolors.scss';
    @import '../assets/scss/main.scss';
</style>

<template>
    <div>
        <Navbar />
        <SideDrawer />
        <Footer />
    </div>
</template>

<script>

// Bootstrap
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Vuetify
import 'vuetify/dist/vuetify.min.css'

// Components
import Navbar from "./Navbar/index.vue";
import SideDrawer from "./SideDrawer/index.vue";
import Footer from "./Footer/index.vue";

export default {
    components: { 
        Navbar,
        SideDrawer,
        Footer
    }
};
</script> 