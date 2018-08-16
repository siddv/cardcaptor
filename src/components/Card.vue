<template>
  <div class="card">
    <p class="card-header-title">
      {{ name }}
    </p>
    <div class="content">
      Dummy content
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>

</style>
