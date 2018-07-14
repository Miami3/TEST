import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import {getImageItem} from "../helpers/random";

export default new Vuex.Store({
  state: {
    images: []
  },
  getters: {
      getImages: state => {
          return state.images;
      }
  },
  mutations: {
      refreshMutation: state => {
          state.images = [];
          for (let i = 0; i < 20; i++) {
              state.images.push(getImageItem());
          }
      }
  },
  actions: {
      refresh: ({commit}) => {
          commit('refreshMutation');
      }
  }
})
