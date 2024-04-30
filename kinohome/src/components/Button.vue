<script setup>
defineProps({
  text: String
})
</script>

<template>
  <button class="custom-button font-bold">{{ text }}</button>
</template>

<style scoped>
.custom-button {
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 16px;
  min-width: 52px;
  min-height: 52px;
  border: none;
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.2px;
}
.custom-button:hover {
  background-color: #2563eb;
}

@media (max-width: 576px) {
  .custom-button {
    width: 100%;
  }
}
</style>
