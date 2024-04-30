<script setup>
defineProps({
  names: {
    type: Array,
    required: true
  },
  selectedTab: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['changeTab'])

const clickOnTab = (tabName) => {
  emit('changeTab', tabName)
}
</script>

<template>
  <div class="tab-nav">
    <span
      v-for="tab in names"
      :key="tab.name"
      :class="['tab-nav__item', { selected: tab.name === selectedTab }]"
      @click="clickOnTab(tab.name)"
      >{{ tab.label }}
    </span>
  </div>
  <div class="tab-content">
    <slot />
  </div>
</template>

<style scoped>
.tab-nav {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.tab-nav::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: hsla(0, 0%, 100%, 0.1);
}

.tab-nav__item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 0.5);
  padding-bottom: 15px;
}

.tab-nav__item:not(:last-child) {
  margin-right: 30px;
}

.tab-nav__item:hover {
  color: #fff;
  transition: 0.3s;
}

.tab-nav__item.selected {
  color: #fff;
}

.tab-nav__item.selected::after {
  content: '';
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2941b7;
  transition:
    opacity 0.3s,
    transform 0.3s,
    color 0.3s;
}

.tab-content {
  padding: 0px;
  background: transparent;
}

@media (max-width: 576px) {
  .tab-nav__item:not(:last-child) {
    margin-right: 25px;
  }
  .tab-nav__item {
    font-size: 14px;
    line-height: 18px;
    padding-bottom: 10px;
  }
}
</style>
