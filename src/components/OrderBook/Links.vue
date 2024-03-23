<template>
  <div class="order__link">
    <ul>
      <a href="#" @click.prevent="handleClick(0)"
        ><img src="../../assets/icons/Frame 1494.svg" alt="1-btn"
      /></a>
      <a href="#" @click.prevent="handleClick(1)"
        ><img src="../../assets/icons/Frame 1495.svg" alt="2-btn"
      /></a>
      <a href="#" @click.prevent="handleClick(2)"
        ><img src="../../assets/icons/Frame 1496.svg" alt="3-btn"
      /></a>
      <a href="#" @click.prevent="handleClick(3)"
        ><img src="../../assets/icons/Frame 1497.svg" alt="4-btn"
      /></a>
    </ul>
    <select>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script setup>

const emit = defineEmits();

const handleClick = (index) => {
    emit('route', index)
}

</script>

<style></style>
