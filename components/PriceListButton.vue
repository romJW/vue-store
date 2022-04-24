<template>
  <Button @click="showModal" type="alternative">Прайс лист</Button>
</template>

<script>
import directus from '@/utils/directus.js'
import getLink from '@/utils/assets.js'
import _ from 'lodash'
import { Button } from '@/library'
import PriceListModal from '@/components/modals/PriceList.vue'

export default {
  components: {
    Button
  },
  methods: {
    async getPriceList({ email }) {
      const dealers = await directus.items("dealers").readByQuery({ filter: { email: { _eq: email } } })
      const dealer = _.head(dealers.data)
      if (dealer) {
        await this.$store.dispatch('clientRequests/send', {
          name: email,
          group: "dealer",
          content: "Запрос на прайс лист",
        })
        const files = await directus.files.readByQuery({ search: "Прайс лист" })
        const priceList = _.head(files.data)
        window.open(getLink(priceList.id))
      } else {
        await this.$store.dispatch('clientRequests/send', {
          name: email,
          content: "Запрос на прайслист от неизвестного пользователя",
        })
        throw new Error("Dealer not found!")
      }
    },
    showModal() {
      this.$modal.show(
        PriceListModal,
        { onSubmit: this.getPriceList }
      )
    },
  }
}
</script>
