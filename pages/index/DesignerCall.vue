<template>
  <div id="callback" class="section flex justify-center">
    <div id="callback__container">
      <div class="text-center mb-6">
        <span class="section__sub-title">
          Оставьте ваши данные и наш проектировщик свяжется с Вами
        </span>
      </div>
      <div class="flex flex-col xl:flex-row gap-2">
        <Input @onChange="v => form.name = v" type="text" :value="form.phone" placeholder="Ваше имя" />
        <Input @onChange="v => form.phone = v" type="tel" :value="form.phone" placeholder="Номер телефона" />
        <Button @click="sendRequest" type="default">Оставить заявку</Button>
      </div>
      <div class="mt-4">
        <div class="text-center text-gray-400">
          <span class="font-normal text-xs">
            Нажимая на кнопку, вы соглашаетесь с
          </span>
          <a class="font-normal text-xs" href="#">условиями обработки персональных данных</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../library/Button.vue'
import Input from '../../library/Input.vue'

export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
      }
    }
  },
  methods: {
    sendRequest () {
      this.$store.dispatch('clientRequests/send', form)
        .then(() => {
          this.$toasts.base('С вами свяжуться в ближайшее время!')
        })
        .finally(() => {
          form.name = ""
          form.phone = ""
        })
    }
  }
}
</script>

<style>
@media (min-width: 768px) {
  #callback__container {
    max-width: 400px;
  }
}

@media (min-width: 1024px) {
  #callback__container {
    max-width: 800px;
  }
}

@media (min-width: 1280px) {
  #callback__container {
    max-width: 1200px;
  }
}
</style>
