import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, addDoc, updateDoc, arrayUnion, arrayRemove, deleteField, collection } from 'firebase/firestore/lite'
import router from '../router'
import Swal from 'sweetalert2'
import userStore from './userStore'

const userData = userStore()
const fs = getFirestore()
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

export default defineStore('cartStore', {
  state: () => ({
    isMember: false,
    cart: [],
    selectedCourseIds: [],
    selectedCourses: [],
    selectedCoursesFinal: [],
    uid: '',
    total: 0,
    isEditMode: false,
    isSelectedCoursesAll: false,
    orderTime: 0,
    isLoading: true,
    isCouponCode: false,
    useCoupon: false,
    couponCode: '',
    cartStatus: 'cart'
  }),
  actions: {
    async getUid () {
      return new Promise((resolve, reject) => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log('這是使用者內容', user)
            this.uid = user.uid
            console.log('這是 uid', this.uid)
            resolve(this.uid) // 回傳 uid 的 Resolve
          } else if (!user) {
            console.log('你是登出狀態')
            // Swal.fire({
            //   icon: 'info',
            //   title: '請先登入',
            //   confirmButtonColor: '#FE715F'
            // })
          } else {
            reject(new Error('用戶未經身份驗證 User not authenticated'))
          }
        })
      })
    },
    // 將課程加入購物車
    async addToCart (courseId) {
      if (!userData.isMember) {
        Swal.fire({
          icon: 'info',
          title: '請先登入',
          confirmButtonColor: '#FE715F'
        })
        return
      }
      await this.getUid()
      // 創建課程檔案
      const courseDocRef = doc(fs, 'AllCourses', courseId)
      // 創建使用者檔案
      const userDocRef = doc(fs, 'users', this.uid)

      // 檢查購物車中是否已包含相同的課程 ID
      if (this.cart.some((cartItem) => cartItem.courseId === courseId)) {
        console.log('課程已在購物車中')
        Toast.fire({
          icon: 'info',
          title: '課程已在購物車中'
        })
        return // 不執行下面的程式碼
      }

      // 加入課程 id 加入到使用者的收藏 coursesCollection
      await updateDoc(userDocRef, { cart: arrayUnion(courseDocRef) }, { merge: true })
      try {
        this.getCart()
        console.log('加入購物車成功')
        Toast.fire({
          icon: 'success',
          title: '加入購物車成功'
        })
      } catch (err) {
        console.log('加入購物車失敗', err)
        Toast.fire({
          icon: 'error',
          title: '加入購物車失敗'
        })
      }
    },
    // 將課程從購物車移除
    async removeFromCollection (courseId) {
      await this.getUid()
      // 獲取課程文檔引用
      const courseDocRef = doc(fs, 'AllCourses', courseId)
      // 獲取用戶文檔引用
      const userDocRef = doc(fs, 'users', this.uid)
      // 從用戶的購物車中移除課程 id
      await updateDoc(userDocRef, { cart: arrayRemove(courseDocRef) }, { merge: true })

      try {
        this.getCart()
        console.log('從購物車移除成功')
        Toast.fire({
          icon: 'success',
          title: '從購物車移除成功'
        })
      } catch (err) {
        console.log('從購物車移除失敗', err)
        Toast.fire({
          icon: 'error',
          title: '從購物車移除失敗'
        })
      }
    },
    // 取得購物車內容
    async getCart () {
      try {
        this.isLoading = true
        const uid = await this.getUid()
        const userRef = doc(fs, 'users', uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
          const coursesCreatedRefs = userDoc.get('cart')
          console.log('購物車參考', coursesCreatedRefs)
          const coursePromises = coursesCreatedRefs.map(courseRef => getDoc(courseRef)) // 使用 map 建立每個 array 的 promises

          const courseDocs = await Promise.all(coursePromises) // 等待所有 Promise resolve
          this.cart = courseDocs.map(doc => doc.data())

          console.log('購物車內容', this.cart)
          this.isLoading = false
        } else {
          console.log('User document does not exist.')
          this.cart = []
          this.isLoading = false
        }
      } catch (error) {
        console.error('購物車內容錯誤:', error)
        this.isLoading = false
      }
    },
    checkAllCourses () {
      console.log(this.isSelectedCoursesAll)
      if (!this.isSelectedCoursesAll) {
        this.cart.forEach((item) => {
          this.selectedCourses.push(item)
          this.selectedCourseIds.push(item.courseId)
          console.log(this.selectedCourses)
          console.log(this.selectedCourseIds)
        })
      } else {
        this.selectedCourses = []
        this.selectedCourseIds = []
      }
    },
    // 結帳
    async checkout () {
      const userRef = doc(fs, 'users', this.uid)
      const userDoc = await getDoc(userRef)
      // 建立訂單時間
      this.orderTime = Date.now()
      if (userDoc.exists()) {
        console.log('購物車內容(更新後)', this.selectedCoursesFinal)

        // 創建新的訂單文檔，加入購買課程、訂單時間、購買者、總金額、優惠金額
        const newOrderRef = await addDoc(collection(fs, 'orders'), {
          orderDetail: this.selectedCoursesFinal,
          createdTime: this.orderTime,
          user: this.uid,
          total: this.selectedCoursesTotal,
          couponTotal: this.couponTotal,
          useCoupon: this.useCoupon
        })

        console.log('訂購的時間', this.orderTime)
        console.log('要送出的訂單檔案', newOrderRef)
        console.log('要送出的訂單檔案 id', newOrderRef.id)

        this.selectedCoursesFinal.forEach(async (item) => {
          // 增加課程到 courses_joined
          await updateDoc(userRef, { courses_joined: arrayUnion(item) }, { merge: true })
          // 增加購買者到 AllCourses 的課程當中
          await updateDoc(item, { buyer: arrayUnion(this.uid) }, { merge: true })
        })

        // 加入訂單編號到購買者
        await updateDoc(userRef, { myOrders: arrayUnion(newOrderRef.id) }, { merge: true })

        // 刪除 遠端 cart 內容
        await updateDoc(userRef, { cart: deleteField() })
        await updateDoc(userRef, { cart: [] })
        console.log('結帳成功, 參加課程追加成功')
        this.cart = []
        this.cartStatus = 'cart'
        this.total = 0
        router.push('/orderFinished')
        Swal.fire({
          title: '結帳成功',
          icon: 'success'
        })
      }
    },
    copyCouponCode (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.couponCode = text
          console.log('優惠碼', text)
          alert('優惠碼複製成功')
          Toast.fire({
            icon: 'success',
            title: '優惠碼複製成功'
          })
        })
    },
    addCouponCode (text) {
      if (text === '888') {
        this.isCouponCode = true
        this.useCoupon = true
        Swal.fire({
          title: '優惠碼加入成功',
          icon: 'success'
        })
      } else {
        Swal.fire({
          title: '優惠碼不存在',
          icon: 'warning'
        })
      }
    },
    async goCheckout () {
      if (this.selectedCourseIds.length !== 0) {
        this.cartStatus = 'checkout'
        this.filterSelect()
      } else {
        // alert('請先勾選要結帳的項目')
        Swal.fire({
          title: '請先勾選要結帳的項目',
          confirmButtonColor: '#FE715F'
        })
      }
    },
    goBackCart () {
      this.cartStatus = 'cart'
    },
    async filterSelect () {
      const userRef = doc(fs, 'users', this.uid)
      const userDoc = await getDoc(userRef)
      if (userDoc.exists()) {
        const coursesCreatedRefs = userDoc.get('cart')
        console.log('購物車參考', coursesCreatedRefs)
        // 使用 filter 方法來篩選出具有指定 courseId 的項目
        const filteredReferences = coursesCreatedRefs.filter((cartRef) => {
          // 從 cartRef 中取得文檔的 id
          const cartItemId = cartRef.id
          console.log('cart課程參考當中的 id', cartItemId)
          return this.selectedCourseIds.includes(cartItemId)
        })
        this.selectedCoursesFinal = filteredReferences
        console.log('篩選後的參考', filteredReferences)
        console.log('最後要加入訂單的參考', this.selectedCoursesFinal)
      } else {
        console.log('User document does not exist.')
      }
    }
  },
  getters: {
    // 選中的商品列表
    selectedCoursesTotal () {
      let total = 0
      this.selectedCourses.forEach((item) => {
        total += parseInt(item.price)
      })
      return total
    },
    couponTotal () {
      return this.selectedCoursesTotal * 0.8
    }
  }
})
