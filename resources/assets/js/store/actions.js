export default {
    setTodos(context) {
        axios.get('/api/todos')
            .then(resp => {
                context.commit('setTodos', resp.data.data)
            })
            .catch(e => {
                console.log(e);
            })
    },
    addTodo(context) {
        axios.post('/api/todos', {
            task: context.state.newTodo
        })
            .then(resp => {
                context.commit('addTodo', resp.data.data);
            })
            .catch(e => {
                console.log(e);
            })
        context.commit('updateNewTodo', '');
    },
    removeTodo(context, idToRemove) {
        axios.delete(`/api/todos/${idToRemove}`)
            .then(resp => {
                context.commit('removeTodo', idToRemove);
            })
            .catch(e => {
                console.log(e);
            })
    }
}
