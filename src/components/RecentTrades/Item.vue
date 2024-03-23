<template>
  <ul class="recent__stat">
    <li :class="item.p > store.state.kline.c ? 'green' : 'red'">
      {{ Number(item.p).toFixed(1) }}
      <img
        v-if="item.p > store.state.kline.c"
        src="../../assets/icons/arrow_upward.svg"
        alt="arrowUp"
      />
      <img v-else src="../../assets/icons/arrow_downward.svg" alt="arrowUp" />
    </li>
    <li>{{ Number(item.q).toFixed(4) }}</li>
    <li>{{ formattedTime }}</li>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["item"]);

const date = new Date(props.item.T);

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const formattedTime = `${String(hours).padStart(2, "0")}:${String(
  minutes
).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
</script>
