<template>
  <h1>Chess</h1>
  <Board />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Board from './Board.vue';

export default defineComponent({
  name: 'App',
  components: {
    Board,
  }
});
</script>

<style lang="scss">
@import "src/scss/app";
</style>
