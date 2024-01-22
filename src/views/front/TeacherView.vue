<template>
  <!-- <section class="landing-img landing-header" /> -->
  <section class="pt-66 vh-custom">
    <BannerArea />
    <ProgressBar />
    <RouterView />
  </section>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import userStore from '@/stores/userStore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import BannerArea from '@/components/BannerArea.vue'
import ProgressBar from '@/components/ProgressBar.vue'
// import { mapWritableState } from 'pinia'
// import teacherStore from '@/stores/teacherStore'

export default {
  data () {
    return {}
  },
  components: {
    BannerArea, ProgressBar
  },
  methods: {
    ...mapActions(userStore, ['checkMemberObserver']),
    // checkMemberTest () {
    //   const auth = getAuth()
    //   const user = auth.currentUser
    //   console.log(user)

    //   if (user) {
    //     this.$router.push('/teacher/stepOne')
    //     alert('你是會員')
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/auth.user
    //     // ...
    //   } else {
    //     this.$router.push('/register')
    //     alert('你不是會員')
    //     // No user is signed in.
    //   }
    // },
    checkMemberObserverBase () {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$router.push('/teacher/stepOne')
          console.log('你是會員')
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          console.log(user)
          // const uid = user.uid
          // console.log('uid', uid)
          // ...
          console.log(user.providerData)
          // user.providerData.forEach((profile) => {
          //   console.log('Sign-in provider: ' + profile.providerId)
          //   console.log('  Provider-specific UID: ' + profile.uid)
          //   console.log('  Name: ' + profile.displayName)
          //   console.log('  Email: ' + profile.email)
          //   console.log('  Photo URL: ' + profile.photoURL)
          //   console.log('  Photo URL: ' + profile.title)
          //   console.log('  Photo URL: ' + profile.price)
          // })
        } else {
          this.$router.push('/login')
          console.log('你不是會員')
          // User is signed out
          // ...
        }
      })
    },
    checkMember () {
      if (this.isMember()) {
        this.$router.push('/teacher/stepOne')
      } else {
        this.$router.push('/register')
      }
    },
    // checkMember () {
    //   this.checkMemberObserver()
    //   console.log('isMember', this.isMember)
    //   if (this.isMember) {
    //     this.$router.push('/teacher/stepOne')
    //   } else {
    //     this.$router.push('/register')
    //   }
    // },
    getUserData () {
      const auth = getAuth()
      const user = auth.currentUser

      if (user !== null) {
        user.providerData.forEach((profile) => {
          console.log('Sign-in provider: ' + profile.providerId)
          console.log('  Provider-specific UID: ' + profile.uid)
          console.log('  Name: ' + profile.displayName)
          console.log('  Email: ' + profile.email)
          console.log('  Photo URL: ' + profile.photoURL)
        })
      }
    }
  },
  computed: {
    ...mapState(userStore, ['isMember'])
  },
  created () {
    // this.checkMemberObserver()
  }
}
</script>
<style lang="scss" scoped>
.vh-custom {
    min-height: calc(100vh - 210px);
  }
//   .timeline {
//   position: relative;
//   &::after {
//     content: '';
//     position: absolute;
//     top: 9px;
//     left: 0;
//     right: 0;
//     height: 2px;
//     background-color: #C1C1C1;
//   }
//   &-pointer {
//     position: relative;
//     color: #C1C1C1;
//     p {
//       padding-top: 24px;
//       margin-bottom: 0;
//       line-height: 1.5;
//     }
//     &::before {
//       content: '';
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 20px;
//       height: 20px;
//       border: 1px solid #C1C1C1;
//       border-radius: 50%;
//       background-color: #2D2D2D;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 12px;
//       font-family: var(--bs-font-monospace);
//       z-index: 1;
//     }
//     &.step-1::before {
//       content: '1';
//     }
//     &.step-2::before {
//       content: '2';
//     }
//     &.step-3::before {
//       content: '3';
//     }
//     &.step-4::before {
//       content: '4';
//     }
//     &.active {
//       color: #A88030;
//       &::before {
//         color: #FFFFFF;
//         background-color: #A88030;
//         border-color: #A88030;
//       }
//     }
//   }
// }
</style>
