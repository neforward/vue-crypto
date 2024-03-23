<template>
  <div class="trading__static">
    <p>24H Change %</p>
    <span class="green">{{ item }}%</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const item = ref("");

const ws = new WebSocket(store.state.baseWsUrl + "@ticker_1h");

ws.onmessage = (event) => {
  const res = JSON.parse(event.data);
  item.value = res.P;
};
</script>

<style></style>
