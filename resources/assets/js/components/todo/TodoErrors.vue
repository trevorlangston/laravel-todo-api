<template>
    <div 
        class="alert alert-danger" 
        role="alert"
        v-if="errors.length > 0" >
        <ul v-if="errors.length > 0">
            <li v-for="error in errors">
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['errors']),
    }
}
</script>

<style>
ul {
    list-style: none;
    padding: 0;
}
</style>
