<template>
  <div class="board"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Board',
});
</script>

<style>
.board {
  height: 600px;
  margin-right: auto;
  margin-left: auto;
  max-height: 100%;
  max-width: 100%;
  width: 600px;
}
</style>
