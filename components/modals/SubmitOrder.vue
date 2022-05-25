<template>
  <form @submit="submit">
    <Card class="gap-4">
      <span class="text-center font-bold text-xl">Оставьте ваши данные</span>
      <span class="text-center text-md">и наш проектировщик свяжется <br/> с Вами в ближайшее время</span>
      <div class="flex flex-col gap-2">
        <Input
          @onChange="v => name = v"
          type="text"
          required
          placeholder="Ваше имя"
        />
        <Input
          @onAccept="v => phone = v"
          type="tel"
          required
          :mask="mask"
          placeholder="Номер телефона"
        />
        <Button data-type="default">
          Оформить заказ
        </Button>
        <div class="text-center text-gray-400">
          <span class="font-normal text-xs">
            Нажимая на кнопку, вы соглашаетесь с
          </span>
          <br/>
          <a class="font-normal text-xs" href="#">условиями обработки персональных данных</a>
        </div>
      </div>
    </Card>
  </form>
</template>

<script>
import { Card, Input, Button } from '@/library'

export default {
  components: {
    Card, Input, Button,
  },
  props: ['onSubmit'],
  data() {
    return {
      loading: false,
      name: '',
      phone: '',
      mask: {
        mask: '+{7} (000) 000 00 00',
      },
    }
  },
  methods: {
    async submit(event) {
      event.preventDefault();
      this.loading = true
      await this.$props.onSubmit({
        name: this.name,
        phone: this.phone,
      })
      this.loading = false
      this.$emit('close')
    }
  }
}
</script>
