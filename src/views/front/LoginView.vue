<template>
  <!-- <section class="landing-img landing-header" /> -->
  <!-- <VueLoading :active="isLoading" :color="color" :z-index="9999" /> -->
  <section class="mt-66">
    <!-- <main>
      <div class="container">
        <div
          style="height: 100vh"
          class="row justify-content-center align-items-center"
        >
          <div
            style="box-shadow: 0 0 16px rgba(0, 0, 0, 0.08)"
            class="col-md-4 border border-boderlight py-9"
          >
            <h2 class="text-center fs-4 mb-5">登入</h2>
            <form id="login" class="form-login mb-5" @submit.prevent="login()">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="username"
                  v-model="loginUser.email"
                  placeholder="name@example.com"
                  required
                  autofocus
                />
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  @keydown.enter="login"
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="loginUser.password"
                  placeholder="Password"
                  required
                />
                <label for="password">Password</label>
              </div>
              <div class="d-flex justify-content-between">
                <button
                  class="btn btn-lg btn-text-dark mt-3"
                  type="submit"
                  id="login"
                >
                  登入
                </button>
                <button
                  class="btn btn-lg btn-text-dark mt-3"
                  type="button"
                  id="loginGoogle"
                  @click="loginGoogle"
                >
                  使用google登入
                </button>
              </div>
            </form>
            <div class="d-flex justify-content-between">
              <router-link to="/">忘記密碼</router-link>
              <router-link to="/register">前往註冊</router-link>
            </div>
          </div>
        </div>
      </div>
    </main> -->
    <div class="container">
      <div class="row align-items-center justify-content-center justify-content-md-start">
        <div class="col-6 col-lg-4 d-none d-md-block">
          <img class="w-100 h-100" src="/login-banner.jpg" alt="登入註冊頁側圖">
        </div>
        <div class="col-8 col-md-6 col-xl-4">
          <div v-if="isLogin">
            <h1 class="mx-auto border-bottom my-16 pb-16 w-75 text-center fs-1">會員登入</h1>
            <button @click="loginGoogle" type="button" class="btn btn-outline-dark d-block mx-auto py-16 d-flex justify-content-center w-75 rounded-pill">
              <img class="h-24px w-24px me-8" src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="google-icon">
              <span class="fs-7 fs-lg-6">使用 Google 登入</span>
            </button>
            <hr class="mx-auto w-75 mt-16 text-center fs-7 login-hr">
            <v-form ref="form" v-slot="{ errors }" @submit="login()" class="mx-auto w-75">
              <div class="mb-16">
                <label for="userName" class="form-label">Email：</label>
                <!-- <input name="email" type="email" id="email" class="form-control fs-7" placeholder="請輸入 Email"> -->
                <v-field
                  id="userName"
                  name="帳號"
                  type="email"
                  class="form-control fs-7"
                  :class="{ 'is-invalid': errors['帳號'] }"
                  placeholder="name@example.com"
                  rules="required|email"
                  v-model="loginUser.email"
                ></v-field>
                <error-message
                  name="帳號"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-16">
                <div class="d-flex justify-content-between align-items-center">
                  <label for="password" class="form-label">密碼：</label>
                  <a href="#" class="text-delete fs-7" data-bs-toggle="modal" data-bs-target="#exampleModal">忘記密碼</a>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">重設密碼</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="mb-3">
                            <label for="resetPasswordEmail" class="form-label">請填寫註冊Email</label>
                            <input type="email" class="form-control" id="resetPasswordEmail" placeholder="請填寫註冊Email">
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary">送出</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <input name="password" type="password" id="password" class="form-control fs-7" placeholder="請輸入密碼"> -->
                <v-field
                  id="password"
                  name="密碼"
                  type="password"
                  class="form-control fs-7"
                  :class="{ 'is-invalid': errors['密碼'] }"
                  placeholder="請輸入密碼"
                  rules="required|min:8"
                  v-model="loginUser.password"
                ></v-field>
                <error-message
                  name="密碼"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <button type="submit" class="btn btn-dark d-block mx-auto py-12 w-100 rounded-pill">登入</button>
              <p class="mx-auto w-75 my-12 text-center fs-7 text-delete">
                還沒有帳號嗎?<a @click.prevent="isLogin = false" href="#" class="d-inline-block">前往註冊</a>
              </p>
            </v-form>
          </div>
          <div v-else>
            <h1 class="mx-auto border-bottom my-16 pb-16 w-75 text-center">會員註冊</h1>
            <v-form ref="form" v-slot="{ errors }" @submit="signUp()" class="mx-auto w-75">
              <div class="mb-16">
                <label for="displayName" class="form-label">姓名：</label>
                <!-- <input id="displayName" type="text" class="form-control fs-7" placeholder="請輸入姓名" name="displayName"> -->
                <v-field
                  id="displayName"
                  name="姓名"
                  type="text"
                  class="form-control fs-7"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="userData.displayName"
                ></v-field>
                <error-message
                  name="姓名"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-16">
                <label for="email" class="form-label">Email：</label>
                <!-- <input id="email" type="email" class="form-control fs-7" placeholder="請輸入 Email" name="email"> -->
                <v-field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control fs-7"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="name@example.com"
                  rules="required|email"
                  v-model="singUpData.email"
                ></v-field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-16">
                <label for="password" class="form-label">密碼：</label>
                <!-- <input id="password" type="password" class="form-control fs-7" placeholder="請輸入密碼" name="password"> -->
                <v-field
                  id="password"
                  name="密碼"
                  type="password"
                  class="form-control fs-7"
                  :class="{ 'is-invalid': errors['密碼'] }"
                  placeholder="請輸入密碼"
                  rules="required|min:8"
                  v-model="singUpData.password"
                ></v-field>
                <error-message
                  name="密碼"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-16">
                <label for="confirmation" class="form-label">再次輸入密碼：</label>
                <!-- <input id="confirmation" type="password" class="form-control fs-7" placeholder="請再次輸入密碼" name="confirmation"> -->
                <v-field
                  name="驗證密碼"
                  id="confirmation"
                  type="password"
                  rules="required|confirmed:@密碼"
                  class="form-control fs-7"
                  :class="{ 'is-invalid': errors['驗證密碼'] }"
                  placeholder="請再次輸入密碼"
                  v-model="singUpData.confirmation"
                />
                <ErrorMessage class="invalid-feedback" name="驗證密碼"/>
              </div>
              <button type="submit" class="btn btn-dark d-block mx-auto py-12 w-100 rounded-pill">註冊</button>
              <p class="mx-auto w-75 my-12 text-center fs-7 text-delete">
                已經有帳號?
                <a href="#" @click.prevent="isLogin = true" class="d-inline-block">前往登入</a>
              </p>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapWritableState } from 'pinia'
