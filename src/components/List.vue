<template>
  <ul class="list">
    <h2 class="title is-4">{{ name }}</h2>
    <li
      v-for="card in cards"
      :key="card.name">
      <Card
        class="list__card"
        :name="card.name" />
    </li>
  </ul>
</template>

<script>

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
    cards: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
  .list__card {
    margin: 1rem 0;
  }
</style>
