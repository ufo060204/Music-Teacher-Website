import{d as S,a as y,m as C}from"./pinia-ef994b1a.js";import{g as I,d as H,e as g,h as V,n as $,q as N,w as P}from"./index.browser.esm2017-ac27ce2e.js";import{u as T}from"./userStore-2f73dc30.js";import{b as A}from"./bannerStore-1b7734ea.js";import{L as q}from"./ListPlaceholder-6606d71c.js";import{B as Y}from"./BannerArea-ca093728.js";import{bf as F,aC as p,n as r,o as e,v as D,l as M,m as c,ba as R,F as w,aA as b,aq as o,u as W,aQ as u,au as j,ar as E}from"./_plugin-vue_export-helper-ec969899.js";import"./index.esm2017-880666f6.js";import"./_commonjsHelpers-87174ba5.js";const O=I(),B=T(),v=S("orderStore",{state:()=>({myOrders:[],existingOrders:[],isLoading:!0,isBuyHistory:null}),actions:{async getOrders(){this.isLoading=!0,await B.checkMemberObserver();const s=H(O,"users",B.uid),m=await g(s);if(m.exists()){const d=m.data().myOrders;if(d.length===0){console.log("您沒有購買紀錄"),this.isBuyHistory=!1,this.isLoading=!1;return}console.log("使用者的 userOrdersData 內容",d);const h=V(O,"orders"),_=await $(N(h,P("orderId","in",d))),n=[];_.forEach(a=>{const t=a.data();n.push(t)}),console.log("存在於 userOrdersData 中的訂單(尚未有課程細節)",n);const l=[];for(const a of n){const t={...a},i=[];await Promise.all(a.orderDetail.map(async x=>{const f=await g(x);f.exists()&&i.push(f.data())})),t.courseDetails=i,l.push(t)}this.myOrders=l,console.log("我的訂單結果",this.myOrders),this.isLoading=!1,this.isBuyHistory=!0}else this.isLoading=!1,console.log("找不到該用戶的文檔")}},getOrderCourseDetails(){},getters:{}});const Q={data(){return{}},components:{ListPlaceholderVue:q,BannerArea:Y},methods:{...y(v,["getOrders"]),...y(A,["getBannerInfo"])},computed:{...C(v,["myOrders","isLoading","isBuyHistory"])},watch:{},created(){this.getBannerInfo(new URL("/Music-Teacher-Website/title-banner.jpg",self.location).href,"購買紀錄","History","我的紀錄，學習的軌跡"),this.getOrders()}},L=s=>(j("data-v-1ef383d1"),s=s(),E(),s),U={class:"pt-66"},z={class:"container"},G={key:1,class:"d-flex h-custom flex-column justify-content-center align-items-center"},J=L(()=>e("p",{class:"fs-1 my-16"},"您沒有購買紀錄",-1)),K={key:2,class:"card rounded-4 shadow-sm my-32"},X={class:"card-body"},Z={class:"table-responsive"},ee={class:"table table-hover"},se=L(()=>e("thead",{class:"border-bottom-3 fw-bold"},[e("tr",{class:"align-middle"},[e("th",{class:"text-nowrap"},"購買時間"),e("th",{class:"text-nowrap"},"購買品項"),e("th",{class:"text-nowrap"},"購買金額")])],-1)),te={class:"text-nowrap"},oe={class:"text-nowrap"},re={key:0,class:"text-nowrap"},ae={key:1,class:"text-nowrap"};function ne(s,m,k,d,h,_){const n=p("BannerArea"),l=p("ListPlaceholderVue"),a=p("router-link");return o(),r("div",U,[e("div",z,[D(n),s.isLoading?(o(),M(l,{key:0,class:"my-32"})):c("",!0),!s.isLoading&&!s.isBuyHistory?(o(),r("div",G,[J,D(a,{to:"/courses",class:"btn btn-primary rounded-4"},{default:R(()=>[W("瀏覽課程")]),_:1})])):c("",!0),!s.isLoading&&s.isBuyHistory?(o(),r("div",K,[e("div",X,[e("div",Z,[e("table",ee,[se,e("tbody",null,[(o(!0),r(w,null,b(s.myOrders,t=>(o(),r("tr",{key:t.orderId},[e("td",te,u(this.$moment(t.createdTime).format("YYYY年M月D日")),1),e("td",oe,[e("ul",null,[(o(!0),r(w,null,b(t.courseDetails,i=>(o(),r("li",{key:i.courseId},u(i.name),1))),128))])]),t.useCoupon?(o(),r("td",re,"NT$ "+u(t.couponTotal),1)):c("",!0),t.useCoupon?c("",!0):(o(),r("td",ae,"NT$ "+u(t.total),1))]))),128))])])])])])):c("",!0)])])}const fe=F(Q,[["render",ne],["__scopeId","data-v-1ef383d1"]]);export{fe as default};
