<template>
  <div id="features" class="container mx-auto justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-8 gap-4">

   <div class="card bg-white rounded-lg border border-gray-200 shadow-md p-4">
      <div class="card__image">
        <AddressIcon color="#4273BD" />
      </div>
      <div class="card__text">
        <span>
          <strong>Наличие оборудования полного цикла</strong>
          <br>
          на складе в г.Алматы
        </span>
      </div>
    </div>

    <div class="card inverse bg-white rounded-lg border border-gray-200 shadow-md p-4">
      <div class="card__image">
        <RatingIcon color="#4273BD" />
      </div>
      <div class="card__text">
        <span>
          Квалифицированный
          <strong>проектный отдел</strong>
        </span>
      </div>
    </div>

   <div class="card bg-white rounded-lg border border-gray-200 shadow-md p-4">
      <div class="card__image">
        <NoteIcon color="#4273BD" />
      </div>
      <div class="card__text">
        <span>
          <strong>Прямые контракты</strong>
          <br>
          с заводами
          <strong>производителями оборудования</strong>
        </span>
      </div>
    </div>

    <div class="card inverse bg-white rounded-lg border border-gray-200 shadow-md p-4">
      <div class="card__image">
        <GroupIcon color="#4273BD" />
      </div>
      <div class="card__text">
        <span>
          <strong>Опытные бригады полного цикла</strong>
        </span>
      </div>
    </div>

   <div class="card bg-white rounded-lg border border-gray-200 shadow-md p-4">
      <div class="card__image">
        <DevelopmentIcon color="#4273BD" />
      </div>
      <div class="card__text">
        <span>
          <strong>Собственный цех по производству</strong>
          полипропиленовых бассейнов
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import RatingIcon from '../../components/icons/Rating.vue'
import NoteIcon from '../../components/icons/Note.vue'
import AddressIcon from '../../components/icons/Address.vue'
import DevelopmentIcon from '../../components/icons/Development.vue'
import GroupIcon from '../../components/icons/Group.vue'


export default {
  components: {
    RatingIcon,
    NoteIcon,
    AddressIcon,
    GroupIcon,
    DevelopmentIcon,
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Oswald', sans-serif;
}

svg {
  width: 4rem;
  height: 4rem;
}

@media (min-width: 768px) {
  svg {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.card {
  @apply w-full basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 p-6;
  background: rgba(232, 247, 252, 0.6);

  &.inverse {
    background: rgba(232, 247, 252, 0.2) !important;
  }

  .card__text{
    @apply font-normal text-base;
    color: #5877A5;
  }
}
</style>
