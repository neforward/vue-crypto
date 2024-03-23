<template>
  <div class="trading__static">
    <p>24H High</p>
    <span>{{Number(h).toFixed(1)}}</span>
  </div>
</template>

<script setup>
defineProps(['h'])
</script>

<style></style>
