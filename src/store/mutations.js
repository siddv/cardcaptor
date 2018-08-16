/* eslint-disable no-param-reassign */
export default {
  MOVE_CARD(state, { listId, cardId }) {
    const cardToMove = state.cards.filter(card => card.id === cardId)[0];
    cardToMove.list = listId;

    state.cards = [
      ...state.cards.filter(card => card.id !== cardId),
      cardToMove,
    ];
  },
  ADD_CARD(state, { name, list }) {
    state.cards = [
      ...state.cards,
      {
        id: Math.round(Math.random() * 1000),
        list,
        name,
      },
    ];
  },
  ADD_LIST(state, name) {
    state.lists = [
      ...state.lists,
      {
        id: Math.round(Math.random() * 1000),
        name,
      },
    ];
  },
};
/* eslint-enable no-param-reassign */
