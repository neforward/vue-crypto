<script setup>
import { useStore } from "vuex";
import Header from "./components/Header.vue";
import TradingContent from "./components/Trading/Content.vue";
import RecentContent from "./components/RecentTrades/Content.vue";
import OrderBookContent from "./components/OrderBook/Content.vue";
import Cross from "./components/Offer/Cross.vue";
import Content from "./components/Offer/Content.vue";
import Positions from "./components/Positions/Content.vue";

const store = useStore();

const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1d");

ws.onopen = () => {
  console.log("connected");
};

ws.onmessage = (event) => {
  const { k } = JSON.parse(event.data);
  store.commit("SET_KLINE", k);
  console.log(store.state.kline);
};
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <div class="main__container">
        <TradingContent />
        <div class="content">
          <div class="left__side">
            <RecentContent />
            <OrderBookContent />
            <Positions />
          </div>
          <div class="rigth__side">
            <Cross />
            <Content />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
