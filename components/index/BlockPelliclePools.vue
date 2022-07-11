<template>
  <div id="block-pellicle-pools" class="flex">
    <div class="grow relative">
      <div class="container section mx-auto flex lg:z-10 relative">
        <div class="2xl:w-7/12 flex flex-col gap-4 md:gap-8">
          <div>
            <h2 class="section__title text-white">
              Блочно-пленочные бассейны «под ключ»
            </h2>
          </div>
          <div>
            <span class="text-white text-base md:text-xl">
              Стены бассейна изготавливаются из бетонных блоков, и
              облицовываются ПВХ пленкой. Особенности блочно-пленочных
              бассейнов:
            </span>
          </div>
          <div class="flex flex-wrap">
            <div class="card">
              <div class="card__image">
                <CreditCardsIcon color="#fff" />
              </div>
              <div class="card__text">
                <span>
                  Простота в монтаже
                  <br />
                  На 30% дешевле
                  <br />
                  железобетонных бассейнов
                </span>
              </div>
            </div>
            <div class="card">
              <div class="card__image">
                <CubeIcon color="#fff" />
              </div>
              <div class="card__text">
                <span> Возможность изготовления любых форм и размеров </span>
              </div>
            </div>
            <div class="card">
              <div class="card__image">
                <OkHandIcon color="#fff" />
              </div>
              <div class="card__text">
                <span> Широкий выбор ПВХ лайнер для облицовки чаши </span>
              </div>
            </div>
            <div class="card">
              <div class="card__image">
                <CalendarIcon color="#fff" />
              </div>
              <div class="card__text">
                <span>
                  Быстрые сроки строительства в сравнении с ЖБ бассейнами
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grow absolute flex flex-row-reverse z-0 top-0 w-full h-full">
        <img
          class="grow hidden 2xl:block 2xl:w-5/12 object-cover"
          src="../../assets/block_3_2.jpg"
        />
        <img
          class="grow hidden 2xl:block 2xl:w-7/12 object-cover"
          src="../../assets/block_3_1.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarIcon from "../../components/icons/Calendar.vue";
import CreditCardsIcon from "../../components/icons/CreditCards.vue";
import OkHandIcon from "../../components/icons/OkHand.vue";
import CubeIcon from "../../components/icons/Cube.vue";

export default {
  components: {
    CalendarIcon,
    CreditCardsIcon,
    CubeIcon,
    OkHandIcon,
  },
};
</script>

<style lang="scss" scoped>
#block-pellicle-pools {
  background-image: url(../../assets/block_3_1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.card {
  @apply bg-transparent border-transparent shadow-transparent basis-1/2 lg:basis-1/4 justify-start p-3;

  .card__text {
    @apply text-white font-normal text-sm md:text-base;
  }
}
</style>
