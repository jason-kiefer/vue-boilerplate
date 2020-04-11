<template>
    <nav id='navbar' class='bg-d-green f-ll-gray'>
        <div class='container-xl'>
            <div class='d-flex flex-row justify-content-between py-3'>    
                <h3 @click='menuToggle' class='d-lg-none m-0 p-0'>
                    <font-awesome-icon icon="bars" class='align-self-center mr-3' />
                </h3>          
                <h3>Welcome</h3>
                <div class='d-lg-flex d-none m-0 p-0'>
                    <h5 class='nav-button'>
                        <font-awesome-icon icon='user' class='align-self-center mr-2' />
                        <span class='align-self-center'>Profile</span>
                    </h5>
                    <h5 class='nav-button'>
                        <font-awesome-icon icon='sign-out-alt' class='align-self-center ml-4 mr-2' />
                        <span class='align-self-center'>Sign Out</span>
                    </h5>
                </div>
            </div>
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