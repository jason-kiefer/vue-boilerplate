<template>
    <nav id='navbar' class='bg-d-green f-ll-gray'>
        <div class='container-xl'>
            <div class='d-flex flex-row justify-content-lg-start justify-content-between py-3'>    
                <h3 @click='menuToggle' class='m-0 p-0'>
                    <font-awesome-icon icon="bars" class='d-lg-none align-self-center mr-3' />
                </h3>           
                <h3 class='m-0 p-0'>
                    Welcome
                </h3>
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