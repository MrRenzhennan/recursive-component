<template>
    <div>
        <div>one</div>
        <div>{{count}}</div>
        <button v-on:click="mutations()">mutations</button>
        <button v-on:click="actions()">actions</button>
    </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            //count: this.$store.state.count
        };
    },
    computed: mapGetters([
    'count'
    ]),
    methods: {
        mutations() {
            console.log(1)
            this.$store.commit("mutationName");
        },
        actions(){
            this.$store.dispatch('increment')
        }
    }
};
</script>
