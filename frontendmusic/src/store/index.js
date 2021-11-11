import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlist: [],
  },

  actions: {
    async addTodo({ commit }, payload) {
      commit("newSong", payload);
      console.log(payload);
    },
  },
  mutations: {
    setSong: (state, payload) => (state.payload = payload),
    newSong: (state, song) => state.playlist.unshift(song),
  },
  modules: {},
});
