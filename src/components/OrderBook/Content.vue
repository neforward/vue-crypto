<template>
  <div class="order__book">
    <Top />
    <div class="line__horiz"></div>
    <Links @route="(e) => (isActive = e)" />
    <div class="stat__name">
      <p>Price(USDT)</p>
      <p>Quantity(BTC)</p>
      <p>Total(BTC)</p>
    </div>
    <component :is="components[isActive]" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Top from "./Top.vue";
import Links from "./Links.vue";
import First from "./First.vue";
import Second from "./Second.vue";
import Third from "./Third.vue";
import Fourth from "./Fourth.vue";

const components = [First, Second, Third, Fourth];

const isActive = ref(0);
</script>

<style></style>
