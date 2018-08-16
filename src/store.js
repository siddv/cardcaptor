import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
        list: 1,
        name: 'Card 1',
      },
      {
        list: 1,
        name: 'Card 2',
      },
      {
        list: 2,
        name: 'Card 3',
      },
      {
        list: 2,
        name: 'Card 4',
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
});
