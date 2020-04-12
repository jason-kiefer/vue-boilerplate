<!-- 
    - Entry point to Vue application
    - Components use bootstrap for style, with some local css files for customizing
    - Examples includes Navbar, SideDrawer and Footer 
-->
<style lang='scss'>
    @import '../assets/scss/index.scss';
    //@import 'vuetify/dist/vuetify.min.css';
</style>

<template>
    <div>
        <Navbar />
        <Node />
        <SideDrawer />
        <Footer />
    </div>
</template>

<script>

// Components
import Navbar from "./Navbar/index.vue";
import Node from "./Node/index.vue";
import SideDrawer from "./SideDrawer/index.vue";
import Footer from "./Footer/index.vue";

export default {
    components: { 
        Navbar,
        Node,
        SideDrawer,
        Footer
    }
};
</script> 