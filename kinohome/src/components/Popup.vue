<script setup>
import { defineProps, defineEmits, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  isVisible: Boolean,
  maxWidth: {
    type: String,
    default: '900px'
  }
})

const emit = defineEmits(['update:isVisible'])

onMounted(() => {
  if (props.isVisible) {
    document.body.classList.add('overflow-y-hidden')
  }
})

onUnmounted(() => {
  document.body.classList.remove('overflow-y-hidden')
})

const closePopup = () => {
  emit('update:isVisible', false)
}

watch(
  () => props.isVisible,
  (newVal) => {
    if (newVal) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }
)
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start md:items-center md:pt-0 overflow-y-hidden transition-opacity duration-300"
    v-show="isVisible"
    @click.self="closePopup"
  >
    <div
      class="modal_popup bg-[#222222] rounded-lg p-6 mx-4 w-full transition-all duration-300 transform-gpu items-center"
      :style="{ maxWidth: maxWidth }"
      :class="{ 'scale-100': isVisible, 'scale-95': !isVisible }"
      @click.stop
    >
      <button class="text-white absolute right-2 top-2 focus:outline-none" @click="closePopup">
        <svg
          class="icons_close"
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
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.icons_close {
  width: 15px;
  height: 15px;
  fill: white;
  transition: fill 0.3s;
}

@media (max-width: 1024px) {
  .modal_popup {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .modal_popup {
    width: 85%;
  }
}

@media (max-width: 576px) {
  .modal_popup {
    width: 100%;
    margin: 0;
    border-radius: 0;
    justify-content: center;
  }
}
</style>
