<template>
  <div class="d-flex flex-column vh-100">
    <header class="fixed-top">
      <nav class="navbar navbar-expand-md py-8 transition" :class="{ 'bg-white shadow': isScrolled || isCollapseShow}">
        <div class="container">
          <router-link to="/" class="navbar-brand">
            <img class="h-40px" src="/home-nav-logo.png" alt="Lele Music Tutor">
          </router-link>
          <div class="d-flex align-items-center">
            <router-link to="/cart" class="nav-link text-black fw-bold position-relative d-lg-none me-24">
              <span class="material-icons-outlined lh-30">
                shopping_cart
              </span>
              <span v-if="cart.length !== 0" style="transform: translate(-70%, -20%);" class="badge rounded-pill bg-primary position-absolute top-0 start-100 text-white">{{ cart.length }}</span>
            </router-link>
            <button @click="toggleCollapseShow()" class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div ref="navCollapse" class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav text-center">
              <li class="nav-item me-0 me-lg-24">
                <router-link to="/teacher/stepOne" class="nav-link text-black fw-bold position-relative fs-5" :class="{'nav-active' : $route.fullPath === '/teacher/stepOne' || $route.fullPath === '/teacher/stepTwo' || $route.fullPath === '/teacher/stepThree' || $route.fullPath === '/teacher/stepFour'}">我要開課</router-link>
              </li>
              <li class="nav-item me-0 me-lg-24">
                <router-link to="/courses" class="nav-link text-black fw-bold position-relative fs-5" :class="{'nav-active' : $route.fullPath === '/courses'}">所有課程</router-link>
              </li>
              <li v-if="!this.isMember" class="nav-item">
                <router-link to="/login" class="nav-link text-black fw-bold position-relative fs-5" :class="{'nav-active' : $route.fullPath === '/login'}">登入</router-link>
              </li>
              <li v-if="this.isMember" class="nav-item d-none d-lg-block">
                <router-link to="/personalCourse" class="nav-link text-black fw-bold position-relative">
                  <span class="material-symbols-outlined lh-30">
                    bookmark
                  </span>
                </router-link>
              </li>
              <li v-if="this.isMember" class="nav-item d-none d-lg-block">
                <router-link to="/cart" class="nav-link text-black fw-bold position-relative">
                  <span class="material-icons-outlined lh-30">
                    shopping_cart
                  </span>
                  <span v-if="cart.length !== 0" style="transform: translate(-70%, -20%);" class="badge rounded-pill bg-primary position-absolute top-0 start-100 text-white">{{ cart.length }}</span>
                </router-link>
              </li>
              <li v-if="this.isMember" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fw-bold text-black fs-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ personalViewData.displayName }}
                </a>
                <ul class="dropdown-menu mt-0 text-center text-lg-start" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <router-link to="/personal" class="dropdown-item" href="#">個人主頁</router-link>
                  </li>
                  <li>
                    <router-link to="/personalCourse" class="dropdown-item" href="#">我的課程</router-link>
                  </li>
                  <li>
                    <router-link to="/personalOrders" class="dropdown-item" href="#">購買紀錄</router-link>
                  </li>
                  <!-- <li>
                    <router-link to="/personalCalendar" class="dropdown-item" href="#">課程時間</router-link>
                  </li> -->
                  <li>
                    <a @click="signOut()" class="dropdown-item border-top" href="#">登出</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="flex-grow-1">
      <RouterView />
    </div>
    <footer class="bg-primary">
      <div class="container">
        <div class="d-lg-flex justify-content-lg-between align-items-lg-center text-center text-lg-start py-9">
          <router-link class="d-block mb-9 mb-lg-0" to="/">
            <img class="h-40px" src="/logo-white.png" alt="Lele Music Tutor">
          </router-link>
          <div>
            <ul class="d-lg-flex ps-0 mb-6">
              <li class="me-lg-6 mb-6 mb-lg-0">
                <a class="text-white py-3 px-3" href="#">
                  <i class="bi bi-facebook me-3"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li class="me-lg-6 mb-6 mb-lg-0">
                <a class="text-white py-3 px-3" href="#">
                  <i class="bi bi-instagram me-3"></i>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a class="text-white py-3 px-3" href="#">
                  <i class="bi bi-twitter me-3"></i>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
            <p class="text-white mb-0">Copyright © 2023 Taipei music design All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    <BackToTop />
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterView } from 'vue-router'
import cartStore from '../stores/cartStore'
import userStore from '../stores/userStore'
import BackToTop from '../components/BackToTop.vue'

export default {
  data () {
    return {
      isScrolled: false,
      isCollapseShow: false
    }
  },
  components: {
    RouterView, BackToTop
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(userStore, ['isMember', 'userData', 'personalViewData'])
  },
  watch: {
    $route (to, form) {
      this.collapseHide()
      this.isScrolled = false
      this.isCollapseShow = false
    },
    isScrolled (newValue) {
      if (newValue) {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  },
  methods: {
    handleScroll () {
      this.isScrolled = window.scrollY !== 0
    },
    collapseHide () {
      this.$refs.navCollapse.classList.remove('show')
    },
    toggleCollapseShow () {
      this.isCollapseShow = !this.isCollapseShow
    },
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(userStore, ['checkMemberObserver', 'signOut'])
  },
  created () {
    this.checkMemberObserver()
    this.getCart()
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  .nav-link:hover {
  color: #fe715f !important;
  }
  .nav-active::before {
    @media (min-width: 992px) {
      content: '';
      position: absolute;
      top: 50%;
      left: -14px;
      width: 14px;
      height: 14px;
      border-radius: 100%;
      transform: translateY(-50%);
      background-color: #fe715f;
    }
  }
</style>
