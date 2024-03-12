import{m as b,a as _}from"./pinia-ef994b1a.js";import{R as $}from"./index.esm2017-edf80b13.js";import{c as f}from"./cartStore-17fb522e.js";import{u as g}from"./userStore-b7e7ad3c.js";import{w}from"./windowStore-099a5157.js";import{n as M}from"./runtime-dom.esm-bundler-e62d4d3a.js";import{bf as k,aq as l,n as i,o as e,aa as d,aC as m,v as a,ba as o,m as c,aQ as u,t as V,u as r,au as D,ar as L}from"./_plugin-vue_export-helper-ec969899.js";import"./sweetalert2.all-4c085619.js";import"./moment-8cce7dfb.js";const N={computed:{...b(w,["goTopIcon"])},methods:{..._(w,["scroll","goTop"])},mounted(){this.scroll()}},I=e("span",{class:"material-symbols-outlined position-fixed fs-40 bg-white border border-primary rounded-circle end-20px bottom-10px z-index-3"}," expand_less ",-1),O=[I];function B(t,n,x,y,h,v){return l(),i("div",{class:d({"d-none":!t.goTopIcon})},[e("a",{href:"#",onClick:n[0]||(n[0]=M((...s)=>t.goTop&&t.goTop(...s),["prevent"]))},O)],2)}const P=k(N,[["render",B]]),F="/Music-Teacher-Website/assets/home-nav-logo-bf482d12.png",R="/Music-Teacher-Website/assets/logo-white-052e47ba.png";const E={data(){return{isScrolled:!1,isCollapseShow:!1}},components:{RouterView:$,BackToTop:P},computed:{...b(f,["cart"]),...b(g,["isMember","userData","personalViewData"])},watch:{$route(t,n){this.collapseHide(),this.isScrolled=!1,this.isCollapseShow=!1},isScrolled(t){t&&window.addEventListener("scroll",this.handleScroll)}},methods:{handleScroll(){this.isScrolled=window.scrollY!==0},collapseHide(){this.$refs.navCollapse.classList.remove("show")},toggleCollapseShow(){this.isCollapseShow=!this.isCollapseShow},..._(f,["getCart"]),..._(g,["checkMemberObserver","signOut"])},created(){this.checkMemberObserver(),this.getCart(),window.addEventListener("scroll",this.handleScroll)}},p=t=>(D("data-v-8de501c7"),t=t(),L(),t),j={class:"d-flex flex-column vh-100"},z={class:"fixed-top"},A={class:"container"},H=p(()=>e("img",{class:"h-40px",src:F,alt:"Lele Music Tutor"},null,-1)),W={class:"d-flex align-items-center"},q=p(()=>e("span",{class:"material-icons-outlined lh-30"}," shopping_cart ",-1)),Q={key:0,style:{transform:"translate(-70%, -20%)"},class:"badge rounded-pill bg-primary position-absolute top-0 start-100 text-white"},Y={key:0,class:"material-symbols-outlined text-black lh-30"},G={key:1,class:"material-symbols-outlined text-black lh-30"},J={ref:"navCollapse",class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},K={class:"navbar-nav text-center"},U={class:"nav-item me-0 me-lg-24"},X={class:"nav-item me-0 me-lg-24"},Z={key:0,class:"nav-item"},ee={key:1,class:"nav-item d-none d-lg-block"},te=p(()=>e("span",{class:"material-symbols-outlined lh-30"}," bookmark ",-1)),se={key:2,class:"nav-item d-none d-lg-block"},ae=p(()=>e("span",{class:"material-icons-outlined lh-30"}," shopping_cart ",-1)),oe={key:0,style:{transform:"translate(-70%, -20%)"},class:"badge rounded-pill bg-primary position-absolute top-0 start-100 text-white"},le={key:3,class:"nav-item dropdown"},ie={class:"nav-link dropdown-toggle fw-bold text-black fs-5",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ne={class:"dropdown-menu mt-0 text-center text-lg-start","aria-labelledby":"navbarDropdownMenuLink"},re={class:"flex-grow-1"},ce={class:"bg-primary"},de={class:"container"},pe={class:"d-lg-flex justify-content-lg-between align-items-lg-center text-center text-lg-start py-9"},he=p(()=>e("img",{class:"h-40px",src:R,alt:"Lele Music Tutor"},null,-1)),me=V('<div data-v-8de501c7><ul class="d-lg-flex ps-0 mb-6" data-v-8de501c7><li class="me-lg-6 mb-6 mb-lg-0" data-v-8de501c7><a class="text-white py-3 px-3" href="#" data-v-8de501c7><i class="bi bi-facebook me-3" data-v-8de501c7></i><span data-v-8de501c7>Facebook</span></a></li><li class="me-lg-6 mb-6 mb-lg-0" data-v-8de501c7><a class="text-white py-3 px-3" href="#" data-v-8de501c7><i class="bi bi-instagram me-3" data-v-8de501c7></i><span data-v-8de501c7>Instagram</span></a></li><li data-v-8de501c7><a class="text-white py-3 px-3" href="#" data-v-8de501c7><i class="bi bi-twitter me-3" data-v-8de501c7></i><span data-v-8de501c7>Twitter</span></a></li></ul><p class="text-white mb-0" data-v-8de501c7>Copyright © 2023 Taipei music design All rights reserved.</p><p class="text-white text-center fs-8 mb-0" data-v-8de501c7>此專題僅供作品展示，非商業用途使用</p></div>',1);function ue(t,n,x,y,h,v){const s=m("router-link"),S=m("RouterView"),C=m("BackToTop");return l(),i("div",j,[e("header",z,[e("nav",{class:d(["navbar navbar-expand-md py-8 transition",{"bg-white shadow":h.isScrolled||h.isCollapseShow}])},[e("div",A,[a(s,{to:"/",class:"navbar-brand"},{default:o(()=>[H]),_:1}),e("div",W,[a(s,{to:"/cart",class:"nav-link text-black fw-bold position-relative d-lg-none me-24"},{default:o(()=>[q,t.cart.length!==0?(l(),i("span",Q,u(t.cart.length),1)):c("",!0)]),_:1}),e("button",{onClick:n[0]||(n[0]=T=>v.toggleCollapseShow()),class:"navbar-toggler d-lg-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[h.isCollapseShow?(l(),i("span",Y," close ")):(l(),i("span",G," menu "))])]),e("div",J,[e("ul",K,[e("li",U,[a(s,{to:"/teacher/stepOne",class:d(["nav-link text-black fw-bold position-relative fs-5",{"nav-active":t.$route.fullPath==="/teacher/stepOne"||t.$route.fullPath==="/teacher/stepTwo"||t.$route.fullPath==="/teacher/stepThree"||t.$route.fullPath==="/teacher/stepFour"}])},{default:o(()=>[r("我要開課")]),_:1},8,["class"])]),e("li",X,[a(s,{to:"/courses",class:d(["nav-link text-black fw-bold position-relative fs-5",{"nav-active":t.$route.fullPath==="/courses"}])},{default:o(()=>[r("所有課程")]),_:1},8,["class"])]),this.isMember?c("",!0):(l(),i("li",Z,[a(s,{to:"/login",class:d(["nav-link text-black fw-bold position-relative fs-5",{"nav-active":t.$route.fullPath==="/login"}])},{default:o(()=>[r("登入")]),_:1},8,["class"])])),this.isMember?(l(),i("li",ee,[a(s,{to:"/personalCourse",class:"nav-link text-black fw-bold position-relative"},{default:o(()=>[te]),_:1})])):c("",!0),this.isMember?(l(),i("li",se,[a(s,{to:"/cart",class:"nav-link text-black fw-bold position-relative"},{default:o(()=>[ae,t.cart.length!==0?(l(),i("span",oe,u(t.cart.length),1)):c("",!0)]),_:1})])):c("",!0),this.isMember?(l(),i("li",le,[e("a",ie,u(t.personalViewData.displayName),1),e("ul",ne,[e("li",null,[a(s,{to:"/personal",class:"dropdown-item",href:"#"},{default:o(()=>[r("個人主頁")]),_:1})]),e("li",null,[a(s,{to:"/personalCourse",class:"dropdown-item",href:"#"},{default:o(()=>[r("我的課程")]),_:1})]),e("li",null,[a(s,{to:"/personalOrders",class:"dropdown-item",href:"#"},{default:o(()=>[r("購買紀錄")]),_:1})]),e("li",null,[a(s,{to:"/personalCalendar",class:"dropdown-item",href:"#"},{default:o(()=>[r("課程時間")]),_:1})]),e("li",null,[e("a",{onClick:n[1]||(n[1]=T=>t.signOut()),class:"dropdown-item border-top",href:"#"},"登出")])])])):c("",!0)])],512)])],2)]),e("div",re,[a(S)]),e("footer",ce,[e("div",de,[e("div",pe,[a(s,{class:"d-block mb-9 mb-lg-0",to:"/"},{default:o(()=>[he]),_:1}),me])])]),a(C)])}const Se=k(E,[["render",ue],["__scopeId","data-v-8de501c7"]]);export{Se as default};