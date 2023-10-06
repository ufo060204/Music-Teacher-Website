import { defineStore } from 'pinia'
import coursesStore from './coursesStore'
import paginationStore from './paginationStore'

const courseData = coursesStore()
const paginationData = paginationStore()

export default defineStore('filterStore', {
  state: () => ({
    selectCourseType: '',
    selectClassMode: '',
    selectLocation: '',
    searchCourse: '',
    selectSort: ''
  }),
  actions: {
    courseSort () {
      // console.log(this.selectSort)
      if (this.selectSort === '金額') {
        courseData.AllCourseData.sort((a, b) => {
          return b.data.price - a.data.price
        })
      } else if (this.selectSort === '新舊') {
        courseData.AllCourseData.sort((a, b) => {
          return b.data.startTime - a.data.startTime
        })
      } else if (this.selectSort === '人氣') {
        courseData.AllCourseData.sort((a, b) => {
          return b.data.buyer.length - a.data.buyer.length
        })
      }
    },
    searchClear () {
      this.selectCourseType = ''
      this.selectClassMode = ''
      this.selectLocation = ''
      this.searchCourse = ''
      this.selectSort = ''
    }
  },
  getters: {
    filterCourseData () {
      if (this.selectClassMode === '') {
        return courseData.AllCourseData.filter((item) => {
          return item.data.type.match(this.selectCourseType) && item.data.location.match(this.selectLocation) && item.data.name.match(this.searchCourse)
        })
      } else {
        return courseData.AllCourseData.filter((item) => {
          return item.data.type.match(this.selectCourseType) && item.data.location.match(this.selectLocation) && item.data.name.match(this.searchCourse) && item.data.classMode.includes(this.selectClassMode)
        })
      }
    },
    pageCourseData () {
      paginationData.pagination(this.filterCourseData)
      return paginationData.eachPage
    }
  }
})
