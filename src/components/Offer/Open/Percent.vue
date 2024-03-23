<template>
  <div class="order__percent dflex">
    <button
      v-for="item in items"
      :key="item"
      class="percent__btn"
      :class="{ percent__active: isActive === item }"
      @click="isActive = item"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref("10%");
const items = ["10%", "25%", "50%", "75%", "100%"];
</script>
