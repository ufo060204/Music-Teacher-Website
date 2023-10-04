import{m as I,b as $,a as b}from"./pinia-ef994b1a.js";import{c as u}from"./cartStore-1c053ae5.js";import{b as S}from"./bannerStore-1b7734ea.js";import{S as c}from"./sweetalert2.all-cf36bba5.js";import{C as A}from"./CardHorizontalPlaceholder-389ab299.js";import{B}from"./BannerArea-ca093728.js";import{v as g,l as V}from"./runtime-dom.esm-bundler-e62d4d3a.js";import{bf as N,aC as p,n,v as h,o as e,m as i,ba as E,bc as m,F as v,aA as y,aQ as d,aq as l,u as L,aa as U,au as j,ar as z}from"./_plugin-vue_export-helper-ec969899.js";import"./index.esm2017-53588797.js";import"./userStore-7aec58b9.js";import"./moment-15d02ca5.js";import"./card-placeholder-img-c3843645.js";const{VITE_APP_URL:_,VITE_APP_PATH:C}={VITE_apiKey:"AIzaSyAAmNv4OytiqSbibEJ3__SmucrnblEfXZw",VITE_authDomain:"music-teacher-website.firebaseapp.com",VITE_projectId:"music-teacher-website",VITE_storageBucket:"music-teacher-website.appspot.com",VITE_messagingSenderId:"15449838244",VITE_appId:"1:15449838244:web:6354f5d2759ee9044d8c31",VITE_measurementId:"G-M6YK1VW9S6",BASE_URL:"/Music-Teacher-Website/",MODE:"production",DEV:!1,PROD:!0},P={data(){return{products:[],productId:"",loadingItem:"",color:"#FF700C",form:{user:{name:"",mail:"",tel:"",address:""},message:""}}},components:{CardHorizontalPlaceholder:A,BannerArea:B},watch:{selectedCourseIds:function(t){this.selectedCourses=this.cart.filter(s=>t.includes(s.courseId)),console.log("選擇的課程",this.selectedCourses)},cartStatus(){this.cartStatus==="cart"?this.getBannerInfo(new URL("/Music-Teacher-Website/title-banner.jpg",self.location).href,"購物車","CART","年底前輸入『 888 』享八折優惠"):this.getBannerInfo(new URL("/Music-Teacher-Website/title-banner.jpg",self.location).href,"結帳","CHECKOUT","購物的終點，滿足的起點")}},computed:{...I(u,["uid","cart","cartTotal","couponTotal","cartStatus","selectedCoursesTotal","isCouponCode","isLoading"]),...$(u,["couponCode","selectedCourses","selectedCourseIds","isSelectedCoursesAll"])},methods:{...b(u,["getCart","removeFromCollection","getUid","addCouponCode","goCheckout","goBackCart","checkout","filterSelect","checkAllCourses","refTest"]),...b(S,["getBannerInfo"]),updateCartItem(t){const s={product_id:t.product.id,qty:t.qty};this.loadingItem=t.id,this.$http.put(`${_}/v2/api/${C}/cart/${t.id}`,{data:s}).then(a=>{this.getCarts(),this.loadingItem="",c.fire({icon:"success",title:"已更新數量",showConfirmButton:!1,timer:1500})}).catch(a=>{c.fire(a.data.message)})},checkCoupon(){const t={code:this.couponCode},s=`${_}/v2/api/${C}/coupon`;this.$http.post(s,{data:t}).then(a=>{a.data.success===!0?c.fire("套用成功","已套用優惠券 zongzi40","success"):a.data.success===!1&&c.fire({icon:"error",title:"套用失敗",text:"找不到優惠券QQ",footer:'<a href="https://ufo060204.github.io/Zongzi-Shop-Webside/#/home/-NR8JzTIYKZ08sSYBdjQ">前往領取優惠碼'}),this.getCarts()}).catch(a=>{c.fire(a.response.data.message)})},deleteAllCart(){c.fire({title:"刪除確認?",text:"確定要清除購物車的所有商品嗎？",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"是的"}).then(t=>{t.isConfirmed&&this.$http.delete(`${_}/v2/api/${C}/carts`).then(s=>{this.getCarts(),c.fire("刪除成功","購物車的商品已清空","success")}).catch(s=>{c.fire(s.data.message)})})}},created(){this.getBannerInfo(new URL("/Music-Teacher-Website/title-banner.jpg",self.location).href,"購物車","CART","年底前輸入『 888 』享八折優惠"),this.getUid(),this.getCart()},mounted(){}},r=t=>(j("data-v-17d9870c"),t=t(),z(),t),R={class:"mt-66"},M={class:"container"},W={class:"py-32"},D={key:0,class:"row"},F={key:0,class:"col-12 col-lg-8"},H={key:1,class:"row d-flex align-items-center justify-content-center"},q={class:"col-md-4 col-10 d-flex align-items-center justify-content-center flex-column py-80 border rounded-4"},K=r(()=>e("h1",{class:"fs-2 fw-bold mb-16"},"購物車",-1)),O=r(()=>e("h2",{class:"fs-4 mb-16"},"購物車是空的，來去逛逛吧！",-1)),Q={key:2,class:"col-12 col-lg-8 mx-auto mb-3 border rounded-4 h-100"},x={class:"table table-hover align-middle"},Y={class:"text-center"},Z=r(()=>e("th",{colspan:"3"},[e("label",{for:"checkAll",class:"text-primary fs-5"},"全選")],-1)),J={class:"text-center",width:"4%"},G=["value"],X={width:"12%"},ee=["src"],te={width:"60%"},se={class:"container"},oe={class:"row align-items-center"},ne={class:"col-12 mb-8"},le={class:"fs-6 fw-bold lh-1"},de={key:0,class:"col-12"},ie={width:"7%"},ae=["onClick"],ce=r(()=>e("span",{class:"material-symbols-outlined"}," close ",-1)),re=[ce],ue={key:3,class:"col-12 col-lg-4 mb-3 px-0 px-lg-3"},pe={class:"card rounded-4"},he=r(()=>e("div",{class:"card-header"},[e("p",null,"訂單明細")],-1)),me={class:"card-body"},_e={class:"d-flex justify-content-between"},Ce={key:0,class:"text-end fs-2"},fe={key:1,class:"text-end text-primary"},be={key:2,class:"text-end fs-2"},ge={class:"card-footer"},ve={class:"row mb-2 align-items-center"},ye={class:"col-8"},ke={class:"col-4 text-end"},Te={key:1,class:"row"},we={class:"col-12 col-lg-8 mx-auto mb-3 border rounded-4"},Ie={class:"my-3 pb-2 ps-3 ms-1 border-bottom fs-3 fw-bold text-secondary"},$e={class:"table table-hover align-middle"},Se={class:"container"},Ae={class:"row"},Be={class:"col-12 col-lg-8"},Ve={class:"col-12 col-lg-4 text-lg-end"},Ne={key:0},Ee={key:1,class:"fs-8 text-decoration-line-through text-grey-bold"},Le={key:2},Ue={class:"col-12 col-lg-4 mb-3 px-0 px-lg-3"},je={class:"card rounded-4"},ze=r(()=>e("div",{class:"card-header"},[e("p",null,"訂單明細")],-1)),Pe={class:"card-body"},Re={class:"d-flex justify-content-between"},Me={key:0,class:"text-end fs-2"},We={key:1,class:"text-end text-primary"},De={key:2,class:"text-end fs-2"},Fe={class:"card-footer"},He=r(()=>e("p",{class:"text-primary fs-8 mb-2 fw-bold"}," 我已詳閱並同意〈服務契約〉及服務內容 ",-1)),qe={class:"row g-0 justify-content-between"},Ke={class:"col-5"},Oe={class:"col-5"};function Qe(t,s,a,xe,Ye,Ze){const k=p("BannerArea"),T=p("CardHorizontalPlaceholder"),w=p("router-link");return l(),n("section",R,[h(k),e("div",M,[e("div",W,[this.cartStatus==="cart"?(l(),n("div",D,[t.isLoading?(l(),n("div",F,[h(T)])):i("",!0),!t.isLoading&&t.cart.length===0?(l(),n("div",H,[e("div",q,[K,O,h(w,{to:"/courses",class:"btn btn-primary rounded-pill text-white py-3 px-7 fs-5"},{default:E(()=>[L("前往課程")]),_:1})])])):i("",!0),!t.isLoading&&t.cart.length!==0?(l(),n("div",Q,[e("table",x,[e("thead",null,[e("tr",null,[e("th",Y,[m(e("input",{onClick:s[0]||(s[0]=o=>t.checkAllCourses()),"onUpdate:modelValue":s[1]||(s[1]=o=>t.isSelectedCoursesAll=o),class:"form-check-input",type:"checkbox",id:"checkAll",name:"checkAll"},null,512),[[g,t.isSelectedCoursesAll]])]),Z])]),(l(!0),n(v,null,y(this.cart,o=>(l(),n("tbody",{key:o.courseId},[e("tr",null,[e("td",J,[m(e("input",{"onUpdate:modelValue":s[2]||(s[2]=f=>t.selectedCourseIds=f),class:"form-check-input",type:"checkbox",id:"course",name:"courses",value:o.courseId},null,8,G),[[g,t.selectedCourseIds]])]),e("td",X,[e("img",{class:"table-image",src:o.courseImg,alt:"課程圖片"},null,8,ee)]),e("td",te,[e("div",se,[e("div",oe,[e("div",ne,[e("p",le,d(o.name),1)]),t.isCouponCode?(l(),n("div",de,[e("p",null,"NT$ "+d(o.price*.8),1)])):i("",!0),e("div",{class:U(["col-12",{"text-decoration-line-through fs-8 text-grey-bold":t.isCouponCode}])},[e("p",null,"NT$ "+d(o.price),1)],2)])])]),e("td",ie,[e("button",{onClick:f=>t.removeFromCollection(o.courseId),type:"button",class:"btn d-flex align-items-center"},re,8,ae)])])]))),128))])])):i("",!0),!t.isLoading&&t.cart.length!==0?(l(),n("div",ue,[e("div",pe,[he,e("div",me,[e("div",_e,[e("p",null,d(t.selectedCourses.length)+" 件小計",1),e("p",null,"NT$ "+d(t.selectedCoursesTotal),1)]),t.isCouponCode?i("",!0):(l(),n("div",Ce,[e("p",null,"NT$ "+d(t.selectedCoursesTotal),1)])),t.isCouponCode?(l(),n("div",fe,[e("p",null,"折扣 - "+d(t.selectedCoursesTotal-t.couponTotal),1)])):i("",!0),t.isCouponCode?(l(),n("div",be,[e("p",null,"NT$ "+d(t.couponTotal),1)])):i("",!0)]),e("div",ge,[e("div",ve,[e("div",ye,[m(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.couponCode=o),class:"col-form-label w-100 py-1 fs-7 rounded-2 border",type:"text",id:"coupon",name:"coupon",placeholder:"請輸入折扣碼"},null,512),[[V,t.couponCode]])]),e("div",ke,[e("button",{onClick:s[4]||(s[4]=o=>t.addCouponCode(t.couponCode)),class:"btn btn-sm btn-secondary w-100 rounded-4",type:"button"},"確認")])]),e("button",{onClick:s[5]||(s[5]=o=>t.goCheckout()),class:"btn btn-primary w-100 rounded-4",type:"button"},"前往結帳")])])])):i("",!0)])):i("",!0),this.cartStatus==="checkout"?(l(),n("div",Te,[e("div",we,[e("div",Ie," 總共 "+d(t.selectedCourses.length)+" 件 ",1),e("table",$e,[(l(!0),n(v,null,y(this.selectedCourses,o=>(l(),n("tbody",{key:o.courseId},[e("tr",null,[e("td",null,[e("div",Se,[e("div",Ae,[e("div",Be,d(o.name),1),e("div",Ve,[t.isCouponCode?(l(),n("p",Ne,"NT$ "+d(o.price*.8),1)):i("",!0),t.isCouponCode?(l(),n("p",Ee,"NT$ "+d(o.price),1)):i("",!0),t.isCouponCode?i("",!0):(l(),n("p",Le,"NT$ "+d(o.price),1))])])])])])]))),128))])]),e("div",Ue,[e("div",je,[ze,e("div",Pe,[e("div",Re,[e("p",null,d(t.selectedCourses.length)+" 件小計",1),e("p",null,"NT$ "+d(t.selectedCoursesTotal),1)]),t.isCouponCode?i("",!0):(l(),n("div",Me,[e("p",null,"NT$ "+d(t.selectedCoursesTotal),1)])),t.isCouponCode?(l(),n("div",We,[e("p",null,"折扣 - "+d(t.selectedCoursesTotal-t.couponTotal),1)])):i("",!0),t.isCouponCode?(l(),n("div",De,[e("p",null,"NT$ "+d(t.couponTotal),1)])):i("",!0)]),e("div",Fe,[He,e("div",qe,[e("div",Ke,[e("button",{onClick:s[6]||(s[6]=o=>t.goBackCart()),type:"button",class:"btn btn-secondary w-100 rounded-4"},"重新選擇")]),e("div",Oe,[e("button",{onClick:s[7]||(s[7]=o=>t.checkout()),type:"button",class:"btn btn-primary w-100 rounded-4"},"確認送出")])])])])])])):i("",!0)])])])}const ct=N(P,[["render",Qe],["__scopeId","data-v-17d9870c"]]);export{ct as default};
