import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

let state = {
    newTodo: '',
    todos: [],
    errors: []
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
