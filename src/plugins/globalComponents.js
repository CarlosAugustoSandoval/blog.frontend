import Vue from 'vue'

// Inputs components
import CCheck from '@/components/globalComponents/CCheck'
import CDate from '@/components/globalComponents/CDate'
import CNumber from '@/components/globalComponents/CNumber'
import CPassword from '@/components/globalComponents/CPassword'
import CRadio from '@/components/globalComponents/CRadio'
import CSelectComplete from '@/components/globalComponents/CSelectComplete'
import CTextArea from '@/components/globalComponents/CTextArea'
import CText from '@/components/globalComponents/CText'
import CTooltip from '@/components/globalComponents/CTooltip'
import CCkaeditor from '@/components/globalComponents/CCkaeditor'

import MainMenu from '@/components/globalComponents/MainMenu'
import Loading from '@/components/globalComponents/Loading'
import Snackbar from '@/components/globalComponents/Snackbar'
import Footer from '@/components/globalComponents/Footer'

Vue.use({
  install (Vue) {
    Vue.component('CCheck', CCheck)
    Vue.component('CDate', CDate)
    Vue.component('CNumber', CNumber)
    Vue.component('CPassword', CPassword)
    Vue.component('CRadio', CRadio)
    Vue.component('CSelectComplete', CSelectComplete)
    Vue.component('CTextArea', CTextArea)
    Vue.component('CText', CText)
    Vue.component('CTooltip', CTooltip)
    Vue.component('CCkaeditor', CCkaeditor)

    Vue.component('MainMenu', MainMenu)
    Vue.component('Loading', Loading)
    Vue.component('Snackbar', Snackbar)
    Vue.component('Footer', Footer)
  }
})
