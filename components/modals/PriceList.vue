<template>
  <form @submit="submit">
    <div
      class="card inverse bg-white rounded-lg border border-gray-200 shadow-md p-4 gap-4"
    >
      <span class="text-center font-bold text-xl">Оставьте ваши данные</span>
      <span class="text-center text-md"
        >Мы вышлем прайс лист на указанную почту</span
      >
      <div class="flex flex-col gap-2">
        <Input
          @onChange="(v) => (email = v)"
          type="email"
          required
          placeholder="Email"
        />
        <Button data-type="default">Отправить</Button>
        <div class="text-center text-gray-400">
          <span class="font-normal text-xs">
            Нажимая на кнопку, вы соглашаетесь с
          </span>
          <br />
          <a class="font-normal text-xs" href="#"
            >условиями обработки персональных данных</a
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { Input, Button } from "@/library";

export default {
  components: {
    Input,
    Button,
  },
  props: ["onSubmit"],
  data() {
    return {
      loading: false,
      email: "",
    };
  },
  methods: {
    async submit(event) {
      event.preventDefault();
      this.loading = true;
      await this.$props.onSubmit({
        email: this.email,
      });
      this.loading = false;
      this.$emit("close");
    },
  },
};
</script>
