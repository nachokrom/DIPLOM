<template>
  <header class="text-white">
    <div class="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <nav class="nav_header">
            <router-link to="/" class="nav_item r-5" active-class="active">Главная</router-link>
            <router-link to="/movies" class="nav_item mr-5" active-class="active"
              >Фильмы</router-link
            >
            <router-link to="/serials" class="nav_item mr-5" active-class="active"
              >Сериалы</router-link
            >
            <router-link to="/cartoons" class="nav_item mr-5" active-class="active"
              >Мультфильмы</router-link
            >
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav_item {
  color: white;
  text-decoration: none;
  position: relative;
  margin-right: 30px;
  font-size: 15px;
  line-height: 22px;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.nav_item:last-child {
  margin-right: 0;
}

.nav_item::before {
  content: '';
  display: none;
  position: absolute;
  bottom: -25px;
  left: -10px;
  right: -10px;
  height: 2px;
  background: linear-gradient(
    270deg,
    transparent 0.17%,
    #2253b2 15%,
    #fff 50%,
    #2253b2 85%,
    transparent
  );
}

.nav_item:hover {
  opacity: 1;
}

.nav_item.active {
  opacity: 1;
}

.nav_item.active::before {
  display: block;
}

.container {
  max-width: 1400px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.logo {
  max-width: 130px;
  max-height: 50px;
}
</style>
