import { defineStore } from 'pinia'
import { getFirestore, doc, addDoc, collection, setDoc, updateDoc, arrayUnion } from 'firebase/firestore/lite'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import router from '../router'
const fs = getFirestore()

export default defineStore('teacherStore', {
  state: () => ({
    teacherData: {
      courseId: '',
      name: '',
      price: 0,
      type: '',
      time: 0,
      classMode: [],
      location: '',
      startTime: 0,
      courseIntro: '',
      courseImg: '',
      teacherImg: '',
      buyer: []
    },
    teacherUid: ''
  }),
  actions: {
    getUid () {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        console.log(user)
        this.teacherUid = user.uid
        console.log('這是 teacherUid', this.teacherUid)
      })
    },
    // 測試關聯 - 開新課程與老師關聯
    async createCourseConnect () {
      this.getUid()

      // 轉換 price 和 time 成為數值(之後再找解決的方法)
      this.teacherData.price = Number(this.teacherData.price)
      this.teacherData.time = Number(this.teacherData.time)

      // 獲取開課時間的時間戳毫秒數
      this.teacherData.startTime = Date.now() // 假設開課時間的屬性名稱為 startTime
      try {
        // 首先，創建新的課程文檔
        const newCourseRef = await addDoc(collection(fs, 'AllCourses'), this.teacherData)
        console.log('這是要送出的課程檔案', this.teacherData)

        // 接著，使用參考關聯課程到對應的老師
        // 創建新課程關聯
        const courseDocRef = doc(fs, 'AllCourses', newCourseRef.id)
        // 創立老師介紹的路徑
        console.log('創建新課程關聯', courseDocRef)

        // 課程老師檔案
        const teacherDocRef = doc(fs, 'users', this.teacherUid)
        console.log('課程老師uid - teacherUid', this.teacherUid)

        // 加入隨機產生的課程 id 成為 course_id 的屬性
        await setDoc(courseDocRef, { courseId: newCourseRef.id }, { merge: true })

        // 加入開課的老師 id 成為 teacher_id 的屬性
        await setDoc(courseDocRef, { teacherId: teacherDocRef }, { merge: true })

        // 加入課程 id 到開課的老師 courses_created
        await updateDoc(teacherDocRef, { courses_created: arrayUnion(courseDocRef) }, { merge: true })

        // 清空輸入欄位
        this.teacherData.courseId = ''
        this.teacherData.name = ''
        this.teacherData.price = 0
        this.teacherData.type = ''
        this.teacherData.time = 0
        this.teacherData.classMode = []
        this.teacherData.location = ''
        this.teacherData.courseIntro = ''
        this.teacherData.courseImg = ''
        this.teacherData.teacherImg = ''

        console.log('新課程創建成功')
        alert('新課程創建成功')
        router.push('/teacher/stepFour')
      } catch (error) {
        console.error('Error adding course: ', error)
      }
    },
    // 新增課程
    async setCourseData () {
      try {
        console.log('這是要建立的課程資料', this.teacherData)
        await addDoc(collection(fs, 'AllCourses'), this.teacherData)
        alert('課程新增成功')
      } catch (err) {
        alert('課程新增失敗', err)
      }
    },
    // 上傳圖片
    async updateImg (item, e) {
      try {
        const file = e.target.files[0]
        if (!file) {
          return
        }
        // const beforeCheck = await this.beforeUpdate()
        // if (!beforeCheck) {
        //   return
        // }
        this.imgHandle(item, file)
      } catch (err) {
        console.log(err)
      } finally {
        e.target.value = null
      }
    },
    beforeUpdate () {
      console.log('確認這是圖片檔案')
    },
    imgHandle (item, File) {
      const formData = new FormData()
      formData.append('photoFile', File)
      // 之後再檢查
      const file = formData.get('photoFile')
      const reader = new FileReader()
      // 確認是否為 jpg png
      // const fileType = file.type
      reader.readAsDataURL(file)
      // 等待讀取完成
      reader.onload = (event) => {
        if (item === 'course') {
          this.teacherData.courseImg = event.target.result
          console.log('課程圖片連結', this.teacherData.courseImg)
        } else if (item === 'teacher') {
          this.teacherData.teacherImg = event.target.result
          console.log('老師圖片連結', this.teacherData.teacherImg)
        }
      }
    }
  }
})
