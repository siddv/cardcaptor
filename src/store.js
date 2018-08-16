import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
        name: 'List 1',
        cards: [
          {
            name: 'Card 1',
          },
          {
            name: 'Card 2',
          },
        ],
      },
      {
        name: 'List 2',
        cards: [
          {
            name: 'Card 3',
          },
          {
            name: 'Card 4',
          },
        ],
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
});
