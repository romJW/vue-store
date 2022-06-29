import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faMagnifyingGlass, faAngleUp, faAngleDown, faChevronRight, faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faWhatsappSquare, faVk, faInstagramSquare, faOdnoklassnikiSquare } from '@fortawesome/free-brands-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false

library.add(fas,
  faWhatsapp,
  faWhatsappSquare,
  faVk,
  faInstagramSquare,
  faOdnoklassnikiSquare,
  faCircleQuestion,
   faMagnifyingGlass,
   faAngleUp,
   faAngleDown,
   faChevronRight,
   faCartShopping,
   faHouse,
    )

// Register the component globally
Vue.component('fa-icon', FontAwesomeIcon)

