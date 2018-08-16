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
};
/* eslint-enable no-param-reassign */
