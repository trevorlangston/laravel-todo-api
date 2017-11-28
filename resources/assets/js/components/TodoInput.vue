<template>
    <input 
    placeholder="add a new todo"
    :value="newTodo"
    @input="updateNewTodo"
    @keydown.enter="addTodo">
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['newTodo']),
    },
    methods: {
        ...mapActions(['addTodo']),
        updateNewTodo: function (e) {
            this.$store.commit('updateNewTodo', e.target.value);
        }
    }
}
</script>

<style>
input {
    width: 100%;
    padding: 0.5rem;
    margin: 1rem 0;
}
</style>
