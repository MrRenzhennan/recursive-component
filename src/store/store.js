
import Vue from 'vue'
import Vuex from 'vuex'

const mutations = {
    mutationName(state) {
        state.count = "bb"
        
        console.log("state",state.count)
        //在这里改变state中的数据
      }
};
const actions = {
      increment (context) {
        context.commit('increment')
      }
};
const state = {
    count:"aa"
};

const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      }
}


Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store

