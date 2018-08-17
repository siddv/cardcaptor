import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'cardcaptor',
  storage: localStorage,
});

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 1,
        name: 'An example list',
      },
    ],
    cards: [
      {
        id: 1,
        list: 1,
        name: 'An example card',
      },
    ],
  },
  mutations,
  actions,
  plugins: [
    vuexPersist.plugin,
  ],
});
