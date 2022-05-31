<template>
  <div v-if="!$apollo.queries.spec.loading" id="calculator">
    <div class="container section mx-auto flex flex-col items-cetner gap-8">
      <h2 class="section__title">
        Калькулятор стоимости бассейна
      </h2>
      <div class="flex justify-center items-center">
        <div class="section__sub-title">
          Ответьте на 4 вопроса и мы отправим вам смету на строительство <br> бассейна в течении 1 рабочего дня
        </div>
      </div>
      <div class="flex flex-col xl:flex-row">
        <div class="2xl:w-4/12">

          <Disclosure class="!p-4" defaultOpen="true">
            <template v-slot:header="{ open, toggle }">
              <div
                class="flex justify-between w-full cursor-pointer mb-2"
                @click="() => { if (!open) { form.type = null; toggle() } }"
              >
                Выберите тип чаши
                <span :class="open ? 'material-icons' : 'material-icons rotate-180'">expand_less</span>
              </div>
            </template>
            <template v-slot:open="{ toggle }">
              <div v-for="(label, key) in spec.typeItems" :key="key">
                <RadioInput
                  id="typeValue"
                  :value="key"
                  @onChange="value => {
                    form.type = value;
                    if (key === 'liner') {
                      delete complectation['panel']
                      complectation['liner'] = spec.complectations[key]
                    } else {
                      delete complectation['liner']
                      complectation['panel'] = spec.complectations[key]
                    }
                    form.material = null;
                    toggle()
                  }"
                  name="type"
                  :label="label"
                />
              </div>
            </template>
            <template v-slot:close>
              <CheckBox
                v-if="form.type"
                :label="spec.typeItems[form.type]"
                :disabled="true"
                :checked="true"
              />
            </template>
          </Disclosure>

          <transition name="fade">
            <Disclosure class="!p-4" v-if="form.type === 'liner'" defaultOpen="true">
              <template v-slot:header="{ open, toggle }">
                <div
                  class="flex justify-between w-full cursor-pointer mb-2"
                  @click="() => { if (!open) { toggle() } }"
                >
                  Выберите пленку
                  <span :class="open ? 'material-icons' : 'material-icons rotate-180'">expand_less</span>
                </div>
              </template>
              <template v-slot:open="{ toggle }">
                <div class="grid grid-cols-3 gap-2">
                  <div
                    v-for="(item, index) in spec.materials"
                    :key="index"
                    class="cursor-pointer"
                    @click="() => { form.material = item; toggle() }"
                  >
                    <img
                      class="w-full rounded"
                      :src="item.preview ? getLink(item.preview.id) : ''"
                      onerror="this.src='https://via.placeholder.com/100'"
                    />
                  </div>
                </div>
              </template>
              <template v-slot:close="{ toggle }">
                <div v-if="form.material" class="h-20 cursor-pointer">
                  <img
                    @click="toggle"
                    class="w-full rounded h-full object-cover"
                    :src="form.material.preview ? getLink(form.material.preview.id) : ''"
                    onerror="this.src='https://via.placeholder.com/600'"
                  />
                </div>
              </template>
            </Disclosure>
          </transition>

          <transition name="fade">
            <Disclosure class="!p-4" v-if="form.type" defaultOpen="true">
              <template v-slot:header="{ open, toggle }">
                <div
                  class="flex justify-between w-full cursor-pointer mb-2"
                  @click="() => { if (!open) { form.size = null; toggle() } }"
                >
                  Выберите размер
                  <span :class="open ? 'material-icons' : 'material-icons rotate-180'">expand_less</span>
                </div>
              </template>
              <template v-slot:open="{ toggle }">
                <div class="flex flex-row flex-wrap justify-center lx:flex-col items-center gap-2">
                  <Tag
                    class="cursor-pointer"
                    v-for="(item, index) in spec.sizes"
                    :key="index"
                    @click="() => { form.size = item; toggle() }"
                  >
                    <span v-html="item.label" />
                  </Tag>
                </div>
              </template>
              <template v-slot:close="{ toggle }">
                <div v-if="form.size" class="flex flex-row justify-center items-center">
                  <Tag class="bg-blue-500 text-white cursor-pointer" @click="toggle">
                    <span v-html="form.size.label" />
                  </Tag>
                </div>
              </template>
            </Disclosure>
          </transition>

          <Disclosure class="!p-4" defaultOpen="true">
            <template v-slot:header>
              <div class="cursor-default mb-2">
                Комплектация
              </div>
            </template>
            <template v-slot:open>
              <CheckBox label="Система фильтрации"
                disabled
                :checked="complectation.filter"
              />
              <CheckBox label="LED освещение"
                disabled
                :checked="complectation.led"
              />
              <CheckBox label="Лестница для бассейна"
                disabled
                :checked="complectation.ladder"
              />

              <div class="my-2">
                <div class="text-sm text-gray-500">
                  Нагрев воды
                </div>
                <CheckBox
                  label="Электронагреватель"
                  @onChange="checked => {
                    setComplectation('electric', checked)
                    delete complectation['exchanger']
                  }"
                  :checked="complectation.electric"
                />
                <CheckBox
                  label="Теплообменник"
                  @onChange="checked => {
                    setComplectation('exchanger', checked);
                    delete complectation['electric']
                  }"
                  :checked="complectation.exchanger"
                />
              </div>

              <CheckBox label="УФ обеззараживатель" @onChange="checked => setComplectation('disinfectant', checked)" />
              <CheckBox label="Станция дозации"     @onChange="checked => setComplectation('dosing station', checked)" />
              <CheckBox label="Противоток"          @onChange="checked => setComplectation('antistream', checked)" />
              <CheckBox label="Павильон"            @onChange="checked => setComplectation('pavilion', checked)" />
              <CheckBox label="Бордюрный камень"    @onChange="checked => setComplectation('curbstone', checked)" />
            </template>
          </Disclosure>

          <Card class="flex flex-col !p-4">
            <div v-if="cost - totalCost > 0" class="flex flex-col mb-2">
              <span>Скидка на оборудование</span>
              <div class="flex gap-2">
                <span class="text-blue-500 font-bold">{{ tweenedTotalDiscount.toFixed(0) }}</span>
                <span>тенге</span>
              </div>
            </div>
            <div v-if="totalCost" class="flex flex-col">
              <span>Стоимость бассейна с учетом скидки</span>
              <div class="flex gap-2">
                <span class="text-blue-500 font-bold">{{ tweenedTotalCost.toFixed(0) }}</span>
                <span>тенге</span>
              </div>
              <hr class="my-2">
            </div>
            <div class="text-xs text-gray-400">
              Без учета:
              <br>
              - Общестроительных и земляных работ,
              <br>
              - Подвода питающего кабеля к тех. отсеку,
              <br>
              - Подвода водоснабжения к тех. отсеку,
              <br>
              - Комплекта водоподготовки для запуска.
            </div>
          </Card>
          <div class="hidden xl:flex justify-center mt-4">
            <Button type="default" size="lg" @click="showSubmiteOrderModal">
              Оставить заявку
            </Button>
          </div>
        </div>
        <div class="2xl:w-8/12 grow h-full relative image-meta">
          <img class="absolute z-0 shadow-xl image-meta" v-if="imageStack[0]" :src="getLink(imageStack[0])" />
          <img class="absolute z-10 shadow-xl tweened-image image-meta" v-if="imageStack[1]" :src="getLink(imageStack[1])"/>
          <img class="shadow-xl image-meta" v-else src="../../assets/calculator_1.jpg" />
          <div class="flex xl:hidden justify-center mt-4">
            <Button type="default" size="lg" @click="showSubmiteOrderModal">
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import _ from 'lodash'

