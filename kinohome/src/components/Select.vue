<script setup></script>

<template>
  <div class="select_section">
    <div class="select_left">
      <select>
        <option>Жанр 1</option>
        <option>Жанр 2</option>
      </select>

      <select>
        <option>Рейтинг 1</option>
        <option>Рейтинг 2</option>
      </select>

      <select>
        <option>2024</option>
      </select>
    </div>

    <div class="select_right">
      <select>
        <option>Рекомендуемые</option>
        <option>По рейтингу</option>
        <option>По дате выхода</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.select_section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.select_left,
.select_right {
  display: flex;
  gap: 1em; /* Отступ между селектами */
}

select {
  /* Общие стили для селектов */
  padding: 10px;
  border-radius: 0.25em;
  background-color: #292929;
}
</style>
