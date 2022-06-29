<template>
  <nav role="navigation">
    <ul class="divide-x-2 divide-gray-600 flex">
      <li class="navigation__item grow" v-for="item in items" :key="item.title">
        <div class="flex h-full font-bold text-center justify-center items-center">
          <a class="text-white" v-if="item.children == null && item.external" :href="item.path">
            {{ item.title }}
          </a>
          <nuxt-link class="text-white" v-if="item.children == null && !item.external" :to="item.path">
            {{ item.title }}
          </nuxt-link>
          <a class="text-white flex items-center" v-if="item.children" href="#" aria-haspopup="true">
            {{ item.title }}
            <fa-icon icon ='fa-solid fa-angle-down'/>
          </a>
        </div>
        <ul v-if="item.children" class="dropdown" aria-label="submenu">
          <li class="navigation__item__dropdown-item" v-for="(child, index) in item.children" :key="index">
            <nuxt-link v-for="link in child" :key="link.title" :to="link.path">
              <div class="flex flex-col justify-center items-center">
                <img class="w-20" :src="link.image" />
                {{ link.title }}
              </div>
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["items"]
}
</script>

<style scoped>
.navigation__item > a {
  @apply text-white;
}

.navigation__item__dropdown-item {
  @apply p-0 flex;
  width: 400px;
  min-height: 100px;
}

.navigation__item__dropdown-item > a {
  @apply w-1/2 p-4 text-black text-sm text-center font-normal flex justify-center items-center;
}

.navigation__item__dropdown-item > a:hover {
  @apply shadow-lg;
}

a {
  text-decoration: none;
}

ul {
	list-style: none;
	margin: 0;
	padding-left: 0;
}

li {
  @apply px-1 py-4 grow;
	color: #fff;
	display: block;
	float: left;
	position: relative;
	text-decoration: none;
  transition-duration: 0.5s;
}

li:hover, li:focus-within {
	background-color: #FFFFFF33;
	cursor: pointer;
}

li:focus-within a {
  outline: none;
}

ul li ul {
	background-color: white;
	visibility: hidden;
  opacity: 0;
  min-width: 5rem;
	position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
	left: 0;
  display: none;
}

ul li:hover > ul, ul li:focus-within > ul, ul li ul:hover, ul li ul:focus {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
	clear: both;
  width: 100%;
}
</style>
