<template>
  <div class="container my-32">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-6">
        <ul class="course_process d-flex justify-content-between position-relative">
          <li class="d-flex flex-column align-items-center">
            <div class="step d-flex flex-column justify-content-center align-items-center mb-0" :class="{'number-active' : $route.fullPath === '/teacher/stepOne'}">
              <span class="step-icon material-symbols-outlined mb-1">edit_document</span>
            </div>
            <p class="mt-2">我要開課</p>
          </li>
          <li class=" d-flex flex-column align-items-center">
            <div class="step d-flex flex-column justify-content-center align-items-center mb-0" :class="{'number-active' : $route.fullPath === '/teacher/stepTwo'}">
              <span class="step-icon material-symbols-outlined mb-1">contract_edit</span>
            </div>
            <p class="mt-2">課程介紹</p>
          </li>
          <li class=" d-flex flex-column align-items-center">
            <div class="step d-flex flex-column justify-content-center align-items-center mb-0" :class="{'number-active' : $route.fullPath === '/teacher/stepThree'}">
              <span class="step-icon material-symbols-outlined mb-1">preview</span>
            </div>
            <p class="mt-2">預覽</p>
          </li>
          <li class=" d-flex flex-column align-items-center">
            <div class="step d-flex flex-column justify-content-center align-items-center mb-0" :class="{'number-active' : $route.fullPath === '/teacher/stepFour'}">
              <span class="step-icon material-symbols-outlined mb-1">task_alt</span>
            </div>
            <p class="mt-2">完成！</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .step{
  width: 60px;
  height: 60px;
  border:2px solid #ff715f;
  background-color: #fff;
  border-radius:50%;
  z-index:1;
  color:#ccc;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
}

.step-icon{
  font-size: 26px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
}

.number-active{
  background-color:#ff715f;
  color:#ffff;
}

.course_process::before{
  position: absolute;
  content:"";
  width:83%;
  height: 2px;
  background-color: #ff715f;
  transform:translate(-50%,-50%);
  left:50%;
  top:30%;
  @media (min-width: 768px) {
    top:35%;
  }
}
</style>
