<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
//const router = useRouter()

const breadcrumbs = computed(() => {
  let paths = []
  route.matched.forEach((m) => {
    if (m.meta && m.meta.breadcrumb) {
      // Формируем полный путь до текущего маршрута
      let to = m.redirectedFrom || m.path
      paths.push({
        text: m.meta.breadcrumb,
        to: { path: to } // Здесь указываем объект пути для router-link
      })
    }
  })

  // Добавляем корневой маршрут вручную, если он не задан в маршрутах
  if (paths.length == 0 || (paths.length > 0 && paths[0].text !== 'Личный кабинет')) {
    paths.unshift({ text: 'Личный кабинет', to: { path: '/profile' } })
  }

  if (paths.length == 0 || (paths.length > 0 && paths[0].text !== 'Главная')) {
    paths.unshift({ text: 'Главная', to: { path: '/' } })
  }

  return paths
})
function isLastBreadcrumb(index) {
  return index === breadcrumbs.value.length - 1
}
</script>

<template>
  <nav aria-label="breadcrumb" class="nav_breadcrumb">
    <ul class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <router-link :to="crumb.to" v-if="!isLastBreadcrumb(index)" class="breadcrumb-link">
          {{ crumb.text }}
        </router-link>
        <span class="link_bread" v-else>{{ crumb.text }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav_breadcrumb {
  margin-bottom: 30px;
}
.breadcrumb {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.breadcrumb-item {
  position: relative;
}
.breadcrumb-link {
  font-size: 14.5px;
  line-height: 18px;
  color: hsla(0, 0%, 100%, 0.6);
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: #fff;
}

.link_bread {
  font-size: 14.5px;
  line-height: 18px;
  color: hsla(0, 0%, 100%, 0.6);
}

.breadcrumb-item:not(:first-child) {
  padding-left: 11px;
  margin-left: 8px;
}

.breadcrumb-item:not(:first-child)::before {
  content: '';
  display: block;
  width: 3px;
  height: 3px;
  position: absolute;
  top: 11px;
  left: 0;
  transform: translateY(-50%);
  border-radius: 100%;
  background-color: hsla(0, 0%, 100%, 0.4);
}
</style>
