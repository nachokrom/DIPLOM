<script setup>
import { ref, defineProps } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const { options, title: initialTitle } = defineProps({
  options: {
    type: Array,
    required: true
  },
  title: {
    type: String
  }
})

const selectedOption = ref(options[0])
const title = ref(initialTitle || selectedOption.value.label)

function handleSelection(option) {
  selectedOption.value = option
  title.value = option.label
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#1c1c1f] px-3 py-2 text-sm font-semibold text-white shadow-sm"
      >
        {{ title }}
        <ChevronDownIcon class="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
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
        class="absolute left-0 z-10 mt-2 w-[270px] max-h-[385px] overflow-auto origin-top-right divide-y divide-gray-100 rounded-md bg-[#1c1c1f] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
