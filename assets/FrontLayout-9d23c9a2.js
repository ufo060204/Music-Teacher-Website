import{m as u,a as f}from"./pinia-ef994b1a.js";import{R as $}from"./index.esm2017-e945f35b.js";import{c as v}from"./cartStore-038a99b0.js";import{u as g}from"./userStore-f0d7e029.js";import{w}from"./windowStore-099a5157.js";import{n as M}from"./runtime-dom.esm-bundler-e62d4d3a.js";import{bf as k,aq as n,n as i,o as e,aa as p,aC as b,v as s,ba as o,m as c,aQ as m,t as V,u as r,au as D,ar as L}from"./_plugin-vue_export-helper-ec969899.js";import"./sweetalert2.all-2eb3c18f.js";import"./moment-d1e11f53.js";const N={computed:{...u(w,["goTopIcon"])},methods:{...f(w,["scroll","goTop"])},mounted(){this.scroll()}},I=e("span",{class:"material-symbols-outlined position-fixed fs-40 bg-white border border-primary rounded-circle end-20px bottom-10px z-index-3"}," expand_less ",-1),O=[I];function B(a,l,x,y,h,_){return n(),i("div",{class:p({"d-none":!a.goTopIcon})},[e("a",{href:"#",onClick:l[0]||(l[0]=M((...t)=>a.goTop&&a.goTop(...t),["prevent"]))},O)],2)}const P=k(N,[["render",B]]),F="/Music-Teacher-Website/assets/home-nav-logo-bf482d12.png",R="/Music-Teacher-Website/assets/logo-white-052e47ba.png";const E={data(){return{isScrolled:!1,isCollapseShow:!1}},components:{RouterView:$,BackToTop:P},computed:{...u(v,["cart"]),...u(g,["isMember","userData","personalViewData"])},watch:{$route(a,l){this.collapseHide(),this.isScrolled=!1,this.isCollapseShow=!1},isScrolled(a){a&&window.addEventListener("scroll",this.handleScroll)}},methods:{handleScroll(){this.isScrolled=window.scrollY!==0},collapseHide(){this.$refs.navCollapse.classList.remove("show")},toggleCollapseShow(){this.isCollapseShow=!this.isCollapseShow},...f(v,["getCart"]),...f(g,["checkMemberObserver","signOut"])},created(){this.checkMemberObserver(),this.getCart(),window.addEventListener("scroll",this.handleScroll)}},d=a=>(D("data-v-adebfac4"),a=a(),L(),a),j={class:"d-flex flex-column vh-100"},z={class:"fixed-top"},A={class:"container"},H=d(()=>e("img",{class:"h-40px",src:F,alt:"Lele Music Tutor"},null,-1)),W={class:"d-flex align-items-center"},q=d(()=>e("span",{class:"material-icons-outlined lh-30"}," shopping_cart ",-1)),Q={key:0,style:{transform:"translate(-70%, -20%)"},class:"badge rounded-pill bg-primary position-absolute top-0 start-100 text-white"},Y=d(()=>e("span",{class:"navbar-toggler-icon"},null,-1)),G=[Y],J={ref:"navCollapse",class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},K={class:"navbar-nav text-center"},U={class:"nav-item me-0 me-lg-24"},X={class:"nav-item me-0 me-lg-24"},Z={key:0,class:"nav-item"},ee={key:1,class:"nav-item d-none d-lg-block"},ae=d(()=>e("span",{class:"material-symbols-outlined lh-30"}," bookmark ",-1)),te={key:2,class:"nav-item d-none d-lg-block"},se=d(()=>e("span",{class:"material-icons-outlined lh-30"}," shopping_cart ",-1)),oe={key:0,style:{transform:"translate(-70%, -20%)"},class:"badge rounded-pill bg-primary position-absolute top-0 start-100 text-white"},le={key:3,class:"nav-item dropdown"},ne={class:"nav-link dropdown-toggle fw-bold text-black fs-5",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ie={class:"dropdown-menu mt-0 text-center text-lg-start","aria-labelledby":"navbarDropdownMenuLink"},re={class:"flex-grow-1"},ce={class:"bg-primary"},de={class:"container"},pe={class:"d-lg-flex justify-content-lg-between align-items-lg-center text-center text-lg-start py-9"},he=d(()=>e("img",{class:"h-40px",src:R,alt:"Lele Music Tutor"},null,-1)),be=V('<div data-v-adebfac4><ul class="d-lg-flex ps-0 mb-6" data-v-adebfac4><li class="me-lg-6 mb-6 mb-lg-0" data-v-adebfac4><a class="text-white py-3 px-3" href="#" data-v-adebfac4><i class="bi bi-facebook me-3" data-v-adebfac4></i><span data-v-adebfac4>Facebook</span></a></li><li class="me-lg-6 mb-6 mb-lg-0" data-v-adebfac4><a class="text-white py-3 px-3" href="#" data-v-adebfac4><i class="bi bi-instagram me-3" data-v-adebfac4></i><span data-v-adebfac4>Instagram</span></a></li><li data-v-adebfac4><a class="text-white py-3 px-3" href="#" data-v-adebfac4><i class="bi bi-twitter me-3" data-v-adebfac4></i><span data-v-adebfac4>Twitter</span></a></li></ul><p class="text-white mb-0" data-v-adebfac4>Copyright © 2023 Taipei music design All rights reserved.</p></div>',1);function me(a,l,x,y,h,_){const t=b("router-link"),S=b("RouterView"),C=b("BackToTop");return n(),i("div",j,[e("header",z,[e("nav",{class:p(["navbar navbar-expand-md py-8 transition",{"bg-white shadow":h.isScrolled||h.isCollapseShow}])},[e("div",A,[s(t,{to:"/",class:"navbar-brand"},{default:o(()=>[H]),_:1}),e("div",W,[s(t,{to:"/cart",class:"nav-link text-black fw-bold position-relative d-lg-none me-24"},{default:o(()=>[q,a.cart.length!==0?(n(),i("span",Q,m(a.cart.length),1)):c("",!0)]),_:1}),e("button",{onClick:l[0]||(l[0]=T=>_.toggleCollapseShow()),class:"navbar-toggler d-lg-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},G)]),e("div",J,[e("ul",K,[e("li",U,[s(t,{to:"/teacher/stepOne",class:p(["nav-link text-black fw-bold position-relative fs-5",{"nav-active":a.$route.fullPath==="/teacher/stepOne"||a.$route.fullPath==="/teacher/stepTwo"||a.$route.fullPath==="/teacher/stepThree"||a.$route.fullPath==="/teacher/stepFour"}])},{default:o(()=>[r("我要開課")]),_:1},8,["class"])]),e("li",X,[s(t,{to:"/courses",class:p(["nav-link text-black fw-bold position-relative fs-5",{"nav-active":a.$route.fullPath==="/courses"}])},{default:o(()=>[r("所有課程")]),_:1},8,["class"])]),this.isMember?c("",!0):(n(),i("li",Z,[s(t,{to:"/login",class:p(["nav-link text-black fw-bold position-relative fs-5",{"nav-active":a.$route.fullPath==="/login"}])},{default:o(()=>[r("登入")]),_:1},8,["class"])])),this.isMember?(n(),i("li",ee,[s(t,{to:"/personalCourse",class:"nav-link text-black fw-bold position-relative"},{default:o(()=>[ae]),_:1})])):c("",!0),this.isMember?(n(),i("li",te,[s(t,{to:"/cart",class:"nav-link text-black fw-bold position-relative"},{default:o(()=>[se,a.cart.length!==0?(n(),i("span",oe,m(a.cart.length),1)):c("",!0)]),_:1})])):c("",!0),this.isMember?(n(),i("li",le,[e("a",ne,m(a.personalViewData.displayName),1),e("ul",ie,[e("li",null,[s(t,{to:"/personal",class:"dropdown-item",href:"#"},{default:o(()=>[r("個人主頁")]),_:1})]),e("li",null,[s(t,{to:"/personalCourse",class:"dropdown-item",href:"#"},{default:o(()=>[r("我的課程")]),_:1})]),e("li",null,[s(t,{to:"/personalOrders",class:"dropdown-item",href:"#"},{default:o(()=>[r("購買紀錄")]),_:1})]),e("li",null,[s(t,{to:"/personalCalendar",class:"dropdown-item",href:"#"},{default:o(()=>[r("課程時間")]),_:1})]),e("li",null,[e("a",{onClick:l[1]||(l[1]=T=>a.signOut()),class:"dropdown-item border-top",href:"#"},"登出")])])])):c("",!0)])],512)])],2)]),e("div",re,[s(S)]),e("footer",ce,[e("div",de,[e("div",pe,[s(t,{class:"d-block mb-9 mb-lg-0",to:"/"},{default:o(()=>[he]),_:1}),be])])]),s(C)])}const Se=k(E,[["render",me],["__scopeId","data-v-adebfac4"]]);export{Se as default};
