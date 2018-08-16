<template>
  <div id="app" class="container">
    <section class="lists columns">
      <List
        v-for="list in lists"
        :key="list.id"
        :name="list.name"
        :id="list.id"
        class="column" />

      <div class="column">
        <a
          class="title is-4"
          @click="createNewList = !createNewList">
          Add new list
        </a>

        <form
          @submit.prevent="addList"
          class="content"
          v-if="createNewList">
          <input
            v-model="listName"
            class="input"
            type="text"
            placeholder="Name">
        </form>
      </div>

    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import List from './components/List.vue';

export default {
  name: 'app',
  data() {
    return {
      createNewList: false,
      listName: '',
    };
  },
  components: {
    List,
  },
  computed: {
    ...mapState([
      'lists',
    ]),
  },
  methods: {
    addList() {
      this.$store.commit('ADD_LIST', this.listName);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.lists {
  display: flex;
}
</style>
