import { defineStore } from 'pinia'
import filterStore from './filterStore'
import router from '../router'
const filterData = filterStore()
// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
// import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore/lite'
// const fs = getFirestore()
// const provider = new GoogleAuthProvider()

export default defineStore('moveStore', {
  state: () => ({
  }),
  actions: {
    goToCourses (search) {
      router.push('/courses')
      if (search) {
        filterData.selectCourseType = search
      }
    }
  },
  getters: {
  }
})
