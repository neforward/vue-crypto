<template>
  <div class="open__close_btn dflex">
    <div
      class="clop__btn"
      v-for="item in items"
      :key="item"
      @click="handleClick(item)"
      :class="{ isShow: isActve === item }"
    >
      <a href="#">{{ item }}</a>
      <div class="clop__line"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActve = ref("Open");
const emit = defineEmits();
const items = ["Open", "Close"];

const handleClick = (data) => {
    isActve.value = data
    emit("isShow", data === "Open");
};
</script>

<style lang="scss">
.open__close_btn .clop__btn.isShow a {
  color: #2e4ce5;
}
</style>
