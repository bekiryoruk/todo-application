<template src="./App.html"></template>
<style src="./App.scss" lang="scss"></style>

<script lang="ts">
import Vue from 'vue';
import Welcome from '../Welcome/Welcome.vue';
import TodoAdd from '../TodoAdd/TodoAdd.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Welcome,
    TodoAdd,
  },

  data: () => ({}),
});
</script>
