import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

export const store = new createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations,
  actions,
});