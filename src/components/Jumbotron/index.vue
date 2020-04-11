<template>
    <div class="container-xl f-ll-gray py-5">
        <ContentA v-if="section == 0" />
        <ContentB v-if="section == 1" />
        <ContentC v-if="section == 2" />
        <ContentD v-if="section == 3" />
        <ContentE v-if="section == 4" />
    </div>
</template>

<script>

import ContentA from './ContentA/index.vue'
import ContentB from './ContentB/index.vue'
import ContentC from './ContentC/index.vue'
import ContentD from './ContentD/index.vue'
import ContentE from './ContentE/index.vue'

export default {
    data: () => ({
        section: 0
    }),
    methods: {
        iterate () {
            this.section = (this.section + 1) % 5
        }
    },
    /*
    created: function () {
        this.timer = setInterval(this.iterate, 5000)
    },
    */
    components: {
        ContentA,
        ContentB,
        ContentC,
        ContentD,
        ContentE
    }
}
</script>