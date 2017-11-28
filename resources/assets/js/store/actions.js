export default {
    setTodos(context) {
        axios.get('/api/todos')
            .then(resp => {
                context.commit('setTodos', resp.data.data)
                context.commit('updateErrors', []);
            })
            .catch(e => {
                handleErrors(context, e);
            })
    },
    addTodo(context) {
        axios.post('/api/todos', {
            task: context.state.newTodo
        })
            .then(resp => {
                context.commit('addTodo', resp.data.data);
                context.commit('updateErrors', []);
            })
            .catch(e => {
                handleErrors(context, e);
            })
        context.commit('updateNewTodo', '');
    },
    removeTodo(context, idToRemove) {
        axios.delete(`/api/todos/${idToRemove}`)
            .then(resp => {
                context.commit('removeTodo', idToRemove);
                context.commit('updateErrors', []);
            })
            .catch(e => {
                handleErrors(context, e);
            })
    }
}

const handleErrors = function(context, e) {
    if (e.response.status === 400) {
        context.commit(
            'updateErrors', 
            [].concat(e.response.data.message)
        );
    } else {
        context.commit(
            'updateErrors', 
            [].concat('There was an unknown error, please try again later')
        );
    }
}
