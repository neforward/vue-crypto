<template>
  <div class="trading__static">
    <span :class="color">{{ Number(currentPrice).toFixed(1) }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentPrice = ref("");
const color = ref("red");

const ws = new WebSocket(store.state.baseWsUrl + "@ticker_1h");

ws.onmessage = (event) => {
  const res = JSON.parse(event.data);
  currentPrice.value = Number(res.w);

  color.value = Number(res.w) < Number(res.c) ? "green" : "red";
};
</script>

