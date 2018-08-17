<template>
  <ul class="list">
    <h2 class="title is-4">{{ name }}</h2>
    <a
      class="list__delete"
      @click.prevent="deleteList">Delete list</a>
    <li
      v-for="card in listCards"
      :key="card.name">
      <Card
        class="list__card"
        :name="card.name"
        :id="card.id" />
    </li>
    <li>
      <div href="#" class="card list__card">
        <a
          class="card-header-title list__add-card"
          @click="createNewCard = !createNewCard">
            Add new Card
          </a>

        <form
          @submit.prevent="addCard"
          class="content list__new-card-form"
          v-if="createNewCard">
          <input
            v-model="newCardName"
            class="input"
            type="text"
            placeholder="Name">
        </form>

      </div>
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
  data() {
    return {
      createNewCard: false,
      newCardName: '',
    };
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
  methods: {
    addCard() {
      this.$store.commit('ADD_CARD', {
        name: this.newCardName,
        list: this.id,
      });
    },
    deleteList() {
      this.$store.commit('DELETE_LIST', this.id);
    },
  },
};
</script>

<style lang="scss">
  .list__card {
    margin: 1rem 0;
  }
</style>
