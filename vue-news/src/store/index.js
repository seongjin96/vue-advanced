import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

export const store = new createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
  mutations,
  actions,
});