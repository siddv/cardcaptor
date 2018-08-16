
import mutations from '@/store/mutations';
import actions from '@/store/actions';

export default {
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
};
