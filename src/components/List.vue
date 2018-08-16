<template>
  <ul>
    {{ name }}
    <li
      v-for="card in cards"
      :key="card.name">
      <Card :name="card.name"/>
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

<style>

</style>
