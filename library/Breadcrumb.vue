<template>
  <nav class="flex dark" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <router-link to="/" class="capitalize inline-flex items-center text-sm font-medium text-gray-400 hover:text-white">
           <fa-icon icon ='fa-solid fa-house' class="text-gray-400 mr-2"/>
          Главная
        </router-link>
      </li>
      <li v-for="(item, index) in items" :key="index">
        <div class="flex items-center">
          <fa-icon icon="fa-solid fa-chevron-right" class="text-gray-400 w-4"/>
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
