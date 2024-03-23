<template>
  <div class="positions__head">
    <ul class="positions__link">
      <a
        v-for="item in items"
        :key="item"
        :class="{ active: isActive === item }"
        @click="isActive = item"
        >{{ item }}</a
      >
    </ul>
    <div class="show__positions">
      <input type="checkbox" />
      <p>Show All Posotions</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref("Positions");
const items = [
  "Positions",
  "Closed P&L",
  "Actove 0",
  "Conditional 0",
  "Filled",
  "Order History",
];
</script>
