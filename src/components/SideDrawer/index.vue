<!--
    - Renders if state.sideDrawer is toggled.
-->

<style lang="scss">
    @import "./style.scss";
</style>

<template>
    <div v-if='this.$store.state.sideDrawer == 1' id='side-drawer'>
        <div class='d-flex flex-row justify-content-between py-2 px-3'>
            <h3>Welcome, User</h3>
            <h3 @click='menuToggle' class='m-0 p-0'>
                <font-awesome-icon icon='times' class='align-self-center' />
            </h3>  
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        menuToggle () {
            this.$store.state.sideDrawer = !this.$store.state.sideDrawer
        }
    }
}
</script>