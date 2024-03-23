<template>
  <div class="trading__static">
    <p>24H Low</p>
    <span>{{ Number(l).toFixed(1) }}</span>
  </div>
</template>

<script setup>
defineProps(["l"]);
</script>

<style></style>
