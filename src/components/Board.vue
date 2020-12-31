<template>
  <div class="board">
    <template v-for="(line, lIndex) in board">
      <div v-for="(field, fIndex) in line" :class="(lIndex % 2 + fIndex) % 2 ? 'black' : 'white'">
        &#160;
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Board',
  setup() {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ];

    return {
      board,
    }
  },
});
</script>
