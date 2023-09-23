import { defineStore } from 'pinia'
import filterStore from './filterStore'
import router from '../router'
const filterData = filterStore()

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
