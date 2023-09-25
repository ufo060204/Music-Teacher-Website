import { createApp } from 'vue'
import Loading, { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
/* import the fontawesome core */
import 'hover.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// 加入 google material-icons & material-symbols
import 'material-icons/iconfont/material-icons.css'
import 'material-symbols'

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
/* add some free styles */
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { createPinia } from 'pinia'

// 引入 swiper
import { register } from 'swiper/element/bundle'

// 引入 CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue'

// 引入 moment
import moment from 'moment/moment'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// import { required, email, min } from '@vee-validate/rules'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/all.scss'

// firebase 引入
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

/* add icons to the library */
library.add(faShoppingCart, faTwitter, faFacebook, faInstagram, faHeart)

// 將語系設定成中文
configure({
  // Generates an English message locale generator
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

// defineRule('required', required)
// defineRule('email', email)
// defineRule('min', min)
// 將所有規則都加入
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
}
initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
// Initialize Firebase Authentication and get a reference to the service

const pinia = createPinia()
const app = createApp(App)

app.use(LoadingPlugin, {
  color: '##FF700C'
})

// 全局註冊
app.config.globalProperties.$moment = moment
// 載入元件
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VueLoading', Loading) // 全域元件
app.use(register)
app.use(CKEditor)
app.use(VueAxios, axios) // 套件
app.use(pinia)
app.use(router)
app.mount('#app')
