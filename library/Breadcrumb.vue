<template>
  <nav class="flex dark" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <router-link to="/" class="capitalize inline-flex items-center text-sm font-medium text-gray-400 hover:text-white">
          <span class="material-icons mr-2">home</span>
          Главная
        </router-link>
      </li>
      <li v-for="(item, index) in items" :key="index">
        <div class="flex items-center">
          <span class="material-icons text-gray-400">chevron_right</span>
          <router-link :to="item.path" class="capitalize ml-1 text-sm font-medium text-gray-400 hover:text-white md:ml-2">
            {{ item.label }}
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ['items'],
}
</script>
