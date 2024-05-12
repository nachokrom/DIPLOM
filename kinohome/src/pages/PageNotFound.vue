<template>
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-2xl font-semibold text-blue-500">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        Страница не найдена
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        К сожалению, мы не смогли найти страницу, которую вы ищите.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/"
          class="btn-signin rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2563eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >На главную</a
        >
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn-signin {
  transition: background-color 0.3s;
}
</style>