import getLink from    '@/utils/assets.js'
import { Button, Input, Card } from '@/library'
import Disclosure from '@/library/Disclosure'
import RadioInput from '@/components/inputs/RadioInput.vue'
import Radio from      '@/components/inputs/Radio.vue'
import CheckBox from   '@/components/inputs/CheckBox.vue'
import Tag from        '@/library/Tag.vue'
import gql from 'graphql-tag'

import directus from '@/utils/directus.js'
import SubmitOrderModal from '@/components/modals/SubmitOrder.vue'

export default {
  components: {
    Button, Input, Card, Tag, CheckBox, Radio, RadioInput, Disclosure
  },
  data() {
    return {
      getLink,
      images: [],
      imageStack: [],
      tweenedTotalCost: 0,
      tweenedTotalDiscount: 0,
      complectation: {},
      complectationData: {},
      form: {
        type: null,
        material: null,
        size: null,
        heater: null,
        ladder: true,
      }
    }
  },
  apollo: {
    spec: {
      query: gql`
        query getCalculator {
          calculator {
            sizes
            complectations
            sets
            skins {
              products_id {
                id
                label
                price
                tags
                preview {
                  id
                }
              }
            }
          }
        }
      `,
      update({ calculator }) {
        // default set
        this.complectation['filter'] = calculator.complectations['filter']
        this.complectation['led'] = calculator.complectations['led']
        this.complectation['ladder'] = calculator.complectations['ladder']
        return {
          ...calculator,
          typeItems: {
            liner: "Блочно-пленочный бассейн",
            panel: "Полипропиленовый бассейн"
          },
          materials: _.map(calculator.skins, e => e.products_id),
        }
      }
    },
    sizesdata: {
      query() {
        if (this.form.size) {
          return gql`
            query getPrices(
              $filter_ids: [Float]!,
              $ladder_ids: [Float]!,
              $electric_ids: [Float]!,
              $disinfectant_ids: [Float]!,
              $dosing_station_ids: [Float]!,
              $led_ids: [Float]!,
              $curbstone_ids: [Float]!,
              $antistream_ids: [Float]!,
              $exchanger_ids: [Float]!
            ) {
              filter: products(filter: { id: { _in: $filter_ids}}) {
                id
                price
              },
              ladder: products(filter: { id: { _in: $ladder_ids}}) {
                id
                price
              },
              electric: products(filter: { id: { _in: $electric_ids}}) {
                id
                price
              },
              exchanger: products(filter: { id: { _in: $exchanger_ids}}) {
                id
                price
              },
              disinfectant: products(filter: { id: { _in: $disinfectant_ids}}) {
                id
                price
              },
              dosing_station: products(filter: { id: { _in: $dosing_station_ids }}) {
                id
                price
              },
              antistream: products(filter: { id: { _in: $antistream_ids}}) {
                id
                price
              },
              led: products(filter: { id: { _in: $led_ids}}) {
                id
                price
              },
              curbstone: products(filter: { id: { _in: $curbstone_ids}}) {
                id
                price
              },
            }
          `
        }
      },
      variables() {
        if (this.form.size) {
          return {
            filter_ids:         _.map(this.form.size.complectations.filter, e            => parseFloat(e.id)),
            ladder_ids:         _.map(this.form.size.complectations.ladder, e            => parseFloat(e.id)),
            electric_ids:       _.map(this.form.size.complectations.electric, e          => parseFloat(e.id)),
            exchanger_ids:      _.map(this.form.size.complectations.exchanger, e         => parseFloat(e.id)),
            disinfectant_ids:   _.map(this.form.size.complectations.disinfectant, e      => parseFloat(e.id)),
            dosing_station_ids: _.map(this.form.size.complectations["dosing station"], e => parseFloat(e.id)),
            antistream_ids:     _.map(this.form.size.complectations.antistream, e        => parseFloat(e.id)),
            led_ids:            _.map(this.form.size.complectations.led, e               => parseFloat(e.id)),
            curbstone_ids:      _.map(this.form.size.complectations.curbstone, e         => parseFloat(e.id)),
          }
        }
      },
      update({
        filter,
        ladder,
        electric,
        exchanger,
        disinfectant,
        dosing_station,
        antistream,
        led,
        curbstone,
      }) {
        let data = {
          filter,
          ladder,
          electric,
          exchanger,
          disinfectant,
          "dosing station": dosing_station,
          antistream,
          led,
          curbstone,
        }
        _.forEach(data, (value, key) => {
          this.complectationData[key] = _.reduce(
            _.concat(this.form.size.complectations[key], value),
            (acc, item) => {
              acc[item.id] = { ...acc[item.id], ...item }
              return acc
            },
            {}
          )
        })
        return data
      },
      skip() {
        return !this.form.size
      }
    }
  },
  mounted() {
    directus.files.readByQuery({ limit: -1 })
      .then(({ data }) => {
        this.images = data
      })
  },
  watch: {
    totalCost(value) {
      gsap.to(this, { duration: 0.5, tweenedTotalCost: value || 0 })
    },
    totalDiscount(value) {
      gsap.to(this, { duration: 0.5, tweenedTotalDiscount: value || 0 })
    },
    image() {
      gsap.fromTo(".tweened-image", { opacity: 0.5 }, { duration: 1, opacity: 1 })
    }
  },
  computed: {
    cost() {
      if (this.form.size && this.complectation) {
        // Сумируем стоимость комплектуюших
        return _.reduce(
          this.complectation,
          (result, { price }, key) => {
            switch (key) {
              case "pavilion":
                if (this.form.size.pavilion) {
                  return result + this.form.size.pavilion.cost
                }
                return result
              case "panel":
                return result + (parseInt(price) * parseInt(this.form.size.S))
              case "liner":
                if (this.form.material) {
                  return result + (this.form.material.price * parseInt(this.form.size.S))
                }
              default:
                return result + _.reduce(
                  this.complectationData[key],
                  (acc, item) => {
                    acc += item.count * item.price
                    return acc
                  },
                  0
                )
            }
          },
          0
        )
      }
    },
    discount() {
      if (this.spec) {
        // HACK: to trigger computation on size change
        this.form.size
        // HACK: to trigger computation on complectation change
        this.complectation
        let discount = 0
        let tags = new Set(_.keys(this.complectation))
        _.map(this.spec.sets, e => {
          if (_.isEqual(tags, new Set(e.tags))) {
            discount = e.discount
          }
        })
        return parseFloat(discount)
      }
    },
    totalDiscount() {
      return Math.floor(this.cost - this.totalCost)
    },
    totalCost() {
      return Math.floor(this.cost - (this.cost * this.discount / 100))
    },
    image() {
      let image = null
      let tags = new Set(_.keys(this.complectation))
      tags.delete("pavilion")
      tags.delete("antistream")
      if (this.form.material) {
        tags.add(this.form.material.tags[0])
        tags.delete("liner")
      }
      _.map(this.images, e => {
        if (_.isEqual(tags, new Set(e.tags))) {
          return image = e.id
        }
      })
      this.imageStack = [this.imageStack[1], image]
      return image
    }
  },
  methods: {
    setComplectation(key, value) {
      let _complectation = this.complectation
      if (value) {
        _complectation[key] = this.spec.complectations[key]
      } else {
        delete _complectation[key]
      }
      this.complectation = Object.assign({}, this.complectation, _complectation)
    },
    setHeater(key, value) {
      if (value) {
        this.form.heater = this.spec.complectations[key]
      } else {
        this.form.heater = null
      }
    },
    sendRequest({ name, phone }) {
      const complectations = _.reduce(
        this.complectation,
        (result, value, key) => {
          if (value) {
            return _.concat(result, this.spec.complectations[key].label)
          }
        },
        []
      )
      const data = {
        name: name,
        phone: phone,
        content: `
          Заявка на бассейн:
          ${this.cost ? "Цена: " + this.cost : ""}
          ${this.discount ? "Скидка: " + `${this.discount}%` : ""}
          ${this.totalCost ? "Со скидкой: " + this.totalCost : ""}
          ${this.form.type
            ? "Тип: " + this.spec.typeItems[this.form.type]
            : ""
          }
          ${this.form.material
            ? "Материал: " + this.form.material.label
            : ""
          }
          ${this.form.size
            ? "Размер: " + this.form.size.label
            : ""
          }
          ${complectations
            ? "Комплектация: " + _.join(complectations, ', ')
            : ""
          }
        `
      }
      return this.$store.dispatch('clientRequests/send', data)
    },
    showSubmiteOrderModal() {
      this.$modal.show(
        SubmitOrderModal,
        { onSubmit: this.sendRequest }
      )
    },
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.image-meta {
  @apply 2xl:h-[820px] xl:h-[560px];
}
</style>
