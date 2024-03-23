<template>
  <div class="trading__name">
    <img src="../../assets/icons/swap_horiz.svg" alt="swap" />
    <img class="btcLogo" src="../../assets/icons/logo/btc.png" alt="btc-logo" />
    <div class="trading__title">
      <div>
        <p>{{ coinName }}</p>
        <img src="../../assets/icons/info.svg" alt="info-icon" />
      </div>
      <span class="title-grey">USDT Perpetual</span>
    </div>
  </div>
</template>

<script setup>
defineProps(["coinName"]);
</script>

<style></style>
