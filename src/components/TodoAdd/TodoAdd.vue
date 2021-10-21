<template src="./TodoAdd.html"></template>
<style src="./TodoAdd.scss" lang="scss"></style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoAdd',

  data: () => ({
    newTodo: '',
    idForTodo: 3,
    todos: [
      {
        id: 1,
        description: 'Finish Vue Screencast',
        completed: false,
      },
      {
        id: 2,
        description: 'Take over world',
        completed: false,
      },
    ],
  }),
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        description: this.newTodo,
        completed: false,
      });

      this.newTodo = '';
      this.idForTodo++;
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1);
    },
  },
});
</script>
