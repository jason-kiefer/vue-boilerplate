<template>
    <div>
        <Navbar />
        <Jumbotron />
        <Node />
        <SideDrawer />
        <Footer />
    </div>
</template>

<script>

// Style
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Backgrounds.css'
import '../css/BorderColors.css'
import '../css/FontColors.css'
import '../css/Main.css'
import '../css/Positioning.css'

// Components
import Navbar from "./Navbar/index.vue";
import Jumbotron from "./Jumbotron/index.vue";
import Node from "./Node/index.vue";
import SideDrawer from "./SideDrawer/index.vue";
import Footer from "./Footer/index.vue";

export default {
    components: { 
        Navbar,
        Jumbotron,
        SideDrawer,
        Node,
        Footer
    }
};
</script> 