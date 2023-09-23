import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import { getFirestore, doc, getDoc, getDocs, updateDoc, collection } from 'firebase/firestore/lite'
import teacherStore from './teacherStore'

const fs = getFirestore()
const teacherData = teacherStore()
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default defineStore('coursesStore', {
  state: () => ({
    isLoading: true,
    AllCourseData: [],
    teacherNames: {},
    courseDetails: {
      data: {
      }
    },
    courseViewDetails: {
      data: {
        buyer: [],
        classMode: [],
        courseId: '',
        courseImg: '',
        courseIntro: '',
        location: '',
        name: '',
        price: 0,
        startTime: 0,
        teacherId: {},
        teacherImg: '',
        time: 0,
        type: ''
      },
      teacherImg: '',
      teacherName: '',
      teacherUid: ''
    },
    popularCourses: [],
    suggestCourses: []
  }),
  actions: {
    // 取得所有課程資料
    async getAllCourses () {
      const querySnapshot = await getDocs(collection(fs, 'AllCourses'))
      this.AllCourseData = []
      console.log('querySnapshot,', querySnapshot)
      querySnapshot.forEach((item) => {
        console.log(item.id, ' => ', item.data())
        const handleData = {
          id: item.id,
          createdTime: item._document.createTime.timestamp.seconds, // 創建時間
          data: item.data()
        }
        this.AllCourseData.push(handleData)
      })
      console.log('所有課程資料', this.AllCourseData)
    },
    // 取得所有課程資料和老師(top 10 popularCoursesSwiper)
    async getAllCoursesAndTeacher () {
      this.isLoading = true
      this.AllCourseData = []
      const querySnapshot = await getDocs(collection(fs, 'AllCourses'))
      const teacherPromises = [] // 存儲老師數據 Promise

      querySnapshot.forEach((item) => {
        const courseData = item.data()
        console.log('這是 courseData', courseData)
        const teacherRef = courseData.teacherId
        console.log('這是 teacherId', teacherRef)

        // 使用 Promise 將老師數據獲取操作加到數組中
        const teacherPromise = getDoc(teacherRef).then((teacherDoc) => {
          if (teacherDoc.exists()) {
            const teacherName = teacherDoc.data().displayName
            courseData.teacherName = teacherName // 將老師姓名添加到課程數據中
            this.teacherNames[courseData.teacherId] = teacherName
          } else {
            console.log(`老師 document ${courseData.teacherId} 不存在`)
          }
        }).catch((error) => {
          console.error('老師 document fetching 錯誤', error)
        })

        teacherPromises.push(teacherPromise)

        const handleData = {
          id: item.courseId,
          data: courseData
        }
        this.AllCourseData.push(handleData)
      })
      // 使用 Promise.all() 等待所有老師數據取得完成
      await Promise.all(teacherPromises)
      console.log('所有課程數據', this.AllCourseData)
      console.log('老師名稱', this.teacherNames)
      this.isLoading = false
    },
    getBuyerCount (course) {
      return course.data.buyer.length
    },
    // async getTopTenCourses () {
    //   await this.getAllCoursesAndTeacher() // 確保已獲取所有課程數據
    //   console.log('篩選前', this.AllCourseData[0])
    // },
    // 取得暢銷課程前 10
    async getPopularCourses () {
      this.popularCourses = []
      await this.getAllCoursesAndTeacher()
      console.log('購買人數排序前 - 購買人數', this.AllCourseData.map(course => course.data.buyer.length))
      console.log('購買人數排序前 - 課程名稱', this.AllCourseData.map(course => course.data.name))
      this.AllCourseData.sort((a, b) => {
        return b.data.buyer.length - a.data.buyer.length
      })
      console.log('購買人數排序後 - 購買人數', this.AllCourseData.map(course => course.data.buyer.length))
      console.log('購買人數排序後 - 課程名稱', this.AllCourseData.map(course => course.data.name))
      this.popularCourses = this.AllCourseData.slice(0, 10)
      console.log('暢銷課程前 10 名', this.popularCourses)
    },
    async getSuggestCourses () {
      this.isLoading = true
      this.suggestCourses = []
      await this.getAllCoursesAndTeacher()
      const sameTypeCourse = []
      this.AllCourseData.forEach(course => {
        if (course.data.type === this.courseDetails.data.type) {
          sameTypeCourse.push(course)
        }
      })
      const shuffled = sameTypeCourse.sort(() => 0.5 - Math.random())
      this.suggestCourses = shuffled.slice(0, 3)
      console.log('推薦課程', this.suggestCourses)
      this.isLoading = false
    },
    // 取得單一課程內容
    async getCourseDetails (courseId) {
      this.isLoading = true
      const courseRef = doc(fs, 'AllCourses', courseId)
      const courseDoc = await getDoc(courseRef)
      console.log('store 的', courseDoc)
      console.log('store 的 courseId', courseId)

      if (courseDoc.exists()) {
        const courseData = courseDoc.data()
        // const teacherId = courseData.teacherId
        const teacherRef = courseData.teacherId // 注意這邊取得的是引用

        const teacherDoc = await getDoc(teacherRef) // 用引用 Reference 的方式取得資料

        if (teacherDoc.exists()) {
          const teacherName = teacherDoc.data().displayName
          const teacherIntro = teacherDoc.data().userIntro
          const teacherImg = teacherDoc.data().userPhoto
          const teacherUid = teacherDoc.data().uid

          this.courseDetails = {
            data: courseData,
            teacherName,
            teacherIntro,
            teacherImg,
            teacherUid
          }
          this.courseViewDetails = JSON.parse(JSON.stringify(this.courseDetails))
        } else {
          console.log(`老師 document ${teacherRef.path} 不存在`)
        }
      } else {
        console.log(`課程 document ${courseId} 不存在`)
      }
      console.log('單一課程資料', this.courseDetails)
      this.isLoading = false
    },
    // 更新課程內容
    async updateCourseData (courseId) {
      this.courseDetails.data.courseImg = teacherData.teacherData.courseImg
      await updateDoc(doc(fs, 'AllCourses', courseId), this.courseDetails.data)
      try {
        // this.isEditMode = false
        teacherData.teacherData.courseImg = ''
        console.log('課程資料更新成功')
        this.getCourseDetails(courseId)
        // alert('課程資料更新成功')
        Toast.fire({
          icon: 'success',
          title: '課程資料更新成功'
        })
      } catch (err) {
        console.log('課程資料更新失敗', err)
        // alert('課程資料更新失敗')
        Toast.fire({
          icon: 'error',
          title: '課程資料更新失敗'
        })
      }
    }
  },
  getters: {
  }
})
