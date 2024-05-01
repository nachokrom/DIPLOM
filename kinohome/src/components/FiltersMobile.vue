<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

const closeWindow = () => {
  emit('close')
}
</script>

<template>
  <div class="modal container mx-auto max-w-7xl px-2">
    <button class="close" @click="closeWindow">
      <svg
        class="icons"
        id="Capa_1"
        enable-background="new 0 0 512.001 512.001"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"
          />
        </g>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #171717;
  z-index: 150;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}

.icons {
  width: 22px;
  height: 22px;
  fill: white;
  transition: fill 0.3s;
}
</style>
