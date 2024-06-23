<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'

const { options, title } = defineProps({
  options: {
    type: Array,
    required: true
  },
  title: {
    type: String
  }
})

const emit = defineEmits(['updateSelectedOption'])

const selectedOption = ref(options.length > 0 ? options[0] : null)
const isMenuOpen = ref(false)
const subtitle = ref(selectedOption.value.label)

function handleSelection(option) {
  selectedOption.value = option
  subtitle.value = option.label

  emit('updateSelectedOption', option)
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left w-full">
    <div>
      <MenuButton
        @click="isMenuOpen = !isMenuOpen"
        class="menu_btn inline-flex w-full justify-center items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-white shadow-sm h-16"
      >
        <div class="title_menu-btn">
          <div class="title_name">
            <h3 class="title_menu">{{ title }}</h3>
            <span class="subtitle">{{ subtitle }}</span>
          </div>
          <ChevronDownIcon
            v-show="isMenuOpen"
            class="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
          <ChevronRightIcon
            v-show="!isMenuOpen"
            class="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </div>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute left-0 z-10 mt-2 w-full max-h-[200px] overflow-auto origin-top-right divide-y divide-gray-100 rounded-md bg-[#1c1c1f] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        style="
          overflow-x: hidden;
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: none;
        "
      >
        <div class="py-1">
          <template v-for="(option, index) in options" :key="index">
            <MenuItem @click="handleSelection(option)">
              <template #default="{ active }">
                <a
                  :href="option.href || '#'"
                  :class="[
                    option === selectedOption.value ? 'bg-[#3d3d43]' : '',
                    active ? 'bg-[#3d3d43] text-white' : 'text-white',
                    'flex items-center px-4 py-2 text-sm h-[50px]'
                  ]"
                >
                  {{ option.label }}
                </a>
              </template>
            </MenuItem>
          </template>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
.menu_btn {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.6);
}

.title_menu-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title_menu {
  font-size: 16px;
  font-weight: 400;
}

.title_name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.subtitle {
  font-size: 12px;
  font-weight: 300;
  color: hsla(0, 0%, 100%, 0.6);
}
</style>
