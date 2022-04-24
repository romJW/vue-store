<template>
  <div ref="swiper" class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(image, index) in items"
        :key="index" >
        <img class="rounded" :src="image"/>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel]);

export default {
  props: ['items', 'props'],
  data() {
    return {
      swiper: null,
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      mousewheel: {
        forceToAxis: true,
      },
      ...this.$props.props
    });
  }
}
</script>
