import{m as g,b as y,a as h}from"./pinia-ef994b1a.js";import{c as a}from"./cartStore-e4b8de05.js";import{b as k}from"./bannerStore-1b7734ea.js";import{C as T}from"./CardHorizontalPlaceholder-a6934f1a.js";import{B as w}from"./BannerArea-ca093728.js";import{v as m,l as $}from"./runtime-dom.esm-bundler-e62d4d3a.js";import{bf as I,aC as c,n as s,v as r,o as e,m as i,ba as A,bc as u,F as C,aA as _,aQ as d,aq as n,u as N,aa as S}from"./_plugin-vue_export-helper-ec969899.js";import"./sweetalert2.all-09c79ce8.js";import"./index.esm2017-717e340d.js";import"./userStore-ceb04f46.js";import"./moment-91f1ce3e.js";import"./card-placeholder-img-c3843645.js";const B={data(){return{products:[],productId:"",loadingItem:"",color:"#FF700C",form:{user:{name:"",mail:"",tel:"",address:""},message:""}}},components:{CardHorizontalPlaceholder:T,BannerArea:w},watch:{selectedCourseIds:function(o){this.selectedCourses=this.cart.filter(l=>o.includes(l.courseId))},cartStatus(){this.cartStatus==="cart"?this.getBannerInfo(new URL("/Music-Teacher-Website/title-banner.jpg",self.location).href,"購物車","CART","年底前輸入『 888 』享八折優惠"):this.getBannerInfo(new URL("/Music-Teacher-Website/title-banner.jpg",self.location).href,"結帳","CHECKOUT","購物的終點，滿足的起點")}},computed:{...g(a,["uid","cart","cartTotal","couponTotal","cartStatus","selectedCoursesTotal","isCouponCode","isLoading"]),...y(a,["couponCode","selectedCourses","selectedCourseIds","isSelectedCoursesAll"])},methods:{...h(a,["getCart","removeFromCollection","getUid","addCouponCode","goCheckout","goBackCart","checkout","filterSelect","checkAllCourses","refTest"]),...h(k,["getBannerInfo"])},created(){this.getBannerInfo(new URL("/Music-Teacher-Website/title-banner.jpg",self.location).href,"購物車","CART","年底前輸入『 888 』享八折優惠"),this.getUid(),this.getCart()},mounted(){}},L={class:"mt-66"},U={class:"container"},j={class:"py-32"},V={key:0,class:"row"},F={key:0,class:"col-12 col-lg-8"},M={key:1,class:"row d-flex align-items-center justify-content-center"},R={class:"col-md-4 col-10 d-flex align-items-center justify-content-center flex-column py-80 border rounded-4"},z=e("h1",{class:"fs-2 fw-bold mb-16"},"購物車",-1),H=e("h2",{class:"fs-4 mb-16"},"購物車是空的，來去逛逛吧！",-1),W={key:2,class:"col-12 col-lg-8 mx-auto mb-3 border rounded-4 h-100"},P={class:"table table-hover align-middle"},D={class:"text-center"},E=e("th",{colspan:"3"},[e("label",{for:"checkAll",class:"text-primary fs-5"},"全選")],-1),q={class:"text-center",width:"4%"},K=["value"],O={width:"12%"},Q=["src"],G={width:"60%"},J={class:"container"},X={class:"row align-items-center"},Y={class:"col-12 mb-8"},Z={class:"fs-6 fw-bold lh-1"},x={key:0,class:"col-12"},ee={width:"7%"},oe=["onClick"],te=e("span",{class:"material-symbols-outlined"}," close ",-1),se=[te],ne={key:3,class:"col-12 col-lg-4 mb-3 px-0 px-lg-3"},le={class:"card rounded-4"},de=e("div",{class:"card-header"},[e("p",null,"訂單明細")],-1),ie={class:"card-body"},ae={class:"d-flex justify-content-between"},ce={key:0,class:"text-end fs-2"},re={key:1,class:"text-end text-primary"},ue={key:2,class:"text-end fs-2"},pe={class:"card-footer"},he={class:"row mb-2 align-items-center"},me={class:"col-8"},Ce={class:"col-4 text-end"},_e={key:1,class:"row"},be={class:"col-12 col-lg-8 mx-auto mb-3 border rounded-4"},fe={class:"my-3 pb-2 ps-3 ms-1 border-bottom fs-3 fw-bold text-secondary"},ve={class:"table table-hover align-middle"},ge={class:"container"},ye={class:"row"},ke={class:"col-12 col-lg-8"},Te={class:"col-12 col-lg-4 text-lg-end"},we={key:0},$e={key:1,class:"fs-8 text-decoration-line-through text-grey-bold"},Ie={key:2},Ae={class:"col-12 col-lg-4 mb-3 px-0 px-lg-3"},Ne={class:"card rounded-4"},Se=e("div",{class:"card-header"},[e("p",null,"訂單明細")],-1),Be={class:"card-body"},Le={class:"d-flex justify-content-between"},Ue={key:0,class:"text-end fs-2"},je={key:1,class:"text-end text-primary"},Ve={key:2,class:"text-end fs-2"},Fe={class:"card-footer"},Me=e("p",{class:"text-primary fs-8 mb-2 fw-bold"}," 我已詳閱並同意〈服務契約〉及服務內容 ",-1),Re={class:"row g-0 justify-content-between"},ze={class:"col-5"},He={class:"col-5"};function We(o,l,Pe,De,Ee,qe){const b=c("BannerArea"),f=c("CardHorizontalPlaceholder"),v=c("router-link");return n(),s("section",L,[r(b),e("div",U,[e("div",j,[this.cartStatus==="cart"?(n(),s("div",V,[o.isLoading?(n(),s("div",F,[r(f)])):i("",!0),!o.isLoading&&o.cart.length===0?(n(),s("div",M,[e("div",R,[z,H,r(v,{to:"/courses",class:"btn btn-primary rounded-pill text-white py-3 px-7 fs-5"},{default:A(()=>[N("前往課程")]),_:1})])])):i("",!0),!o.isLoading&&o.cart.length!==0?(n(),s("div",W,[e("table",P,[e("thead",null,[e("tr",null,[e("th",D,[u(e("input",{onClick:l[0]||(l[0]=t=>o.checkAllCourses()),"onUpdate:modelValue":l[1]||(l[1]=t=>o.isSelectedCoursesAll=t),class:"form-check-input",type:"checkbox",id:"checkAll",name:"checkAll"},null,512),[[m,o.isSelectedCoursesAll]])]),E])]),(n(!0),s(C,null,_(this.cart,t=>(n(),s("tbody",{key:t.courseId},[e("tr",null,[e("td",q,[u(e("input",{"onUpdate:modelValue":l[2]||(l[2]=p=>o.selectedCourseIds=p),class:"form-check-input",type:"checkbox",id:"course",name:"courses",value:t.courseId},null,8,K),[[m,o.selectedCourseIds]])]),e("td",O,[e("img",{class:"img-fluid rounded-2",src:t.courseImg,alt:"課程圖片"},null,8,Q)]),e("td",G,[e("div",J,[e("div",X,[e("div",Y,[e("p",Z,d(t.name),1)]),o.isCouponCode?(n(),s("div",x,[e("p",null,"NT$ "+d(t.price*.8),1)])):i("",!0),e("div",{class:S(["col-12",{"text-decoration-line-through fs-8 text-grey-bold":o.isCouponCode}])},[e("p",null,"NT$ "+d(t.price),1)],2)])])]),e("td",ee,[e("button",{onClick:p=>o.removeFromCollection(t.courseId),type:"button",class:"btn d-flex align-items-center"},se,8,oe)])])]))),128))])])):i("",!0),!o.isLoading&&o.cart.length!==0?(n(),s("div",ne,[e("div",le,[de,e("div",ie,[e("div",ae,[e("p",null,d(o.selectedCourses.length)+" 件小計",1),e("p",null,"NT$ "+d(o.selectedCoursesTotal),1)]),o.isCouponCode?i("",!0):(n(),s("div",ce,[e("p",null,"NT$ "+d(o.selectedCoursesTotal),1)])),o.isCouponCode?(n(),s("div",re,[e("p",null,"折扣 - "+d(o.selectedCoursesTotal-o.couponTotal),1)])):i("",!0),o.isCouponCode?(n(),s("div",ue,[e("p",null,"NT$ "+d(o.couponTotal),1)])):i("",!0)]),e("div",pe,[e("div",he,[e("div",me,[u(e("input",{"onUpdate:modelValue":l[3]||(l[3]=t=>o.couponCode=t),class:"col-form-label w-100 py-1 fs-7 rounded-2 border",type:"text",id:"coupon",name:"coupon",placeholder:"請輸入折扣碼"},null,512),[[$,o.couponCode]])]),e("div",Ce,[e("button",{onClick:l[4]||(l[4]=t=>o.addCouponCode(o.couponCode)),class:"btn btn-sm btn-secondary w-100 rounded-4",type:"button"},"確認")])]),e("button",{onClick:l[5]||(l[5]=t=>o.goCheckout()),class:"btn btn-primary w-100 rounded-4",type:"button"},"前往結帳")])])])):i("",!0)])):i("",!0),this.cartStatus==="checkout"?(n(),s("div",_e,[e("div",be,[e("div",fe," 總共 "+d(o.selectedCourses.length)+" 件 ",1),e("table",ve,[(n(!0),s(C,null,_(this.selectedCourses,t=>(n(),s("tbody",{key:t.courseId},[e("tr",null,[e("td",null,[e("div",ge,[e("div",ye,[e("div",ke,d(t.name),1),e("div",Te,[o.isCouponCode?(n(),s("p",we,"NT$ "+d(t.price*.8),1)):i("",!0),o.isCouponCode?(n(),s("p",$e,"NT$ "+d(t.price),1)):i("",!0),o.isCouponCode?i("",!0):(n(),s("p",Ie,"NT$ "+d(t.price),1))])])])])])]))),128))])]),e("div",Ae,[e("div",Ne,[Se,e("div",Be,[e("div",Le,[e("p",null,d(o.selectedCourses.length)+" 件小計",1),e("p",null,"NT$ "+d(o.selectedCoursesTotal),1)]),o.isCouponCode?i("",!0):(n(),s("div",Ue,[e("p",null,"NT$ "+d(o.selectedCoursesTotal),1)])),o.isCouponCode?(n(),s("div",je,[e("p",null,"折扣 - "+d(o.selectedCoursesTotal-o.couponTotal),1)])):i("",!0),o.isCouponCode?(n(),s("div",Ve,[e("p",null,"NT$ "+d(o.couponTotal),1)])):i("",!0)]),e("div",Fe,[Me,e("div",Re,[e("div",ze,[e("button",{onClick:l[6]||(l[6]=t=>o.goBackCart()),type:"button",class:"btn btn-secondary w-100 rounded-4"},"重新選擇")]),e("div",He,[e("button",{onClick:l[7]||(l[7]=t=>o.checkout()),type:"button",class:"btn btn-primary w-100 rounded-4"},"確認送出")])])])])])])):i("",!0)])])])}const so=I(B,[["render",We]]);export{so as default};
