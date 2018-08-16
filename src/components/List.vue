<template>
  <ul class="list">
    <h2 class="title is-4">{{ name }}</h2>
    <li
      v-for="card in listCards"
      :key="card.name">
      <Card
        class="list__card"
        :name="card.name" />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
  props: {
    name: {
      type: String,
      default: () => '',
    },
    id: {
      type: Number,
    },
  },
  computed: {
    ...mapState([
      'cards',
    ]),
    listCards() {
      return this.cards.filter(card => card.list === this.id);
    },
  },
};
</script>

<style lang="scss">
  .list__card {
    margin: 1rem 0;
  }
</style>
