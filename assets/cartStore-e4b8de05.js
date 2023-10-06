import{d as g}from"./pinia-ef994b1a.js";import{g as p,S as c,a as w,o as y,d as i,u as a,b as l,c as T,e as u,f as S,h as C,s as m,i as R}from"./sweetalert2.all-09c79ce8.js";import{b as D}from"./index.esm2017-717e340d.js";import{u as F}from"./userStore-ceb04f46.js";const I=F(),r=p(),n=c.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",c.stopTimer),e.addEventListener("mouseleave",c.resumeTimer)}}),L=g("cartStore",{state:()=>({isMember:!1,cart:[],selectedCourseIds:[],selectedCourses:[],selectedCoursesFinal:[],uid:"",total:0,isEditMode:!1,isSelectedCoursesAll:!1,orderTime:0,isLoading:!0,isCouponCode:!1,useCoupon:!1,couponCode:"",cartStatus:"cart"}),actions:{async getUid(){return new Promise((e,s)=>{const t=w();y(t,o=>{o?(this.uid=o.uid,e(this.uid)):o?s(new Error("用戶未經身份驗證 User not authenticated")):console.log("你是登出狀態")})})},async addToCart(e){if(!I.isMember){c.fire({icon:"info",title:"請先登入",confirmButtonColor:"#FE715F"});return}await this.getUid();const s=i(r,"AllCourses",e),t=i(r,"users",this.uid);if(this.cart.some(o=>o.courseId===e)){n.fire({icon:"info",title:"課程已在購物車中"});return}await a(t,{cart:l(s)},{merge:!0});try{this.getCart(),n.fire({icon:"success",title:"加入購物車成功"})}catch(o){n.fire({icon:"error",title:`加入購物車失敗 ${o}`})}},async removeFromCollection(e){await this.getUid();const s=i(r,"AllCourses",e),t=i(r,"users",this.uid);await a(t,{cart:T(s)},{merge:!0});try{this.getCart(),n.fire({icon:"success",title:"從購物車移除成功"})}catch(o){n.fire({icon:"error",title:`從購物車移除失敗 ${o}`})}},async getCart(){try{this.isLoading=!0;const e=await this.getUid(),s=i(r,"users",e),t=await u(s);if(t.exists()){const d=t.get("cart").map(f=>u(f)),h=await Promise.all(d);this.cart=h.map(f=>f.data()),this.isLoading=!1}else console.log("User document does not exist."),this.cart=[],this.isLoading=!1}catch(e){console.error("購物車內容錯誤:",e),this.isLoading=!1}},checkAllCourses(){this.isSelectedCoursesAll?(this.selectedCourses=[],this.selectedCourseIds=[]):this.cart.forEach(e=>{this.selectedCourses.push(e),this.selectedCourseIds.push(e.courseId)})},async checkout(){const e=i(r,"users",this.uid),s=await u(e);if(this.orderTime=Date.now(),s.exists()){const t=await S(C(r,"orders"),{orderDetail:this.selectedCoursesFinal,createdTime:this.orderTime,user:this.uid,total:this.selectedCoursesTotal,couponTotal:this.couponTotal,useCoupon:this.useCoupon});await a(t,{orderId:t.id}),this.selectedCoursesFinal.forEach(async o=>{await a(e,{courses_joined:l(o)},{merge:!0}),await a(o,{buyer:l(this.uid)},{merge:!0});const d=C(r,"AllCourses",(await u(o)).data().courseId,"buyerStudyTime");await m(i(d,this.uid),{createdTime:this.orderTime})}),await a(e,{myOrders:l(t.id)},{merge:!0}),await a(e,{cart:R()}),await a(e,{cart:[]}),this.cart=[],this.cartStatus="cart",this.total=0,D.push("/orderFinished"),c.fire({title:"結帳成功",icon:"success"})}},refTest(){const e=[];this.selectedCoursesFinal.forEach(async s=>{e.push((await u(s)).data());const t=C(r,"AllCourses",(await u(s)).data().courseId,"buyerStudyTime");await m(i(t,"uid"),{createdTime:1695314902799}),console.log("buyerStudyTimeCollectionRef 設置成功",t)}),console.log("refTest",e)},copyCouponCode(e){navigator.clipboard.writeText(e).then(()=>{this.couponCode=e,console.log("優惠碼",e),alert("優惠碼複製成功"),n.fire({icon:"success",title:"優惠碼複製成功"})})},addCouponCode(e){e==="888"?(this.isCouponCode=!0,this.useCoupon=!0,c.fire({title:"優惠碼加入成功",icon:"success"})):c.fire({title:"優惠碼不存在",icon:"warning"})},async goCheckout(){this.selectedCourseIds.length!==0?(this.cartStatus="checkout",this.filterSelect()):c.fire({title:"請先勾選要結帳的項目",confirmButtonColor:"#FE715F"})},goBackCart(){this.cartStatus="cart"},async filterSelect(){const e=i(r,"users",this.uid),s=await u(e);if(s.exists()){const o=s.get("cart").filter(d=>{const h=d.id;return this.selectedCourseIds.includes(h)});this.selectedCoursesFinal=o}else console.log("User document does not exist.")}},getters:{selectedCoursesTotal(){let e=0;return this.selectedCourses.forEach(s=>{e+=parseInt(s.price)}),e},couponTotal(){return this.selectedCoursesTotal*.8}}});export{L as c};
