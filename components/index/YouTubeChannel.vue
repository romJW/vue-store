<template>
  <div id="youtube-channel">
    <div class="container mx-auto section flex flex-col gap-4 md:gap-8">
      <div class="text-center">
        <span class="section__title">
          Подпишись на наш Youtube канал
        </span>
      </div>
      <div class="w-full xl:hidden">
        <iframe width="100%" src="https://www.youtube.com/embed/I5KzxuWHwy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div id="youtube-channel__block" class="flex p-4 rounded xl:gap-6">
        <div class="hidden xl:flex xl:w-1/2">
          <iframe width="100%" height="500px" src="https://www.youtube.com/embed/I5KzxuWHwy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="flex flex-col gap-4 xl:w-1/2">
          <div class="flex grow items-center">
            <span class="text-center 2xl:text-xl">
              {{ content }}
            </span>
          </div>
          <a href="https://www.youtube.com/channel/UCP-JgRlfZVqCKywx5a84xkg">
            <Button class="w-full" type="alternative">
              Перейти в Youtube канал
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../library/Button.vue'

export default {
  components: {
    Button
  },
  data() {
    return {
      content: `На нашем Youtube канале мы размещаем для Вас бесплатных видео, которые помогут Вам в строительстве и обслуживании своего бассейна, позволят не совершать ошибок перед заказом бассейна. Мы записываем для вас обзоры материалов, сравнение разных видов бассейнов. Сколько стоит содержание бассейна в месяц? Какие ошибки допускают при строительстве бассейнов и как обманывают своих клиентов недобросовестные компании?`
    }
  }
}
</script>

<style>
#youtube-channel {
  background-image: url(../../assets/youtube_channel_cover.jpg);
}

#youtube-channel__block {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(30px);
}
</style>
