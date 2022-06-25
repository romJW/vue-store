import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faWhatsappSquare, faVk, faInstagramSquare, faOdnoklassnikiSquare } from '@fortawesome/free-brands-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false

library.add(fas,
  faWhatsappSquare,
  faVk,
  faInstagramSquare,
  faOdnoklassnikiSquare,
  faCircleQuestion,
   faMagnifyingGlass )

// Register the component globally
Vue.component('fa-icon', FontAwesomeIcon)