import userStore from '../../stores/userStore'
// import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// const provider = new GoogleAuthProvider()
// import Swal from 'sweetalert2'
// const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      // loginUser: {
      //   email: '',
      //   password: ''
      // },
      token: '',
      isLoading: false,
      color: '#FF700C'
    }
  },
  methods: {
    ...mapActions(userStore, ['login', 'loginGoogle', 'signUp'])
    // signUp () {
    //   this.$http
    //     .post('http://localhost:3000/signup', this.user)
    //     .then((res) => {
    //       console.log(res)
    //       alert('你註冊成功了！')
    //     })
    //     .catch((err) => {
    //       console.log(err.response)
    //       alert('你註冊失敗囉QQ')
    //     })
    // },
    // login () {
    //   const auth = getAuth()
    //   signInWithEmailAndPassword(auth, this.user.email, this.user.password)
    //     .then((userCredential) => {
    //       // Signed in
    //       console.log(userCredential.user)
    //       console.log('登入成功')
    //       // ...
    //     })
    //     .catch((error) => {
    //       console.log(error.code)
    //       console.log(error.message)
    //       console.log('登入失敗')
    //     })
    // },
    // loginGoogle () {
    //   const auth = getAuth()
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       const credential = GoogleAuthProvider.credentialFromResult(result)
    //       const token = credential.accessToken
    //       console.log('token', token)
    //       // The signed-in user info.
    //       console.log(result.user)
    //       // IdP data available using getAdditionalUserInfo(result)
    //       this.$router.push('/')
    //       alert('使用google登入成功')

    //       // ...
    //     }).catch((error) => {
    //       // Handle Errors here.
    //       console.log(error.code)
    //       console.log(error.message)
    //       // The email of the user's account used.
    //       console.log(error.customData.email)
    //       // The AuthCredential type that was used.
    //       console.log(GoogleAuthProvider.credentialFromError(error))
    //       // ...
    //       alert('使用google登入失敗')
    //     })
    // }
    // login () {
    //   this.$http
    //     .post('http://localhost:3000/login', this.user2)
    //     .then((res) => {
    //       console.log(res)
    //       // console.log(res.data.accessToken);
    //       this.token = res.data.accessToken
    //       // id = res.data.user.id
    //       console.log(this.token)
    //       alert('你登入成功了！')
    //     })
    //     .catch((err) => {
    //       console.log(err.response)
    //       alert('你登入失敗囉OAO')
    //     })
    // }
  },
  computed: {
    ...mapWritableState(userStore, ['loginUser', 'isLogin', 'singUpData', 'userData'])
  },
  created () {}
}
</script>

<style lang="scss" scoped>
.login-hr {
  height: 1px;
  overflow: visible;
  border: none;
  background-color: #8c8c8c;
  text-align: center;
  &::after {
    content: "或使用信箱登入";
    display: inline-block;
    position: relative;
    top: -7px;
    padding: 0 16px;
    background: #fff;
  }
}
</style>
