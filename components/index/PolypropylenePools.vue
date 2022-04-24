<template>
  <div id="polypropylene-pools" class="flex">
    <div class="grow relative">
      <div class="container section mx-auto flex lg:z-10 relative justify-end">
        <div class="2xl:w-7/12 2xl:px-6 flex flex-col gap-4 md:gap-8">
          <div>
            <span class="section__title text-white">
              Полипропиленовые бассейны «под ключ»
            </span>
          </div>
          <div>
           <span class="text-white text-base md:text-xl">
              Чаша бассейна изготавливается из полипропиленовых листов путем экструзионной сварки. Особенности таких бассейнов:
            </span>
          </div>
          <div class="flex flex-wrap">
            <Card>
              <div class="card__image">
                <CalendarIcon color="#fff" />
              </div>
              <div class="card__text">
                <span>
                  Срок изготовления чаши до 7 дней
                </span>
              </div>
            </Card>
            <Card>
              <div class="card__image">
                <CreditCardsIcon color="#fff" />
              </div>
              <div class="card__text">
                <span>
                  На 50% дешевле железобетонных бассейнов
                </span>
              </div>
            </Card>
            <Card>
              <div class="card__image">
                <NoteIcon color="#fff" />
              </div>
              <div class="card__text">
                <span>
                  Отсутствие требований к уровню грунтовых вод
                </span>
              </div>
            </Card>
            <Card>
              <div class="card__image">
                <TehnicalSupportIcon color="#fff" />
              </div>
              <div class="card__text">
                <span>
                  Срок службы чаши до 25 лет
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div class="grow absolute flex z-0 top-0 w-full h-full">
        <img class="grow hidden 2xl:block" src="../../assets/block_5_1.jpg" />
        <img class="grow hidden 2xl:block" src="../../assets/block_5_2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarIcon from '../../components/icons/Calendar.vue'
import TehnicalSupportIcon from '../../components/icons/TehnicalSupport.vue'
import CreditCardsIcon from '../../components/icons/CreditCards.vue'
import NoteIcon from '../../components/icons/Note.vue'
import { Card } from '../../library'

export default {
  components: {
    TehnicalSupportIcon,
    CalendarIcon,
    CreditCardsIcon,
    NoteIcon,
    Card
  }
}
</script>

<style lang="scss" scoped>
#polypropylene-pools {
  background-image: url(../../assets/block_5_2.jpg);
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
