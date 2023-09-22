<template>
  <section class="mt-66">
    <div class="container">
      <main class="py-8 text-center">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-6 d-flex align-items-center justify-content-center flex-column py-6">
            <h1 class="fs-2 fw-bold">結帳完成</h1>
            <img class="my-6 img-fluid rounded-4" src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="感謝購買圖">
            <p class="mb-3 fs-5">感謝您的購買</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto">
            <router-link to="/personalCourse" class="btn btn-outline-primary rounded-4">來去上課</router-link>
          </div>
          <div class="col-auto">
            <router-link to="/courses" class="btn btn-primary rounded-4">繼續購物</router-link>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
