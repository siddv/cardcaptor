<template>
  <div id="app" class="container">
    <section class="lists columns">
      <List
        v-for="list in lists"
        :key="list.id"
        :name="list.name"
        :id="list.id"
        class="column" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import List from './components/List.vue';

export default {
  name: 'app',
  components: {
    List,
  },
  computed: {
    ...mapState([
      'lists',
    ]),
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
