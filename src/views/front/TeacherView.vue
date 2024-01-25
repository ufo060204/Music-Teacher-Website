<template>
  <section class="pt-66">
    <BannerArea />
    <ProgressBar />
    <RouterView />
  </section>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import userStore from '@/stores/userStore'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
import BannerArea from '@/components/BannerArea.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default {
  data () {
    return {}
  },
  components: {
    BannerArea, ProgressBar
  },
  methods: {
    ...mapActions(userStore, ['checkMemberObserver'])
    // checkMemberObserverBase () {
    //   const auth = getAuth()
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       this.$router.push('/teacher/stepOne')
    //       console.log('你是會員')
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/auth.user
    //       console.log(user)
    //       // const uid = user.uid
    //       // console.log('uid', uid)
    //       // ...
    //       console.log(user.providerData)
    //       // user.providerData.forEach((profile) => {
    //       //   console.log('Sign-in provider: ' + profile.providerId)
    //       //   console.log('  Provider-specific UID: ' + profile.uid)
    //       //   console.log('  Name: ' + profile.displayName)
    //       //   console.log('  Email: ' + profile.email)
    //       //   console.log('  Photo URL: ' + profile.photoURL)
    //       //   console.log('  Photo URL: ' + profile.title)
    //       //   console.log('  Photo URL: ' + profile.price)
    //       // })
    //     } else {
    //       this.$router.push('/login')
    //       console.log('你不是會員')
    //       // User is signed out
    //       // ...
    //     }
    //   })
    // },
    // checkMember () {
    //   if (this.isMember()) {
    //     this.$router.push('/teacher/stepOne')
    //   } else {
    //     this.$router.push('/register')
    //   }
    // },
    // getUserData () {
    //   const auth = getAuth()
    //   const user = auth.currentUser

    //   if (user !== null) {
    //     user.providerData.forEach((profile) => {
    //       console.log('Sign-in provider: ' + profile.providerId)
    //       console.log('  Provider-specific UID: ' + profile.uid)
    //       console.log('  Name: ' + profile.displayName)
    //       console.log('  Email: ' + profile.email)
    //       console.log('  Photo URL: ' + profile.photoURL)
    //     })
    //   }
    // }
  },
  computed: {
    ...mapState(userStore, ['isMember'])
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>

</style>
