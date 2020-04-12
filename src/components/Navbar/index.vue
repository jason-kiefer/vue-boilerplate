<style lang="scss">
    @import "./style.scss";
</style>
<template>
    <nav id='navbar'>
        <div class='header'>    
            <h3 @click='menuToggle' class='menu-toggle'>
                <font-awesome-icon icon="bars" class='align-self-center mr-3' />
            </h3>          
            <details class='details-wrapper'>
                <summary class='nav-item'>
                    <font-awesome-icon icon='user' />
                </summary>
                <details-menu class='dropdown-menu'>
                    <p>Welcome, User</p>
                    <p>Account</p>
                    <p>Logout</p>
                </details-menu>
            </details>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        menuToggle () {
            this.$store.state.sideDrawer = !this.$store.state.sideDrawer
        }
    },
}
</script>