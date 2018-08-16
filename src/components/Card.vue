<template>
  <div class="card">
    <p class="card-header-title">
      {{ name }}
    </p>
    <div class="card-content">
      <div class="select">
        <select v-model="list">
          <option
            v-for="list in lists"
            :key="list.id"
            :value="list">
            {{ list.name }}
          </option>
        </select>
      </div>
      <a @click.prevent="deleteCard">
        Delete card
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
    },
  },
  computed: {
    ...mapState([
      'lists',
      'cards',
    ]),
    card() { return this.cards.filter(card => card.id === this.id)[0]; },
    list: {
      get() { return this.lists.filter(list => list.id === this.card.list)[0]; },
      set(list) { this.$store.commit('MOVE_CARD', { listId: list.id, cardId: this.id }); },
    },
  },
  methods: {
    deleteCard() {
      this.$store.commit('DELETE_CARD', this.id);
    },
  },
};
</script>

<style>

</style>
