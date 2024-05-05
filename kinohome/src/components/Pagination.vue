<script setup>
import { reactive, computed, defineEmits, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  totalItems: Number,
  itemsPerPage: Number
})

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['page-changed'])

const state = reactive({
  currentPage: 1,
  movies: []
})

watch(
  () => route.query.page,
  (newPage) => {
    state.currentPage = newPage ? parseInt(newPage, 10) : 1
  },
  { immediate: true }
)

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / props.itemsPerPage)
})

watch(
  () => props.totalItems,
  () => {
    // Если есть необходимость объявить какую-то логику, которая должна выполниться при изменении props.totalItems
  },
  { immediate: true }
)

const visiblePages = computed(() => {
  const pages = []
  const currentPage = state.currentPage
  const pagesToShow = 2

  let startPage = currentPage - pagesToShow
  let endPage = currentPage + pagesToShow

  if (startPage < 1) {
    startPage = 1
    endPage = Math.min(startPage + pagesToShow * 2, totalPages.value)
  }

  if (endPage > totalPages.value) {
    endPage = totalPages.value
    startPage = Math.max(endPage - pagesToShow * 2, 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
})

const goToPage = (page) => {
  const query = { ...route.query, page: page.toString() }
  emit('page-changed', page)
  router.push({ query })
}
</script>

<template>
  <nav class="pagination-nav">
    <button class="btn_pagination-edges" v-if="state.currentPage !== 1" @click="goToPage(1)">
      Начало
    </button>

    <button
      class="btn_pagination-edges"
      v-if="state.currentPage > 1"
      @click="goToPage(state.currentPage - 1)"
    >
      Пред.
    </button>

    <button
      class="btn_pagination"
      v-for="page in visiblePages"
      :key="page"
      :class="{ active: page === state.currentPage }"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <button
      class="btn_pagination-edges"
      v-if="state.currentPage < totalPages.value"
      @click="goToPage(state.currentPage + 1)"
    >
      След.
    </button>

    <button
      class="btn_pagination-edges"
      v-if="state.currentPage !== totalPages.value"
      @click="goToPage(totalPages.value)"
    >
      Конец
    </button>
  </nav>
</template>

<style scoped>
.pagination-nav {
  --pagination-size: 44px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
}

.pagination-nav .active {
  background-color: #2253b2;
}

.btn_pagination-edges {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 44px;
  font-size: 16px;
  line-height: 15px;
  border-radius: 5px;
  padding: 8px;
  color: #fff;
  background-color: #1c1c1f;
  transition: background-color 0.3s;
}

.btn_pagination-edges:hover {
  background-color: hsla(220, 5%, 56%, 0.3);
}

.btn_pagination {
  display: block;
  padding: 0 12px;
  min-width: 44px;
  height: 44px;
  color: #fff;
  background-color: #1c1c1f;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn_pagination:hover {
  background-color: hsla(220, 5%, 56%, 0.3);
}

@media (max-width: 768px) {
  .pagination-nav {
    --pagination-size: 35px;
    gap: 10px;
  }
  .btn_pagination-edges {
    font-size: 12px;
    line-height: 10px;
    min-width: 40px;
    height: 40px;
  }
  .btn_pagination {
    font-size: 12px;
    line-height: 10px;
    padding: 0 10px;
    min-width: 40px;
    height: 40px;
  }
}

@media (max-width: 576px) {
  .pagination-nav {
    --pagination-size: 35px;
    gap: 6px;
  }
  .btn_pagination-edges {
    font-size: 8px;
    line-height: 6px;
    min-width: 30px;
    height: 30px;
  }
  .btn_pagination {
    font-size: 10px;
    line-height: 6px;
    padding: 0 6px;
    min-width: 25px;
    height: 25px;
  }
}
</style>
