<template>
  <div id="app">
    <List
      v-for="list in lists"
      :key="list.name"
      :cards="list.cards" />
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
</style>
