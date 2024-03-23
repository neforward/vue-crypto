<template>
  <div class="open">
    <ContentState @isShow="(e) => (isShow = e)" />
    <OpenContent v-if="isShow" />
    <CloseContent v-else />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContentState from "./ContentState.vue";
import OpenContent from "./Open/Content.vue";
import CloseContent from "./Close/Content.vue";

const isShow = ref(true);
</script>