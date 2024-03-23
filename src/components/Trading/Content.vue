<template>
  <div class="trading">
    <div class="trading__info">
      <CoinName :coinName="store.state.kline.s" />
      <Average />
      <AveragePercent />
      <High :h="store.state.kline.h"/>
      <Low :l="store.state.kline.l"/>
      <Turnover />
      <FRC />
    </div>
    <Settings />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Settings from "./Settings.vue";
import CoinName from "./CoinName.vue";
import Average from "./Average.vue";
import AveragePercent from "./AveragePercent.vue";
import High from "./High.vue";
import Low from "./Low.vue";
import Turnover from "./Turnover.vue";
import FRC from "./FRC.vue";

const store = useStore();


</script>

<style></style>
