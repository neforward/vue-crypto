<template>
  <div class="recent">
    <Top />
    <div class="line__horiz"></div>
    <Item v-for="item in items" :key="item.t" :item="item" />
  </div>
</template>

<script setup>
import Top from "./Top.vue";
import Item from "./Item.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const items = ref([]);
const store = useStore();

const ws = new WebSocket(store.state.baseWsUrl + "@trade");

ws.onmessage = (event) => {
  const res = JSON.parse(event.data);

  if (items.value.length > 10) {
    items.value.unshift(res);
    items.value.pop();
  } else {
    items.value.unshift(res);
  }
};
</script>

