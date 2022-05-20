<template>
  <div id="pavilions" class="section flex flex-col 2xl:items-center gap-4">
    <div class="text-center">
      <span class="section__title">
        {{ `Изготовление павильонов для бассейнов` }}
      </span>
    </div>

    <Swiper
      class="!ml-0 !mr-0 xl:hidden"
      :items="pavilions"
    />

    <div id="pavilions__images" class="hidden xl:flex 2xl:w-11/12 gap-4" v-viewer="{movable: false, navbar: true}">
      <img class="rounded cursor-pointer" src="../../assets/pavilion_1.jpg" />
      <img class="rounded cursor-pointer" src="../../assets/pavilion_2.jpg" />
      <img class="rounded cursor-pointer" src="../../assets/pavilion_3.jpg" />
    </div>

    <div class="container mx-auto p-0 2xl:p-6 justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <div class="card">
        <div class="card__image">
          <CreativityIcon color="#3A3A3A" />
        </div>
        <div class="card__text">
          <span class="font-normal">
            <strong>Экономия электроэнергии на обогрев</strong> в течении года <strong>до 100%</strong> 
          </span>
        </div>
      </div>
      <div class="card">
        <div class="card__image">
          <CaringIcon color="#3A3A3A" />
        </div>
        <div class="card__text">
          <span class="font-normal">
            <strong>Безопасность детей</strong> и <strong>домашних животных</strong> 
          </span>
        </div>
      </div>
      <div class="card">
        <div class="card__image">
          <TehnicalSupportIcon color="#3A3A3A" />
        </div>
        <div class="card__text">
          <span class="font-normal">
            <strong>Защита бассейна от загрязнения</strong> и ультрафиолетовых лучей
          </span>
        </div>
      </div>
      <div class="card w-full">
        <div class="card__image">
          <CalendarTimeIcon color="#3A3A3A" />
        </div>
        <div class="card__text">
          <span class="font-normal">
            <strong>Купание</strong> в бассейне
            <br>
            <strong>круглый год</strong>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="card__image">
          <PlasticIcon color="#3A3A3A" />
        </div>
        <div class="card__text">
          <span class="font-normal">
            <strong>Экономия</strong> использования <strong>препаратов по уходу за водой на 50%</strong>
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full justify-center gap-4 mt-4">
      <Button
        @click="showSubmiteOrderModal"
        size="lg"
        type="default"
        class="w-full xl:w-max"
      >
        Заказать павильон
      </Button>
      <Button
        @click="getFiles"
        type="alternative"
        size="lg"
        class="!px-2 w-full xl:w-max"
      >
        Получить спецификации
      </Button>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

import directus from '@/utils/directus.js'
import getLink from '@/utils/assets.js'

import Button              from '@/library/Button.vue'
import TehnicalSupportIcon from '@/components/icons/TehnicalSupport.vue'
import CalendarTimeIcon    from '@/components/icons/CalendarTime.vue'
import PlasticIcon         from '@/components/icons/Plastic.vue'
import CreativityIcon      from '@/components/icons/Creativity.vue'
import CaringIcon          from '@/components/icons/Caring.vue'
import Swiper from '@/components/Swiper.vue'
import SubmitOrderModal from '@/components/modals/SubmitOrder.vue'

export default {
  components: {
    Swiper,
    Button,
    TehnicalSupportIcon,
    CalendarTimeIcon,
    PlasticIcon,
    CreativityIcon,
    CaringIcon,
  },
  data() {
    return {
      pavilions: [
        require(`~/assets/pavilion_1.jpg`),
        require(`~/assets/pavilion_2.jpg`),
        require(`~/assets/pavilion_3.jpg`),
      ],
      form: {
        name: "",
        phone: "",
      },
      modal: {
        isOpen: false,
        isLoading: false,
      }
    }
  },
  methods: {
    sendRequest() {
      let data = {
        name: form.name,
        phone: form.phone,
        content: "Заявка на павильон."
      }
      this.$store.dispatch('clientRequests/send', data)
        .finally(() => {
          this.modal.isLoading = false
          this.modal.isOpen = false
        })
    },
    showSubmiteOrderModal() {
      this.$modal.show(
        SubmitOrderModal,
        { onSubmit: this.sendRequest }
      )
    },
    async getFiles() {
      var response = await directus.folders.readByQuery({ search: "Сметы" })
      let folderId = _.head(response.data).id
      var response = await directus.files.readByQuery({ filter: { folder: { _eq: folderId } } })
      let files = response.data
      _.map(files, ({ id }) => {
        window.open(getLink(id))
      })
      console.log(files)
    }
  }
}

</script>

<style lang="scss" scoped>
#pavilions__images {
  & > img {
    @apply w-1/3;
  }
}

.card {
  @apply basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/6;
  @apply p-4 lg:py-6;
  background: rgba(247, 247, 247, 0.75);
  box-shadow: inset 0px 0px 34px rgba(255, 255, 255, 0.1);

  .card__text {
    @apply font-semibold text-base;
  }
}
</style>
