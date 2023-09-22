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
    popularCourses: []
  }),
  actions: {
    // 取得所有課程資料
    async getAllCourses () {
      const querySnapshot = await getDocs(collection(fs, 'AllCourses'))
      this.AllCourseData = []
      console.log('querySnapshot,', querySnapshot)
      querySnapshot.forEach((item) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(item.id, ' => ', item.data())
        const handleData = {
          id: item.id,
          createdTime: item._document.createTime.timestamp.seconds, // 創建時間
          data: item.data()
        }
        this.AllCourseData.push(handleData)
      })
      console.log('所有課程資料', this.AllCourseData)
      // this.courseData = querySnapshot._docs
    },
    // 取得所有課程資料和老師(top 10 swiper)
    async getAllCoursesAndTeacher () {
      this.isLoading = true
      this.AllCourseData = []
      const querySnapshot = await getDocs(collection(fs, 'AllCourses'))
      const teacherPromises = [] // 用于存储教师数据的 Promise 数组

      querySnapshot.forEach((item) => {
        const courseData = item.data()
        console.log('這是courseData', courseData)
        const teacherRef = courseData.teacherId
        console.log('這是teacherId', teacherRef)

        // 使用 Promise 将教师数据获取操作添加到数组中
        const teacherPromise = getDoc(teacherRef).then((teacherDoc) => {
          if (teacherDoc.exists()) {
            const teacherName = teacherDoc.data().displayName
            courseData.teacherName = teacherName // 将老师姓名添加到课程数据中
            this.teacherNames[courseData.teacherId] = teacherName
          } else {
            console.log(`Teacher document not found for ${courseData.teacherId}`)
          }
        }).catch((error) => {
          console.error('Error fetching teacher document:', error)
          // 在此处记录错误，但继续执行下一个操作
        })

        teacherPromises.push(teacherPromise)

        const handleData = {
          id: item.courseId,
          data: courseData
        }
        this.AllCourseData.push(handleData)
      })
      // 使用 Promise.all() 等待所有教师数据的获取操作完成
      await Promise.all(teacherPromises)
      console.log('所有課程數據', this.AllCourseData)
      console.log('老師名稱', this.teacherNames)
      this.isLoading = false
    },
    getBuyerCount (course) {
      return course.data.buyer.length
    },
    async getTopTenCourses () {
      await this.getAllCoursesAndTeacher() // 确保已获取所有课程数据
      console.log('篩選前', this.AllCourseData[0])
      // this.AllCourseData.sort((a, b) => {
      //   const buyerCountA = this.getBuyerCount(a)
      //   const buyerCountB = this.getBuyerCount(b)
      //   return buyerCountB - buyerCountA // 降序排序
      // })

      // const popularCourses = this.AllCourseData.slice(0, 2) // 获取前十个课程

      // console.log('前十名课程', popularCourses)
    },
    // 取得暢銷課程前 10
    async getPopularCourses () {
      this.popularCourses = []
      await this.getAllCoursesAndTeacher()
      console.log('排序前数据', this.AllCourseData.map(course => course.data.buyer.length))
      // console.log('所有課程尚未篩選', this.AllCourseData)
      this.AllCourseData.sort((a, b) => {
        // return b.data.buyer.length - a.data.buyer.length
        return b.data.buyer.length - a.data.buyer.length
      })
      console.log('排序后数据', this.AllCourseData.map(course => course.data.buyer.length))
      // console.log('已經篩選', this.AllCourseData)
      this.popularCourses = this.AllCourseData.slice(0, 10)
      console.log('暢銷課程前 10 名', this.popularCourses)
    },
    // 取得單一課程內容
    async getCourseDetails (courseId) {
      this.isLoading = true
      const courseRef = doc(fs, 'AllCourses', courseId)
      const courseDoc = await getDoc(courseRef)
      console.log('store的', courseDoc)
      console.log('store的courseId', courseId)

      if (courseDoc.exists()) {
        const courseData = courseDoc.data()
        // const teacherId = courseData.teacherId
        const teacherRef = courseData.teacherId // 注意这里获取的是引用

        const teacherDoc = await getDoc(teacherRef) // 用引用 Reference 的方式取得資料

        // const teacherRef = doc(fs, 'users', teacherId)
        // console.log(teacherRef)
        // const teacherDoc = await getDoc(teacherRef)

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
          // router.push(`/course/${courseId}`)
        } else {
          console.log(`Teacher document not found for ${teacherRef.path}`)
        }
      } else {
        console.log(`Course document not found for ${courseId}`)
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
