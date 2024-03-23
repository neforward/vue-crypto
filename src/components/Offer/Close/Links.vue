<template>
  <div class="open__links dflex">
    <button
      v-for="item in items"
      :key="item"
      class="open__link_btn"
      :class="{ olb__active: isActive === item }"
      @click="isActive = item"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref("Limit");
const items = ["Limit", "Market"];
</script>
