<template src="./TodoAdd.html"></template>
<style src="./TodoAdd.scss" lang="scss"></style>

<script lang="ts">
import Vue from 'vue';
import { todoDelete, todoAdd, todoList } from '../../graphql';

export default Vue.extend({
  name: 'TodoAdd',

  data: () => ({
    newTodo: '',
    todos: [],
  }),
  apollo: {
    todos: {
      query: todoList,
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.$apollo.mutate({
        mutation: todoAdd,
        variables: {
          description: this.newTodo,
        },
      });

      this.$apollo.queries.todos.refetch();

      this.newTodo = '';
    },
    removeTodo(index: number) {
      this.$apollo.mutate({
        mutation: todoDelete,
        variables: {
          todoId: index,
        },
      });
      this.$apollo.queries.todos.refetch();
    },
  },
});
</script>
