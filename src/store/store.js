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
        name: 'List 1',
      },
      {
        id: 2,
        name: 'List 2',
      },
    ],
    cards: [
      {
        id: 1,
        list: 1,
        name: 'Card 1',
      },
      {
        id: 2,
        list: 1,
        name: 'Card 2',
      },
      {
        id: 3,
        list: 2,
        name: 'Card 3',
      },
      {
        id: 4,
        list: 2,
        name: 'Card 4',
      },
    ],
  },
  mutations,
  actions,
  plugins: [
    vuexPersist.plugin,
  ],
});
